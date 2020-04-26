import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
// mock
import auth from '../../constants/auth';
import heroContent from '../../constants/heroContent';
import highlightPanelContent from '../../constants/highlightPanelContent';
import highlightsCards from '../../constants/highlightsCards';

// components
import Hero from '../../components/Hero';
import NotificationPanel from '../../components/NotificationPanel';
import HighlightsPanel from '../../components/HighlightsPanel';
import HighlightCardDeck from '../../components/HighlightsCardDeck';
import Footer from '../../components/Footer';
import NewsLetterPanel from '../../components/NewsLetterPanel';

// utils
import cookiePolicy from './utils/cookiePolicy';

function App() {
  const [isNotifiedByCookiePolicy, setIsNotifiedByCookiePolicy] = useState(
    cookiePolicy.isAlreadyNotified() || false
  );

  const [isDismissed, setIsDismissed] = useState( false);
  const [timeDismissed, setTimeDismissed] = useState(null);

  const onCookieNotificationClicked = () => {
    setIsNotifiedByCookiePolicy(true);
  };

  useEffect(() => {
    if (isNotifiedByCookiePolicy) {
      cookiePolicy.setAlreadyNotified(isNotifiedByCookiePolicy);
    }
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
      <header>
        <NotificationPanel
          isNotified={isNotifiedByCookiePolicy}
          onNotificationClick={onCookieNotificationClicked}
        />
      </header>
      <main>
        <Hero {...heroContent} />
        <HighlightsPanel {...highlightPanelContent}>
          <HighlightCardDeck cards={highlightsCards} />
        </HighlightsPanel>
      </main>
      <footer>
        <NewsLetterPanel
          isDismissed={isDismissed}
          timeDismissed={timeDismissed}
        />
        <Footer name={auth.name} />
      </footer>
    </>
  );
}

export default App;
