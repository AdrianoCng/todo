import ListItem from "../../components/list-item/ListItem";
import useTodos from "../../hooks/useTodos";
import useUpdateTodo from "../../hooks/useUpdateTodo";
import * as S from "./todoList.styles";

export default function TodoList() {
    const [todos, { isError, isLoading }] = useTodos();
    const [updateTodo] = useUpdateTodo();

    const renderTodos = () => {
        if (isLoading) {
            return <S.Paragraph>Getting your to dos. Please wait...</S.Paragraph>;
        }

        if (isError) {
            return <S.Paragraph>Error fetching data.</S.Paragraph>;
        }

        if (!todos || todos?.length < 1) {
            return <S.Paragraph>No to-dos. Add a new to-do!</S.Paragraph>;
        }

        return todos.map((todo) => (
            <ListItem
                key={todo.id}
                {...todo}
                onClick={() => {
                    const newTodo = { ...todo, completed: !todo.completed };

                    updateTodo(newTodo);
                }}
            />
        ));
    };

    return <S.TodoList>{renderTodos()}</S.TodoList>;
}
