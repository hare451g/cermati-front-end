import styled from 'styled-components';

const Panel = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 1rem;

  display: flex;
  flex-direction: row;

  justify-content: center;

  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export default Panel;
