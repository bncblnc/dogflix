import React from "react";
import { Card } from "../UI";

const VideoCard = ({ idVideo, color }) => {
  const srcImg = `https://img.youtube.com/vi/${idVideo}/0.jpg`;

  return <Card src={srcImg} style={{ borderColor: color }} />;
};

export default VideoCard;
