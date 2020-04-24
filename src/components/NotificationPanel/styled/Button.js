import styled from 'styled-components';

const Button = styled.button`
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textWhite};

  width: max-content;
  align-self: center;
  background-color: ${(props) => props.theme.colors.brandColor};

  border: none;
  border-radius: 0.25rem;

  padding: 0.75rem 0.5rem;
  min-width: 100px;

  cursor: pointer;
`;

export default Button;
