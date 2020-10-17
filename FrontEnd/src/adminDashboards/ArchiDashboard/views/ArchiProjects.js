import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import ProjectGrid from "../components/ProjectsTab/ProjectGrid";
import AddProject from "../components/ProjectsTab/AddProject";
import EditProject from '../components/ProjectsTab/EditProject';

import "../css/archiProjects.css";

function ArchiProjects({ match, location }) {
    const {
        params: {id}
      } = match;

    return (
        <Router>
            <React.Fragment>
               
                     <div className="row">
                     <a href="/archi-dashboard/projects/" class="btn btn-secondary btn-md active add-project" role="button" aria-pressed="true">
                     <i class="fas fa-laptop-house projectIcon"></i>   My Projects
                    </a> 
                   <a href="/archi-dashboard/projects/create-project" class="btn btn-secondary btn-md active add-project" role="button" aria-pressed="true">
                        <i class="fas fa-plus  projectIcon"></i>    Add Projects
                    </a> 
                    </div>
                    
                    <div className="container-fluid" style={{marginTop:'2px', paddingTop:'5px'}}>
                        <div className="wrapper">
                            <Switch>
                                <Route exact path='/archi-dashboard/projects/' component={ProjectGrid}/>
                                <Route path="/archi-dashboard/projects/create-project" component={AddProject} /> 
                                <Route path="/archi-dashboard/projects/edit-project/:id" component={EditProject} />
                            </Switch>
                        </div>
                    </div>
            </React.Fragment>    
        </Router>
    )
}

export default ArchiProjects
