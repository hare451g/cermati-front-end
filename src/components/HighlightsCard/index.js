import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// styled
import CardContainer from './styled/CardContainer';
import CardHeader from './styled/CardHeader';
import Title from './styled/Title';
import Icon from './styled/Icon';
import CardBody from './styled/CardBody';

function HighlightsCard({ title, icon, content }) {
  return (
    <CardContainer>
      <CardHeader>
        <Title>{title}</Title>
        <Icon>
          <FontAwesomeIcon icon={icon} />
        </Icon>
      </CardHeader>
      <CardBody>
        <p>{content}</p>
      </CardBody>
    </CardContainer>
  );
}

export default HighlightsCard;
