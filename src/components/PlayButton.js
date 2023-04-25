import React, { useContext } from "react";
import Context from "../Context";
import styled from "styled-components";
import play from "../controllers/play";
import { Link } from "react-router-dom";

let Container = styled.div`
  background: ${(props) => props.color};
  border: 5px solid;
  box-shadow: -10px 10px 0 0 rgb(0 0 0 / 30%);
  transform: skew(20deg);
  width: 90vw;
  margin-right: -58px;
  color: #111;
  padding: 0;
  position: relative;
  text-decoration: none;
  margin-bottom: 30px;

  @media (min-width: 800px) {
    width: 400px;
  }
`;

let InverseSkew = styled.div`
  transform: skew(-20deg);
`;

let MainText = styled.div`
  color: #fff;
  padding: 10px 40px;
`;

let Graphics = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 35%;
  transform: skew(20deg);
`;

let Big = styled.div`
  font-size: 40px;
  position: absolute;
  left: -8px;
  top: 10px;
`;

let Medium = styled.div`
  font-size: 25px;
  position: absolute;
  left: 50px;
  top: 50px;
`;

let Small = styled.div`
  font-size: 15px;
  position: absolute;
  left: 50px;
  top: 10px;
`;

let BigText = styled.div`
  font-size: 40px;
  font-family: roboto;
  font-weight: 900;
`;

let SmallText = styled.div`
  font-size: 15px;
  font-family: Sriracha;
  font-weight: 100;
`;

function PlayButton({ roomType, emoji, mainText, color }) {
  let { state, dispatch } = useContext(Context);

  return (
    <Link to={"/create-room/" + roomType}>
      <Container color={color}>
        <InverseSkew>
          <MainText>
            <BigText> PLAY</BigText> <SmallText>{mainText} </SmallText>
          </MainText>

          <Graphics>
            <InverseSkew>
              <Big>{emoji}</Big>
              <Medium>{emoji}</Medium>
              <Small>{emoji}</Small>
            </InverseSkew>
          </Graphics>
        </InverseSkew>
      </Container>
    </Link>
  );
}

export default PlayButton;
