import React, { useState } from 'react';

import PageDefault from '../../templates/PageDefault';
import ListEvent from '../../components/EventList';
import Form from '../../components/Form';

import { EventsProvider } from '../../context/EventsContext';

function Home() {
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events')) || []);

  function updateEvents(eventList) {
    localStorage.setItem('events', JSON.stringify(eventList));
    setEvents(eventList);
  }

  return (
    <PageDefault>
      <EventsProvider value={{ events, setEvents: updateEvents }}>
        <Form />
        <ListEvent />
      </EventsProvider>
    </PageDefault>
  );
}

export default Home;
