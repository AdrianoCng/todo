import { Link } from "react-router-dom";
import styled from "styled-components";

export const Anchor = styled(Link)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fonts.md};
    text-align: center;
`;
