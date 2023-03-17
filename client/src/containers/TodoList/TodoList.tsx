import ListItem from "../../components/list-item/ListItem";
import useTodos from "../../hooks/useTodos";
import useUpdateTodo from "../../hooks/useUpdateTodo";
import styles from "./TodoList.module.scss";

export default function TodoList() {
    const [todos] = useTodos();
    const [updateTodo] = useUpdateTodo();

    return (
        <ul className={styles.ul}>
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
        </ul>
    );
}
