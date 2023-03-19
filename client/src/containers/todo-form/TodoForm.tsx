import { useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import useAddTodo from "../../hooks/useAddTodo";
import * as S from "./todoForm.styles";

export default function TodoForm() {
    const [addTodo] = useAddTodo();
    const [todo, setTodo] = useState("");

    const resetTodo = () => {
        setTodo("");
    };

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        addTodo(
            { title: todo, completed: false },
            {
                onSuccess() {
                    resetTodo();
                },
            }
        );
    };

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
        setTodo(event.target.value);

    return (
        <S.TodoForm onSubmit={handleOnSubmit}>
            <Input value={todo} onChange={handleOnChange} />
            <Button type="submit">Add</Button>
        </S.TodoForm>
    );
}
