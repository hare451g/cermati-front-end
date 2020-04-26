import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 640px;
  padding: 1rem 1rem;
  background-color: rgba(0, 123, 193, 0.85);

  ${(props) =>
    props.isNewsLetterVisible
      ? `
      position: fixed;
      bottom: 0px;
      transition: 2s;
    `
      : `
      position: fixed;
      transition: 2s;
      bottom: -2000px;
    `}
`;

export default Container;
