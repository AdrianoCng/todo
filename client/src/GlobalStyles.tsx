import styled, { createGlobalStyle } from "styled-components";

const breakpointMobile = "576px";
const breakpointTablet = "768px";
const breakpointLaptop = "992px";
const breakpointDesktop = "1200px";

export const theme = {
    colors: {
        primary: "#7d2f85",
        secondary: "#ffffff",
        bgPrimary: "#fff",
        bgSecondary: "#ededed",
    },
    fonts: {
        xsm: "0.8rem",
        sm: "1.2rem",
        md: "1.6rem",
        lg: "1.8rem",
        xlg: "2.4rem",
    },
};

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
    }
    html, body {
        height: 100%;
        font-size: 62.5%;
    }
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        background-color: #ededed;
    }
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    input, button, textarea, select {
        font: inherit;
    }
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
    #root {
        isolation: isolate;
    }
`;

export const Container = styled.div`
    padding-right: 20px;
    padding-left: 20px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;

    @media only screen and (min-width: ${breakpointMobile}) {
        width: 540px;
    }

    @media only screen and (min-width: ${breakpointTablet}) {
        width: 720px;
    }

    @media only screen and (min-width: ${breakpointLaptop}) {
        width: 960px;
    }

    @media only screen and (min-width: ${breakpointDesktop}) {
        width: 1140px;
    }
`;

export default GlobalStyles;
