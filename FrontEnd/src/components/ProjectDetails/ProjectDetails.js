import React from 'react'
import ProjectTop from './ProjectTop';
//import ProjectLeft from './ProjectLeft';
//import ProjectRight from './ProjectRight';

import '../../css/project_details.css';
import SingleProject from './ProjectTop';

function ProjectDetails() {
    return (
        <React.Fragment>
            <SingleProject/>
           {/*} <div className="container project_main">
                <div className="row">
                    <div class="col-4" id="description">
                        <ProjectLeft></ProjectLeft>
                    </div>
                    <div class="col-8" id="rightSide">
                        <ProjectRight></ProjectRight>
                   </div>
                </div>
    </div>*/}
            
        </React.Fragment>
    )
}

export default ProjectDetails
