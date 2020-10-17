import React from 'react'

function AboutUs() {
    return (
        <React.Fragment>
            <section id="about">
              <div className="container" id ="aboutContainer">
                <div className="row align-items-center">
                  <div className="col-md-6 text-center">
                    <div className="row justify-content-center">
                      <div className="col-10 col-lg-8 blub">
                        <h2 className="display-4 text-muted">About SLArchHub</h2>
                          <hr />
                          <p className="lead">
                            SLArchHub is the most visited source of tools, inspiration, 
                            and knowledge for those who will imagine, design, and build 
                            our future world. In 2008, while working as architects, our 
                            founders realized that there was no place for their peers to 
                            experience the latest projects, products, and trends.
                          </p>
                          <button className="btn btn-outline-light btn-md">
                            Read More &gt;&gt;
                          </button>
                        </div>
                      </div>
                    </div>
                  <div className="col-md-6 text-center mt-5 mt-md-0">
                  <img
                    className="img -fluid rounded"
                    src="images/villa 1.jpg"
                    alt="About Us"
                  />
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
    )
}

export default AboutUs
