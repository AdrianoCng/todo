import { AxiosError } from "axios";
import { useQuery } from "react-query";

import { todosKeys, api, ApiError } from "../api";
import { endpoints } from "../constants";

interface TodoRes {
    id: number;
    title: string;
    completed?: boolean;
    createdAt: string;
    updatedAt: string;
}
export default function useTodos() {
    const { data, ...query } = useQuery<TodoRes[], AxiosError<ApiError | undefined>>(
        todosKeys.all(),
        async () => {
            const { data } = await api.get(endpoints.todos);

            return data;
        }
    );

    return [data, query] as const;
}
