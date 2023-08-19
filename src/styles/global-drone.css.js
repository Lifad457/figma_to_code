import { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        /* border: solid red 1px; */
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    img {
        width: 100%;
    }

    body {
        font-family: 'Bebas Neue', sans-serif;
        margin: 0;
    }

    @media only screen and (min-width: 900px) {
        html {
            font-size: 20px;
        }
    }
`
export default GlobalStyle