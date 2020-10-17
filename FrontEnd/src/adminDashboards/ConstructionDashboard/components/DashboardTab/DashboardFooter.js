import React, { Component } from 'react'

class DashboardFooter extends Component {
    render() {
        return (
            <>
              <footer>
                <div className="container-fluid" style={{backgroundColor: 'black', color:'white', position:'fixed', bottom:'0'}}>
                  <div className="row">
                    <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                      <div className="row border-top pt-3">
                          <div className="col-lg-6 text-center">
                            <ul className="list-inline">
                              <li className="list-inline-item mr-2">
                                <a href="#" target=" " style={{color:'white'}}>
                                  About
                                </a>
                              </li>
                              <li className="list-inline-item mr-2">
                                <a href="/" target=" " style={{color:'white'}}>
                                  Home
                                </a>
                              </li>
                              <li className="list-inline-item mr-2">
                                <a href="/projects" target=" " style={{color:'white'}}>
                                  Projects
                                </a>
                              </li>
                              <li className="list-inline-item mr-2">
                                <a href="#" target=" " style={{color:'white'}}>
                                  Help
                                </a>
                              </li>
                              <li className="list-inline-item mr-2">
                                <a href="#" target=" " style={{color:'white'}}>
                                  Contact
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 text-center">
                            <p>© 2020 Copyright.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>

            </>
        )
    }
}

export default DashboardFooter
