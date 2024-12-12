import React from "react";
import Image from "next/image";

const Customers = () => {
  return (
    <>
      <div className="partner-section pt-100 pb-70">
        <div className="container">
          <div className="partner-title">
            <span>Customer</span>
            <h2>Discover Customer Successful Stories</h2>
          </div>

          <div className="partner-list">
            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
              <Image
                src="/images/partner/partner1.png"
                alt="image"
                width={100}
                height={100}
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <Image
                src="/images/partner/partner2.png"
                alt="image"
                width={100}
                height={100}
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="1200"
            >
              <Image
                src="/images/partner/partner3.png"
                alt="image"
                width={100}
                height={100}
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <Image
                src="/images/partner/partner4.png"
                alt="image"
                width={100}
                height={100}
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="250"
              data-aos-duration="1200"
            >
              <Image
                src="/images/partner/partner5.png"
                alt="image"
                width={100}
                height={100}
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <Image
                src="/images/partner/partner5.png"
                alt="image"
                width={100}
                height={100}
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="350"
              data-aos-duration="1200"
            >
              <Image
                src="/images/partner/partner6.png"
                alt="image"
                width={100}
                height={100}
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <Image
                src="/images/partner/partner7.png"
                alt="image"
                width={100}
                height={100}
              />
            </div>

            <div
              className="partner-item"
              data-aos="zoom-in"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              <Image
                src="/images/partner/partner8.png"
                alt="image"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="partner-shape">
          <Image
            src="/images/shape/partnar-shape-1.png"
            alt="main-image"
            width={364}
            height={492}
          />
        </div>
        <div className="partner-shape-img1">
          <Image
            src="/images/shape/partnar-shape-2.png"
            alt="image"
            width={277}
            height={492}
          />
        </div>
      </div>
    </>
  );
};

export default Customers;
