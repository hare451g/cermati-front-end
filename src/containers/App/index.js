import React, { useState, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet';

// mock
import auth from '../../constants/auth';

// components
import NotificationPanel from '../../components/NotificationPanel';
import Footer from '../../components/Footer';
import NewsLetterPanel from '../../components/NewsLetterPanel';

// utils
import HomePage from '../HomePage';

// data
import { initialState } from './data/constants';
import {
  onCookiePolicyClick,
  onNewsLetterDismissed,
  onShowNewsLetter,
} from './data/actions';
import reducer from './data/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    isNotifiedByCookiePolicy,
    isNewsLetterVisible,
    nextNewsLetterVisibleTime,
  } = state;

  // scroll event listener

  useEffect(() => {
    const onScrollWatch = () => {
      const windowHeight = document.documentElement.clientHeight;
      const scrollHeight = window.pageYOffset;

      const scrollProgress = scrollHeight / windowHeight;

      if (scrollProgress >= 1 / 3 && !isNewsLetterVisible) {
        dispatch(onShowNewsLetter());
      }
    };

    window.addEventListener('scroll', onScrollWatch);

    return () => {
      window.removeEventListener('scroll', onScrollWatch);
    };
  }, [isNewsLetterVisible]);

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
          onNotificationClick={() => dispatch(onCookiePolicyClick())}
        />
      </header>
      <main>
        <HomePage />
      </main>
      <footer>
        <NewsLetterPanel
          isNewsLetterVisible={isNewsLetterVisible}
          onDismissed={() => dispatch(onNewsLetterDismissed())}
        />
        <Footer name={auth.name} />
      </footer>
    </>
  );
}

export default App;
