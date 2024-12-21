import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import OurServices from "../components/HomeOne/OurServices";
import AboutUs from "../components/HomeOne/AboutUs";
import FunFacts from "../components/Common/FunFacts";
import WorkingProcess from "../components/HomeOne/WorkingProcess";
import FeaturedService from "../components/HomeOne/FeaturedService";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <OurServices />

      <FunFacts />
  
      <div className="pb-100">
        <FeaturedService />
      </div>

      <AboutUs />
      <WorkingProcess />
      <Subscribe />

      <Footer />
      
    </>
  );
}

