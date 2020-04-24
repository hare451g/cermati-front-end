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

  /* When already accepted */
  ${(props) =>
    props.isNotified &&
    `
    width: 100%;
    position: absolute;
    top: -400px;
    transition: 2s;
  `}
`;

export default Panel;
