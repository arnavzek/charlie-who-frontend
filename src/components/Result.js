import React, { useContext, useState, useEffect } from "react";
import Context from "../Context";
import styled from "styled-components";
let Container = styled.div`
  display: flex;
  background: ${({ gradient }) => `linear-gradient(${gradient})`};
  padding: 25px;
  border-radius: 15px;
  font-family: "Sriracha";
  justify-content: center;
  flex-direction: column;
  box-shadow: -10px 10px;
  align-items: center;
`;
let Head = styled.div`
  display: flex;
  background: transparent;
  padding: 0;
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
  color: #fff;
  font-size: 25px;
`;
let Emoji = styled.div``;
let Status = styled.div``;
let Button = styled.button`
  padding: 15px;
  width: 62%;
  border-radius: 15px;
  background: linear-gradient(45deg, #333, #222, #373737);
  border: none;

  color: #fff;
  box-shadow: -10px 10px #111;
`;

function Result({ noStatus }) {
  let { state, dispatch } = useContext(Context);
  const [timer, setTimer] = useState(15);
  window.timer = timer;

  useEffect(onLoad, []);
  if (!state.winningMember && !noStatus) return [];
  let status = "You Lost!";
  let emoji = "😭";
  let gradient = "#FF3C3C, #4D0B0B";
  if (state.winningMember == window.peerID) {
    status = "You WON!";
    emoji = "🎊";
    gradient = "#3455FF, #40C6FF";
  }

  if (noStatus) gradient = "#3455FF, #40C6FF";
  let head = (
    <Head>
      <Emoji>{emoji}</Emoji>
      <Status>{status}</Status>
      <Emoji>{emoji}</Emoji>
    </Head>
  );

  let messageToTheImitator = [];

  if (noStatus == "lost") {
    messageToTheImitator = head;
    gradient = "#FF3C3C, #4D0B0B";
  }

  return (
    <Container gradient={gradient}>
      {noStatus ? messageToTheImitator : head}
      <Button>New game starts in {timer}s</Button>
    </Container>
  );

  function playAgain() {
    dispatch({ type: "UPDATE", field: "gameEnded", value: null });
    dispatch({ type: "UPDATE", field: "winningMember", value: null });
  }

  function onLoad() {
    let interval = setInterval(() => {
      if (window.timer <= 0) {
        clearInterval(interval);
        playAgain();
        return;
      }
      setTimer(window.timer--);
    }, 1000);
  }
}

export default Result;
