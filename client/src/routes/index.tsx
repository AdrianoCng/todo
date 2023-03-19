import styled from "styled-components";
import TodoForm from "../containers/todo-form/TodoForm";
import TodoList from "../containers/TodoList/TodoList";
import { Container } from "../styles/GlobalStyles";
import { Header } from "../styles/Typography";

export default function Homepage() {
    return (
        <FlexContainer>
            <Header tag="h1">To-Do List</Header>

            <TodoForm />
            <TodoList />
        </FlexContainer>
    );
}

const FlexContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
