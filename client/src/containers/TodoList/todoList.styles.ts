import styled from "styled-components";

export const TodoList = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.fonts.md};
    text-align: center;
`;
