import React from 'react';
import styled from 'styled-components';

import Event from './Event';

const events = [
  {
    title: 'Lançamento do fedora 33',
    time: '2020-10-27 12:03',
  },
];

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
  return (
    <EventSection>
      <h2>Events</h2>
      <EventsWrapper>
        {events.map((event) => <Event title={event.title} time={event.time} />)}
      </EventsWrapper>
    </EventSection>
  );
}

export default EventList;
