import React, { Component } from 'react'

class Services extends Component {
    render() {
        return (
            <>
              <div className="card my-4" style={{ width: "18rem" }} id="service">
                <div className="card-header">
                  <b>
                    {" "}
                      <i className="fas fa-handshake" /> Service Provided
                  </b>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="far fa-check-circle" /> 3D Modelling
                  </li>
                  <li className="list-group-item">
                    <i className="far fa-check-circle" /> Enhancd Detailing
                  </li>
                  <li className="list-group-item">
                    <i className="far fa-check-circle" /> Texturing &amp; Shading
                  </li>
                  <li className="list-group-item">
                    <i className="far fa-check-circle" /> Background Scene
                  </li>
                  <li className="list-group-item">
                    <i className="far fa-check-circle" /> Source File
                  </li>
                </ul>
              </div>
            </>
        )
    }
}

export default Services
