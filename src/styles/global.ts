import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
  }

  body{
    background:${(props) => props.theme.background};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased; 
  }
  
  body,button,input{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size:1rem;
 }

  h1,h2,h3{
    font-family:"Baloo 2",sans-serif;
    font-weight: bold;
 }


  
`;
