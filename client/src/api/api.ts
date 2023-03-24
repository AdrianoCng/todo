import axios from "axios";

import { endpoints } from "../constants";
import { logout } from "../utils";

export const baseURL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:5000/api/v1"
        : "https://todo-app-123.herokuapp.com/api/v1";

const api = axios.create({
    baseURL,
    timeout: 1000,
});

api.interceptors.request.use((config) => {
    if (config.url === endpoints.login) return config;

    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
});

let isRefreshing = false;
let refreshSubscribers: ((token: any) => void)[] = [];

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const originalRequest = error.config;
        const refreshToken = localStorage.getItem("refresh_token");

        if (error.response.status === 403 && !originalRequest._retry && refreshToken) {
            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    refreshSubscribers.push(function (token) {
                        originalRequest.headers.Authorization = "Bearer " + token;
                        resolve(api(originalRequest));
                    });
                });
            }

            isRefreshing = true;

            return new Promise(function (resolve, reject) {
                axios
                    .post(baseURL + endpoints.refreshToken, { refreshToken })
                    .then((response) => {
                        const accessToken = response.data.accessToken;
                        const refreshToken = response.data.refreshToken;

                        localStorage.setItem("access_token", accessToken);
                        localStorage.setItem("refresh_token", refreshToken);

                        originalRequest.headers.Authorization = "Bearer " + accessToken;

                        // Call all the subscribers with the new token
                        refreshSubscribers.forEach((subscriber) => subscriber(accessToken));
                        refreshSubscribers = [];

                        resolve(api(originalRequest));
                    })
                    .catch((error) => {
                        logout();
                        reject(error);
                    })
                    .finally(() => {
                        isRefreshing = false;
                    });
            });
        }

        return Promise.reject(error);
    }
);

export default api;
