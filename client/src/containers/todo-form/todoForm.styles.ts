import styled from "styled-components";
import Form from "../../components/form/Form";
import { Input } from "../../components/input/input.styles";

export const TodoForm = styled(Form)`
    display: flex;
    gap: 20px;
    width: 100%;
    margin-top: 50px;
    justify-content: center;

    ${Input} {
        flex: 1;
    }
`;
