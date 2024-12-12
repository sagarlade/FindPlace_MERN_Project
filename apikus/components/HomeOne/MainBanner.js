import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-two">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      Data Protection & Governance Made Easy
                    </h1>

                    <div
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      <p>
                        Platform to protect personal information and build
                        unwavering customer trust with cutting-edge data privacy
                        and security solutions
                      </p>
                    </div>

                    <div
                      className="banner-btn"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      <Link href="#" className="default-btn-one">
                        BOOK DEMO
                        <span></span>
                      </Link>

                      <Link className="default-btn default-btn-two" href="#">
                        CONTACT
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                <div className="banner-image">
                    {/* Shape images */}
                    <Image
                      src="/images/home-two/home-two-shape1.png"
                      alt="image"
                      width={200}
                      height={200}
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-two/home-two-shape2.png"
                      alt="image"
                      width={190}
                      height={200}
                      data-aos="fade-left"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-two/home-two-shape3.png"
                      alt="image"
                      width={200}
                      height={180}
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-two/home-two-shape4.png"
                      alt="image"
                      width={210}
                      height={215}
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-two/home-two-shape5.png"
                      alt="image"
                      width={400}
                      height={270}
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    {/* Main image */}
                    <Image
                      src="/images/home-two/main-image2.png"
                      alt="image"
                      width={877}
                      height={877}
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />
                  </div>

                  <div className="circle-img">
                    <Image
                      src="/images/home-two/home-two-shape6.png"
                      alt="image"
                      width={1160}
                      height={1318}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="creative-shape">
          <Image
            src="/images/main-banner-shape/home-shape-2.png"
            alt="main-image"
            width={1920}
            height={1070}
          />
        </div>
        <div className="shape-dot">
          <Image
            src="/images/main-banner-shape/main-banner-dot.png"
            alt="main-image"
            width={1150}
            height={1015}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
