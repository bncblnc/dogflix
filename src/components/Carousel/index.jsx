import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { TitleCategory } from "../TitleCategory";
import { courseColor2 } from "../UI/variables";

const Teste = styled.div`
  width: 20rem;
  height: 20rem;
  border: 1px solid #fff;
  color: #fff;
  font-size: 5rem;
  display: flex;
  align-items:center;
  justify-content:center;
  cursor pointer
`;

const Test = styled.div`
  width: 100%;
  padding: 10rem;
  height: 80rem;
  margin: 0 auto;
`;

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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
      <Test>
        <TitleCategory color={courseColor2}> Test</TitleCategory>
        <Slider {...settings}>
          <div>
            <Teste>1</Teste>
          </div>
          <div>
            <Teste>2</Teste>
          </div>
          <div>
            <Teste>3</Teste>
          </div>
          <div>
            <Teste>4</Teste>
          </div>
          <div>
            <Teste>5</Teste>
          </div>
          <div>
            <Teste>6</Teste>
          </div>
        </Slider>
      </Test>
    );
  }
}
