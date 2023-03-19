import styled from "styled-components";

export const Label = styled.label`
    font-size: ${({ theme }) => theme.fonts.lg};
    font-weight: bold;
    display: flex;
    flex-direction: column;
    width: 100%;
`;
