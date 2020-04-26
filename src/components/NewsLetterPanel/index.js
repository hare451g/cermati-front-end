import React from 'react';

// hooks
import useFormInput from '../../hooks/useFormInput';

// styled
import Container from './styled/Container';
import HeadingText from './styled/HeadingText';
import Text from './styled/Text';
import Input from './styled/Input';
import Button from './styled/Button';
import InputContainer from './styled/InputContainer';
import DismissIcon from './styled/DismissIcon';

function NewsLetterPanel({ isNewsLetterVisible, onDismissed }) {
  const [email, handleEmailChange] = useFormInput('');

  return (
    <Container isNewsLetterVisible={isNewsLetterVisible}>
      <DismissIcon onClick={onDismissed}>x</DismissIcon>
      <HeadingText>Get latest updates in web technologies</HeadingText>
      <Text>
        I write articles related to web technologies, such as design trends,
        development tools, UI/UX case studies and reviews, and more. Sign up to
        my newsletter to get them all.
      </Text>
      <InputContainer>
        <Input
          value={email}
          onChange={handleEmailChange}
          name="email"
          type="email"
          placeholder="Email Address"
        />
        <Button>Count Me In!</Button>
      </InputContainer>
    </Container>
  );
}

export default NewsLetterPanel;
