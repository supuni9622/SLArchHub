import React, { Component } from 'react'

class ActivitiesQuickPosts extends Component {
    render() {
        return (
            <>
               {/*} <section className="wrapper">*/}
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <div className="row align-items-center my-3">
          <div className="col-xl-7">
            <h4 className="text-muted mb-4">Recent Client Activities</h4>
            <div id="accordion">
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn btn-block bg-secondary text-light text-left"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                  >
                    <img
                      src="avatar/person1.jpg"
                      width={20}
                      className="mr-3 rounded"
                    />
                    Nirmala posted a new comment
                  </button>
                </div>
                <div
                  className="collapse show"
                  id="collapseOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis earum modi delectus fugiat consectetur eaque
                    harum obcaecati, saepe id vitae, dolore aliquam! Quos,
                    doloribus quisquam.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn btn-block bg-secondary text-light text-left"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                  >
                    <img
                      src="avatar/person2.jpg"
                      width={20}
                      className="mr-3 rounded"
                    />
                    Shenali posted a new comment
                  </button>
                </div>
                <div
                  className="collapse"
                  id="collapseTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis earum modi delectus fugiat consectetur eaque
                    harum obcaecati, saepe id vitae, dolore aliquam! Quos,
                    doloribus quisquam.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn btn-block bg-secondary text-light text-left"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                  >
                    <img
                      src="avatar/person3.jpg"
                      width={20}
                      className="mr-3 rounded"
                    />
                    Santhush posted a new comment
                  </button>
                </div>
                <div
                  className="collapse"
                  id="collapseThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis earum modi delectus fugiat consectetur eaque
                    harum obcaecati, saepe id vitae, dolore aliquam! Quos,
                    doloribus quisquam.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn btn-block bg-secondary text-light text-left"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                  >
                    <img
                      src="avatar/person4.jpg"
                      width={20}
                      className="mr-3 rounded"
                    />
                    Nisali posted a new comment
                  </button>
                </div>
                <div
                  className="collapse"
                  id="collapseFour"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis earum modi delectus fugiat consectetur eaque
                    harum obcaecati, saepe id vitae, dolore aliquam! Quos,
                    doloribus quisquam.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn btn-block bg-secondary text-light text-left"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                  >
                    <img
                      src="avatar/person5.jpg"
                      width={20}
                      className="mr-3 rounded"
                    />
                    Menaka posted a new comment
                  </button>
                </div>
                <div
                  className="collapse"
                  id="collapseFive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis earum modi delectus fugiat consectetur eaque
                    harum obcaecati, saepe id vitae, dolore aliquam! Quos,
                    doloribus quisquam.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn btn-block bg-secondary text-light text-left"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                  >
                    <img
                      src="avatar/person1.jpg"
                      width={20}
                      className="mr-3 rounded"
                    />
                    Amaya posted a new comment
                  </button>
                </div>
                <div
                  className="collapse"
                  id="collapseSix"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis earum modi delectus fugiat consectetur eaque
                    harum obcaecati, saepe id vitae, dolore aliquam! Quos,
                    doloribus quisquam.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 mt-5">
            <div className="card rounded">
              <div className="card-body">
                <h5 className="text-muted text-center mb-4">
                  Quick Status Post
                </h5>
                <ul className="list-inline text-center py-3">
                  <li className="list-inline-item mr-4">
                    <a href="#" target=" ">
                      <i className="fas fa-pencil-alt text-success" />
                      <span className="h6 text-muted">Status</span>
                    </a>
                  </li>
                  <li className="list-inline-item mr-4">
                    <a href="#" target=" ">
                      <i className="fas fa-camera text-info" />
                      <span className="h6 text-muted">Photo</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target=" ">
                      <i className="fas fa-map-marker-alt text-primary" />
                      <span className="h6 text-muted">Check-in</span>
                    </a>
                  </li>
                </ul>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control py-2 mb-3"
                      placeholder="What's Your Status..."
                    />
                    <button
                      type="button"
                      className="btn btn-block text-uppercase font-weight-bold text-light bg-info py-2 mb-5"
                    >
                      Submit Post
                    </button>
                  </div>
                </form>
                <div className="row">
                  <div className="col-6">
                    <div className="card bg-light">
                      <i className="far fa-calendar-alt fa-8x text-warning d-block m-auto py-3" />
                      <div className="card-body">
                        <p className="card-text text-center font-weight-bold text-uppercase">
                          Mon, may 26
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card bg-light">
                      <i className="far fa-clock fa-8x text-danger d-block m-auto py-3" />
                      <div className="card-body">
                        <p className="card-text text-center font-weight-bold text-uppercase">
                          3:50 am
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
       {/*} </section>*/}

            </>
        )
    }
}

export default ActivitiesQuickPosts