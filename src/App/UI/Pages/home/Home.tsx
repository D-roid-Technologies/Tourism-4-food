import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
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
