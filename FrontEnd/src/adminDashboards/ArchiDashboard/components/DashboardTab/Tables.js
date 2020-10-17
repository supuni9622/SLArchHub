import React, { Component } from 'react'

class Tables extends Component {
    render() {
        return (
            <>
                {/*<section className="wrapper">*/}
  <div className="container-fluid">
    <div className="row my-5">
      <div className="col">
        <div className="row align-items-center">
          <div className="col-xl-6 col-12 mb-4 mb-xl-0">
            <h3 className="text-muted text-center mb-3">Recent Payments</h3>
            <table className="table table-striped bg-light text-center">
              <thead>
                <tr className="text-muted">
                  <th>#</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Charith</td>
                  <td>Rs.6000</td>
                  <td>14/04/2020</td>
                  <td>
                    <button type="button" className="btn btn-info btn-sm">
                      Message
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Samanalee</td>
                  <td>Rs.10,000</td>
                  <td>7/04/2020</td>
                  <td>
                    <button type="button" className="btn btn-info btn-sm">
                      Message
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>SLArchHub</td>
                  <td>Rs.8500</td>
                  <td>30/03/2020</td>
                  <td>
                    <button type="button" className="btn btn-info btn-sm">
                      Message
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Sithumi</td>
                  <td>Rs.6000</td>
                  <td>22/03/2020</td>
                  <td>
                    <button type="button" className="btn btn-info btn-sm">
                      Message
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Suresh</td>
                  <td>Rs.7500</td>
                  <td>15/03/2020</td>
                  <td>
                    <button type="button" className="btn btn-info btn-sm">
                      Message
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* pagination */}
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a href="#" target=" " className="page-link py-2 px-3">
                    <span>«</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" target=" " className="page-link py-2 px-3">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" target=" " className="page-link py-2 px-3">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" target=" " className="page-link py-2 px-3">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" target=" " className="page-link py-2 px-3">
                    <span>»</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* end of pagination */}
          </div>
          <div className="col-xl-6 col-12">
            <h3 className="text-muted text-center mb-3">Recent Earnings</h3>
            <table className="table table-dark table-hover text-center">
              <thead>
                <tr className="text-muted">
                  <th>#</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Monica</td>
                  <td>Rs.25,000</td>
                  <td>12/04/2020</td>
                  <td>
                    <span className="badge badge-success w-75 py-2">
                      Approved
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Nisith</td>
                  <td>Rs.10,000</td>
                  <td>3/04/2020</td>
                  <td>
                    <span className="badge badge-success w-75 py-2">
                      Approved
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Amila</td>
                  <td>Rs.30,000</td>
                  <td>25/03/2020</td>
                  <td>
                    <span className="badge badge-danger w-75 py-2">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Anjana</td>
                  <td>Rs.16,000</td>
                  <td>16/03/2020</td>
                  <td>
                    <span className="badge badge-danger w-75 py-2">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Asitha</td>
                  <td>Rs.5000</td>
                  <td>12/03/2020</td>
                  <td>
                    <span className="badge badge-success w-75 py-2">
                      Approved
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>6</th>
                  <td>Kalani</td>
                  <td>Rs.12,000</td>
                  <td>5/03/1010</td>
                  <td>
                    <span className="badge badge-danger w-75 py-2">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* pagination */}
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a href="#" target=" " className="page-link py-2 px-3">
                    <span>Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" target=" " className="page-link py-2 px-3">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" target=" " className="page-link py-2 px-3">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" target=" " className="page-link py-2 px-3">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" target=" " className="page-link py-2 px-3">
                    <span>Next</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* end of pagination */}
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

export default Tables
