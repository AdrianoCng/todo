import styled from "styled-components";
import { Button } from "../../components/button/button.styles";
import Form from "../../components/form/Form";
import { Input } from "../../components/input/input.styles";

export const TodoForm = styled(Form)`
    display: flex;
    gap: 20px;
    width: 100%;

    ${Input} {
        flex: 1;
    }

    ${Button} {
        font-size: ${({ theme }) => theme.fonts.sm};
    }
`;
