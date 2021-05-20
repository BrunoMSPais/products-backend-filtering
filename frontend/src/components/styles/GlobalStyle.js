import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primaryClr: #4b59f7;
    --secondaryClr: #7284A8;
    --textClr: #fff;
    --textAltClr: #eaeaea;

    --darkBg: #101522;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: var(--textClr);
    min-height: 100vh;

    @media screen and (max-width: 960px) {
      overflow-x: hidden;
    }
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 0.5em;

  @media screen and (min-width: 991px) {
    padding: 0 3em;
  }
`;

export default GlobalStyle;
