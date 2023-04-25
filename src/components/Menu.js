import React, { useContext } from "react";
import Context from "../Context";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import leaveRoom from "../controllers/leaveRoom";

let Container = styled.div``;
let Item = styled.div`
  display: flex;
  border: 2px solid;
  padding: 10px;
  cursor: pointer;
  color: #111;
  width: 32%;
  margin: 0;
  border-radius: 10px;
  justify-content: center;
`;

function Menu() {
  let { state, dispatch } = useContext(Context);
  const navigate = useNavigate();
  return (
    <Container>
      <Item onClick={goToAbout}>About</Item>
    </Container>
  );

  function goToAbout() {
    navigate("/about");
    leaveRoom();
  }
}

export default Menu;
