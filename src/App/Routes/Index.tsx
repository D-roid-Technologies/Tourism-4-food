import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterType } from "../Utils/Types";
import Home from "../UI/Pages/home/Home";
import AboutUs from "../UI/Pages/aboutus/AboutUs";
import Login from "../UI/Pages/home/login/Login";
import Main from "../UI/Pages/main/Main";
import Programs from "../UI/Pages/programs/Programs";
import Campaigns from "../UI/Pages/campaigns/Campaigns";
import GetInvolved from "../UI/Pages/getInvolved/GetInvolved";
import Donate from "../UI/Pages/donate/Donate";
import Bookings from "../UI/Pages/bookings/Bookings";

const Index: React.FunctionComponent<RouterType> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
