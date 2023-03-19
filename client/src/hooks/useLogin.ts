import { useMutation } from "react-query";
import { api, ApiError } from "../api";
import { endpoints } from "../constants";
import useLocalStorage from "./useLocalStorage";

interface LoginReq {
    email: string;
    password: string;
}

interface LoginRes {
    accessToken: string;
    refreshToken: string;
}

export default function useLogin() {
    const [, setAccessToken] = useLocalStorage("access_token", "");
    const [, setRefreshToken] = useLocalStorage("refresh_token", "");

    const { mutate, ...mutation } = useMutation<LoginRes, ApiError, LoginReq>(
        async (form) => {
            const { data } = await api.post(endpoints.login, form);
            return data;
        },
        {
            onSuccess({ accessToken, refreshToken }) {
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);
            },
        }
    );

    return [mutate, mutation] as const;
}
