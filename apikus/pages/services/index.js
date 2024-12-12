import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import FeaturedService from "../../components/Services/FeaturedService";
import ServicesContent from "../../components/Services/ServicesContent";
import SubscribeStyleThree from "../../components/Common/SubscribeStyleThree";
import Footer from "../../components/Layouts/Footer";



const Services = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Services"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg-4.jpg"
      />

      <FeaturedService />

      <ServicesContent />
     

      <div className="pb-100">
        <SubscribeStyleThree />
      </div>

      <Footer />
    </>
  );
};

export default Services;
