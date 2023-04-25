import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Header from "../components/Header";

let Container = styled.div`
  display: flex;

  font-family: "Roboto Slab";
  //align-items: center;
  flex-direction: column;
  gap: 25px;
`;

let Description = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

let Signature = styled.div`
  font-weight: 900;
`;

let A = styled.a`
  font-weight: 900;
  text-decoration: underline;
`;

function Home() {
  return (
    <Background mainScreen={false}>
      <Header></Header>
      <Container>
        <Description>
          Sometimes life feels like a chore. As we grow old, the child inside us
          gets more and more buried. "Dumb charades", is a game that brings out
          that child & "Charlie Who?" is just an online version of it.
        </Description>
        <Signature>
          Arnav Singh, the passionate creator of charlie who.
        </Signature>
        <A target="_blank" href="https://arnav.upon.one">
          https://arnav.upon.one
        </A>
      </Container>
    </Background>
  );
}

export default Home;
