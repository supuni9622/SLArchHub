import React from 'react'

function Service() {
    return (
        <React.Fragment>
            <section id="clientService">
              <div className="container">
                <div className="row justify-content-center clientService">
                  <h1 className="display-4">Get Work Done Faster on SLArchHub</h1>
                    <hr />
                    <div className="col-md-6 text-align-start">
                      <h3>
                        <i className="far fa-check-circle" style={{ fontSize: 25, color:'black'}}/> Find Most Suitable Architect
                      </h3>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In harum cum
                        quidem, soluta iure incidunt quis reprehenderit quibusdam expedita
                        repellendus.
                      </p>
                    <h3>
                      <i className="far fa-check-circle" style={{ fontSize: 25, color:'black'}}/> Find Most Suitable Architect
                    </h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. In harum cum
                      quidem, soluta iure incidunt quis reprehenderit quibusdam expedita
                      repellendus.
                    </p>
                    <h3>
                      <i className="far fa-check-circle" style={{ fontSize: 25, color:'black'}}/> Find Most Suitable Architect
                    </h3>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In harum cum
                        quidem, soluta iure incidunt quis reprehenderit quibusdam expedita
                        repellendus.
                      </p>
                      <h3>
                        <i className="far fa-check-circle" style={{ fontSize: 25, color:'black'}}/> Find Most Suitable Architect
                      </h3>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In harum cum
                          quidem, soluta iure incidunt quis reprehenderit quibusdam expedita
                          repellendus.
                        </p>
                     </div>
                    <div className="col-md-6 homeVideo">
                      <div className="order-sm-2 order-md-1">
                        {" "}
                        {/*Order is not working here on small screen*/}
                          <video width={520} height={294} controls autoPlay>
                            <source
                              src="Logo/video.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <div className="order-sm-1 order-md-2">
                          {" "}
                          {/*Order is not working here on small screen*/}
                        <h3>
                          <i className="far fa-check-circle" style={{ fontSize: 25, color:'black'}}/> Find Most Suitable Architect
                        </h3>
                          <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In harum
                            cum quidem, soluta iure incidunt quis reprehenderit quibusdam
                            expedita repellendus.
                          </p>
                          <button className="btn btn-outline-dark btn-md">
                            Read More &gt;&gt;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        </React.Fragment>
    )
}
export default Service
