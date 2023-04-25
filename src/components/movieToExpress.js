import React, { useContext } from "react";
import Context from "../Context";
import styled from "styled-components";
import imageLoading from "../assets/loading.gif";
import findMovie from "../controllers/findMovie";
import CountDown from "./CountDown";

let Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-bottom: 30px;
`;

let Poster = styled.img`
  height: 110px;
  width: auto;
  border-radius: 5px;
  max-width: 100px;
  object-fit: contain;
`;

let TextContent = styled.div``;

let ChangeButton = styled.button`
  margin-top: 5px;
  opacity: 0.5;
  background: transparent;
  border-radius: 5px;
  border: 2px solid;
  cursor: pointer;
  font-family: Sriracha;
`;

let BigText = styled.h2`
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  font-weight: 900;
  font-size: 18px;
`;

let BiggerText = styled.h2`
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  font-size: 30px;
`;

let BiggerTextStyled = styled.div`
  font-family: Sriracha;
  font-size: 20px;
  margin-bottom: -8px;
`;

let SmallText = styled.div`
  font-family: roboto;
  font-weight: 900;
  font-size: 16px;
  margin-bottom: 10px;
`;

let MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

let ExplainToCompetitors = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

let Note = styled.div`
  padding: 15px 0;
  width: 100%;
  font-size: 12px;
  opacity: 0.5;
  box-sizing: border-box;
  font-family: sriracha;
`;

function MovieToExpress({ iAmTheimitator, category }) {
  let { state, dispatch } = useContext(Context);

  if (!state.imitator) return [];
  if (state.winningMember) return [];
  if (state.gameEnded) return [];
  let movieName = "Loading...";

  let poster = imageLoading;
  if (state.movieToExpress) {
    poster = state.movieToExpress.poster;
    movieName = state.movieToExpress.movieName;
  }

  let extra = <CountDown></CountDown>;

  if (!iAmTheimitator)
    return (
      <ExplainToCompetitors>
        <MessageContainer>
          <BiggerText key={1}>Guess</BiggerText>
          <BiggerTextStyled key={2}> the movie</BiggerTextStyled>
        </MessageContainer>
        {extra}
      </ExplainToCompetitors>
    );

  return (
    <div>
      <Note key="note">
        Express the following movie without using words. {extra}
      </Note>
      <Container>
        <Poster src={poster} />
        <TextContent>
          <SmallText key={2}>{movieName}</SmallText>
          <ChangeButton
            key={3}
            onClick={() => {
              findMovie(category);
            }}
          >
            I have not see this movie
          </ChangeButton>
        </TextContent>
      </Container>
    </div>
  );
}

export default MovieToExpress;
