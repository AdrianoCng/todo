import styled from "styled-components";

export const Form = styled.form`
    border-radius: 20px;
    padding: 50px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    max-width: 600px;
    min-width: 200px;
    background: ${({ theme }) => theme.colors.bgPrimary};
`;
