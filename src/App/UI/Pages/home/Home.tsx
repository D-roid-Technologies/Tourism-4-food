import React from "react";
import Navbar from "../../Components/navbar/NavBar";
import Footer from "../../Components/footer/Footer";
import "../home/Home.css";

const Home: React.FunctionComponent = () => {
  return (
    <>
      <main>
        <div>
          <Navbar />
        </div>
        <div className="home-container">Home</div>
        <Footer />
      </main>
    </>
  );
};

export default Home;