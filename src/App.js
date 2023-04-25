import "./App.css";
import Alert from "./components/Alert";

import React, { useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
import Context from "./Context";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Room from "./views/Room";
import Home from "./views/Home";
import About from "./views/About";
import setupPeerjsAndWebsocket from "./controllers/setupPeerjsAndWebsocket";
import PlayWithFriends from "./views/PlayWithFriends";
import CreateRoom from "./views/CreateRoom";

// import { transitions, positions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
// import * as Sentry from "@sentry/browser";
// import { Integrations } from "@sentry/tracing";

// Sentry.init({
//   dsn: "https://fd3179a1246241fc8fd6afb58db23cdc@o539960.ingest.sentry.io/5657687",
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1.0,
// });

setupPeerjsAndWebsocket();
window.defaultState = {
  roomID: null,
  winningMember: null,
  imitator: null,
  members: {},
  gameEnded: false,
  movieToExpress: null,
};

// const options = {
//   // you can also just use 'bottom center'
//   position: positions.TOP_CENTER,
//   timeout: 5000,
//   offset: "30px",
//   // you can also just use 'scale'
//   transition: transitions.SCALE,
// };

function App() {
  const [state, dispatch] = useReducer(reducer, window.defaultState);

  window.state = state;
  window.dispatch = dispatch;

  return (
    <Context.Provider value={{ state, dispatch }}>
      {/* <AlertProvider template={AlertTemplate} {...options}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/create-room/:roomType" element={<CreateRoom />}></Route>
          <Route path="/room/:roomID/:category" element={<Room />}></Route>
          <Route
            path="/play-with-friends"
            element={<PlayWithFriends />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      {/* </AlertProvider> */}
    </Context.Provider>
  );
}

export default App;
