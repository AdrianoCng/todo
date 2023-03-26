import { endpoints } from "../constants";
import { useMutation } from "react-query";
import { ApiError, api } from "../api";
import { AxiosError } from "axios";

interface Request {
    id: number;
    title?: string;
    completed?: boolean;
}
export default function useUpdateTodo() {
    const { mutate, ...mutation } = useMutation<unknown, AxiosError<ApiError | undefined>, Request>(
        ({ id, title, completed }) => {
            return api.put(`${endpoints.todos}/${id}`, { title, completed });
        }
    );

    return [mutate, mutation] as const;
}
