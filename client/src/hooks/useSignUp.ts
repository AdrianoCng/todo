import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { api, ApiError } from "../api";
import { endpoints } from "../constants";

interface SignUpReq {
    email: string;
    password: string;
    confirmPassword: string;
}
export default function useSignUp() {
    const { mutate, ...mutation } = useMutation<void, AxiosError<ApiError | undefined>, SignUpReq>(
        async (payload) => {
            const { data } = await api.post(endpoints.signUp, payload);

            return data;
        }
    );

    return [mutate, mutation] as const;
}
