import React from "react";
import styled from "styled-components";
import img from "../../assets/images/hero.png";
import { grayColorLight } from "../UI/variables";
import { SubtitleCategoryLarge, TitleCategoryLarge } from "../TitleCategory";
import { CardLarge, MarginMedium } from "../UI";
import SimpleSlider from "../Carousel/Slider";

const StyledHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2.5fr 1fr;
  align-items: center;
  gap: 4.7rem;
`;

const Container = styled.div`
  padding: 0 4.7rem;
`;

const WholeRow = styled.div`
  grid-column: 1 /-1;
`;

const Info = styled.p`
  color: ${grayColorLight};
  font-weight: 300;
  font-size: 1.9rem;
  line-height: 2.5rem;
`;

function styleBgImg(img) {
  return {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${img})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
}

const Hero = ({ category, subtitle, description, color, videos }) => {
  const srcImg = `https://img.youtube.com/vi/${videos[0]}/0.jpg`;

  return (
    <StyledHero style={styleBgImg(srcImg)}>
      <Container>
        <TitleCategoryLarge color={color}>{category}</TitleCategoryLarge>
        <MarginMedium />
        <SubtitleCategoryLarge>{subtitle}</SubtitleCategoryLarge>
        <Info>{description}</Info>
      </Container>
      <CardLarge src={srcImg} style={{ borderColor: color }} />
      <WholeRow>
        <SimpleSlider color={color} videos={videos.slice(1)} />
      </WholeRow>
    </StyledHero>
  );
};

export default Hero;
