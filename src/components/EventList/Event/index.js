import React, {
  useEffect, useRef, useState, useCallback,
} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Display from './Display';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const EventWrapper = styled.div`
  border: 1px solid hsla(0, 0%, 13%, .4);
  border-radius: 10px;
  margin-top: 8px;
  max-width: 400px;
  padding: 8px;
  margin: 4px 4px 4px 4px;
  width: 100%;
`;

function Event({ title, time, removeEventFn }) {
  const [timeToEvent, setTimeToEvent] = useState(undefined);
  const intervalRef = useRef(null);

  const calculateTime = useCallback((dateTo, dateNow) => {
    let diff = dateTo.getTime() - dateNow.getTime();
    if (diff <= 0) {
      return removeEventFn({ title, time });
    }
    const days = Math.floor(diff / DAY);
    diff -= (days * DAY);
    const hours = Math.floor(diff / HOUR);
    diff -= (hours * HOUR);
    const minutes = Math.floor(diff / MINUTE);
    diff -= (minutes * MINUTE);
    const seconds = Math.floor(diff / SECOND);
    return setTimeToEvent({
      days, hours, minutes, seconds,
    });
  }, [removeEventFn, time, title]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      calculateTime(new Date(time), new Date());
    }, 1000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [time, calculateTime]);

  return (
    <>
      {timeToEvent
      && (
      <EventWrapper>
        <h3>{title}</h3>
        {timeToEvent
        && (
        <Display
          days={timeToEvent.days}
          hours={timeToEvent.hours}
          minutes={timeToEvent.minutes}
          seconds={timeToEvent.seconds}
        />
        )}
      </EventWrapper>
      )}
    </>
  );
}

Event.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  removeEventFn: PropTypes.func.isRequired,
};

export default Event;
