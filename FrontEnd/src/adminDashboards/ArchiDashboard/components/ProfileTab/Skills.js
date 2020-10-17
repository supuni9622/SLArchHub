import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import SkillList from "./SkillList";
import AddSkill from "./AddSkill";
import EditSkill from "./EditSkill";


class Skills extends Component {
    render() {
        return (
            <Router>
                <Card className="mb-4">
                    <Card.Header>
                        <Nav variant="pills" defaultActiveKey="/archi-dashboard/profile/skills">
                            <Nav.Item>
                                <Nav.Link href="/archi-dashboard/profile/skills">Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/archi-dashboard/profile/add-skill">Add Skill</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <div className="wrapper">
                            <Switch>
                                <Route exact path='/archi-dashboard/profile/skills' component={SkillList} />
                                <Route path="/archi-dashboard/profile/add-skill" component={AddSkill} /> 
                                <Route path="/archi-dashboard/profile/edit-skill/:id" component={EditSkill} />
                            </Switch>
                        </div>
                    </Card.Body>
                </Card>
            </Router>
        )
    }
}

export default Skills