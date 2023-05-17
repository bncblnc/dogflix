import React from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import NewVideo from "./pages/NewVideo";
import NewCategory from "./pages/NewCategory";
import VideoPlayer from "./pages/VideoPlayer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="newvideo" element={<NewVideo />} />
        <Route path="newcategory" element={<NewCategory />} />
        <Route path=":category/:id/*" element={<VideoPlayer />} />
        <Route path="*" element={<div>NÃO ENCONTRADA</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
