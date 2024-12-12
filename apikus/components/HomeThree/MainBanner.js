import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-three">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <div
                      data-aos="zoom-in-left"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      <h1>Data Science as a Service</h1>
                    </div>

                    <div
                      data-aos="zoom-in-left"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip.
                      </p>
                    </div>

                    <div
                      data-aos="zoom-in-left"
                      data-aos-delay="400"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      <div className="banner-btn">
                        <Link href="/about-us" className="default-btn-one">
                          About Us <span></span>
                        </Link>

                        <Link href="/contact-us" className="default-btn">
                          Contact Us <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="banner-image">
                    <Image
                      src="/images/home-three/home-three-shape1.png"
                      alt="image"
                      width={200}
                      height={316}
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-three/home-three-shape2.png"
                      alt="image"
                      width={100}
                      height={145}
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-three/home-three-shape3.png"
                      alt="image"
                      width={100}
                      height={165}
                      data-aos="fade-left"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-three/home-three-shape4.png"
                      alt="image"
                      width={160}
                      height={240}
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-three/home-three-shape5.png"
                      alt="image"
                      width={160}
                      height={200}
                      data-aos="zoom-in-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-three/home-three-shape6.png"
                      alt="image"
                      width={160}
                      height={200}
                      data-aos="fade-down"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-three/home-three-shape7.png"
                      alt="image"
                      width={160}
                      height={200}
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-three/home-three-shape8.png"
                      alt="image"
                      width={100}
                      height={164}
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-three/home-three-shape9.png"
                      alt="image"
                      width={200}
                      height={265}
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-three/home-three-shape10.png"
                      alt="image"
                      width={100}
                      height={200}
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/home-three/home-three-shape11.png"
                      alt="image"
                      width={100}
                      height={200}
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    />

                    {/* Main Image */}
                    <Image
                      src="/images/home-three/main-image3.png"
                      alt="image"
                      width={975}
                      height={626}
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
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
            src="/images/main-banner-shape/home-shape-3.png"
            alt="Image"
            width={1919}
            height={945}
          />
        </div>
        <div className="shape-img1">
          <Image
            src="/images/main-banner-shape/main-banner-shape2.png"
            alt="main-image"
            width={126}
            height={166}
          />
        </div>
        <div className="shape-img2">
          <Image
            src="/images/main-banner-shape/main-banner-shape3.png"
            alt="main-image"
            width={82}
            height={108}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
