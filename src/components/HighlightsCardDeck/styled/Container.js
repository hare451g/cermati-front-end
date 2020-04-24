import styled from 'styled-components';
import breakpoints from '../../../configs/breakpoints';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 16px 16px;

  padding: 1rem 0;

  /* Mobile */
  @media screen and (max-width: ${breakpoints.MOBILE}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }

  /* Tablet */
  @media screen and (min-width: ${breakpoints.MOBILE}) and (max-width: ${breakpoints.TABLET}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export default Container;
