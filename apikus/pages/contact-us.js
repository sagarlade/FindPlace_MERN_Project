import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import SubscribeStyleThree from "../components/Common/SubscribeStyleThree";
import Footer from "../components/Layouts/Footer";

export default function ContactUs() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Contact Us"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Contact Us"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg.jpg"
      />

      <ContactInfo />

      <ContactForm />

      <div className="ptb-100">
        <SubscribeStyleThree />
      </div>

      <Footer />
    </>
  );
}
