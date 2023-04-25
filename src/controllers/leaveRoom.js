function leaveRoom() {
  if (!window.roomID) return;
  window.roomID = null;
  window.socket.emit("leave-room");
  window.dispatch({ type: "RESET" });
}

export default leaveRoom;
