import React, { useContext } from "react";
import Context from "../Context";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";
import smallLogo from "../assets/smallLogo.png";
import { Link } from "react-router-dom";
let H1 = styled.h1`
  font-family: Sriracha;
  margin-bottom: 0;
`;

let H5 = styled.h5`
  font-family: Sriracha;
  margin-top: 0;
`;

let Container = styled.div``;

function Header({ data }) {
  let { state, dispatch } = useContext(Context);

  let items = [];

  for (let key in data) {
    if (key === "h1") {
      items.push(<H1> {data[key]} </H1>);
    } else {
      items.push(<H5> {data[key]} </H5>);
    }
  }

  return <Container>{items}</Container>;
}

export default Header;
