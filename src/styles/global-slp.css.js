import { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Poppins';
    }

    @media only screen and (min-width: 1260px) {
        #root {
            display: flex !important;
        }
    }
`
export default GlobalStyle