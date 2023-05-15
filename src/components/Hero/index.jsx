import React from "react";
import styled from "styled-components";
import img from "../../assets/images/hero.png";
import { courseColor1, grayColorLight } from "../UI/variables";
import { SubtitleCategoryLarge, TitleCategoryLarge } from "../TitleCategory";
import { MarginMedium } from "../UI";

const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${img});

  background-size: cover;
  display: flex;
  padding: 4.7rem;
  align-items: center;
`;

const Container = styled.div`
  flex: 1;
`;

const Info = styled.p`
  color: ${grayColorLight};
  font-weight: 300;
  font-size: 1.9rem;
  line-height: 2.5rem;
`;

const ImgHero = styled.img`
  width: 100%;
`;

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <TitleCategoryLarge color={courseColor1}>Front End</TitleCategoryLarge>
        <MarginMedium />
        <SubtitleCategoryLarge>SEO com React</SubtitleCategoryLarge>
        <Info>
          Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode
          se engajar na resolução de um problema para poder aplicar todo o
          conhecimento adquirido na Formação React.
        </Info>
      </Container>
      <Container>
        <ImgHero src={img} alt="Vídeo Transformação Digital" />
      </Container>
    </StyledHero>
  );
};

export default Hero;
