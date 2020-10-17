import React from 'react'
import ExteriorDesigners from './ExteriorDesigners'
import InteriorDesigners from './InteriorDesigners'
import LandscapeDesigners from './LandscapeDesigners'
import ConstructionCompanies from './ConstructionCompanies'
import Clients  from './Clients'
import Projects from './Projects'
import SLArchHubProjects from './SLArchHubProjects'

function All() {
    return (
        <div className="row" style={{margin: '15px', padding: '10px'}}>
            <div className="col-md-6 col-sm-12">
                <ExteriorDesigners/>
                <InteriorDesigners/>
                <LandscapeDesigners/>
                <ConstructionCompanies/>
                <Clients/>
                <Projects/>
                <SLArchHubProjects/>
            </div>
        </div>
    )
}

export default All
