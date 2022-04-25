import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'League Spartan', sans-serif;
        padding: 0;
        margin: 0;
    }

    body {
        font-size: 1rem;
        background-color: ${(p) => p.theme.mainBackground};
    }
    label {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.headerColor};
    }
  


`

export default GlobalStyles