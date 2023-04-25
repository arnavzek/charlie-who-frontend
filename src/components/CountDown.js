import React, { useContext, useState, useEffect } from "react";
import Context from "../Context";
import styled from "styled-components";
let Container = styled.div``;

function CountDown({ noStatus }) {
  let { state, dispatch } = useContext(Context);
  const [timer, setTimer] = useState(60);
  window.timer = timer;

  useEffect(onLoad, []);

  let bold = true;
  if (state.immitator == window.peerID) {
    bold = false;
  }

  return <Container bold={bold}>You have {timer} Seconds.</Container>;

  function everyoneLost() {
    if (state.imitator !== window.peerID) return;
    window.dispatch({
      type: "UPDATE",
      field: "gameEnded",
      value: "lost",
    });
    window.socket.emit("declare-winner", "no-one");
  }

  function onLoad() {
    let interval = setInterval(() => {
      if (window.timer <= 0) {
        clearInterval(interval);
        everyoneLost();
        return;
      }
      setTimer(window.timer--);
    }, 1000);
  }
}

export default CountDown;
