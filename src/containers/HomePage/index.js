import React from "react";

// mock
import heroContent from "../../constants/heroContent";
import highlightPanelContent from "../../constants/highlightPanelContent";
import highlightsCards from "../../constants/highlightsCards";

// components
import Hero from "../../components/Hero";
import HighlightsPanel from "../../components/HighlightsPanel";
import HighlightCardDeck from "../../components/HighlightsCardDeck";

function HomePage() {
  return (
    <main>
      <Hero {...heroContent} />
      <HighlightsPanel {...highlightPanelContent}>
        <HighlightCardDeck cards={highlightsCards} />
      </HighlightsPanel>
    </main>
  );
}

export default HomePage;
