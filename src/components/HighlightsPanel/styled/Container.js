import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Container;
