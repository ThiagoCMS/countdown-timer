import React, { useState } from 'react';

import PageDefault from '../../templates/PageDefault';
import ListEvent from '../../components/EventList';
import Form from '../../components/Form';
import Modal from '../../components/Modal';

import { EventsProvider } from '../../context/EventsContext';
import { AlertsProvider } from '../../context/AlertsContext';

function Home() {
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events')) || []);
  const [alerts, setAlerts] = useState(JSON.parse(localStorage.getItem('alerts')) || []);

  function updateEvents(eventList) {
    localStorage.setItem('events', JSON.stringify(eventList));
    setEvents(eventList);
  }

  function updateAlerts(alertList) {
    localStorage.setItem('alerts', JSON.stringify(alertList));
    setAlerts(alertList);
  }

  return (
    <AlertsProvider value={{ alerts, setAlerts: updateAlerts }}>
      <PageDefault>
        <EventsProvider value={{ events, setEvents: updateEvents }}>
          <Form />
          <ListEvent />
        </EventsProvider>
      </PageDefault>
      {alerts && alerts.length > 0 && <Modal />}
    </AlertsProvider>
  );
}

export default Home;
