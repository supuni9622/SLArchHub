import React from 'react'

function Testimonial() {
    return (
        <React.Fragment>
            <section id="testimoniel">
              <div className="container" id="testimonielContainer">
                <h1>What People Say About SLArchHub</h1>
                <div className="row">
                  <div className="col-md-3 text-center">
                    <div className="profile">
                      <img className="user" src="images/women2.jpg" alt="client pic" />
                        <blockquote className="blockquote">
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Labore voluptas hic praesentium doloremque
                          </p>
                          <footer className="blockquote-footer">
                            Mrs. Niranjanee Dhammika <cite title="Source Title">Client</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                    <div className="col-md-3 text-center">
                      <div className="profile">
                        <img className="user" src="images/man1.jpg" alt="architect pic" />
                          <blockquote className="blockquote">
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                              posuere erat a ante. Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Labore voluptas hic praesentium doloremque
                            </p>
                            <footer className="blockquote-footer">
                              Mr.Dhammika Senanayake{" "}
                              <cite title="Source Title">Charted Architect</cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                      <div className="col-md-3 text-center">
                        <div className="profile">
                          <img
                            className="user"
                            src="images/woman1.jpg"
                            alt="interior designer pic"
                          />
                          <blockquote className="blockquote">
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                              posuere erat a ante. Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Labore voluptas hic praesentium doloremque
                            </p>
                            <footer className="blockquote-footer">
                              Mrs. Samanthi Fernando{" "}
                              <cite title="Source Title">Interior Designer</cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                      <div className="col-md-3 text-center">
                        <div className="profile">
                          <img
                            className="user"
                            src="images/man4.jpg"
                            alt="construction company CEO pic"
                          />
                          <blockquote className="blockquote">
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                              posuere erat a ante. Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Labore voluptas hic praesentium doloremque
                            </p>
                            <footer className="blockquote-footer">
                              Mr. Nimal Disabayake{" "}
                              <cite title="Source Title">CEO, ABC Constructions</cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        </React.Fragment>
    )
}

export default Testimonial
