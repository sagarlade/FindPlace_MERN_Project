import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdCheckboxOutline } from "react-icons/io";

const GetStartedProject = () => {
  return (
    <>
      <div className="productive-section pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="productive-content">
                <h3>Maximising Security </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>

                <div className="productive-btn">
                  <p><span style={{paddingRight: 8}}><IoMdCheckboxOutline/></span>Professional Consultancy Service</p>
                  <p><span style={{paddingRight: 8}}><IoMdCheckboxOutline/></span>24/7 Support Center</p>
                  <p><span style={{paddingRight: 8}}><IoMdCheckboxOutline/></span>Custom Service & Operation</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="productive-image">
                <Image
                  src="/images/laptop.png"
                  alt="image"
                  width={625}
                  height={485}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedProject;
