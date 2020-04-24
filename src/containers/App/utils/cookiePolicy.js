import Cookies from 'js-cookie';

const cookiePolicy = {
  isAlreadyNotified: () => Cookies.get('isNotifiedByCookiePolicy') || false,
  setAlreadyNotified: (isNotified) =>
    Cookies.set('isNotifiedByCookiePolicy', isNotified),
};

export default cookiePolicy;
