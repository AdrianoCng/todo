import styled from "styled-components";

export const Form = styled.form`
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    max-width: 600px;
    min-width: 200px;
    background: ${({ theme }) => theme.colors.bgPrimary};
`;
