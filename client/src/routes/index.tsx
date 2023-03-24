import styled from "styled-components";
import Button from "../components/button/Button";
import TodoForm from "../containers/todo-form/TodoForm";
import TodoList from "../containers/TodoList/TodoList";
import useLogout from "../hooks/useLogout";
import { Container } from "../styles/GlobalStyles";

export default function Homepage() {
    const [logout, { isLoading }] = useLogout();

    const handleLogout = () => {
        logout();
    };

    return (
        <FlexContainer>
            <Nav>
                <Button
                    type="button"
                    variant="secondary"
                    onClick={handleLogout}
                    disabled={isLoading}
                >
                    Logout
                </Button>
            </Nav>
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

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 20px 40px;
`;
