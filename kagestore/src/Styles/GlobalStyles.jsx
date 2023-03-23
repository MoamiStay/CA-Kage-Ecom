import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    --color-primary: rgb(222, 134, 0);
    --color-secondary: rgb(222, 0, 0);
    --color-primaryText: rgb(12, 12, 12);
};

* {
    box-sizing: border-box;
};

ul, li, li > a, p, h1, h2, h3, h4 {
    list-style-type: none;
    text-decoration: none;
    color: ${(props) => props.theme.color.primaryText};
};

h1, h2, h3, h4, p, button, input, a, li {
    font-family: 'Noto Serif JP', serif;
};

`;

export default GlobalStyle;