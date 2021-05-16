import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
  }

  * + * {
    margin-top: 1em;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
