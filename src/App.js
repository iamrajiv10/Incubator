import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contect";
import About from "./Pages/About";
import PageNotFound from "./Pages/PageNotFound";
import { Route, Routes } from "react-router-dom";
import WebDev from "./Pages/WebDev";
import AppDev from "./Pages/AppDev";
import Marketing from "./Pages/Marketing";
import BusinessMarketing from "./Pages/Business";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/appdev" element={<AppDev />} />
        <Route path="/business" element={<BusinessMarketing />} />
        <Route path="/marketing" element={<Marketing />} />

      </Routes>
    </>
  );
};

export default App;
