import { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
    }

    &:root {
        --text-color: #565656;
        --primary-color: #008AD8;
    }

    body {
        margin: 0;
        background: #F4F4F4;
        font-family: 'Lexend Deca', sans-serif;
    }
`
export default GlobalStyle