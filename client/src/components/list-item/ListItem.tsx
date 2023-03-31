import useDeleteTodo from "../../hooks/useDeleteTodo";
import Button from "../button/Button";
import * as S from "./listItem.styles";

interface Props {
    id: number;
    title: string;
    completed?: boolean;
    onClick?: () => void;
}
export default function ListItem({ id, title, completed, onClick }: Props) {
    const [deleteTodo, { isLoading }] = useDeleteTodo();

    return (
        <S.ListItem onClick={onClick} completed={completed}>
            <span>{title}</span>

            <Button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();

                    deleteTodo(id);
                }}
                disabled={isLoading}
            >
                {isLoading ? "Deleting..." : "Delete"}
            </Button>
        </S.ListItem>
    );
}
