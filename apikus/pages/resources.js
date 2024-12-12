import React from "react";
import Navbar from "../components/Layouts/Navbar";

import Footer from "../components/Layouts/Footer";
import Resources from "../components/Resources/resources_s";
import PageBanner from "../components/Common/PageBanner";

export default function AboutUs() {
  return (
    <div className="">
      <Navbar />
      <PageBanner
        pageTitle="Resources"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Resources"
        breadcrumbUrl="#"
      />
      <Resources />

      <Footer />
    </div>
  );
}
