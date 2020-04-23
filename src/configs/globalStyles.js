import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.background}
  }
`;

export default globalStyle;
