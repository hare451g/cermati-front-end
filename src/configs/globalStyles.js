import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.background};
  }
  * {
    font-family: 'Roboto', sans-serif;
  }
`;

export default globalStyle;
