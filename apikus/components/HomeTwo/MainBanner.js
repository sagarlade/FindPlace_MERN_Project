import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <div
                      data-aos="zoom-in-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      <h1>About Us</h1>
                    </div>

                    <div
                      data-aos="zoom-in-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                      data-aos-once="true"
                    >
                      <p>
                        APIKUS, derived from the Latin "apicem" meaning "the
                        peak", represents the highest standard in data security.{" "}
                        <br />
                        <br/>
                        As a SaaS company we specialize in safeguarding your
                        users' most sensitive information: Personally
                        Identifiable Information (PII).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="banner-image">
                    {/* Main image */}
                    <Image
                      src="/images/home-one/Clip_a.png"
                      alt="image"
                      width={980}
                      height={50}
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

        {/* Animation lines */}
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
