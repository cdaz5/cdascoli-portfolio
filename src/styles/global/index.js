import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    height: 100%;
  }

  body {
    position: relative;
    line-height: 1;
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans';
    height: 100%;
    /* background-color: #FEF6E1; */
  }

  #root {
    min-height: 100vh;
    position: relative;
  }
`;

export default GlobalStyles;
