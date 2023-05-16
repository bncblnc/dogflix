import React from "react";
import Hero from "../../components/Hero";
import Carousel from "../../components/Carousel";
import { MarginMedium } from "../../components/UI";

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel
        category={initialData[0].category}
        subtitle={initialData[0].subtitle}
        color={initialData[0].color}
        videos={initialData[0].videos}
      />
      <Carousel
        category={initialData[1].category}
        subtitle={initialData[1].subtitle}
        color={initialData[1].color}
        videos={initialData[1].videos}
      />
      <MarginMedium />
    </>
  );
}

const initialData = [
  {
    category: "Data Science",
    subtitle: "Formação Data Science na Alura",
    color: "#69953B",
    videos: ["Kk3vBRqKA2o", "K-eaT4V8j-w", "qYhixp5qxTc", "5b9Z8toVaAU"],
  },
  {
    category: "Mobile",
    subtitle: "Formação Mobile da Alura",
    color: "#FFBA05",
    videos: ["4AH9H_dx_7g", "uXA8jLSuPNA", "ly8e6WB0YQo", "fWscDFHKgw8"],
  },
];
