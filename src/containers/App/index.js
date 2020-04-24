import React from 'react';
import { Helmet } from 'react-helmet';

// mock
import auth from '../../constants/auth';
import heroContent from '../../constants/heroContent';

// components
import Hero from '../../components/Hero';
import NotificationPanel from '../../components/NotificationPanel';

function App() {
  return (
    <>
      <Helmet
        title={auth.name}
        titleTemplate={`%s | Cermati.com Front-end Developer Entry Test`}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
          async
        />
      </Helmet>
      <NotificationPanel />
      <Hero {...heroContent} />
    </>
  );
}

export default App;
