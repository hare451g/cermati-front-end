import styled from 'styled-components';

const Button = styled.button`
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textWhite};

  width: max-content;
  min-width: 100px;
  background-color: ${(props) => props.theme.colors.brandColor};

  border: none;
  border-radius: 0.25rem;

  padding: 0.75rem 0.5rem;
  margin-top: 0.5rem;

  cursor: pointer;
`;

export default Button;
