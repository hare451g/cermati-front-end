import cookiePolicy from '../utils/cookiePolicy';

import {
  ON_COOKIE_POLICY_CLICK,
  ON_NEWSLETTER_DISMISSED,
  ON_SHOW_NEWSLETTER,
} from './constants';

function reducer(state, action) {
  switch (action.type) {
    case ON_COOKIE_POLICY_CLICK:
      cookiePolicy.setAlreadyNotified(true);
      return {
        ...state,
        isNotifiedByCookiePolicy: true,
      };

    case ON_SHOW_NEWSLETTER:
      const currentTime = new Date().getTime();

      if (currentTime > state.nextNewsLetterVisibleTime) {
        return {
          ...state,
          isNewsLetterVisible: true,
        };
      } else {
        return state;
      }

    case ON_NEWSLETTER_DISMISSED:
      const TEN_MINUTES = 60 * 1000 * 10;
      const nextTenMinutes = new Date().getTime() + TEN_MINUTES;

      cookiePolicy.setNextNewsLetterVisibleTime(nextTenMinutes);

      return {
        ...state,
        isNewsLetterVisible: false,
        nextNewsLetterVisibleTime: nextTenMinutes,
      };

    default:
      return state;
  }
}

export default reducer;
