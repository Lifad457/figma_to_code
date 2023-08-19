import { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
    }

    &:root {
        --primary-color: #2D7DFF;
    }

    body {
        background: linear-gradient(215deg, #BD00FF 0%, #00A3FF 100%);
        background-attachment: fixed;
        height: 100vh;
        font-family: 'Poppins';
    }
`
export default GlobalStyle