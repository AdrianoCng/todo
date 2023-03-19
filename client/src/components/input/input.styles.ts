import styled from "styled-components";

export const Input = styled.input`
    border-radius: 5px;
    padding: 2px 10px;
    font-size: ${({ theme }) => theme.fonts.md};
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary};
    }
`;
