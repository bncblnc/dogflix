import React from "react";
import { Card, CardLarge } from "../UI";
import { Link } from "react-router-dom";

function styleLinkLarge() {
  return {
    gridColumn: 2,
    gridRow: "2 / 3",
    zIndex: 3,
  };
}

const VideoCard = ({ url, idVideo, color, large = false }) => {
  const srcImg = `https://img.youtube.com/vi/${idVideo}/0.jpg`;

  if (!large) {
    return (
      <Link to={`/${url}/${idVideo}`}>
        <Card src={srcImg} style={{ borderColor: color }} />
      </Link>
    );
  } else {
    return (
      <Link to={`/${url}/${idVideo}`} style={styleLinkLarge()}>
        <CardLarge src={srcImg} style={{ borderColor: color }} />;
      </Link>
    );
  }
};

export default VideoCard;
