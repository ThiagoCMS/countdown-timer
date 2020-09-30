import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: 2px solid hsla(0, 0%, 13%, .4);
  border-radius: 25px;
  font-size: 1em;
  margin-top: 8px;
  padding: 8px;
  transition: .2s;
  width: 100%;

  :hover {
    background-color: hsla(0, 0%, 13%, .01);
    border: 2px solid hsla(0, 0%, 13%, .7);
  }

  :active {
    background-color: hsla(166, 48%, 75%, 1);
    outline: none;
  }

  :focus {
    outline: none;
  }

  @media(min-width: 600px) {
    width: 177px;
  }
`;

export default Button;
