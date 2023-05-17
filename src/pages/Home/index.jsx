import React from "react";
import Hero from "../../components/Hero";
import Carousel from "../../components/Carousel";
import { MarginMedium } from "../../components/UI";
import initialData from "../../data/initial-data.json";

export default function Home() {
  return (
    <main>
      <Hero
        category={initialData[0].category}
        url={initialData[0].url}
        color={initialData[0].color}
        videos={initialData[0].videos}
      />
      {initialData.slice(1).map((data, index) => {
        return (
          <Carousel
            key={index}
            category={data.category}
            url={data.url}
            subtitle={data.subtitle}
            color={data.color}
            videos={data.videos}
          />
        );
      })}

      <MarginMedium />
    </main>
  );
}
