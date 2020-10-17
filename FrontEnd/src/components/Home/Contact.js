import React from 'react'

function Contact() {
    return (
        <React.Fragment>
          <section id="contact">
            <div className="container">
              <h1>Get In Touch</h1>
                <div className="row">
                  <div className="col-md-6">
                    <form className="contact-form">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={4}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      {/* Button trigger modal */}
                      <button
                        type="submit"
                        className="btn btn-info btn-md"
                        data-toggle="modal"
                        data-target="#staticBackdrop"
                      >
                        Send Message
                      </button>
          {/* Modal   But this is not working correctly -----------------------------------------------------------------------
          <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
               </button>
              </div>
              <div class="modal-body">
              Your message was send succesfully.!!
              </div>
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Message</button>
              </div>
              </div>
            </div>
          </div>---------------------------------------------------------------------------*/}
          </form>
        </div>
        <div className="col-md-6 contact-info">
          <div className="follow">
            <b>Email Adress : </b>
            <i className="far fa-envelope" style={{ fontSize: 20}} /> slarchhub@gmail
          </div>
          <div className="follow">
            <b>Phone : </b>
            <i className="fas fa-phone-volume" style={{ fontSize: 20}} /> +94 77 345 3456
          </div>
          <div className="follow">
            <label>
              <b>Get Social : </b>
            </label>
              <a href="/">
                <i className="fab fa-facebook" style={{ fontSize: 20}}/>
              </a>
              <a href="/">
                <i className="fab fa-youtube" style={{ fontSize: 20}} />
              </a>
              <a href="/">
                <i className="fab fa-twitter" style={{ fontSize: 20}} />
              </a>
              <a href="/">
                <i className="fab fa-google-plus" style={{ fontSize: 20}}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </React.Fragment>
    )
}

export default Contact
