import React, { useEffect, useRef } from "react";
import styled from "styled-components";

let VideoCircle = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

function Video({ stream, muted, alt }) {
  if (!muted) muted = false;
  const refVideo = useRef(null);

  useEffect(onLoad, [stream]);
  return (
    <VideoCircle
      alt={alt}
      autoPlay={true}
      ref={refVideo}
      muted={muted}
    ></VideoCircle>
  );

  function onLoad() {
    if (!refVideo.current) return;
    refVideo.current.srcObject = stream;
  }
}

export default Video;
