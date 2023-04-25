function connectToNewUser(peerID, stream) {
  console.log("calling ", peerID);
  const call = window.myPeer.call(peerID, stream);

  call.on("stream", (userVideoStream) => {
    window.dispatch({
      type: "UPDATE_MEMBERS",
      field: peerID,
      value: {
        stream: userVideoStream,
      },
    });
  });

  call.on("close", () => {
    window.dispatch({
      type: "REMOVE_MEMBER",
      field: peerID,
    });
  });
}

export default connectToNewUser;
