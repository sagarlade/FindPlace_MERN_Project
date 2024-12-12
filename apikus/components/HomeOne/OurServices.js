import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
  return (
    <>
      <div className="services-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>One platform, endless trust management capabilities</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                <i className="flaticon-big-data"></i>
                </div>

                <h3>PII Vault with Nomination</h3>
                <p>
                  Delegate access based on user roles and data sensitivity.
                  Uphold the principle of least privilege.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                <i className="flaticon-big-data"></i>
                </div>

                <h3>Attribute-based Access Control</h3>
                <p>
                  Delegate access based on user roles and data sensitivity.
                  Uphold the principle of least privilege.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                <i className="flaticon-big-data"></i>
                </div>
                <h3>Data Processor Governance</h3>
                <p>
                  Delegate access based on user roles and data sensitivity.
                  Uphold the principle of least privilege.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box se_black-logo">
                <Image
                  src="/images/Bg-l.png"
                  className="black-logo"
                  alt="bg"
                  width={280}
                  height={10}
                />
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                <i className="flaticon-big-data"></i>
                </div>
                <h3>Audit Trail</h3>
                <p>
                  Delegate access based on user roles and data sensitivity.
                  Uphold the principle of least privilege.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box se_black-logo">
                <Image
                  src="/images/Bg-l.png"
                  className="black-logo"
                  alt="bg"
                  width={300}
                  height={60}
                />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-big-data"></i>
                </div>

                <h3>Consent Management</h3>
                <p>
                  Delegate access based on user roles and data sensitivity.
                  Uphold the principle of least privilege.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-big-data"></i>
                </div>

                <h3>Data Access Request & Grievance Redressal</h3>
                <p>
                  Delegate access based on user roles and data sensitivity.
                  Uphold the principle of least privilege.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-big-data"></i>
                </div>

                <h3>Breach Notification</h3>
                <p>
                  Delegate access based on user roles and data sensitivity.
                  Uphold the principle of least privilege.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
