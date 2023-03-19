import styled from "styled-components";
import Form from "../../components/form/Form";
import { Container } from "../../GlobalStyles";

export const LoginContainer = styled(Container)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;
