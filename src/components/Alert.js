import React, { useEffect, useState } from "react";
import styled from "styled-components";

let Container = styled.div`
  position: absolute;
  width: 62vw;
  top: 10px;
  display: flex;
  flex-direction: row;
  color: #111;
  left: 19vw;
  z-index: 100;
  border-radius: 5px;
  transition: 0.5s ease-in-out;
  padding: 10px 25px;
  justify-content: space-between;
  font-family: roboto;
  font-size: 18px;
  font-weight: 300;
  box-shadow: -10px 10px 5px 2px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  box-sizing: border-box;
  transform: ${(props) => (props.visible ? "scale(1)" : "scale(0)")};
  @media (min-width: 800px) {
    width: 38vw;
    left: 31vw;
  }
`;

let Message = styled.div`
  max-width: 80%;
`;

let Close = styled.div``;
function Alert({ message, setMessage, timeOut }) {
  useEffect(onload, [message]);
  let [visible, setVisible] = useState(false);

  if (!timeOut) timeOut = 5;
  timeOut = timeOut * 1000;
  if (!message) return [];
  return (
    <Container onClick={makeInvisible} visible={visible}>
      <Message>{message}</Message>
      <Close>✕</Close>
    </Container>
  );

  function makeInvisible() {
    setVisible(false);
  }

  function remove() {
    setMessage(null);
  }
  function onload() {
    if (message) {
      setVisible(true);
      setTimeout(makeInvisible, timeOut);
      setTimeout(remove, timeOut + 500);
    }
  }
}

export default Alert;
