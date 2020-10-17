import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import OrganizationList from "./OrganizationList";
import AddOrganization from "./AddOrganization";
import EditOrganization from "./EditOrganization";


class Organizations extends Component {
    render() {
        return (
            <Router>
                <Card className="mb-4">
                    <Card.Header>
                        <Nav variant="pills" defaultActiveKey="/archi-dashboard/profile/organizations">
                            <Nav.Item>
                                <Nav.Link href="/archi-dashboard/profile/organizations">Organizations</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/archi-dashboard/profile/add-organization">Add </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <div className="wrapper">
                            <Switch>
                                <Route exact path='/archi-dashboard/profile/organizations' component={OrganizationList} />
                                <Route path="/archi-dashboard/profile/add-organization" component={AddOrganization} /> 
                                <Route path="/archi-dashboard/profile/edit-organization/:id" component={EditOrganization} />
                            </Switch>
                        </div>
                    </Card.Body>
                </Card>
            </Router>
        )
    }
}

export default Organizations