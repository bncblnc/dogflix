import React from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SubtitleCategory, TitleCategory } from "../TitleCategory";
import SimpleSlider from "./Slider";

const Container = styled.div`
  width: 100%;
  padding: 5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Carousel = (props) => {
  return (
    <>
      <Container>
        <TitleCategory color={props.color}>{props.category}</TitleCategory>
        <SubtitleCategory>{props.subtitle}</SubtitleCategory>
      </Container>
      <SimpleSlider color={props.color} videos={props.videos} />
    </>
  );
};

export default Carousel;
