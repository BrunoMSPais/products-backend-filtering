import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primaryClr: #3bcecc;
    --secondaryClr: #7284A8;
    --textClr: #474954;
    --textAltClr: #eaeaea;
  }

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
    color: var(--textClr);
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .grid {
    @media (min-width: 780px) {
    display: grid;
    grid-template-columns: repeat(3 1fr);
    gap: 8px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 1.5rem;
    line-height: 1.6rem;
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

export default GlobalStyle;
