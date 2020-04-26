import styled from 'styled-components';

const Text = styled.div`
  max-width: 640px;
  color: ${props => props.theme.colors.textWhite};
  font-size: 1rem;
  line-height: 1.25rem;

  padding: .5rem 0rem;
`;

export default Text;