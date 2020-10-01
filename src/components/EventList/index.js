import React, { useContext } from 'react';
import styled from 'styled-components';

import Event from './Event';

import EventsContext from '../../context/EventsContext';

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
  const { events } = useContext(EventsContext);

  return (
    <EventSection>
      <h2>Events</h2>
      <EventsWrapper>
        {events && events.map((event) => <Event title={event.title} time={event.time} />)}
      </EventsWrapper>
    </EventSection>
  );
}

export default EventList;
