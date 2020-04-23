import styled from 'styled-components';

const Container = styled.div`
  background-image: url(${(props) => props.background});
  background-color: ${(props) => props.theme.colors.brandColor};
  background-blend-mode: multiply;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`;

export default Container;
