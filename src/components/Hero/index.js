import React from 'react';

// styled
import Container from './styled/Container';
import HeadingText from './styled/HeadingText';
import SubHeadingText from './styled/SubHeadingText';
import Descriptions from './styled/Descriptions';
import Button from './styled/Button';
import Icon from './styled/Icon';
import ContentWrapper from './styled/ContentWrapper';

function Hero({
  icon,
  background,
  headingText,
  subHeading,
  descriptions,
  linkLabel,
}) {
  return (
    <Container background={background}>
      <Icon src={icon} />
      <ContentWrapper>
        <HeadingText>{headingText}</HeadingText>
        <SubHeadingText>{subHeading}</SubHeadingText>
        <Descriptions>{descriptions}</Descriptions>
        <Button>{linkLabel}</Button>
      </ContentWrapper>
    </Container>
  );
}

export default Hero;
