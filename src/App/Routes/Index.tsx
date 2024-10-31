import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterType } from "../Utils/Types";
import Home from "../UI/Pages/home/Home";
import AboutUs from "../UI/Pages/aboutus/AboutUs";
import Login from "../UI/Pages/home/login/Login";
import Main from "../UI/Pages/main/Main";
import Donate from "../UI/Pages/donate/Donate";

const Index: React.FunctionComponent<RouterType> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
