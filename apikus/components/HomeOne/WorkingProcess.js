import React from "react";
import Link from "next/link";
import Image from "next/image";

const WorkingProcess = () => {
  return (
    <>
      <div className="process-section pt-100 pb-70">
        <div className="container">
          <div className="section-title"></div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-4"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="process-item" style={{marginTop: '4rem'}}>
                <h2>Let’s Redefine Data </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-4"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="process-item">
                <Image
                  src="/images/service_bg.png"
                  alt="image"
                  width={250}
                  height={250}
                />

                <h3>Service Providers</h3>
                <Link href="#" className="process-btn">
                  Learn More
                  <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="process-item">
                <Image
                  src="/images/service_bg.png"
                  alt="image"
                  width={250}
                  height={250}
                />

                <h3>Analytics Projects</h3>
                <Link href="#" className="process-btn">
                Learn More
                  <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingProcess;
