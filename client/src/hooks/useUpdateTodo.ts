import { endpoints } from "../constants";
import { useMutation, useQueryClient } from "react-query";
import { ApiError, api, todosKeys } from "../api";
import { AxiosError } from "axios";
import { TodoRes } from "./useTodos";

interface QueryContext {
    previousTodos: TodoRes[];
    request: Request;
}

interface Request {
    id: number;
    title?: string;
    completed?: boolean;
}
export default function useUpdateTodo() {
    const queryClient = useQueryClient();

    const { mutate, ...mutation } = useMutation<
        unknown,
        AxiosError<ApiError | undefined>,
        Request,
        QueryContext
    >(
        ({ id, title, completed }) => {
            return api.put(`${endpoints.todos}/${id}`, { title, completed });
        },
        {
            async onMutate(request) {
                await queryClient.cancelQueries({ queryKey: todosKeys.all() });

                const previousTodos = queryClient.getQueryData<TodoRes[]>(todosKeys.all());

                if (!previousTodos) return;

                queryClient.setQueryData(
                    todosKeys.all(),
                    previousTodos.map((todo) =>
                        todo.id === request.id
                            ? { ...todo, completed: !todo.completed }
                            : { ...todo }
                    )
                );

                return { previousTodos, request };
            },
            onError(err, newTodo, context) {
                if (!context) return;

                queryClient.setQueryData(todosKeys.all(), context.previousTodos);
            },
        }
    );

    return [mutate, mutation] as const;
}
