import cookiePolicy from '../utils/cookiePolicy';

const CONTEXT = 'containers/app';

const ON_COOKIE_POLICY_CLICK = `${CONTEXT}/ON_COOKIE_POLICY_CLICK`;
const ON_NEWSLETTER_DISMISSED = `${CONTEXT}/ON_NEWSLETTER_DISMISSED`;
const ON_SHOW_NEWSLETTER = `${CONTEXT}/ON_SHOW_NEWSLETTER`;

const initialState = {
  isNotifiedByCookiePolicy: cookiePolicy.isAlreadyNotified() || null,
  isNewsLetterVisible: false,
  nextNewsLetterVisibleTime: cookiePolicy.nextNewsLetterVisibleTime() || null,
  auth: {
    name: 'Hendra Sadewa',
  },
};

export {
  ON_COOKIE_POLICY_CLICK,
  ON_NEWSLETTER_DISMISSED,
  ON_SHOW_NEWSLETTER,
  initialState,
};
