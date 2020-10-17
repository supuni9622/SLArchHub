import React, { Component } from 'react'

class Cards extends Component {
    render() {
        return (
            <>
                {/*<section className="wrapper">*/}
  <div className="container-fluid">
    <div className="row"> 
      <div className="col">
       <div className="row pt-md-2 mt-md-2 mb-2">
          <div className="col-xl-3 col-sm-6 p-2">
            <div className="card card-common">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <i className="fas fa-search-dollar fa-3x text-warning" />
                  <div className="text-right text-secondary">
                    <h5>Earnings</h5>
                    <h3>Rs.120,000.00</h3>
                  </div>
                </div>
              </div>
              <div className="card-footer text-secondary">
                <i className="fas fa-sync mr-3" />
                <span>Updated Now</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 p-2">
            <div className="card card-common">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <i className="fas fa-money-bill-alt fa-3x text-success" />
                  <div className="text-right text-secondary">
                    <h5>Expenses</h5>
                    <h3>Rs.39,000.00</h3>
                  </div>
                </div>
              </div>
              <div className="card-footer text-secondary">
                <i className="fas fa-sync mr-3" />
                <span>Updated Now</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 p-2">
            <div className="card card-common">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <i className="fas fa-users fa-3x text-info" />
                  <div className="text-right text-secondary">
                    <h5>Members</h5>
                    <h3>120</h3>
                  </div>
                </div>
              </div>
              <div className="card-footer text-secondary">
                <i className="fas fa-sync mr-3" />
                <span>Updated Now</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 p-2">
            <div className="card card-common">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <i className="fas fa-chart-line fa-3x text-danger" />
                  <div className="text-right text-secondary">
                    <h5>Visitors</h5>
                    <h3>1,000</h3>
                  </div>
                </div>
              </div>
              <div className="card-footer text-secondary">
                <i className="fas fa-sync mr-3" />
                <span>Updated Now</span>
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

export default Cards
