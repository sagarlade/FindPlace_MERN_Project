import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <Image
                  src="/images/Apikus-removebg-preview 3.png"
                  className="white-logo"
                  alt="logo"
                  width={130}
                  height={38}
                />
                <Image
                  src="/images/Apikus-removebg-preview 3.png"
                  className="black-logo"
                  alt="logo"
                  width={130}
                  height={38}
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link href="/home-2/"
                      className={`nav-link ${
                        currentPath == "/about-us/" && "active"
                      }`}>
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/home-3/" className={`nav-link ${
                        currentPath == "/home-3/" && "active"
                      }`}>
                      Service
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/home-4/" className={`nav-link ${
                        currentPath == "/home-4/" && "active"
                      }`}>
                      Solutions
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/resources/"
                      className={`nav-link ${
                        currentPath == "/resources/" && "active"
                      }`}
                    >
                      Resources
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>

                <div className="others-options">
                  <Link href="#" className="default-btn others-options-bt">
                    BOOK DEMO
                    <span></span>
                  </Link>
                </div>
                <div className="others-options others-options-btn">
                  <Link href="#" className="default-btn">
                    Contact
                    <span></span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
