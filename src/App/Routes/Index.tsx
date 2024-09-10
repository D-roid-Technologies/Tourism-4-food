import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "../UI/Pages/WelcomePage";

const Index: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
