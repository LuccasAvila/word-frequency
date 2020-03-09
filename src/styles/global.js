import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Muli', sans-serif;
  }

  html, body, #root {
    background: #f7faff;
  }
`;
