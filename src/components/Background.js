import React, { useEffect } from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/background.png";
// import { useAlert } from "react-alert";
import {
  BrowserView,
  MobileView,
  isSafari,
  isChrome,
  isBrowser,
  isMobile,
  isIOS,
  isChromium,
} from "react-device-detect";

let Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

let Error = styled.h1`
  margin: 25px;
  color: tomato;
`;
let BackgroundOverlay = styled.div`
  position: fixed;
  height: 100vh;
  background: ${(props) =>
    props.mainScreen
      ? "linear-gradient(97deg,#8E2DE2,#4A00E0)"
      : "linear-gradient(#EFC02F,#FBE194,#CE9D09)"};
  top: 0;
  left: 0;
  z-index: -2;
  width: 100vw;
  box-sizing: border-box;
`;

let Image = styled.img`
  position: fixed;
  opacity: 0.7;
  z-index: -1;
  height: 100vh;
  object-fit: cover;
  width: 100vw;
  box-sizing: border-box;
`;

let Content = styled.div`
  padding: 0 25px;
  overflow: hidden;
  overflow-y: scroll;
  height: 100vh;
  box-sizing: border-box;
  @media (min-width: 800px) {
    ${(props) => {
      if (props.mainScreen) return "";

      return `
      margin: 5vh 31vw;
      height: 90vh;
      border-radius: 1vw;
      border: 5px solid;
      overflow: hidden;
      overflow-y: scroll;
      `;
    }}
  }
`;

function Background({ children, mainScreen }) {
  window.reactAlert = console.log;
  useEffect(onload, []);

  if (isIOS) {
    if (!isSafari)
      return <Error>This browser is not supported, please use Safari</Error>;
  } else {
    if (!isChrome && !isChromium) {
      return <Error>This browser is not supported, please use Chrome</Error>;
    }
  }

  return (
    <Container>
      <BackgroundOverlay mainScreen={mainScreen} />
      <Image src={BackgroundImage} />
      <Content alt="body" mainScreen={mainScreen}>
        {" "}
        {children}{" "}
      </Content>
    </Container>
  );

  function causeError() {
    throw Error("hey");
  }

  function onload() {
    window.onerror = function (errorMessage, errorUrl, errorLine) {
      window.reactAlert.show(`
      errorMessage:${errorMessage}
      errorLine:${errorLine}`);
      return true;
    };

    // setTimeout(causeError, 1000);
  }
}

export default Background;
