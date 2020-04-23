import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

// themes
import theme from '../../configs/themes';

// mock
import auth from '../../constants/auth';

// styled
import GlobalStyle from './styled/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet
        title={auth.name}
        titleTemplate={`%s | Cermati.com Front-end Developer Entry Test`}
      />
      <GlobalStyle />
      <div>app</div>
    </ThemeProvider>
  );
}

export default App;
