import React from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TitleCategory } from "../TitleCategory";
import SimpleSlider from "./Slider";
import { FiAlertCircle } from "react-icons/fi";
import { grayColorDialog, grayColorLight } from "../UI/variables";
import { grayColorDark } from "../UI/variables";

const Container = styled.div`
  width: 100%;
  padding: 5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const InfoContainer = styled.div`
  position: relative;
`;

const InfoIcon = styled(FiAlertCircle)`
  color: ${grayColorDark};
  font-size: 3rem;

  :hover ~ div {
    opacity: 1;
  }
`;

const InfoText = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 3.5rem;
  width: 30rem;
  z-index: 10;

  padding: 1rem;
  background-color: ${grayColorDialog};
  border-radius: 2px;
  font-size: 1.8rem;
  font-weight: 300;
  text-align: center;
  color: ${grayColorLight};

  opacity: 0;
  transition: all 0.2s;
`;

const Carousel = (props) => {
  return (
    <>
      <Container>
        <TitleCategory color={props.color}>{props.category}</TitleCategory>
        <InfoContainer>
          <InfoIcon />
          <InfoText>{props.description}</InfoText>
        </InfoContainer>
      </Container>
      <SimpleSlider url={props.url} color={props.color} videos={props.videos} />
    </>
  );
};

export default Carousel;
