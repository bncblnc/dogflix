import React from "react";
import styled from "styled-components";

import { grayColorLight } from "../UI/variables";
import { SubtitleCategoryLarge, TitleCategoryLarge } from "../TitleCategory";
import { MarginMedium } from "../UI";
import SimpleSlider from "../Carousel/Slider";
import VideoCard from "../Carousel/VideoCard";

const StyledHero = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.7fr 2fr 0.4fr 1fr 1fr;
  align-items: center;
  gap: 0 4rem;
`;

const Container = styled.div`
  padding: 0 5rem;
  grid-column: 1;
  grid-row: 2 / 3;
  z-index: 3;
`;

const SliderStyle = styled.div`
  grid-column: 1 /-1;
  grid-row: 4 / 6;
  z-index: 3;
`;

const Info = styled.p`
  color: ${grayColorLight};
  font-weight: 300;
  font-size: 1.9rem;
  line-height: 2.5rem;
`;

const VideoIframe = styled.iframe`
  border: none;
  grid-column: 1 / -1;
  grid-row: 1 / 5;
  z-index: 1;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Hero = ({ url, category, color, videos }) => {
  return (
    <StyledHero>
      <VideoIframe
        src={`https://www.youtube.com/embed/${videos[0].id}?&autoplay=1&mute=1&playsinline=1`}
      ></VideoIframe>
      <Container>
        <TitleCategoryLarge color={color}>{category}</TitleCategoryLarge>
        <MarginMedium />
        <SubtitleCategoryLarge>{videos[0].title}</SubtitleCategoryLarge>
        <Info>{videos[0].description}</Info>
      </Container>
      <VideoCard url={url} idVideo={videos[0].id} large={true} color={color} />
      <SliderStyle>
        <SimpleSlider url={url} color={color} videos={videos.slice(1)} />
      </SliderStyle>
    </StyledHero>
  );
};

export default Hero;
