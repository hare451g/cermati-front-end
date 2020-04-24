import React from 'react';

// styled
import Container from './styled/Container';
import Content from './styled/Content';

function Footer({ name }) {
  const thisYear = new Date().getFullYear();

  return (
    <Container>
      <Content>
        &copy; {thisYear} {name}, All rights reserved
      </Content>
    </Container>
  );
}

export default Footer;
