import React, { Component } from 'react'

class ProggressTaskList extends Component {
    render() {
        return (
            <>
                {/*<section className="wrapper"> */}
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <div className="row my-3 align-items-center">
          <div className="col-xl-6 col-12 mb-4 mb-xl-0">
            <div className="bg-dark text-white p-4 rounded">
              <h4 className="mb-5"> Rates</h4>
              <h6 className="mb-3"> Reviews</h6>
              <div className="progress mb-4" style={{ height: 20 }}>
                <div
                  className="progress-bar progress-bar-striped font-weight-bold"
                  style={{ width: "91%" }}
                >
                  91%
                </div>
              </div>
              <h6 className="mb-3">Reccomendations</h6>
              <div className="progress mb-4" style={{ height: 20 }}>
                <div
                  className="progress-bar progress-bar-striped font-weight-bold bg-success"
                  style={{ width: "82%" }}
                >
                  82%
                </div>
              </div>
              <h6 className="mb-3">Connectivity</h6>
              <div className="progress mb-4" style={{ height: 20 }}>
                <div
                  className="progress-bar progress-bar-striped font-weight-bold bg-danger"
                  style={{ width: "67%" }}
                >
                  67%
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <h4 className="text-muted p-3 mb-3">Tasks:</h4>
            <div className="container-fluid bg-white">
              <div className="row py-3 mb-4 task-border align-items-center">
                <div className="col-1">
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="col-sm-9 col-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="col-1">
                  <a
                    href="#"
                    target=" "
                    data-toggle="tooltip"
                    title="<h6>edit</h6>"
                    data-html="true"
                    data-placement="top"
                  >
                    <i className="fas fa-edit fa-lg text-success mr-2" />
                  </a>
                </div>
                <div className="col-1">
                  <a
                    href="#"
                    target=" "
                    data-toggle="tooltip"
                    title="<h6>delete</h6>"
                    data-html="true"
                    data-placement="top"
                  >
                    <i className="fas fa-trash-alt fa-lg text-danger" />
                  </a>
                </div>
              </div>
            </div>
            <div className="container-fluid bg-white">
              <div className="row py-3 mb-4 task-border align-items-center">
                <div className="col-1">
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="col-sm-9 col-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="col-1">
                  <a
                    href="#"
                    target=" "
                    data-toggle="tooltip"
                    title="<h6>edit</h6>"
                    data-html="true"
                    data-placement="top"
                  >
                    <i className="fas fa-edit fa-lg text-success mr-2" />
                  </a>
                </div>
                <div className="col-1">
                  <a
                    href="#"
                    target=" "
                    data-toggle="tooltip"
                    title="<h6>delete</h6>"
                    data-html="true"
                    data-placement="top"
                  >
                    <i className="fas fa-trash-alt fa-lg text-danger" />
                  </a>
                </div>
              </div>
            </div>
            <div className="container-fluid bg-white">
              <div className="row py-3 mb-4 task-border align-items-center">
                <div className="col-1">
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="col-sm-9 col-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="col-1">
                  <a
                    href="#"
                    target=" "
                    data-toggle="tooltip"
                    title="<h6>edit</h6>"
                    data-html="true"
                    data-placement="top"
                  >
                    <i className="fas fa-edit fa-lg text-success mr-2" />
                  </a>
                </div>
                <div className="col-1">
                  <a
                    href="#"
                    target=" "
                    data-toggle="tooltip"
                    title="<h6>delete</h6>"
                    data-html="true"
                    data-placement="top"
                  >
                    <i className="fas fa-trash-alt fa-lg text-danger" />
                  </a>
                </div>
              </div>
            </div>
            <div className="container-fluid bg-white">
              <div className="row py-3 mb-4 task-border align-items-center">
                <div className="col-1">
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="col-sm-9 col-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="col-1">
                  <a
                    href="#"
                    target=" "
                    data-toggle="tooltip"
                    title="<h6>edit</h6>"
                    data-html="true"
                    data-placement="top"
                  >
                    <i className="fas fa-edit fa-lg text-success mr-2" />
                  </a>
                </div>
                <div className="col-1">
                  <a
                    href="#"
                    target=" "
                    data-toggle="tooltip"
                    title="<h6>delete</h6>"
                    data-html="true"
                    data-placement="top"
                  >
                    <i className="fas fa-trash-alt fa-lg text-danger" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/*</section>*/}

            </>
        )
    }
}

export default ProggressTaskList
