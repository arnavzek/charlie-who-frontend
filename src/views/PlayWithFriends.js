import React, { useContext } from "react";
import Context from "../Context";
import styled from "styled-components";
import Background from "../components/Background";
import Header from "../components/Header";
let Padding = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: center;
  gap: 25px;
  font-family: Sriracha;
`;
let Join = styled.div`
  display: flex;

  flex-direction: row;
  gap: 10px;
`;
let InputRoomCode = styled.input`
  border: 5px solid #111;
  background: transparent;
  flex: 1;
  padding: 10px 25px;
  width: 50%;
  font-family: Sriracha;
  font-size: 15px;
  display: flex;
  color: #111;
`;
let Button = styled.button`
  background: #111;
  border: none;
  font-family: Sriracha;
  cursor: pointer;
  padding: 15px 30px;
  font-size: 18px;
  color: #f8d379;
`;
let Or = styled.div`
  width: 100%;
  opacity: 0.5;
  justify-content: center;
  flex-direction: row;
  display: flex;
`;

function PlayWithFriends() {
  let { state, dispatch } = useContext(Context);

  return (
    <Background mainScreen={false}>
      <Header />
      <Padding>
        <Join>
          <InputRoomCode placeholder="Room Code" />
          <Button>JOIN </Button>
        </Join>
        <Or>OR</Or>
        <Button>Create private room</Button>
      </Padding>
    </Background>
  );
}

export default PlayWithFriends;
