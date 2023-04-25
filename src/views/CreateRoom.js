import React, { useContext, useEffect, useState } from "react";
import Context from "../Context";
import styled from "styled-components";
import Background from "../components/Background";
import { useNavigate, useParams } from "react-router-dom";
import LoadingMessage from "../components/LoadingMessage";
import Header from "../components/Header";

let Container = styled.div`
  display: flex;

  //align-items: center;
  flex-direction: column;
`;

let CategoryButton = styled.button`
  margin-bottom: 25px;
  padding: 25px;
  border-radius: 15px;
  outline: none;
  font-family: "Sriracha";
  border: none;
  background: #272222;
  cursor: pointer;
  font-weight: 100;
  font-size: 24px;
  color: #fff;
  font-weight: 900;
  box-shadow: 0px 8px 0 0 #000;
`;

function Home() {
  const navigate = useNavigate();
  let { state, dispatch } = useContext(Context);
  let { roomType, category } = useParams();
  let [roomID, setRoomID] = useState(null);
  useEffect(() => {
    createRoom();
  }, []);
  let loadingData = {};

  loadingData.h1 = "connecting to a room";

  let buttons = [];
  buttons.push(
    <LoadingMessage
      key={4}
      data={{ h2: "Select your favorite category." }}
    ></LoadingMessage>
  );
  buttons.push(getButton("Superheroes"));
  buttons.push(getButton("Anime"));
  buttons.push(getButton("Animated"));
  buttons.push(getButton("Hollywood"));
  buttons.push(getButton("Bollywood"));

  let data = <LoadingMessage key={4} data={loadingData}></LoadingMessage>;
  if (roomID) data = buttons;

  return (
    <Background mainScreen={false}>
      <Header />
      <Container>{data}</Container>
    </Background>
  );

  function play(category) {
    navigate("/room/" + roomID + "/" + category);
  }

  function getButton(type) {
    return (
      <CategoryButton
        key={type}
        onClick={() => {
          play(type.toLowerCase());
        }}
      >
        {type}
      </CategoryButton>
    );
  }

  async function createRoom() {
    let serverURI = process.env.REACT_APP_SERVER_URL;

    let fetchedData = await fetch(
      `${serverURI}/api/v1/get-room-id/?roomType=${roomType}&category=${category}`
    );
    let jsonData = await fetchedData.json();
    if (jsonData.error) return window.reactAlert.show(jsonData.error);
    setRoomID(jsonData.roomID);

    return () => {};
  }
}

export default Home;
