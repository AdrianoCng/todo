import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { api, ApiError } from "../api";
import { endpoints } from "../constants";

export default function useDeleteTodo() {
    const { mutate, ...mutation } = useMutation<unknown, AxiosError<ApiError | undefined>, number>(
        (id) => {
            return api.delete(`${endpoints.todos}/${id}`);
        }
    );

    return [mutate, mutation] as const;
}
