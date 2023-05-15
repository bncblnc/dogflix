import React from "react";
import styled from "styled-components";

const VideoCard = ({ image, imgAlt, color }) => {
  const Card = styled.img`
  border-radius: 0.5rem;
   border: 0.4rem solid ${color};
   cursor pointer
  `;

  return <Card src={image} alt={imgAlt} />;
};

export default VideoCard;
