import React from "react";
import styled from "styled-components";
import img from "../../assets/images/hero.png";

const StyledHero = styled.div`
  width: 100vw;
  height: calc(100vh - 9.4rem);
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${img});
  background-size: cover;
`;

const Hero = () => {
  return (
    <>
      <StyledHero />
    </>
  );
};

export default Hero;
