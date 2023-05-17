import React from "react";
import { useParams } from "react-router-dom";

import initialData from "../../data/initial-data.json";
import { TitleCategory } from "../../components/TitleCategory";
import ReactPlayer from "react-player";

function getVideoId(parameters) {
  const category = initialData.filter(
    (data) => data.url === parameters.category
  )[0];

  if (!category) return false;

  const video = category.videos.filter(
    (video) => video.id === parameters.id
  )[0];

  if (video) return video.id;
  else return false;
}

const VideoPlayer = () => {
  const parameters = useParams();
  const videoId = getVideoId(parameters);

  if (!videoId) {
    return <TitleCategory color="red">Não encontrada</TitleCategory>;
  }

  return (
    <main>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        playing={true}
        controls={true}
        width="100%"
        height="calc(100vh - 7.5rem)"
      />
    </main>
  );
};

export default VideoPlayer;
