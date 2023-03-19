import styled, { css } from "styled-components";

import { ButtonProps } from "./Button";

export const Button = styled.button<ButtonProps>`
    font-size: ${({ theme }) => theme.fonts.lg};
    font-weight: bold;
    color: secondary;
    border: 1.5px solid;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 8px;

    ${(props) => {
        switch (props.variant) {
            case "primary":
                return primaryVariant;
            case "secondary":
                return secondaryVariant;
        }
    }}

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;

const primaryVariant = css`
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const secondaryVariant = css`
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.secondary};
    }
`;
