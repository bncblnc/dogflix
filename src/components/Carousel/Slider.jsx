import React, { Component } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import VideoCard from "./VideoCard";
import { courseColor2 } from "../UI/variables";

import img1 from "../../assets/images/dataScience01.png";
import img2 from "../../assets/images/dataScience02.png";
import img3 from "../../assets/images/dataScience03.png";

const StyledSlider = styled(Slider)`
  width: 90%;
  margin: 0 auto;
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <StyledSlider {...settings}>
        <div>
          <VideoCard
            image={img1}
            imgAlt="Inteligência Artificial Poderosa"
            color={courseColor2}
          />
        </div>
        <div>
          <VideoCard
            image={img2}
            imgAlt="Universo Data Science"
            color={courseColor2}
          />
        </div>
        <div>
          <VideoCard
            image={img3}
            imgAlt="Aplicações de Machine Learning"
            color={courseColor2}
          />
        </div>
        <div>
          <VideoCard
            image={img3}
            imgAlt="Aplicações de Machine Learning"
            color={courseColor2}
          />
        </div>
      </StyledSlider>
    );
  }
}
