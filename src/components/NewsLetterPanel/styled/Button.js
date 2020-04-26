import styled from 'styled-components';
import breakpoints from '../../../configs/breakpoints';

const Button = styled.button`
  padding: .25rem 1rem;
  margin-left: .5rem;
  background-color: ${props=> props.theme.colors.secondaryBrandColor};
  border: none;

  cursor: pointer;

  font-weight: bold;
  color: ${props => props.theme.colors.textWhite};

  max-width: 30%;

  /* Mobile */
  @media screen and (max-width: ${breakpoints.MOBILE}) {
    max-width: 100%;
    margin-left: 0rem;
    margin-top: 0.25rem;

  }
`;

export default Button;