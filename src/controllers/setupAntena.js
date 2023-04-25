import connectToNewUser from "./connectToNewUser";
function setupAntena(roomID) {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then((stream) => {
      window.socket.emit("join-room", roomID, window.peerID);
      window.myVideoStream = stream;

      window.myPeer.on("call", (call) => {
        call.answer(stream);
        call.on("stream", (userVideoStream) => {
          window.dispatch({
            type: "UPDATE_MEMBERS",
            field: call.peer,
            value: {
              stream: userVideoStream,
            },
          });
          console.log("received a call", call.peer, userVideoStream);
        });
      });

      window.socket.on("user-connected", (peerID) => {
        connectToNewUser(peerID, stream);
      });

      window.socket.on("imitator-disconnected", () => {
        window.reactAlert.show("Imitator disconnected.");
      });

      window.socket.on("user-disconnected", (peerID) => {
        window.dispatch({
          type: "REMOVE_MEMBER",
          field: peerID,
        });
      });

      window.socket.on("winner-declared", (peerID) => {
        window.dispatch({
          type: "UPDATE",
          field: "winningMember",
          value: peerID,
        });
      });

      window.socket.on("error-message", (error) => {
        console.warn("socket error", error);
      });
    });
}

export default setupAntena;
