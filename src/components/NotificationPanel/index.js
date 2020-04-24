import React from 'react';
// styled
import Panel from './styled/Panel';
import TextContainer from './styled/TextContainer';
import Container from './styled/Container';
import Button from './styled/Button';
import Link from './styled/Link';

function NotificationPanel({ isCookieAccepted }) {
  return (
    <Panel isCookieAccepted={isCookieAccepted}>
      <Container>
        <TextContainer>
          By accessing and using this website, you acknowledge that you have
          read and understand our{' '}
          <Link href="/#cookie-policy">Cookie Policy</Link>,{' '}
          <Link href="/#privacy-policy">Privacy Policy</Link>, and our{' '}
          <Link href="/#terms-of-service">Terms of Service</Link>.
        </TextContainer>
        <Button>Got It</Button>
      </Container>
    </Panel>
  );
}

export default NotificationPanel;
