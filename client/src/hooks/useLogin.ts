import { useMutation } from "react-query";
import { api, ApiError } from "../api";
import { endpoints } from "../constants";
import { useAuthContext } from "../contexts/AuthContext";

interface LoginReq {
    email: string;
    password: string;
}

interface LoginRes {
    accessToken: string;
    refreshToken: string;
    userID: number;
}

export default function useLogin() {
    const { setIsAuthenticated } = useAuthContext();

    const { mutate, ...mutation } = useMutation<LoginRes, ApiError, LoginReq>(
        async (form) => {
            const { data } = await api.post(endpoints.login, form);
            return data;
        },
        {
            onSuccess({ accessToken, refreshToken, userID }) {
                localStorage.setItem("access_token", accessToken);
                localStorage.setItem("refresh_token", refreshToken);
                localStorage.setItem("user_id", `${userID}`);

                setIsAuthenticated(true);
            },
        }
    );

    return [mutate, mutation] as const;
}
