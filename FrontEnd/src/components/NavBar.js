import React, {Component}from 'react'
import '../css/page_header_&_footer.css';
import RightMenu from './RightMenu';


class NavBar extends Component {
    render(){
    return (
            <>
            <div className="fixed-top">
              <div className="jumbotron">
                <div className="container">
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                       <a className="nav-link" href="/">
                       <img
                          className="w-100"
                          id="SLArchHubLogo"
                          src="Logo/SLArchHubLogo2.png"
                          alt="SLArchHub Logo"
                        />
                       </a>
                    </li>
                <div className="d-none d-md-flex flex-row align-items-center" id="top-nav-links">
                    <li className="nav-item">
                       <a className="nav-link" href="/about" style={{fontWeight: 'bold'}}>ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/work-flow" style={{fontWeight: 'bold'}}>WORK FLOW</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/service" style={{fontWeight: 'bold'}}>SERVICE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact" style={{fontWeight: 'bold'}}> CONTACT</a>
                    </li>
                </div>
              </ul>
            </div>
    {/*</div>*/}
            </div>
  {/*Main Navigation Bar */}
            <nav id="mainNavbar" className="navbar navbar-expand-lg navbar-light bg-light">
               <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav mr-auto">
                       <li className="nav-item">
                           <a className="nav-link" href="/" style={{fontWeight: 'bold'}}>
                              Home <span className="sr-only">(current)</span>
                           </a>
                       </li>
                       <li className="nav-item dropdown">
                           <a
                              className="nav-link dropdown-toggle"
                              href="/projects"
                              id="navbarDropdown"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              style={{fontWeight: 'bold'}}
                            >
                            Projects
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/projects" style={{fontWeight: 'bold'}}>
                                        All Projects
                                    </a>
                                    <a className="dropdown-item" href="/exterior-design-projects" style={{fontWeight: 'bold'}}>
                                        Exterior Design Projects
                                    </a>
                                    <a className="dropdown-item" href="/interior-design-projects" style={{fontWeight: 'bold'}}>
                                        Interior Design Projects
                                    </a>
                                    <a className="dropdown-item" href="/landscape-design-projects" style={{fontWeight: 'bold'}}>
                                        Landscape Design Projects
                                    </a>
                                    <a className="dropdown-item" href="/sustainable-projects" style={{fontWeight: 'bold'}}>
                                        Sustainable Projects
                                    </a>
                                </div>
                            </li> 
                        <li className="nav-item">
                            <a
                            className="nav-link"
                            href="/exterior-designers"
                            style={{fontWeight: 'bold'}}
                            >
                                Exterior Designers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            className="nav-link"
                            href="/interior-designers"
                            style={{fontWeight: 'bold'}}
                            >
                                Interior Designers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/landscape-designers" style={{fontWeight: 'bold'}}>
                                Landscape Designers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/construction-companies" style={{fontWeight: 'bold'}}>
                            Construction Companies
                            </a>
                        </li>
                    </ul>
                  {/*} <form className="form-inline my-2 my-lg-0">
                        <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        />
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
                            <i className="fas fa-search" />
                        </button>
                    </form> */}
                    <RightMenu/> 
                </div>
                
            </nav>
            
        </div> 
        </>
    )
}
}

export default NavBar