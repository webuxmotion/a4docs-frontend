import { createGlobalStyle } from 'styled-components';

import { variables } from '../constants';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #F6F6F6;
    color: var(--color-primary);
    font-size: 20px;
    line-height: 25px;
  }

  body {
    --color-primary: ${variables.primaryColor};
    --color-secondary: ${variables.secondaryColor};
  }

  #savePlanet {
    fill: var(--color-secondary);
  }

  body.rebeccapurple {
    --color-primary: rebeccapurple;
    --color-secondary: #6CE535;
  }

  body.green {
    --color-primary: #2F6E75;
    --color-secondary: #00DB78;
  }

  body.black {
    --color-primary: #313131;
    --color-secondary: #949494;
  }

  a {
    color: black;
  }

  ul {
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  .container {
    margin: 0 auto;
  }

  .section {
    padding-right: 10%;
    padding-left: 10%;
  }
`;
 
export default GlobalStyle;
