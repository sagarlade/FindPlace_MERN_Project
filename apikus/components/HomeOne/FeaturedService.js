import React, { useState } from "react";
import Image from "next/image";
const CoreValues = () => {
  const [activeTab, setActiveTab] = useState(0); // Track the active tab

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      title: "Core Values",
      cards: [
        {
          title: "Core Values",
          description:
            "Our mission lies a steadfast commitment to upholding the principles that define who we are and how we operate.",
          icon: "/images/icon1.png",
        },
        {
          title: "Data Sovereignty & Security",
          description:
            "We are unwavering guardians of our clients' data, prioritizing control and protection.",
          icon: "/images/icon1.png",
        },
        {
          title: "Trust & Transparency",
          description:
            "Building lasting partnerships through open, honest, and reliable interactions.",
          icon: `<i className="flaticon-science"></i>`,
        },
        {
          title: "Customer Success",
          description:
            "Empowering our clients to achieve their goals with exceptional support and value.",
          icon: "/images/icon1.png",
        },
      ],
    },
    {
      title: "Operational Values",
      cards: [
        // Add cards for Data Driven Decisions
        {
          title: "Collaboration",
          description: "Fostering strong partnerships to advance data privacy, security, and efficiency.",
          icon: "/images/icon1.png",
        },
        {
          title: "Privacy-Centric Innovation",
          description: " Developing innovative solutions that protect sensitive information while optimizing processes.",
          icon: "/images/icon1.png",
        },
        {
          title: "Efficiency",
          description: " Streamlining operations and reducing costs through optimized workflows and compliance.",
          icon: "/images/icon1.png",
        },
      ],
    },
    {
      title: "Guiding Principles",
      cards: [
        // Add cards for Customer Centric Approach
        {
          title: "Client Focus",
          description: "Our clients' needs and success are our top priority.",
          icon: "/images/icon1.png",
        },
        {
          title: "Integrity",
          description: "Operating with the highest ethical standards.",
          icon: "/images/icon1.png",
        },
        {
          title: "Continuous Improvement",
          description: "Dedicated to ongoing learning and service enhancement.",
          icon: "/images/icon1.png",
        },
        {
          title: "Agility",
          description: " Responding swiftly to evolving client needs and driving innovative solutions.",
          icon: "/images/icon1.png",
        },
      ],
    },
  ];

  return (
    <div className="software-section p-100 mt-5">
      <div className="container">
        <h1 className="fea_h1">Our Commitment to Excellence</h1>
        <span>
          Guided by Values, Driven by Innovation, Focused on Your Success
        </span>
        <div className="row col-12 col-md-12 col-sm-12 mt-4 fe_tab_t">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-6 col-sm-12 mb-0 tab_t ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              <div className="tab-title">
                {tab.title}
                {activeTab === index && (
                  <span
                    className={`underline ${
                      activeTab === index ? "active" : ""
                    }`}
                  >
                  </span>
                )}
              </div>
            </div>
          ))}
          <hr className="hr_f" />
        </div>
        <div className="row mt-5">
          <div className="col-lg-8">
            <div className="row">
              {tabs[activeTab].cards.map((card, index) => (
                <div key={index} className="col-lg-6 col-md-6 mb-4">
                  <div className="single-services-box feature_box pt-4">
                    <h2 className="card-title fe_card">
                      <span className="icon p_2">
                        <i className="flaticon-big-data"></i>
                      </span>
                      {card.title}
                    </h2>
                    <p className="card-text mt-2">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="software-image">
              <Image
                src="/images/fr_bg.png"
                alt="image"
                width={555}
                height={356}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
