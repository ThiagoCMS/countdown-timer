import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 24px;
  justify-content: space-between;
  margin-top: 4px;

  @media (min-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    height: 48px;
    justify-content: flex-start;

    :nth-child(n+2) {
      margin-left: 16px;
    }
  }
`;

const Label = styled.label`
  font-size: 1em;
`;

const InputField = styled.input`
  border: none;
  border-bottom: 2px solid hsla(0, 0%, 0%, .4);
  height: 24px;
  transition: .2s;

  :focus {
    border-bottom: 2px solid hsla(0, 0%, 0%, .7);
    outline: none;
  }
`;

const Input = React.forwardRef(({ name, placeholder, type }, inputRef) => (
  <InputWrapper>
    <Label htmlFor={name}>{name}</Label>
    <InputField type={type} id={name} name={name} placeholder={placeholder} ref={inputRef} autoComplete="off" />
  </InputWrapper>
));

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
