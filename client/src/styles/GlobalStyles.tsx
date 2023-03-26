import styled, { createGlobalStyle } from "styled-components";

export const breakpointMobile = "576px";
export const breakpointTablet = "768px";
export const breakpointLaptop = "992px";
export const breakpointDesktop = "1200px";

export const theme = {
    colors: {
        primary: "#6a4b87",
        secondary: "#ffffff",
        bgPrimary: "#fff",
        bgSecondary: "#f1f1f1",
    },
    fonts: {
        xsm: "0.8rem",
        sm: "1.2rem",
        md: "1.8rem",
        lg: "2.4rem",
        xlg: "3.6rem",
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
        background-color: #f1f1f1;
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
