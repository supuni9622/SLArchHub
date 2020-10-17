import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TimeSlotForm from "./TimeSlotForm";
import EditTimeSlotForm from './EditTimeSlotForm';
import TimeTabel from './TimeTable';
import TaskForm from './TaskForm';
import OngoingTasks from './OngoingTasks';
import EditTaskForm from './EditTaskForm';
import WorkScheduleMain from './WorkScheduleMain';
import Work from '../SyncWork/WorkSchedule';
//import "../../css/works.css";

function Works() {
    return (
        <Router>
            <React.Fragment>
               <div className="contaner-fluid" id="navBar">
                    <nav class="nav nav-pills flex-column flex-sm-row">
                         <a class="flex-sm-fill text-sm-center nav-link" href="/archi-dashboard/work-schedule">Work Schedule</a>
                        <a class="flex-sm-fill text-sm-center nav-link active" href="/archi-dashboard/work-schedule/time-table">Weekly Time Slots</a>
                        <a class="flex-sm-fill text-sm-center nav-link" href="/archi-dashboard/work-schedule/add-time-slot">Add Time Slots</a>
                        <a class="flex-sm-fill text-sm-center nav-link" href="/archi-dashboard/work-schedule/ongoing-tasks">Tasks</a>
                        <a class="flex-sm-fill text-sm-center nav-link" href="/archi-dashboard/work-schedule/add-task">Add Task</a>
                    </nav>
                </div> 
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="wrapper">
                                    <Switch>
                                        <Route path='/archi-dashboard/work-schedule' exact component={Work} />
                                       {/*} <Route path='/archi-dashboard/work-schedule/time-table' component={TimeTabel} />
                                        <Route path="/archi-dashboard/work-schedule/add-time-slot" component={TimeSlotForm} /> 
                                        <Route path="/archi-dashboard/work-schedule/edit-time-slot/:id" component={EditTimeSlotForm} />
                                        <Route path="/archi-dashboard/work-schedule/ongoing-tasks" component={OngoingTasks}/>
                                        <Route path="/archi-dashboard/work-schedule/add-task" component={TaskForm}/>
                                        <Route path="/archi-dashboard/work-schedule/edit-task/:id" component={EditTaskForm} /> */}
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>    
        </Router>
    )
}

export default Works
