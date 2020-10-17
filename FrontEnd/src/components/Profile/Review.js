import React, { Component } from 'react'

class Review extends Component {
    render() {
        return (
            <>
              <div className="card my-4" id="review">
                <div className="card-header">
                  <b>
                    <i className="fas fa-file-alt" /> Reviews
                  </b>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-3">
                        <img
                          src="avatar/person4.jpg"
                          alt=" "
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <div className="col-9">
                        <h6>Nisali Basnayake</h6>
                          <ul className="list-unstyled list-inline rating mb-0">
                            <li className="list-inline-item my-md-2 mx-1 text-align-left p-2">
                              <a href="#" className="badge badge-danger">
                                4.5
                              </a>
                            </li>
                            <li className="list-inline-item mr-0">
                              <i className="fas fa-star amber-text"> </i>
                            </li>
                            <li className="list-inline-item mr-0">
                              <i className="fas fa-star amber-text" />
                            </li>
                            <li className="list-inline-item mr-0">
                              <i className="fas fa-star amber-text" />
                            </li>
                            <li className="list-inline-item mr-0">
                              <i className="fas fa-star amber-text" />
                            </li>
                            <li className="list-inline-item">
                              <i className="fas fa-star-half-alt amber-text" />
                            </li>
                            <li className="list-inline-item">
                              <p className="text-muted"> 3 months ago</p>
                            </li>
                          </ul>
                          <br />
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a, in
                            amet nesciunt aspernatur accusantium et perferendis quaerat, quasi
                            possimus, perspiciatis atque ab recusandae dignissimos voluptate
                            laudantium culpa maxime? Nobis!
                          </p>
                        </div>
                      </div>
                    </li>
                  <li className="list-group-item">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src="avatar/person4.jpg"
                        alt=" "
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="col-9">
                      <h6>Nisali Basnayake</h6>
                        <ul className="list-unstyled list-inline rating mb-0">
                          <li className="list-inline-item my-md-2 mx-1 text-align-left p-2">
                            <a href="#" className="badge badge-danger">
                               4.5
                            </a>
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="fas fa-star amber-text"> </i>
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="fas fa-star amber-text" />
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="fas fa-star amber-text" />
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="fas fa-star amber-text" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star-half-alt amber-text" />
                          </li>
                          <li className="list-inline-item">
                            <p className="text-muted"> 3 months ago</p>
                          </li>
                        </ul>
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a, in
                          amet nesciunt aspernatur accusantium et perferendis quaerat, quasi
                          possimus, perspiciatis atque ab recusandae dignissimos voluptate
                          laudantium culpa maxime? Nobis!
                        </p>
                      </div>
                    </div>
                  </li>
                <li className="list-group-item">
                <div className="row">
                  <div className="col-3">
                    <img
                      src="avatar/person4.jpg"
                      alt=" "
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="col-9">
                    <h6>Nisali Basnayake</h6>
                      <ul className="list-unstyled list-inline rating mb-0">
                        <li className="list-inline-item my-md-2 mx-1 text-align-left p-2">
                          <a href="#" className="badge badge-danger">
                             4.5
                          </a>
                        </li>
                        <li className="list-inline-item mr-0">
                          <i className="fas fa-star amber-text"> </i>
                        </li>
                        <li className="list-inline-item mr-0">
                          <i className="fas fa-star amber-text" />
                        </li>
                        <li className="list-inline-item mr-0">
                          <i className="fas fa-star amber-text" />
                        </li>
                        <li className="list-inline-item mr-0">
                          <i className="fas fa-star amber-text" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fas fa-star-half-alt amber-text" />
                        </li>
                        <li className="list-inline-item">
                          <p className="text-muted"> 3 months ago</p>
                        </li>
                      </ul>
                      <br />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a, in
                          amet nesciunt aspernatur accusantium et perferendis quaerat, quasi
                          possimus, perspiciatis atque ab recusandae dignissimos voluptate
                          laudantium culpa maxime? Nobis!
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <button className="btn btn-info btn-block my-0" type="button">
                  View More
                </button>
              </div>
            </>
        )
    }
}

export default Review
