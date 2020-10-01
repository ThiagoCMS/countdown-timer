import React, { useRef, useContext } from 'react';
import styled from 'styled-components';

import Input from './Input';
import Button from './Button';

import EventsContext from '../../context/EventsContext';

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
  const eventNameRef = useRef(undefined);
  const eventDateRef = useRef(undefined);
  const eventTimeRef = useRef(undefined);
  const { events, setEvents } = useContext(EventsContext);

  function handleSubmit(event) {
    event.preventDefault();
    const { value: eventName } = eventNameRef.current;
    const { value: eventDate } = eventDateRef.current;
    let { value: eventTime } = eventTimeRef.current;
    if (eventName === '') {
      alert('Please inform the event name');
      return;
    }
    if (eventDate === '') {
      alert('Please inform the event date');
      return;
    }
    if (eventTime === '') {
      eventTime = '00:00';
    }
    const time = `${eventDate} ${eventTime}`;
    if (new Date().getTime() >= new Date(time).getTime()) {
      alert('Please inform a future date and time');
      return;
    }
    eventNameRef.current.value = '';
    eventDateRef.current.value = '';
    eventTimeRef.current.value = '';
    setEvents([...events, { title: eventName, time }]);
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Add an event</h2>
      <InputWrapper>
        <Input type="text" name="Event name" placeholder="Event" ref={eventNameRef} />
        <Input type="date" name="Event date" placeholder="dd/mm/yyyy" ref={eventDateRef} />
        <Input type="time" name="Event time" placeholder="00:00" ref={eventTimeRef} />
      </InputWrapper>
      <Button type="submit">Start</Button>
    </FormWrapper>
  );
}

export default Form;
