import axios from "axios";

import { endpoints } from "../constants";
import { refreshToken } from "../utils";

const baseURL =
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

api.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;

        const unAuthorized = [403, 401].includes(error.response.status);

        if (
            unAuthorized &&
            !originalRequest._retry &&
            originalRequest.url !== endpoints.refreshToken
        ) {
            originalRequest._retry = true;

            try {
                const accessToken = await refreshToken();

                originalRequest.headers["Authorization"] = "Bearer " + accessToken;

                return api(originalRequest);
            } catch (err) {
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
