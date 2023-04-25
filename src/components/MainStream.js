import React, { useContext, useRef, useEffect } from "react";
import Context from "../Context";
import styled from "styled-components";
import Video from "./Video";
import imageLoading from "../assets/loading.gif";
import Result from "./Result";

let Loading = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

let Container = styled.div`
  height: 250px;
  width: 100%;
  box-sizing: border-box;
  border: 5px solid;
  border-radius: 10px;
  box-shadow: -6px 7px 0px rgba(0, 0, 0, 1);
  overflow: hidden;
  ${(props) => {
    if (!props.iAmTheimitator) return "";
    return `
      width:160px;
      height:110px;
      box-shadow:none;
      border-radius:10px 10px 10px;
    `;
  }}
`;

function MainStream({ iAmTheimitator }) {
  let { state, dispatch } = useContext(Context);

  if (!state.imitator) return [];
  if (state.winningMember) return <Result></Result>;
  if (state.gameEnded) return <Result noStatus={state.gameEnded}></Result>;
  let stream = window.myVideoStream;

  let loaded = true;

  if (!iAmTheimitator) {
    if (state.imitator) {
      if (state.members[state.imitator]) {
        stream = state.members[state.imitator].stream;
      } else {
        loaded = false;
      }
    } else {
      loaded = false;
    }
    console.log("streaming the other user");
  } else {
  }

  let element = loaded ? (
    <Video stream={stream} muted={iAmTheimitator ? true : false}></Video>
  ) : (
    <Loading src={imageLoading} />
  );

  //remove imitator from member
  return <Container iAmTheimitator={iAmTheimitator}>{element}</Container>;
}

export default MainStream;
