import { createContext } from 'react';

const INITIAL_CONTEXT = {
  alerts: [],
  setAlerts: () => {},
};

const AlertsContext = createContext(INITIAL_CONTEXT);

export const AlertsProvider = AlertsContext.Provider;
export const AlertsConsumer = AlertsContext.Consumer;

export default AlertsContext;
