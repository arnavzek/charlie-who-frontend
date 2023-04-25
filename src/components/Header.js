import React, { useContext, useState } from "react";
import Context from "../Context";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";
import smallLogo from "../assets/smallLogo.png";
import { Link } from "react-router-dom";
import leaveRoom from "../controllers/leaveRoom";
import ReactOverlay from "./ReactOverlay";
import Menu from "./Menu";

let Container = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
`;
let Logo = styled.div`
  display: flex;
  flex-direction: row;
`;
let Image = styled.img`
  height: 40px;
  width: 40px;
  filter: drop-shadow(-6px 7px 0px rgba(0, 0, 0, 0.2));
`;
let LogoText = styled.div`
  font-family: Sriracha;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: 15px;
  opacity: 0.7;
  color: #000;
  font-size: 20px;
  height: 40px;
  font-weight: 900;
`;
let MenuBox = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
`;

function Header() {
  let { state, dispatch } = useContext(Context);

  let [dialogData, setDialogData] = useState(null);

  return (
    <Container key={1}>
      <Link to="/" key={2}>
        <Logo onClick={leaveRoom} key={3}>
          <Image key={4} src={smallLogo} />
          <LogoText key={5}> Charlie Who? </LogoText>
        </Logo>
      </Link>

      <MenuBox key={6} onClick={showMenu}>
        <IconContext.Provider
          key={7}
          value={{ color: "rgba(0,0,0,0.3)", size: "25px" }}
        >
          <FiMenu key={8} />
        </IconContext.Provider>
      </MenuBox>
      <ReactOverlay
        key={9}
        data={dialogData}
        setData={setDialogData}
      ></ReactOverlay>
    </Container>
  );

  function showMenu() {
    setDialogData({ message: "Menu", children: <Menu></Menu> });
  }
}

export default Header;
