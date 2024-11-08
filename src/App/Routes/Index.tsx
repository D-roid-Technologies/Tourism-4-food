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
import Contact from "../UI/Pages/contact/Contact";
import Legal from "../UI/Pages/legal/Legal";
// import Resources from "../UI/Pages/resources/Resources";
import Volunteer from "../UI/Pages/volunteer/Volunteer";
import Onboarding from "../UI/Pages/home/onboarding/Onboarding";
import Resources from "../UI/Pages/Resources/Resources";
// import Onboarding from "../UI/Pages/onboarding/Onboarding";
import VerifyEmail from "../UI/Pages/verifyemail/VerifyEmail";
import Signup from "../UI/Pages/home/signup/Signup";

const Index: React.FunctionComponent<RouterType> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
