import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// mock
import auth from '../../constants/auth';
import heroContent from '../../constants/heroContent';
import highlightPanelContent from '../../constants/highlightPanelContent';

// components
import Hero from '../../components/Hero';
import NotificationPanel from '../../components/NotificationPanel';
import HighlightsPanel from '../../components/HighlightsPanel';

// utils
import cookiePolicy from './utils/cookiePolicy';

function App() {
  const [isNotifiedByCookiePolicy, setIsNotifiedByCookiePolicy] = useState(
    cookiePolicy.isAlreadyNotified()
  );

  const onCookieNotificationClicked = () => {
    setIsNotifiedByCookiePolicy(true);
  };

  useEffect(() => {
    cookiePolicy.setAlreadyNotified(isNotifiedByCookiePolicy);
  }, [isNotifiedByCookiePolicy]);

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
      <NotificationPanel
        isNotified={isNotifiedByCookiePolicy}
        onNotificationClick={onCookieNotificationClicked}
      />
      <Hero {...heroContent} />
      <HighlightsPanel {...highlightPanelContent} />
    </>
  );
}

export default App;
