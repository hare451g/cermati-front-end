import styled from 'styled-components';

const HighlightsDescriptions = styled.p`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  max-width: 640px;
  line-height: 1.6;
  font-size: 1.15rem;
`;

export default HighlightsDescriptions;
