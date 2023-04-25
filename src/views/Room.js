import React, { useContext, useEffect } from "react";
import Context from "../Context";
import styled from "styled-components";
import Background from "../components/Background";
import Header from "../components/Header";
import MovieToExpress from "../components/movieToExpress";
import MainStream from "../components/MainStream";
import Members from "../components/Members";
import LoadingMessage from "../components/LoadingMessage";
import CopyButton from "../components/CopyButton";
import play from "../controllers/play";
import { useParams } from "react-router-dom";

let Container = styled.div`
  display: flex;

  //align-items: center;
  flex-direction: column;
`;

function Room() {
  let { state, dispatch } = useContext(Context);
  let { roomID, category } = useParams();
  window.category = category;

  useEffect(onLoad, []);
  let iAmTheimitator = false;
  if (state.imitator && window.peerID) {
    if (state.imitator === window.peerID) {
      iAmTheimitator = true;
    }
  }

  let data = [];

  data.push(
    <MovieToExpress key={1} iAmTheimitator={iAmTheimitator}></MovieToExpress>
  );
  data.push(<MainStream key={2} iAmTheimitator={iAmTheimitator} />);
  data.push(<Members key={3} iAmTheimitator={iAmTheimitator} />);

  let loadingData = {};
  let loadingMessage = (
    <LoadingMessage key={4} data={loadingData}></LoadingMessage>
  );

  if (!Object.keys(state.members).length) {
    loadingData.h3 = "Waiting for your friend to connect";
    loadingData.h6 = <CopyButton category={category} roomID={roomID} />;
    data = loadingMessage;
  }

  return (
    <Background mainScreen={false}>
      <Header />
      <Container>{data}</Container>
    </Background>
  );

  function onLoad() {
    window.roomID = roomID;
    play(roomID);
  }
}

export default Room;
