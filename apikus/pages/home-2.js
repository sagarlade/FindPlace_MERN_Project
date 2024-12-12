import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeTwo/MainBanner";
import AboutUs from "../components/HomeTwo/AboutUs";
import OurServices from "../components/HomeTwo/OurServices";

import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";
import FeaturedService from "../components/HomeOne/FeaturedService"
import TeamMember from "../components/Common/TeamMember";
export default function Home2() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <AboutUs />

      <OurServices />

      <div className="pb-100">
        <FeaturedService />
      </div>

      <TeamMember />

      <Subscribe />

      <Footer />
    </>
  );
}
