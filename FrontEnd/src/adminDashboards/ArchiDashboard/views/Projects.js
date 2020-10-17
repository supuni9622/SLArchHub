import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import "bootstrap/dist/css/bootstrap.css";

//import ArchiProjects from "../components/ProjectsTab/ArchiProjects";
import CreateProjects from "../components/ProjectsTab/CreateProjects";
import EditProjects from "../components/ProjectsTab/EditProjects";
import ProjectList from "../components/ProjectsTab/ProjectList";

function ArchitectProjects() {
    return (
       

        <Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-project"} className="nav-link">
                ArchiProjects
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-project"} className="nav-link">
                  Create Project
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-project/:id"} className="nav-link">
                  Edit Projects
                </Link>
    </Nav> */}

              <Nav>
                <Link to={"/project-list"} className="nav-link">
                  Projects List
                </Link>
            </Nav> 
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={ArchiProjects} />
                <Route path="/create-project" component={CreateProjects} />
                <Route path="/edit-project/:id" component={EditProjects} /> 
                <Route path="/project-list" component={ProjectList} /> 
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>

    )
}

export default ArchitectProjects
