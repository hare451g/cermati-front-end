import styled from 'styled-components';
import breakpoints from '../../../configs/breakpoints';

const Panel = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 1rem 0rem;

  display: flex;
  flex-direction: row;

  justify-content: center;

  position: sticky;
  position: --webkit-sticky;

  top: 0;

  /* When already accepted */
  ${(props) =>
    props.isNotified &&
    `
    position: absolute;
    width: 100%;
    top: -120px;
    transition: 2s;

    /* Mobile */
    @media screen and (max-width: ${breakpoints.MOBILE}) {
      top: -200px;
    }
  `}
`;

export default Panel;
