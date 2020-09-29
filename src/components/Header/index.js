import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  align-items: center;
  box-shadow: -1px 0 5px hsla(0, 0%, 13%, .5);
  display: flex;
  flex-direction: row;
  height: 48px;
  justify-content: flex-start;
  padding: 16px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2em;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>Countdown Timer</Title>
    </HeaderWrapper>
  );
}

export default Header;
