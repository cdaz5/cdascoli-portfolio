import { createGlobalStyle, keyframes } from 'styled-components';

import MEDIA_QUERIES from '../constants/media-queries';

const blink = keyframes` 
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    height: 100%;
  }

  body {
    position: relative;
    line-height: 1;
    margin: 0;
    padding: 0;
    font-family: 'Crimson Text', serif;
    height: 100%;
  }

  #root {
    min-height: 100vh;
    position: relative;
  }

  * {
    margin: 0;
    padding: 0;
  }

  /* typeist css for blinking cursor */
  .Typist .Cursor {
    display: inline-block;
    1.5rem
    position: relative;
    top: 1px;

    ${MEDIA_QUERIES.maxIPhone} {
      font-size: 1rem;
    }
  }

  .Typist .Cursor--blinking {
    opacity: 1;
    animation: ${blink} 1s linear infinite;
  }
`;

export default GlobalStyles;
