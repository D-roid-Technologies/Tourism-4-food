import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../Pages/home/Home";
import AboutUs from "../../Pages/aboutus/AboutUs";
import Testloading from "../testLoading/Testloading";
import Login from "../../Pages/home/login/Login";
import Main from "../../Pages/main/Main";
import Programs from "../../Pages/programs/Programs";
import Campaigns from "../../Pages/campaigns/Campaigns";
import GetInvolved from "../../Pages/getInvolved/GetInvolved";
import Donate from "../../Pages/donate/Donate";
import Bookings from "../../Pages/bookings/Bookings";
import Contact from "../../Pages/contact/Contact";
import Legal from "../../Pages/legal/Legal";
import Volunteer from "../../Pages/volunteer/Volunteer";
import Onboarding from "../../Pages/home/onboarding/Onboarding";
import VerifyEmail from "../../Pages/verifyemail/VerifyEmail";
import EnterCode from "../../Pages/verifyemail/enterCode/EnterCode";
import Signup from "../../Pages/home/signup/Signup";
import CreateCode from "../../Pages/createCode/CreateCode";
import UserDashboard from "../../Pages/userdashboard/UserDashboard";
import Resources from "../../Pages/Resources/Resources";

const LoadingManager: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Testloading />}
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
        <Route path="/entercode" element={<EnterCode />} />
        <Route path="/createcode" element={<CreateCode />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
};

export default LoadingManager;
