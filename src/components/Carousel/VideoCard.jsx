import React from "react";
import styled from "styled-components";

const VideoCard = ({ idVideo, color }) => {
  const Card = styled.img`
    width: 432px;
    border-radius: 0.5rem;
    border: 0.4rem solid ${color};
    cursor pointer
  `;

  const srcImg = `https://img.youtube.com/vi/${idVideo}/0.jpg`;

  return <Card src={srcImg} />;
};

export default VideoCard;
