import styled from "styled-components";

import { Container } from "../styles/GlobalStyles";

export default function withCenteredContainer(Component: () => JSX.Element) {
    return () => (
        <CenteredContainer>
            <Component />
        </CenteredContainer>
    );
}

const CenteredContainer = styled(Container)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
