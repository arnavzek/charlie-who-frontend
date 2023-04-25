import React, { useContext, useState } from "react";
import Context from "../Context";
import styled from "styled-components";
import Background from "../components/Background";
import logo from "../assets/logo512.png";
import PlayButton from "../components/PlayButton";
import ReactOverlay from "../components/ReactOverlay";
import Menu from "../components/Menu";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";

let Logo = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
  }
`;
let LogoImage = styled.img`
  width: 300px;
  height: 300px;
  margin-left: -30px;
  margin-top: -40px;
  filter: drop-shadow(-20px 15px 0px rgba(0, 0, 0, 0.3));
  @media (min-width: 800px) {
    margin: 0;
  }
`;

let LogoText = styled.div`
  font-family: Sriracha;
  width: 76vw;
  margin-left: 0;
  display: flex;
  margin-top: 10px;
  flex-direction: column;

  align-items: flex-start;
  margin-left: 15px;
  justify-content: flex-start;
  @media (min-width: 800px) {
    justify-content: center;
    margin: 0;
    align-items: center;
    margin-top: 25px;
  }
`;
let Tagline = styled.div`
  font-size: 19px;
  color: #fff;
  margin-top: -10px;
  opacity: 0.5;
  @media (min-width: 800px) {
  }
`;
let AppName = styled.div`
  color: #fff;
  font-size: 35px;
  text-shadow: 2px 2px #ffffff52;
  @media (min-width: 800px) {
  }
`;
let Buttons = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  @media (min-width: 800px) {
    align-items: center;
    margin-top: 100px;
  }
`;

let MenuBox = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 15px;
  flex-direction: column;
  @media (min-width: 800px) {
  }
`;

function Home() {
  let [dialogData, setDialogData] = useState(null);
  let { state, dispatch } = useContext(Context);
  return (
    <Background mainScreen={true}>
      <Logo>
        <LogoImage src={logo} />
        <LogoText>
          <AppName>Charlie Who?</AppName>
          <Tagline>Online Dumb charades</Tagline>
        </LogoText>
      </Logo>
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

      <Buttons>
        <PlayButton
          mainText={"with friends"}
          color={`linear-gradient(45deg,#8E2DE2,#4A00E0)`}
          emoji={"🤠"}
          roomType={"private"}
        />
      </Buttons>
    </Background>
  );

  function showMenu() {
    setDialogData({ message: "Menu", children: <Menu></Menu> });
  }
}

/*
        <PlayButton
          mainText={"With Friends"}
          color={"linear-gradient(45deg, #F0CB35,#C02425 )"}
          emoji={"💛"}
          roomType="private"
        />

*/

export default Home;
