import { createContext } from 'react';

const INITIAL_CONTEXT = {
  events: [],
  setEvents: () => {},
};

const EventsContext = createContext(INITIAL_CONTEXT);

export const EventsProvider = EventsContext.Provider;
export const EventsConsumer = EventsContext.Consumer;

export default EventsContext;
