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

export const InputError = styled.span`
    color: red;
    font-size: ${({ theme }) => theme.fonts.xsm};
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5px;
    font-size: ${({ theme }) => theme.fonts.lg};
    font-weight: bold;
    width: 100%;
}
`;
