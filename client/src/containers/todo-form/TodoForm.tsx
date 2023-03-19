import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import * as S from "./todoForm.styles";

export default function TodoForm() {
    return (
        <S.TodoForm>
            <Input />
            <Button>Add</Button>
        </S.TodoForm>
    );
}
