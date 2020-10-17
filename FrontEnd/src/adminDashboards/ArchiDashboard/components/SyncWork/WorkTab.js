import React from 'react'
import Work from './WorkSchedule'
import AddTask from './AddTask'
import OngoingProjects from './OngoingProjects'

function WorkTab() {
    return (
        <div>
            <div className = "row" style={{marginBottom:'50px'}}>
                <div className="col-md-8 col-s-12">
                    <Work/>
                </div>
                <div className="col-md-4 col-sm-12">
                    <AddTask/>
                </div>
            </div>
            <div className="container" style={{marginBottom:'50px'}}>
                <OngoingProjects/>
            </div>
        </div>
    )
}

export default WorkTab
