import React from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />

      <Footer />
    </>
  );
}

export default App;
