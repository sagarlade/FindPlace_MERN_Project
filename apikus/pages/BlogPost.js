import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogCard from "../components/Common/BlogPost";

const Blog = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Blogs"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Blogs"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg.jpg"
      />
      <BlogCard />
    </>
  );
};

export default Blog;
