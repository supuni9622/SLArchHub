import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import EducationList from "./EducationList";
import AddEducation from "./AddEducation";
import EditEducation from "./EditEducation";


class Education extends Component {
    render() {
        return (
            <Router>
                <div className="col-sm-10 col-md-9 mb-4" id="profile_other">
                <Card>
                    <Card.Header>
                        <Nav variant="pills" defaultActiveKey="archi-dashboard/profile/education">
                            <Nav.Item>
                                <Nav.Link href="/archi-dashboard/profile/education">Education Qualifications</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/archi-dashboard/profile/education/add-education">Add</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <div className="wrapper">
                            <Switch>
                                <Route exact path='/archi-dashboard/profile/education/education' component={EducationList} />
                                <Route path="/archi-dashboard/profile/education/add-education" component={AddEducation} /> 
                                <Route path="/archi-dashboard/profile/education/edit-education/:id" component={EditEducation} />
                            </Switch>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            </Router>
        )
    }
}

export default Education