import React from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FiAlertCircle } from "react-icons/fi";
import { bpMedium, grayColorDialog, grayColorLight } from "../UI/variables";
import { grayColorDark } from "../UI/variables";

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

  @media (max-width: ${bpMedium}) {
    width: 25rem;
  }
`;

const InfoHover = ({ description }) => {
  return (
    <InfoContainer>
      <InfoIcon />
      <InfoText>{description}</InfoText>
    </InfoContainer>
  );
};

export default InfoHover;
