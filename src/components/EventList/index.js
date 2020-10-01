import React, { useContext } from 'react';
import styled from 'styled-components';

import Event from './Event';

import EventsContext from '../../context/EventsContext';
import AlertsContext from '../../context/AlertsContext';

const EventSection = styled.section`
  padding: 4px 16px;
`;

const EventsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

function EventList() {
  const { events, setEvents } = useContext(EventsContext);
  const { alerts, setAlerts } = useContext(AlertsContext);

  function removeEvent({ title, time }) {
    setAlerts([...alerts, `${title} has began`]);
    setEvents(events.filter((event) => event.title !== title && event.time !== time));
  }

  return (
    <EventSection>
      <h2>Events</h2>
      <EventsWrapper>
        {events
        && events.map(({ title, time }) => (
          <Event key={`${title}-${time} at ${new Date().getTime()}`} title={title} time={time} removeEventFn={removeEvent} />
        ))}
      </EventsWrapper>
    </EventSection>
  );
}

export default EventList;
