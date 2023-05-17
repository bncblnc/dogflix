import React from "react";
import Hero from "../../components/Hero";
import Carousel from "../../components/Carousel";
import { MarginMedium } from "../../components/UI";
import initialData from "../../data/initial-data.json";

export default function Home() {
  return (
    <>
      <Hero
        category={initialData[0].category}
        subtitle={initialData[0].subtitle}
        description={initialData[0].description}
        color={initialData[0].color}
        videos={initialData[0].videos}
      />
      {initialData.slice(1).map((data, index) => {
        return (
          <Carousel
            key={index}
            category={data.category}
            subtitle={data.subtitle}
            color={data.color}
            videos={data.videos}
          />
        );
      })}

      <MarginMedium />
    </>
  );
}
