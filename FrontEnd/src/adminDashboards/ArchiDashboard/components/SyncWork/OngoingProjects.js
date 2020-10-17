import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import axios from 'axios';

import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function OngoingProjects() {
    const user = useSelector(state => state.user)

    const [Tasks, setTasks] = useState([])
    let variable = { owner: localStorage.getItem('userId') }

    useEffect(() => {
        axios.post('http://localhost:5000/archi-dashboard/work-schedule/ongoingProject', variable)
        .then(response => {
            if (response.data.success) {
                console.log(response.data.task)
                setTasks(response.data.task)
            } else {
                alert('Failed to get Ongoin Projects')
            }
        })
    },[])

    const onClickDelete = (taskId, owner) => {

        const variables = {
            taskId: taskId,
            owner: owner,
        }

        axios.post('http://localhost:5000/archi-dashboard/work-schedule/removeProject', variables)
            .then(response => {
                if (response.data.success) {
                    
                    axios.post('http://localhost:5000/archi-dashboard/work-schedule/ongoingProject', variable)
                    .then(response => {
                        if (response.data.success) {
                            console.log(response.data.task)
                            setTasks(response.data.task)
                        } else {
                            alert('Failed to get ongoing projects')
                        }
                    })
                } else {
                    alert('Failed to Remove From Tasks')
                }
            })
    }


    const renderCards = Tasks.map((task, index) => {

        return <Card style={{ width: '28rem', backgroundColor: 'white', color: 'black', padding: '20px', boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)' }} id="taskCard" key={index}>
                <Card.Title>{task.taskName}</Card.Title>
                <Card.Body>
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>Client's Name</h6>
                        </div>
                        <div className="col-6">
                            <h6>{task.clientName}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>Stated Date</h6>
                        </div>
                        <div className="col-6">
                            <h6>{task.startDate}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>Design Type</h6>
                        </div>
                        <div className="col-6">
                            <h6>{task.designCategory}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>Client Brief</h6>
                        </div>
                        <div className="col-6">
                            <h6>{task.clientBriefStatus}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>Soil Test</h6>
                        </div>
                        <div className="col-6">
                            <h6>{task.soilTestStatus}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>Sketch Design</h6>
                        </div>
                        <div className="col-6">
                            <h6>{task.sketchDesignStatus}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>Discussion</h6>
                        </div>
                        <div className="col-6">
                            <h6>{task.discussionStatus}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>Re-design</h6>
                        </div>
                        <div className="col-6">
                            <h6>{task.redesignStatus}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>MC Approval</h6>
                        </div>
                        <div className="col-6">
                            <h6>{task.mcApprovalStatus}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>BoQ</h6>
                        </div>
                        <div className="col-6">
                            <h6>{task.boqStatus}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>Finale Design</h6>
                        </div>
                        <div className="col-6">
                            <h6>{task.finaleDesignStatus}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>Payment </h6>
                        </div>
                        <div className="col-6">
                            <h6>{task.paymentStatus}</h6>
                        </div>
                    </div>
                    
                    <div style={{marginTop:'10px'}}>
                    <Link id="edit" className="edit-link" to={"/archi-dashboard/edit-task/" + task._id} style={{color:'blue', padding:'20px', margin:"10px"}}>
                        <i style={{fontSize: '1rem', paddingRight:'2px', marginRight:'0px'}} className="fas fa-edit"></i>   Update
                    </Link> 
                    <Button variant="info" id="delete" onClick={() => onClickDelete(task.taskId, task.owner)} size="sm"> 
                    <i  style={{fontSize: '1rem',  paddingRight:'2px', marginRight:'5px'}} className="fas fa-trash-alt"></i> Delete</Button>
                    </div>
                </Card.Body>
            </Card>

    })

    return (
        <div style={{ width: '100%', margin: '1rem' }}>
            <h4 style={{fontWeight:'bold', textAlign: 'center'}}> Ongoing Projects</h4> 
         
                {renderCards}
            
        </div>
    )
}

export default OngoingProjects
