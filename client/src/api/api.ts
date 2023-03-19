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

export default api;
