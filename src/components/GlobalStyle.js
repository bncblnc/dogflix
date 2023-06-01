import { createGlobalStyle } from "styled-components";
import { blackColorDark } from "./UI/variables";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    text-decoration: none;
}

body{
    background-color: ${blackColorDark};    
}

main{
    max-width:200rem;
    margin: 0 auto;
    min-height: calc(100vh - 17rem);
}
`;
