import React from 'react';

// components
import HighlightsCard from '../HighlightsCard';

// styled
import Container from './styled/Container';

function HighlightCardDeck({ cards = [] }) {
  return (
    <Container>
      {cards.map((card, index) => (
        <HighlightsCard {...card} key={`card-${index}`} />
      ))}
    </Container>
  );
}

export default HighlightCardDeck;
