import { createGlobalStyle } from "styled-components";

import normalizeCss from "./normalize";

const CssBaseline = createGlobalStyle`
  html {
    font-family: Roboto, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smotthing: grayscale;
    caret-color: #4c4cff;
  }

  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    font-family: "Roboto", "Lato", -apple-system, sans-serif;
    font-size: 16px;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  ${normalizeCss};
`;

export default CssBaseline;
