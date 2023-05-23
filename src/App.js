import React, { useState } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import NewVideo from "./pages/NewVideo";
import NewCategory from "./pages/NewCategory";
import VideoPlayer from "./pages/VideoPlayer";
import Base from "./pages/Base";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import { getCategoryData, setLocalStorage } from "./data";

function App() {
  const [categoryData, setCategoryData] = useState(getCategoryData);

  function addVideo(title, link, category, description) {
    categoryData.map((data) => {
      if (data.category === category) {
        data.videos.push({
          id: link.slice(-11),
          title: title,
          description: description,
        });
      }
      return data;
    });
    setLocalStorage(categoryData);
  }

  function addCategory(name, color, description) {
    const newCategory = {
      category: name,
      url: name.toLowerCase().replace(/\s/g, ""),
      subtitle: description,
      color: color,
      videos: [],
    };

    setCategoryData([...categoryData, newCategory]);
    setLocalStorage(categoryData);
  }

  function deleteCategory(name) {
    setCategoryData(categoryData.filter((data) => data.category !== name));
    // setLocalStorage(categoryData);
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Base />}>
          <Route path="/" element={<Home categoryData={categoryData} />} />
          <Route
            path="novovideo"
            element={
              <NewVideo categoryData={categoryData} submitFunction={addVideo} />
            }
          />
          <Route
            path="novacategoria"
            element={
              <NewCategory
                categoryData={categoryData}
                submitFunction={addCategory}
                deleteFunction={deleteCategory}
              />
            }
          />
        </Route>

        <Route path=":category/:id/*" element={<VideoPlayer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
