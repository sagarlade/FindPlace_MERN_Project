import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="about-section pb-100 home_two_about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 ha_about">
              <div className="row right_side">
                <div className="right_side_img col-lg-4 col-md-6 col-sm-12">
                  <Image
                    src="/images/home-one/left_img.png"
                    alt="image"
                    width={170}
                    height={526}
                    className="i_r"
                  />
                </div>
                <div className="about-content about-content_a col-lg-8 col-md-6 col-sm-12">
                  <h2>Our Vision</h2>
                  <p className="dark_a text-dark">
                    Future where data is managed intelligently, securely, and
                    inclusively
                  </p>
                  <p className="dark_b">
                    A future where data is managed intelligently, securely, and
                    inclusively. We're building a diverse team of experts
                    committed to pioneering best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 ha_about">
              <div className="row right_side">
                <div className="right_side_img col-lg-4 col-md-6 col-sm-12">
                  <Image
                    src="/images/home-one/right_img.png"
                    alt="image"
                    width={170}
                    height={526}
                    className="i_r"
                  />
                </div>
                <div className="about-content about-content_a col-lg-8 col-md-6 col-sm-12">
                  <h2>Our Mission</h2>
                  <p className="dark_a text-dark">
                    TO Provide necessary tools and knowledge to protect user
                    data
                  </p>
                  <p className="dark_b">
                    Empower startups by providing the tools and knowledge
                    necessary to protect user data and achieve industry
                    leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
