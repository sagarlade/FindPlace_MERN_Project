import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
  return (
    <>
      <div className="data-service-section pb-100">
        <div className="container">
          <div className="section-title">
            <span>Our Services</span>
            <h2>Explore Our Data Services</h2>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="data-services-item">
                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-big-data"></i>
                  </div>
                  <h3>
                    <Link href="/services/details">
                      Big Data
                      <i className="flaticon-right"></i>
                    </Link>
                  </h3>
                </div>

                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-science"></i>
                  </div>
                  <h3>
                    <Link href="/services/details">
                      Data Science
                      <i className="flaticon-right"></i>
                    </Link>
                  </h3>
                </div>

                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-document"></i>
                  </div>
                  <h3>
                    <Link href="/services/details">
                      Managed Analytics
                      <i className="flaticon-right"></i>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="data-services-item">
                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-data-analytics"></i>
                  </div>
                  <h3>
                    <Link href="/services/details">
                      Data Analytics
                      <i className="flaticon-right"></i>
                    </Link>
                  </h3>
                </div>

                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-chart"></i>
                  </div>
                  <h3>
                    <Link href="/services/details">
                      Business Intelligence
                      <i className="flaticon-right"></i>
                    </Link>
                  </h3>
                </div>

                <div className="single-data-service-box">
                  <div className="icon">
                    <i className="flaticon-data"></i>
                  </div>
                  <h3>
                    <Link href="/services/details">
                      Data Management
                      <i className="flaticon-right"></i>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="data-service-image">
                <Image
                  src="/images/data-service.png"
                  alt="image"
                  width={500}
                  height={495}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
