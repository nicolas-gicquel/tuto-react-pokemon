import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
