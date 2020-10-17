import React, { Component } from 'react'

class SideBar extends Component {
    render() {
        return (
            <>
                <aside>
  <div id="sidebar" className="nav-collapse ">
    {/* sidebar menu start*/}
    <ul className="sidebar-menu" id="nav-accordion">
     
      <li className="mt">
        <a className="active" href="archi_dashboard.html" target=" ">
          <i className="fa fa-dashboard" />
          <span>Dashboard</span>
        </a>
      </li>
      <li className="sub-menu">
        <a href="#" target=" ">
          <i className="fas fa-house-user" />
          <span>Projects</span>
        </a>
      </li>
      <li className="sub-menu">
        <a href="#" target=" ">
          <i className="fa fa-book" />
          <span>Work Schedule</span>
        </a>
      </li>
      <li className="sub-menu">
        <a href="#" target=" ">
          <i className="fas fa-user-tie" />
          <span>Soil Engineers</span>
        </a>
      </li>
      <li className="sub-menu">
        <a href="#" target=" " className="accordion">
          <i className="fa fa-comments-o" />
          <span>Chats</span>
        </a>
        <ul className="sub" id="chat">
          <li>
            <a href="lobby.html" target=" ">
              Chat Lobby
            </a>
          </li>
          <li>
            <a href="chat_room.html" target=" ">
              {" "}
              Chat Room
            </a>
          </li>
        </ul>
      </li>
      <li className="sub-menu">
        <a href="#" target=" ">
          <i className="fas fa-star" />
          <span>Reviews</span>
        </a>
      </li>
      <li className="sub-menu">
        <a href="#" target=" ">
          <i className="fas fa-chart-bar" />
          <span>Reports</span>
        </a>
      </li>
      <li className="sub-menu">
        <a href="#" target=" ">
          <i className="fas fa-file-invoice-dollar" />
          <span>Invoice</span>
        </a>
      </li>
      <li>
        <a href="#" target=" ">
          <i className="fa fa-envelope" />
          <span>Mail </span>
          <span className="label label-theme pull-right mail-info">2</span>
        </a>
      </li>
      <li>
        <a href="google_maps.html" target=" ">
          <i className="fa fa-map-marker" />
          <span>Google Maps </span>
        </a>
      </li>
    </ul>
    {/* sidebar menu end*/}
  </div>
</aside>

            </>
        )
    }
}

export default SideBar
