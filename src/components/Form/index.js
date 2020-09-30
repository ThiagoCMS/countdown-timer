import React from 'react';
import styled from 'styled-components';

import Input from './Input';
import Button from './Button';

const FormWrapper = styled.form`
  padding: 16px;
`;

const InputWrapper = styled.div`
  align-items: space-between;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

function Form() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Add an event</h2>
      <InputWrapper>
        <Input name="Event name" placeholder="Event" />
        <Input name="Event date" placeholder="dd/mm/yyyy" />
        <Input name="Event time" placeholder="00:00" />
      </InputWrapper>
      <Button type="submit">Start</Button>
    </FormWrapper>
  );
}

export default Form;
