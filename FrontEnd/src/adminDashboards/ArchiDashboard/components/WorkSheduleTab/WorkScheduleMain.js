import React from 'react'
import AppointmentTable from './AppointmentTable';
import TaskProggress from './TaskProgress';

function WorkScheduleMain() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8">
                    <AppointmentTable></AppointmentTable>
                </div>
                <div className="col-4">
                    <TaskProggress></TaskProggress>
                </div>
            </div>    
        </div>
    )
}

export default WorkScheduleMain
