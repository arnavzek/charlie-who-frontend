import findMovie from "./findMovie";

function imitatorSelected(myID, imitatorPeerID) {
  if (myID === imitatorPeerID) findMovie();
  window.dispatch({
    type: "UPDATE",
    field: "imitator",
    value: imitatorPeerID,
  });
}

export default imitatorSelected;
