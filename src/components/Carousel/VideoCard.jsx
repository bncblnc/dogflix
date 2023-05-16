import React from "react";
import styled from "styled-components";

const Card = styled.img`
width: 432px;
height: 246px;
border-radius: 0.5rem;
border: 0.4rem solid;
cursor pointer;
object-fit: cover;
`;

const VideoCard = ({ idVideo, color }) => {
  const srcImg = `https://img.youtube.com/vi/${idVideo}/0.jpg`;

  return <Card src={srcImg} style={{ borderColor: color }} />;
};

export default VideoCard;
