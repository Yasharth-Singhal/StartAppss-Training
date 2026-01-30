import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blogDetails"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
