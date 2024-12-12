import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TermsConditionContent from "../components/TermsCondition/TermsConditionContent";
import Footer from "../components/Layouts/Footer";

export default function TermsCondition() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Terms & Conditions"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Terms & Conditions"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg.jpg"
      />

      <TermsConditionContent />

      <Footer />
    </>
  );
}
