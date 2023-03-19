import ListItem from "../../components/list-item/ListItem";
import useTodos from "../../hooks/useTodos";
import useUpdateTodo from "../../hooks/useUpdateTodo";
import * as S from "./todoList.styles";

export default function TodoList() {
    const [todos] = useTodos();
    const [updateTodo] = useUpdateTodo();

    return (
        <S.TodoList>
            {todos &&
                todos.map((todo) => (
                    <ListItem
                        key={todo.id}
                        {...todo}
                        onClick={() => {
                            const newTodo = { ...todo, completed: !todo.completed };

                            updateTodo(newTodo);
                        }}
                    />
                ))}
        </S.TodoList>
    );
}
