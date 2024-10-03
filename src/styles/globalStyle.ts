import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html,
  body {
    font-size: 62.5%;
    max-width: 100vw;
    overflow:unset;
    word-break: keep-all;
    overscroll-behavior-y: none;
  }


  body {
    height: 100%;
    color: #1e1e1e; 
  }

  main{
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button{
    all:unset;
    cursor: pointer;
  }

  input:-webkit-autofill {
	-webkit-box-shadow: 0 0 0 1000px white inset;
	box-shadow: 0 0 0 1000px white inset;
  }
  
  .noScroll {
    overflow: hidden;
    height: 100vh;
  }


`;

export default GlobalStyle;
