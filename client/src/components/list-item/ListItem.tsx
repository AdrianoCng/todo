import classNames from "classnames";
import useDeleteTodo from "../../hooks/useDeleteTodo";
import Button from "../button/Button";
import styles from "./ListItem.module.scss";

interface Props {
    id: number;
    title: string;
    completed?: boolean;
    onClick?: () => void;
}
export default function ListItem({ id, title, completed, onClick }: Props) {
    const [deleteTodo] = useDeleteTodo();

    return (
        <li className={classNames(styles.li, { [styles.completed]: completed })} onClick={onClick}>
            <span>{title}</span>

            <Button
                onClick={(e) => {
                    e.stopPropagation();

                    deleteTodo(id);
                }}
            >
                Delete
            </Button>
        </li>
    );
}
