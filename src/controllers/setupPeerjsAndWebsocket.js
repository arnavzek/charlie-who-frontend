import Peer from "peerjs";
import imitatorSelected from "./imitatorSelected";
import { io } from "socket.io-client";

window.socket = io(process.env.REACT_APP_SERVER_URL);
window.peerID = null;

function initiatePeerjsAndWebsocket() {
  // window.myPeer = new Peer(undefined, {
  //   host: process.env.REACT_APP_PEER_JS_SERVER,
  //   port: process.env.REACT_APP_PEER_JS_PORT,
  // });

  window.myPeer = new Peer();

  window.myPeer.on("open", (myID) => {
    window.peerID = myID;
    window.dispatch({ type: "UPDATE", field: "peerID", value: myID });
    window.socket.on("imitator-selected", (imitatorPeerID) => {
      if (imitatorPeerID) imitatorSelected(myID, imitatorPeerID);
    });
  });
}

export default initiatePeerjsAndWebsocket;
