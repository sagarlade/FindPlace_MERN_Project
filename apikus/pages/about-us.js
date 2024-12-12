import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutUsContent from "../components/AboutUs/AboutUsContent";
import FunFacts from "../components/Common/FunFacts";
import GetStartedProject from "../components/Common/GetStartedProject";
import Testimonial from "../components/Common/Testimonial";
import TeamMember from "../components/Common/TeamMember";
import Customers from "../components/Common/Customers";
import Footer from "../components/Layouts/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About Us"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="About Us"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg.jpg"
      />

      <AboutUsContent />

      <FunFacts />

      <div className="pb-100">
        <GetStartedProject />
      </div>

      <Testimonial />

      <TeamMember />

      <Customers />

      <Footer />
    </>
  );
}
