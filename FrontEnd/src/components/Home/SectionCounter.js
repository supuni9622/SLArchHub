import React, { Component } from 'react'

class SectionCounter extends Component {
    render() {
        return (
            <>
              <section className="overview">
                <div className="container my-5 py-5">
                  <div className="row justify-content-center">
                    <div className="col-sm-6 col-lg-2 mb-2 mx-1">
                      <div className="card text-center py-4">
                        <div className="media-body">
                          <i className="fas fa-crown" style={{ fontSize: 40, color:'rgb(198, 200, 201)' }} />
                          <h2 className="card-title">500+</h2>
                          <p className="card-text">Amazing Projects</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-2 mb-4 mb-xl-0 mx-1">
                      <div className="card text-center py-4">  
                        <div className="media-body">
                          <i className="fas fa-smile-beam" style={{ fontSize: 40, color:'rgb(198, 200, 201)'}} />
                          <h2 className="card-title">300+</h2>
                          <p className="card-text">Happy Clients</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-2 mb-4 mb-xl-0 mx-2">
                      <div className="card text-center py-4">
                        <div className="media-body">
                          <i className="fas fa-pencil-alt" style={{ fontSize: 40, color:'rgb(198, 200, 201)'}} />
                          <h2 className="card-title">100+</h2>
                          <p className="card-text">Proffesional Architects</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-2 mb-4 mb-xl-0 mx-1">
                      <div className="card text-center py-4">
                        <i className="fas fa-users" style={{ fontSize: 40, color:'rgb(198, 200, 201)'}} />
                        <div className="media-body">
                          <h2 className="card-title">50+</h2>
                          <p className="card-text">Talented Interior Designers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-2 mb-4 mb-xl-0 mx-1">
                      <div className="card text-center py-4">
                        <div className="media-body">
                          <i className="fas fa-drafting-compass" style={{ fontSize: 40, color:'rgb(198, 200, 201)'}} />
                          <h2 className="card-title">100+</h2>
                          <p className="card-text">Trusted Construction Companies</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
        )
    }
}

export default SectionCounter
