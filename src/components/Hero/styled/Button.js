import styled from 'styled-components';

const Button = styled.button`
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textWhite};
  width: max-content;
  align-self: center;

  background-color: rgba(0, 0, 0, 0);
  border: 2px solid ${(props) => props.theme.colors.textWhite};

  padding: 1rem 2rem;
  margin-top: 2rem;
  cursor: pointer;

  :hover {
    border: 2px solid ${(props) => props.theme.colors.textWhite};
    color: ${(props) => props.theme.colors.brandColor};
    background-color: ${(props) => props.theme.colors.textWhite};
  }
`;

export default Button;
