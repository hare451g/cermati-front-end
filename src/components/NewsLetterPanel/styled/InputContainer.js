import styled from 'styled-components';
import breakpoints from '../../../configs/breakpoints';

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;

  /* Mobile */
  @media screen and (max-width: ${breakpoints.MOBILE}) {
    flex-direction: column;
  }
`;

export default InputContainer;