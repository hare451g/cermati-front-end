import React from 'react';

// styled
import Container from './styled/Container';
import HeaderContainer from './styled/HeaderContainer';
import HighLightsHeadingText from './styled/HighLightsHeadingText';
import HighlightsDescriptions from './styled/HighlightsDescriptions';

function HighlightsPanel({
  highlightsHeadingText,
  highlightsDescriptions,
  children,
}) {
  return (
    <Container>
      <HeaderContainer>
        <HighLightsHeadingText>{highlightsHeadingText}</HighLightsHeadingText>
        <HighlightsDescriptions>
          {highlightsDescriptions}
        </HighlightsDescriptions>
      </HeaderContainer>
    </Container>
  );
}

export default HighlightsPanel;
