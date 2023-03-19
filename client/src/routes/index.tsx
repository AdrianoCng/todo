import styled from "styled-components";
import TodoForm from "../containers/todo-form/TodoForm";
import TodoList from "../containers/TodoList/TodoList";
import { Container } from "../styles/GlobalStyles";

export default function Homepage() {
    return (
        <FlexContainer>
            <TodoForm />
            <TodoList />
        </FlexContainer>
    );
}

const FlexContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;
