import React, { useContext } from 'react';
import styled from 'styled-components';

import AlertsContext from '../../context/AlertsContext';

const ModalWrapper = styled.div`
  align-items: center;
  background-color: hsla(0, 0%, 0%, .3);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
`;

const ModalDiv = styled.div`
  background-color: white;
  border: 2px solid hsla(0, 0%, 13%, .4);
  border-radius: 15px;
  height: 300px;
  max-width: 90%;
  padding: 16px;
  position: relative;
  width: 500px;
`;

const ModalTitle = styled.h3`
  font-size: 1.5em;
`;

const ModalClose = styled.span`
  align-items: center;
  background-color: white;
  border: 2px solid hsla(0, 0%, 13%, .4);
  border-radius: 50%;
  display: flex;
  height: 48px;
  justify-content: center;
  position: absolute;
  right: -16px;
  top: -16px;
  width: 48px;
`;

const AlertList = styled.ul`
  list-style-type: none;
  padding: 8px;
`;

function Modal() {
  const { alerts, setAlerts } = useContext(AlertsContext);

  function cleanAlerts(event) {
    if (event.target.classList.contains('close')) {
      setAlerts([]);
    }
  }

  return (
    <ModalWrapper onClick={cleanAlerts} className="close">
      <ModalDiv>
        <ModalTitle>Alerts</ModalTitle>
        <AlertList>
          {alerts && alerts.map((alert) => <li>{alert}</li>)}
        </AlertList>
        <ModalClose className="close"><p className="close">X</p></ModalClose>
      </ModalDiv>
    </ModalWrapper>
  );
}

export default Modal;
