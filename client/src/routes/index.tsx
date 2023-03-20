import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/button/Button";
import { routes } from "../constants";
import TodoForm from "../containers/todo-form/TodoForm";
import TodoList from "../containers/TodoList/TodoList";
import { Container } from "../styles/GlobalStyles";

export default function Homepage() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        navigate(routes.login());
    };

    return (
        <FlexContainer>
            <Button type="button" variant="secondary" onClick={logout}>
                Logout
            </Button>
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
