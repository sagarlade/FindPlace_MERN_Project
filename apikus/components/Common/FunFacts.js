import React from "react";

const FunFacts = () => {
  return (
    <>
      <div className="fun-facts-area ptb-100">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3>
                 68
                  <span className="sign-icon">%</span>
                </h3>
                <p>Cyber Attacks</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3>
                  61
                  <span className="sign-icon">%</span>
                </h3>
                <p>Targeted Attacks</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3>
                  60
                  <span className="sign-icon">%</span>
                </h3>
                <p>Human Error</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-fun-fact">
                <h3>
                  63
                  <span className="sign-icon">%</span>
                </h3>
                <p>Data Loss</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
