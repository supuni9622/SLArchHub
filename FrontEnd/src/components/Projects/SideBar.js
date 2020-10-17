import React from 'react'

function SideBar() {
    return (
        <>
            <div id="mySidebar" className="sidebar">
  <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">
    <i className="fas fa-times" />
  </a>
  <div className="accordion" id="accordionExample">
    <div className="card bg-light">
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <button
            className="btn btn-outline-dark button_collapse"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Style <i className="fas fa-chevron-circle-down" />
          </button>
        </h2>
      </div>
      <div
        id="collapseOne"
        className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body px-0">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="traditional"
                />
                <label className="form-check-label" htmlFor="traditional">
                  Traditional{" "}
                  <span className="badge badge-info badge-pill">14</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="modern"
                />
                <label className="form-check-label" htmlFor="modern">
                  Modern <span className="badge badge-info badge-pill">89</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="contemporary"
                />
                <label className="form-check-label" htmlFor="contemporary">
                  Contemporary{" "}
                  <span className="badge badge-info badge-pill">45</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="sustainable"
                />
                <label className="form-check-label" htmlFor="sustainable">
                  Sustainable{" "}
                  <span className="badge badge-info badge-pill">22</span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card bg-light">
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <button
            className="btn btn-outline-dark button_collapse"
            type="button"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Category
          </button>
        </h2>
      </div>
      <div
        id="collapseTwo"
        className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body px-0">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="single"
                />
                <label className="form-check-label" htmlFor="single">
                  Single Storey{" "}
                  <span className="badge badge-info badge-pill">14</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="two"
                />
                <label className="form-check-label" htmlFor="two">
                  Two Storey{" "}
                  <span className="badge badge-info badge-pill">89</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="three"
                />
                <label className="form-check-label" htmlFor="three">
                  Three Storey{" "}
                  <span className="badge badge-info badge-pill">45</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="more"
                />
                <label className="form-check-label" htmlFor="more">
                  More Storey{" "}
                  <span className="badge badge-info badge-pill">22</span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card bg-light">
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <button
            className="btn btn-outline-dark button_collapse"
            type="button"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Floor Area
          </button>
        </h2>
      </div>
      <div
        id="collapseThree"
        className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body px-0">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="smallest"
                />
                <label className="form-check-label" htmlFor="smallest">
                  ≤1000 sqrt{" "}
                  <span className="badge badge-info badge-pill">14</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="small"
                />
                <label className="form-check-label" htmlFor="small">
                  1000 sqrt - 2000 sqrt{" "}
                  <span className="badge badge-info badge-pill">89</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="middle"
                />
                <label className="form-check-label" htmlFor="middle">
                  2000 sqrt - 3000 sqrt{" "}
                  <span className="badge badge-info badge-pill">45</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="large"
                />
                <label className="form-check-label" htmlFor="large">
                  3000 sqrt - 4000 sqrt{" "}
                  <span className="badge badge-info badge-pill">22</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="largest"
                />
                <label className="form-check-label" htmlFor="largest">
                  ≥4000 sqrt{" "}
                  <span className="badge badge-info badge-pill">22</span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card bg-light">
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <button
            className="btn btn-outline-dark button_collapse"
            type="button"
            data-toggle="collapse"
            data-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Materials
          </button>
        </h2>
      </div>
      <div
        id="collapseFour"
        className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body px-0">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="brick"
                />
                <label className="form-check-label" htmlFor="brick">
                  Brick <span className="badge badge-info badge-pill">14</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="concrete"
                />
                <label className="form-check-label" htmlFor="concrete">
                  Concrete{" "}
                  <span className="badge badge-info badge-pill">89</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="stone"
                />
                <label className="form-check-label" htmlFor="stone">
                  Stone <span className="badge badge-info badge-pill">45</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="glass"
                />
                <label className="form-check-label" htmlFor="glass">
                  Glass <span className="badge badge-info badge-pill">22</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="steel"
                />
                <label className="form-check-label" htmlFor="steel">
                  Steel <span className="badge badge-info badge-pill">22</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="wood"
                />
                <label className="form-check-label" htmlFor="wood">
                  Wood <span className="badge badge-info badge-pill">22</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="bamboo"
                />
                <label className="form-check-label" htmlFor="bamboo">
                  Bamboo <span className="badge badge-info badge-pill">22</span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card bg-light">
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <button
            className="btn btn-outline-dark button_collapse"
            type="button"
            data-toggle="collapse"
            data-target="#collapseFive"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Rooms
          </button>
        </h2>
      </div>
      <div
        id="collapseFive"
        className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body px-0">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="bed1"
                />
                <label className="form-check-label" htmlFor="bed1">
                  One Room{" "}
                  <span className="badge badge-info badge-pill">14</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="bed2"
                />
                <label className="form-check-label" htmlFor="bed2">
                  Two Rooms{" "}
                  <span className="badge badge-info badge-pill">89</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="bed3"
                />
                <label className="form-check-label" htmlFor="bed3">
                  Three Rooms
                  <span className="badge badge-info badge-pill">45</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="bed4"
                />
                <label className="form-check-label" htmlFor="bed4">
                  Four Rooms{" "}
                  <span className="badge badge-info badge-pill">22</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="bed5"
                />
                <label className="form-check-label" htmlFor="bed5">
                  ≥Five Rooms{" "}
                  <span className="badge badge-info badge-pill">22</span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card bg-light">
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <button
            className="btn btn-outline-dark button_collapse"
            type="button"
            data-toggle="collapse"
            data-target="#collapseSix"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Bath Rooms
          </button>
        </h2>
      </div>
      <div
        id="collapseSix"
        className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body px-0">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="bath1"
                />
                <label className="form-check-label" htmlFor="bath1">
                  One Bath Room{" "}
                  <span className="badge badge-info badge-pill">14</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="bath2"
                />
                <label className="form-check-label" htmlFor="bath2">
                  Two Bath Rooms{" "}
                  <span className="badge badge-info badge-pill">89</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="bath3"
                />
                <label className="form-check-label" htmlFor="bath3">
                  Three Bath Rooms
                  <span className="badge badge-info badge-pill">45</span>
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="bath4"
                />
                <label className="form-check-label" htmlFor="bath4">
                  ≥Four Bed Rooms{" "}
                  <span className="badge badge-info badge-pill">22</span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default SideBar
