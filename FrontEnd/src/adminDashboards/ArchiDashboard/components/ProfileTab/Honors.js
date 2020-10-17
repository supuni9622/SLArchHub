import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HonorsList from "./HonorsList";
import AddHonors from "./AddHonors";
import EditHonors from "./EditHonors";


class Honors extends Component {
    render() {
        return (
            <Router>
                <Card className="mb-4">
                    <Card.Header>
                        <Nav variant="pills" defaultActiveKey="/honors">
                            <Nav.Item>
                                <Nav.Link href="/archi-dashboard/profile/honors">Achievements</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/archi-dashboard/profile/add-honor">Add </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <div className="wrapper">
                            <Switch>
                                <Route exact path='/archi-dashboard/honors' component={HonorsList} />
                                <Route path="/archi-dashboard/add-honor" component={AddHonors} /> 
                                <Route path="/archi-dashboard/edit-honor/:id" component={EditHonors} />
                            </Switch>
                        </div>
                    </Card.Body>
                </Card>
            </Router>
        )
    }
}

export default Honors