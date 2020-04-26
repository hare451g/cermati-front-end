import {
  ON_COOKIE_POLICY_CLICK,
  ON_NEWSLETTER_DISMISSED,
  ON_SHOW_NEWSLETTER,
} from './constants';

const onCookiePolicyClick = () => ({
  type: ON_COOKIE_POLICY_CLICK,
});

const onNewsLetterDismissed = () => ({
  type: ON_NEWSLETTER_DISMISSED,
});

const onShowNewsLetter = () => ({
  type: ON_SHOW_NEWSLETTER,
});

export { onCookiePolicyClick, onNewsLetterDismissed, onShowNewsLetter };
