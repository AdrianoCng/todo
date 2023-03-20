import { api } from "./api";
import { endpoints } from "./constants";

export const refreshToken = async () => {
    const refresh_token = localStorage.getItem("refresh_token");
    const userID = localStorage.getItem("user_id");

    if (!refresh_token || !userID) {
        return Promise.reject();
    }

    try {
        const { data } = await api.post(endpoints.refreshToken, {
            refreshToken: refresh_token,
            userID,
        });

        localStorage.setItem("access_token", data.accessToken);
        localStorage.setItem("refresh_token", data.refreshToken);

        return Promise.resolve(data.accessToken);
    } catch (error) {
        return Promise.reject(error);
    }
};
