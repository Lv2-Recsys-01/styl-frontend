import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        width: 100%;
        font-family: "Noto Sans KR", sans-serif;
        background-color: gray;
    }

    html {
        position: relative;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
