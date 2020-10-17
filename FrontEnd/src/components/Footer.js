import React from 'react'

function Footer() {
    return (
        <React.Fragment>
            <footer className="ftco-footer ftco-section" id="footer">
              <div className="container">
                <div className="row py-5 justify-content-center">
                  <div className="col-md-4">
                    <div className="ftco-footer-widget mb-4">
                      <h2 className="ftco-heading-2">Links</h2>
                        <ul className="list-unstyled">
                          <li>
                            <a href="/" target="_blank">
                              <span>
                                <i className="fas fa-arrow-right" />
                              </span>{" "}
                              Home
                            </a>
                          </li>
                          <li>
                            <a href="/about" target="_blank">
                              <span>
                                <i className="fas fa-arrow-right" />
                              </span>{" "}
                              About
                            </a>
                          </li>
                          <li>
                            <a href="/work-flow" target="_blank">
                              <span>
                                <i className="fas fa-arrow-right" />
                              </span>{" "}
                              Work Flow
                            </a>
                          </li>
                          <li>
                            <a href="/services" target="_blank">
                              <span>
                                <i className="fas fa-arrow-right" />
                              </span>{" "}
                              Services
                            </a>
                          </li>
                          <li>
                            <a href="/contact" target="_blank">
                              <span>
                                <i className="fas fa-arrow-right" />
                              </span>{" "}
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="ftco-footer-widget mb-4 ml-md-4">
                        <h2 className="ftco-heading-2">Categories</h2>
                          <ul className="list-unstyled">
                            <li>
                              <a href="/projects" target="_blank">
                                <span>
                                  <i className="fas fa-arrow-right" />
                                </span>{" "}
                                Projects
                              </a>
                            </li>
                            <li>
                              <a href="/exterior-designers" target="_blank">
                                <span>
                                  <i className="fas fa-arrow-right" />
                                </span>{" "}
                                Exterior Designers
                              </a>
                            </li>
                            <li>
                              <a href="/interior-designers" target="_blank">
                                <span>
                                  <i className="fas fa-arrow-right" />
                                </span>{" "}
                                Interior Designers
                              </a>
                            </li>
                            <li>
                              <a href="/landscape-designers" target="_blank">
                                <span>
                                  <i className="fas fa-arrow-right" />
                                </span>{" "}
                                Landscape Designers
                              </a>
                            </li>
                            <li>
                              <a href="/construction-companies" target="_blank">
                                <span>
                                  <i className="fas fa-arrow-right" />
                                </span>{" "}
                                Construction Comapnies
                              </a>
                            </li>
                            <li>
                              <a href="/contact" target="_blank">
                                <span>
                                  <i className="fas fa-arrow-right" />
                                </span>{" "}
                                Contact
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="ftco-footer-widget mb-4">
                          <h2 className="ftco-heading-2">Help</h2>
                            <ul className="list-unstyled">
                              <li>
                                <a href="/faq" target="_blank">
                                  <span>
                                    <i className="fas fa-arrow-right" />
                                  </span>{" "}
                                  FAQ
                                </a>
                              </li>
                              <li>
                                <a href="/terms-and-conditions" target="_blank">
                                  <span>
                                    <i className="fas fa-arrow-right" />
                                  </span>{" "}
                                  Terms &amp; Conditions
                                </a>
                              </li>
                              <li>
                                <a href="/privacy-policy" target="_blank">
                                  <span>
                                    <i className="fas fa-arrow-right" />
                                  </span>{" "}
                                  Privacy Policy
                                </a>
                              </li>
                              <li>
                                <a href="/chat-bot">
                                  <span>
                                    <i className="fas fa-arrow-right" />
                                  </span>{" "}
                                  ChatBot
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                          <p>
                              Copyright © All rights reserved
                          </p>
                        </div>
                      </div>
                    </div>
                  </footer>
        </React.Fragment>
    )
}

export default Footer
