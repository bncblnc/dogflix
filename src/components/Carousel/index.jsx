import React from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SubtitleCategory, TitleCategory } from "../TitleCategory";
import { courseColor2 } from "../UI/variables";
import SimpleSlider from "./Slider";

const Container = styled.div`
  width: 100%;
  padding: 5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Carousel = () => {
  return (
    <>
      <Container>
        <TitleCategory color={courseColor2}> Data Science</TitleCategory>
        <SubtitleCategory>Formação Data Science na Alura</SubtitleCategory>
      </Container>
      <SimpleSlider />
    </>
  );
};

export default Carousel;
