import React, { useContext } from "react";
import Context from "../Context";
import styled from "styled-components";
import Video from "./Video";
let Container = styled.div``;
let Heading = styled.h3`
  margin-top: 50px;
  padding: 0 0;
  width: 100%;
  font-size: 12px;
  opacity: 0.5;
  box-sizing: border-box;
  font-family: sriracha;
`;
let Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  height: 80vw;
  align-items: space-between;
`;

let VideoCircle = styled.div`
  height: 110px;
  width: 110px;
  object-fit: cover;
  overflow: hidden;
  border: 5px solid #111;
  box-shadow: -6px 7px 0px rgb(0 0 0 / 94%);
  border-radius: 20px;

  cursor: ${(iAmTheimitator) => (iAmTheimitator ? "pointer" : "unset")};
  ::after {
    content: ${(props) => (props.you ? "you" : "")};
  }
`;

function Members({ iAmTheimitator }) {
  let { state, dispatch } = useContext(Context);

  let items = [];

  for (let key in state.members) {
    let data = state.members[key];
    if (state.imitator) {
      if (key == state.imitator && !state.winningMember && !state.gameEnded) {
        continue;
      }
    }

    function clickEvent() {
      declareWinner(key);
    }
    items.push(
      <VideoCircle
        iAmTheimitator={iAmTheimitator}
        onClick={clickEvent}
        key={key}
      >
        <Video stream={data.stream}></Video>
      </VideoCircle>
    );
  }

  let myself = (
    <VideoCircle you={true} key={"me"}>
      <Video
        alt="me"
        key={"me"}
        muted={true}
        stream={window.myVideoStream}
      ></Video>
    </VideoCircle>
  );
  if (!iAmTheimitator || state.gameEnded || state.winningMember) {
    items.push(myself);
  }

  let heading = "Competitors";
  if (iAmTheimitator && !state.winningMember && !state.gameEnded)
    heading = " Click on the winner, when you find one. ";

  return (
    <Container>
      <Heading>{heading}</Heading>
      <Content>{items}</Content>
    </Container>
  );

  function declareWinner(peerID) {
    if (state.imitator !== window.peerID) return;
    window.dispatch({
      type: "UPDATE",
      field: "gameEnded",
      value: true,
    });
    window.socket.emit("declare-winner", peerID);
  }
}

export default Members;
