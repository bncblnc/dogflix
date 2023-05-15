import React, { Component } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import VideoCard from "./VideoCard";
import { courseColor2 } from "../UI/variables";

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
          <VideoCard idVideo="Kk3vBRqKA2o" color={courseColor2} />
        </div>
        <div>
          <VideoCard idVideo="K-eaT4V8j-w" color={courseColor2} />
        </div>
        <div>
          <VideoCard idVideo="qYhixp5qxTc" color={courseColor2} />
        </div>
        <div>
          <VideoCard idVideo="5b9Z8toVaAU" color={courseColor2} />
        </div>
      </StyledSlider>
    );
  }
}
