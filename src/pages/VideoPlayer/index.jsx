import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import initialData from "../../data/initial-data.json";
import { TitleCategory } from "../../components/TitleCategory";
import ReactPlayer from "react-player";

const VideoIframe = styled.iframe`
  border: none;
  width: 100vw;
  height: 100vh;
`;

const VideoPlayer = () => {
  const parameters = useParams();
  const video = initialData
    .filter(
      (data) =>
        data.category.replace(/\s/g, "").toLowerCase() === parameters.category
    )[0]
    .videos.filter((video) => video.id === parameters.id)[0];

  if (!video) {
    return <TitleCategory color="red">Não encontrada</TitleCategory>;
  }

  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${video.id}`}
      playing={true}
      controls={true}
      width="100%"
      height="65vh"
    />
  );
};

export default VideoPlayer;
