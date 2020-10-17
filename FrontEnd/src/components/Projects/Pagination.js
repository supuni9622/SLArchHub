import React, { Component } from 'react'

class Pagination extends Component {
    render() {
        return (
            <div>
                  <nav aria-label="...">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                           <span className="page-link">Previous</span>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item active" aria-current="page">
        <span className="page-link">
          2<span className="sr-only">(current)</span>
        </span>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          4
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          5
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          Next
        </a>
      </li>
    </ul>
  </nav>
            </div>
        )
    }
}

export default Pagination
