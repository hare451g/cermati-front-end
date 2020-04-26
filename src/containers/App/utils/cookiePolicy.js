import Cookies from 'js-cookie';

const cookiePolicy = {
  // Cookie Policy
  isAlreadyNotified: () => Cookies.get('isNotifiedByCookiePolicy') || false,
  setAlreadyNotified: (isNotified) =>
    Cookies.set('isNotifiedByCookiePolicy', isNotified),

  // News Letter
  nextNewsLetterVisibleTime: () =>
    Cookies.get('nextNewsLetterVisibleTime') || false,
  setNextNewsLetterVisibleTime: (nextTenMinutes) =>
    Cookies.set('nextNewsLetterVisibleTime', nextTenMinutes),
};

export default cookiePolicy;
