import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  
`