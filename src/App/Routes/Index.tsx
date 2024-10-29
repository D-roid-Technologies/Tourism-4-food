import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterType } from "../Utils/Types";
import Home from "../UI/Pages/home/Home";
import Login from "../UI/Pages/home/login/Login";
import Main from "../UI/Pages/main/Main";

const Index: React.FunctionComponent<RouterType> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
