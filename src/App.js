import React from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import NewVideo from "./pages/NewVideo";
import NewCategory from "./pages/NewCategory";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="newvideo" element={<NewVideo />} />
        <Route path="newcategory" element={<NewCategory />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
