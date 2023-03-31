import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { api, ApiError, todosKeys } from "../api";
import { endpoints } from "../constants";
import { TodoRes } from "./useTodos";

interface QueryContext {
    previousTodos: TodoRes[];
    id: number;
}

export default function useDeleteTodo() {
    const queryClient = useQueryClient();

    const { mutate, ...mutation } = useMutation<
        unknown,
        AxiosError<ApiError | undefined>,
        number,
        QueryContext
    >(
        (id) => {
            return api.delete(`${endpoints.todos}/${id}`);
        },
        {
            async onMutate(id) {
                await queryClient.cancelQueries({ queryKey: todosKeys.all() });

                const previousTodos = queryClient.getQueryData<TodoRes[]>(todosKeys.all());

                if (!previousTodos) return;

                queryClient.setQueryData(
                    todosKeys.all(),
                    previousTodos.filter((todo) => todo.id !== id)
                );

                return { previousTodos, id };
            },
            onError(err, newTodo, context) {
                if (!context) return;

                queryClient.setQueryData(todosKeys.all(), context.previousTodos);
            },
        }
    );

    return [mutate, mutation] as const;
}
