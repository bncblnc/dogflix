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

// const initialData = [
//   {
//     category: "Front End",
//     subtitle: "SEO com React",
//     description:
//       "Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React.",
//     color: "#6BD1FF",
//     videos: [
//       "Z-N5Fr9P-GU",
//       "6IuQUgeDPg0",
//       "KdQa4Rd6K1A",
//       "35jb4FeQSe4",
//       "2-OAUXA4IcE",
//     ],
//   },
//   {
//     category: "Data Science",
//     subtitle: "Formação Data Science na Alura",
//     color: "#69953B",
//     videos: ["Kk3vBRqKA2o", "K-eaT4V8j-w", "qYhixp5qxTc", "5b9Z8toVaAU"],
//   },
//   {
//     category: "Mobile",
//     subtitle: "Formação Mobile da Alura",
//     color: "#FFBA05",
//     videos: ["4AH9H_dx_7g", "uXA8jLSuPNA", "ly8e6WB0YQo", "fWscDFHKgw8"],
//   },
// ];
