import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';

class Header extends Component {
    constructor(){
      super()
      this.state = {
        firstName: '',
        lastName: ''
      }
    }

    componentDidMount(){
      const token = localStorage.usetoken
      const decode = jwt_decode(token)
      this.setState({
        firstName: decoded.firstName,
        lastName: decoded.lastName
      })
    }
    render() {
        return (
            <>
                {
  /*header start*/
}
<header className="header black-bg">
  <div className="sidebar-toggle-box">
    <div
      className="fas fa-bars tooltips"
      data-placement="right"
      data-original-title="Toggle Navigation"
    />
  </div>
  {/*logo start*/}
  <a href="#" target=" " id="logo" className="logo">
    <img src="Logo/SLArchHub Logo2.png" />
  </a>
  <h3>Hello {this.state.firstName} {this.state.lastName} </h3>
  {/*logo end*/}
  <div className="nav notify-row" id="top_menu">
    {/*  notification start */}
    <ul className="nav top-menu">
      {/* settings start */}
      <li className="dropdown">
        <a
          data-toggle="dropdown"
          className="dropdown-toggle"
          href="#"
          target=" "
        >
          <i className="fas fa-tasks" />
          <span className="badge bg-theme">4</span>
        </a>
        <ul className="dropdown-menu extended tasks-bar">
          <div className="notify-arrow notify-arrow-green" />
          <li>
            <p className="green">You have 4 pending tasks</p>
          </li>
          <li>
            <a href="#" target=" ">
              <div className="task-info">
                <div className="desc">Design EJ house plan</div>
                <div className="percent">40%</div>
              </div>
              <div className="progress progress-striped">
                <div
                  className="progress-bar progress-bar-success"
                  role="progressbar"
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "40%" }}
                >
                  <span className="sr-only">40% Complete (success)</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" target=" ">
              <div className="task-info">
                <div className="desc">Get breif from Mr.Shan and discuss</div>
                <div className="percent">60%</div>
              </div>
              <div className="progress progress-striped">
                <div
                  className="progress-bar progress-bar-theme"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "60%" }}
                >
                  <span className="sr-only">60% Complete (theme)</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" target=" ">
              <div className="task-info">
                <div className="desc">Post the SW plan for construction</div>
                <div className="percent">80%</div>
              </div>
              <div className="progress progress-striped">
                <div
                  className="progress-bar progress-bar-info"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "80%" }}
                >
                  <span className="sr-only">80% Complete</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" target=" ">
              <div className="task-info">
                <div className="desc">Payments Sent</div>
                <div className="percent">70%</div>
              </div>
              <div className="progress progress-striped">
                <div
                  className="progress-bar progress-bar-danger"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "70%" }}
                >
                  <span className="sr-only">70% Complete (Important)</span>
                </div>
              </div>
            </a>
          </li>
          <li className="external">
            <a href="#" target=" ">
              See All Tasks
            </a>
          </li>
        </ul>
      </li>
      {/* settings end */}
      {/* inbox dropdown start*/}
      <li id="header_inbox_bar" className="dropdown">
        <a
          data-toggle="dropdown"
          className="dropdown-toggle"
          href="#"
          target=" "
        >
          <i className="fa fa-envelope-o" />
          <span className="badge bg-theme">5</span>
        </a>
        <ul className="dropdown-menu extended inbox">
          <div className="notify-arrow notify-arrow-green" />
          <li>
            <p className="green">You have 5 new messages</p>
          </li>
          <li>
            <a href="#" target=" ">
              <span className="photo">
                <img alt="avatar" src="avatar/person1.jpg" />
              </span>
              <span className="subject">
                <span className="from">Dinesh Rathanayake</span>
                <span className="time">Just now</span>
              </span>
              <span className="message">Hi mate, how is everything?</span>
            </a>
          </li>
          <li>
            <a href="#" target=" ">
              <span className="photo">
                <img alt="avatar" src="avatar/person2.jpg" />
              </span>
              <span className="subject">
                <span className="from">Divya Manian</span>
                <span className="time">40 mins.</span>
              </span>
              <span className="message">Hi, I need your help with this.</span>
            </a>
          </li>
          <li>
            <a href="#" target=" ">
              <span className="photo">
                <img alt="avatar" src="avatar/person3.jpg" />
              </span>
              <span className="subject">
                <span className="from">Santhush Fernando</span>
                <span className="time">2 hrs.</span>
              </span>
              <span className="message">Love your new Dashboard.</span>
            </a>
          </li>
          <li>
            <a href="#" target=" ">
              <span className="photo">
                <img alt="avatar" src="avatar/person4.jpg" />
              </span>
              <span className="subject">
                <span className="from">Wishwani Sayuri</span>
                <span className="time">4 hrs.</span>
              </span>
              <span className="message">Please, answer asap.</span>
            </a>
          </li>
          <li>
            <a href="#" target=" ">
              See all messages
            </a>
          </li>
        </ul>
      </li>
      {/* inbox dropdown end */}
      {/* notification dropdown start*/}
      <li id="header_notification_bar" className="dropdown">
        <a
          data-toggle="dropdown"
          className="dropdown-toggle"
          href="#"
          target=" "
        >
          <i className="fa fa-bell-o" />
          <span className="badge bg-theme">7</span>
        </a>
        <ul className="dropdown-menu extended notification">
          <div className="notify-arrow notify-arrow-green" />
          <li>
            <p className="green">You have 7 new notifications</p>
          </li>
          <li>
            <a href="#" target=" ">
              <span className="label label-danger">
                <i className="fa fa-bolt" />
              </span>
              Server Overloaded.
              <span className="small italic">4 mins.</span>
            </a>
          </li>
          <li>
            <a href="#" target=" ">
              <span className="label label-theme">
                <i className="fa fa-bell" />
              </span>
              Memory #2 Not Responding.
              <span className="small italic">30 mins.</span>
            </a>
          </li>
          <li>
            <a href="#" target=" ">
              <span className="label label-danger">
                <i className="fa fa-bolt" />
              </span>
              Disk Space Reached 85%.
              <span className="small italic">2 hrs.</span>
            </a>
          </li>
          <li>
            <a href="#" target=" ">
              <span className="label label-success">
                <i className="fa fa-plus" />
              </span>
              New User Registered.
              <span className="small italic">3 hrs.</span>
            </a>
          </li>
          <li>
            <a href="#" target=" ">
              See all notifications
            </a>
          </li>
        </ul>
      </li>
      {/* notification dropdown end */}
    </ul>
    {/*  notification end */}
  </div>
  {/* Problem with the small screen side bar toggling*/}
  <div className="top-menu">
    <ul className="nav pull-right top-menu" id="left-menu">
      <li>
        <b>DASH BOARD</b>
      </li>
      <li>
        <a
          className="logout"
          href="#"
          target=" "
          data-toggle="modal"
          data-target="#logout"
        >
          Logout
        </a>
      </li>
    </ul>
  </div>
</header>

            </>
        )
    }
}

export default Header