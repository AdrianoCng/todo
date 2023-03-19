import axios from "axios";
import { endpoints } from "../constants";

const baseURL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:5000/api/v1"
        : "https://todo-app-123.herokuapp.com";

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

// api.interceptors.response.use(
//     (res) => res,
//     (error) => {
//         const originalRequest = error.config;

//         if (error.response.status === 403 && !originalRequest._retry) {
//             // originalRequest._retry = true;
//             // const access_token = await refreshAccessToken();
//             // axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
//             // return axiosApiInstance(originalRequest);
//         }
//         return Promise.reject(error);
//     }
// );

export default api;
