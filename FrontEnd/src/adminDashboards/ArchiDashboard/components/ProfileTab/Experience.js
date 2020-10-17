import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import ExperienceList from "./ExperienceList";
import AddExperience from "./AddExperience";
import EditExperience from "./EditExperience";


class Experience extends Component {
    render() {
        return (
            <Router>
                <div className="col-sm-10 col-md-9 mb-4" id="profile_other">
                <Card>
                    <Card.Header>
                        <Nav variant="pills" defaultActiveKey="archi-dashboard/profile/experience">
                            <Nav.Item>
                                <Nav.Link href="/archi-dashboard/profile/experience">Work Experience</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/archi-dashboard/profile/add-experience">Add</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <div className="wrapper">
                            <Switch>
                                <Route exact path='/archi-dashboard/profile/experience' component={ExperienceList} />
                                <Route path="/archi-dashboard/profile/add-experience" component={AddExperience} /> 
                                <Route path="/archi-dashboard/profile/edit-experience/:id" component={EditExperience} />
                            </Switch>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            </Router>
        )
    }
}

export default Experience