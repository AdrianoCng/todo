import styled from "styled-components";

interface Props {
    completed?: boolean;
}
export const ListItem = styled.li<Props>`
    font-size: ${({ theme }) => theme.fonts.md};
    display: flex;
    gap: 20px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    ${({ completed }) =>
        completed &&
        `
    background-color: rgba(0, 0, 0, 0.1);

    span {
        text-decoration: line-through;
    }
    `}
`;
