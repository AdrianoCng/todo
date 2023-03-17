import { useMutation } from "react-query";
import { api, ApiError } from "../api";
import { endpoints } from "../constants";

interface TodoReq {
    title: string;
    completed?: boolean;
}
export default function useAddTodo() {
    const { mutate, ...mutation } = useMutation<unknown, ApiError, TodoReq>((newTodo) => {
        return api.post(endpoints.todos, newTodo);
    });

    return [mutate, mutation] as const;
}
