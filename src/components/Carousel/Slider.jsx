import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrow from "../../assets/images/sliderArrow.png";
import VideoCard from "./VideoCard";

const StyledSlider = styled(Slider)`
  width: 90%;
  margin: 0 auto;
`;

function Arrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

const StyledNextArrow = styled(Arrow)`
  :before {
    content: url(${arrow});
  }
`;
const StyledPrevArrow = styled(StyledNextArrow)`
  transform: rotate(180deg);
`;

export default function SimpleSlider({ url, videos, color }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    nextArrow: <StyledNextArrow />,
    prevArrow: <StyledPrevArrow />,
    responsive: [
      {
        breakpoint: 1526,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1022,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSlider {...settings}>
      {videos.map((video, index) => {
        return (
          <div key={index}>
            <VideoCard url={url} idVideo={video.id} color={color} />
          </div>
        );
      })}
    </StyledSlider>
  );
}
