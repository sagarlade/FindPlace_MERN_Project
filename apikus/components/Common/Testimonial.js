import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial-section ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Testimonials</span>
            <h2>What Our Client Say</h2>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="testimonial-slider"
          >
            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <Image
                    src="/images/clients/client1.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />
                </div>

                <div className="testimonial-info">
                  <h3>Richard Denial</h3>
                  <span>IT Executive</span>
                </div>

                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <Image
                    src="/images/clients/client2.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />
                </div>

                <div className="testimonial-info">
                  <h3>Sarah Taylor</h3>
                  <span>Lead Architecure</span>
                </div>

                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <Image
                    src="/images/clients/client3.jpg"
                    alt="image"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="testimonial-info">
                  <h3>Alastair Cook</h3>
                  <span>Marketing Manager</span>
                </div>
                <div className="testimonial-content">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Shape Images */}
        <div className="testimonial-shape">
          <Image
            src="/images/shape/testimonial-shape-1.png"
            alt="main-image"
            width={830}
            height={590}
          />
        </div>
        <div className="testimonial-shape-img1">
          <Image
            src="/images/shape/testimonial-shape-2.png"
            alt="main-image"
            width={414}
            height={172}
          />
        </div>
        <div className="testimonial-shape-img2">
          <Image
            src="/images/shape/testimonial-shape-3.png"
            alt="main-image"
            width={15}
            height={14}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
