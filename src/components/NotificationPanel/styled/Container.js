import styled from 'styled-components';
import breakpoints from '../../../configs/breakpoints';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 720px;

  /* Mobile */
  @media screen and (max-width: ${breakpoints.MOBILE}) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.5rem 0.5rem;
  }
`;

export default Container;
