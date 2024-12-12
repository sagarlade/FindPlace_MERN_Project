import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PricingContent from "../components/Pricing/PricingContent";
import SubscribeStyleThree from "../components/Common/SubscribeStyleThree";
import Footer from "../components/Layouts/Footer";

export default function Pricing() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Pricing"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Pricing"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg-4.jpg"
      />

      <PricingContent />

      <div className="pb-100">
        <SubscribeStyleThree />
      </div>

      <Footer />
    </>
  );
}
