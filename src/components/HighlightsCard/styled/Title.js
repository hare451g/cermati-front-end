import styled from 'styled-components';

const Title = styled.div`
  height: 42px;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export default Title;
