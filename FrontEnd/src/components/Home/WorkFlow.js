import React from 'react'

function WorkFlow() {
    return (
        <React.Fragment>
            <section className="service_part">
              <div className="container">
                <div className="row">
                 
                    <div className="col-lg-8 section_tittle">
                      <h2 className="display-4" style={{color: 'white'}}>Make Your Dream With Us</h2>
                    </div>
                    <hr style={{color: 'white'}} />
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row justify-content-end align-items-center single_service">
                      <div className="col-lg-6 col-md-6 order-1 order-md-1">
                        <img
                          className="rounded"
                          src="images/interior 10.jpg"
                          alt="Fastly Collaborate"
                        />
                      </div>
                      <div className="col-lg-5 col-md-6 order-2 order-md-2">
                        <div className="service_text">
                          <h3 style={{color: 'white', fontWeight:'bold'}}>Fastly Collaborate</h3>
                          <p style={{color: 'white'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Quisipsum{" "}
                          </p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center mt_less_115 single_service">
                    <div className="col-lg-5 col-md-6 order-2 order-md-1">
                      <div className="service_text">
                        <h3  style={{color: 'white', fontWeight:'bold'}}>Perfectly Design</h3>
                          <p  style={{color: 'white'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            tempor incididunt ut labore et dolore magna aliqua.
                            Quisipsum{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 order-1 order-md-2">
                        <img
                          className="rounded"
                          src="images/hotel interior 113.jpg"
                          alt="Perfectly Design"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="single_service_slide">
                    <div className="row justify-content-end align-items-center single_service">
                    <div className="col-lg-6 col-md-6">
                      <img
                        className="rounded"
                        src="images/eco hose.jpg"
                        alt="Carefully Planned"
                      />
                    </div>
                    <div className="col-lg-5 col-md-6">
                      <div className="service_text">
                        <h3  style={{color: 'white', fontWeight:'bold'}}>Carefully Planned</h3>
                          <p  style={{color: 'white'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Quisipsum{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mt_less_115 single_service">
                      <div className="col-lg-5 col-md-6 order-2 order-md-1">
                        <div className="service_text">
                          <h3 style={{color: 'white', fontWeight:'bold'}}>Smartly Execute</h3>
                            <p  style={{color: 'white'}}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Quisipsum{" "}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 order-1 order-md-2">
                          <img
                            className="rounded"
                            src="images/hotel.jpg"
                            alt="Smartly Execute"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-outline-light btn-md mt-20">
                    Get Started &gt;&gt;
                  </button>
                </div>
              </section>
        </React.Fragment>
    )
}

export default WorkFlow
