import React from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import NewVideo from "./pages/NewVideo";
import NewCategory from "./pages/NewCategory";
import VideoPlayer from "./pages/VideoPlayer";
import Base from "./pages/Base";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Base />}>
          <Route path="/" element={<Home />} />
          <Route path="newvideo" element={<NewVideo />} />
          <Route path="newcategory" element={<NewCategory />} />
        </Route>

        <Route path=":category/:id/*" element={<VideoPlayer />} />
        <Route path="*" element={<div>NÃO ENCONTRADA</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
