import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterType } from "../Utils/Types";
import Home from "../UI/Pages/home/Home";

const Index: React.FunctionComponent<RouterType> = ({ width }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
