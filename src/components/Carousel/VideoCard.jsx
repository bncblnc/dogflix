import React from "react";
import { Card, CardLarge } from "../UI";

function styleCardLarge(color) {
  return {
    borderColor: `${color}`,
    gridColumn: 2,
    gridRow: "2 / 3",
    zIndex: 3,
  };
}

const VideoCard = ({ idVideo, color, large = false }) => {
  const srcImg = `https://img.youtube.com/vi/${idVideo}/0.jpg`;
  if (!large) {
    return <Card src={srcImg} style={{ borderColor: color }} />;
  } else {
    return <CardLarge src={srcImg} style={styleCardLarge(color)} />;
  }
};

export default VideoCard;
