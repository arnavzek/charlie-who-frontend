import React from "react";
import styled from "styled-components";

let ContentContainer = styled.div`
  position: absolute;
  left: 31%;
  width: 38%;
  z-index: 57;
  top: 50px;
  border-radius: 5px;
  max-height: 80vh;
  color: ${(props) => (props.darkMode ? "#fff" : "#222")};
  padding: 0px 25px;
  background-color: ${(props) => (props.darkMode ? "#222" : "#fff")};
  padding-bottom: 25px;
  box-sizing: border-box;
  @media (max-width: 800px) {
    width: 90%;
    left: 5%;
  }
`;

let AbsoluteDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 55;
  height: 100vh;
  width: 100vw;
`;

let H1 = styled.h1`
  margin: 0;
  padding: 0;
  text-align: left;
`;

let Top = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  margin: 22px 0;
  justify-content: space-between;
`;

let CloseButton = styled.button`
  position: absolute;
  right: 0;
  font-size: 35px;
  font-family: roboto;
  font-weight: 100;
  color: #555;
  background: transparent;
  border: none;
  outline: none;
  top: 0;
  padding: 0;
  cursor: pointer;
  line-height: 0.7;
`;

let OverlayLayer = styled.div`
  height: 100%;
  width: 100%;
  background: #000000c9;
  left: 0;
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
`;

function Overlay(props) {
  if (!props.data) return [];

  console.log(props.data.children);
  return (
    <AbsoluteDiv>
      <ContentContainer darkMode={props.darkMode}>
        <Top>
          <H1>{props.data.message}</H1>
          <CloseButton
            onClick={() => {
              props.setData(null);
            }}
          >
            ×
          </CloseButton>
        </Top>
        {props.data.children}
      </ContentContainer>
      <OverlayLayer
        onClick={() => {
          props.setData(null);
        }}
      />
    </AbsoluteDiv>
  );
}

export default Overlay;
