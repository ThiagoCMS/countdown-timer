import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CounterWrapper = styled.div`
  align-items: center;
  border: 1px solid hsla(0, 0%, 13%, .4);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  width: 80px;
  overflow: hidden;

  @media(max-width: 360px) {
    height: 60px;
    width: 60px;
  }
`;

const CounterNumber = styled.h3`
  font-size: 1.5em;
  @media(max-width: 360px) {
    font-size: 1.2em;
  }
`;

const CounterTitle = styled.span`
  font-weight: 500;
  @media(max-width: 360px) {
    font-size: .8em;
  }
`;

function Counter({ time, title }) {
  return (
    <CounterWrapper>
      <CounterNumber>{time}</CounterNumber>
      <CounterTitle>{title}</CounterTitle>
    </CounterWrapper>
  );
}

Counter.propTypes = {
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Counter;
