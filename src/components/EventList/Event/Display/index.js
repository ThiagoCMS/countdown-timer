import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Counter from './Counter';

const DisplayWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin-top: 4px;
`;

function Display({
  days, hours, minutes, seconds,
}) {
  return (
    <DisplayWrapper>
      <Counter time={days} title="days" />
      <Counter time={hours} title="hours" />
      <Counter time={minutes} title="minutes" />
      <Counter time={seconds} title="seconds" />
    </DisplayWrapper>
  );
}

Display.propTypes = {
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

export default Display;
