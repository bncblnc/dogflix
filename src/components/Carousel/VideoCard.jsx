import React from "react";
import styled from "styled-components";

const VideoCard = ({ srcVideo, color }) => {
  const Card = styled.iframe`
  border-radius: 0.5rem;
   border: 0.4rem solid ${color};
   cursor pointer
  `;

  return (
    <Card
      width="432"
      height="248"
      src={srcVideo}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></Card>
  );
};

export default VideoCard;
