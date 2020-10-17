import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import PostedProjects from "../components/PostProject/PostedProjects";
import PostProjectForm from "../components/PostProject/PostProjectForm";
import ProjectProposal from '../components/PostProject/ProjectProposal';

import "../css/archiProjects.css";

function PostProject() {
    return (
        <Router>
            <React.Fragment>
               <div className="contaner-fluid">
                     <div className="row">
                        <a href="/bids" class="btn btn-secondary btn-md active add-project" role="button" aria-pressed="true">
                            <i class="fas fa-laptop-house"></i>   Posted Projects
                        </a> 
                        <a href="/add-bid" class="btn btn-secondary btn-md active add-project" role="button" aria-pressed="true">
                            <i class="fas fa-plus"></i>    Post Project
                        </a> 
                    </div>
                </div> 
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="wrapper">
                                    <Switch>
                                        <Route exact path='/bids' component={PostedProjects} />
                                        <Route path="/add-bid" component={PostProjectForm} /> 
                                        <Route path="/bids:id/proposals" component={ProjectProposal} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>    
        </Router>
    )
}

export default PostProject
