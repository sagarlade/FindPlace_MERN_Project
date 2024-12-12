import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

const SolutionsTab = () => {
  return (
    <>
      <div className="tab-section ptb-100">
        <div className="container">
          <div className="solutions-list-tab">
            <Tabs>
              <TabList>
                <Tab>Research & Solution</Tab>
                <Tab>Design & Strategy</Tab>
                <Tab>Analytics AI</Tab>
                <Tab>Cloud Deployment</Tab>
              </TabList>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3>Enterprise AI & Data Platform Solutions</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis. Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                      </p>

                      <ul className="tab-list">
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Innovation idea the latest business technology
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Safe secure services for your online email account
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Digital content marketing online
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link href="/services/details" className="default-btn">
                          Read More <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="tab-image-right">
                      <Image
                        src="/images/tab-solution.png"
                        alt="image"
                        width={410}
                        height={472}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="tab-image-left">
                      <Image
                        src="/images/tab-solution.png"
                        alt="image"
                        width={410}
                        height={472}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3>Design & Strategy Data Platform Solutions</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione.
                      </p>

                      <ul className="tab-list">
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Innovation idea the latest business technology
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Safe secure services for your online email account
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Digital content marketing online
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link href="/services/details" className="default-btn">
                          Read More <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3>Analytics AI & Data Platform Solutions</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione.
                      </p>

                      <ul className="tab-list">
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Innovation idea the latest business technology
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Safe secure services for your online email account
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Digital content marketing online
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link href="/services/details" className="default-btn">
                          Read More <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="tab-image-right">
                      <Image
                        src="/images/tab-solution.png"
                        alt="image"
                        width={410}
                        height={472}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="tab-image-left">
                      <Image
                        src="/images/tab-solution.png"
                        alt="image"
                        width={410}
                        height={472}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="tab-solution-content">
                      <h3>Cloud Deployment AI & Data Platform Solutions</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione.
                      </p>

                      <ul className="tab-list">
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Innovation idea the latest business technology
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Safe secure services for your online email account
                        </li>
                        <li>
                          <i className="flaticon-tick-1"></i>
                          Digital content marketing online
                        </li>
                      </ul>

                      <div className="tab-btn">
                        <Link href="/services/details" className="default-btn">
                          Read More <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsTab;
