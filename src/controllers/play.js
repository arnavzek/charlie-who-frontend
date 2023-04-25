import setupAntena from "./setupAntena";

function play(roomID) {
  let interval = setInterval(checker, 500);
  function checker() {
    if (window.peerID) {
      clearInterval(interval);
      setupAntena(roomID);
    }
  }
}

export default play;
