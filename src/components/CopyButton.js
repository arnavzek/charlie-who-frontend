import React, { useContext, useState } from "react";
import Context from "../Context";
import styled from "styled-components";
import copy from "copy-to-clipboard";
let Button = styled.button`
  border: none;
  padding: 10px 0px;
  color: rgb(249, 221, 138);
  font-family: Sriracha;
  border: none;
  font-size: 15px;
  cursor: pointer;
  background: rgb(17 17 17 / 82%);
  width: 100%;
  outline: none;
  box-shadow: 0px 6px 0 0 #000000eb;
  font-weight: 100;
`;

function CopyButton({ roomID, category }) {
  let { state, dispatch } = useContext(Context);
  let [copyState, setCopyState] = useState(false);
  return (
    <Button onClick={copyRoomLink}>
      {copyState
        ? "Copied to clipboard"
        : "Copy room link & share it with a friend"}
    </Button>
  );

  function copyRoomLink() {
    setCopyState(true);
    copy(window.location.origin + "/room/" + roomID + "/" + category);
  }
}

export default CopyButton;
