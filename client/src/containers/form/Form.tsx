import { useState } from "react";

import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import useAddTodo from "../../hooks/useAddTodo";
import styles from "./Form.module.scss";

export default function Form() {
    const [addTodo] = useAddTodo();
    const [newTodoTitle, setNewTodoTitle] = useState("");

    const resetTodo = () => setNewTodoTitle("");

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        addTodo({ title: newTodoTitle });

        resetTodo();
    };

    return (
        <form className={styles.form} onSubmit={handleOnSubmit}>
            <Input
                type="text"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
            />
            <Button type="submit">Add</Button>
        </form>
    );
}
