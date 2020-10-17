import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

class TaskCard extends Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask() {
        axios.delete('http://localhost:5000/archi-dashboard/work-schedule/delete-task/' + this.props.obj._id)
            .then((res) => {
                console.log('Task successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <Card style={{ padding: 20, marginBottom: 20}}>
                <Card.Header as="h4">{this.props.obj.taskName}</Card.Header>
                <Card.Body>
                    <dl>
                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Client Name</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.clientName}
                        </dd>
                        </div>

                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Date of Submission</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.date} 
                        </dd>
                        </div>
                       
                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Task Type</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.taskType}
                        </dd>
                        </div>
                       
                       <div className="row" style={{ padding: 20}}>
                       <dt className="col-sm-3 text-truncate"><b>Sustainability</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.sustainability}
                        </dd>
                       </div>

                       <div className="row" style={{ padding: 20}}>
                       <dt className="col-sm-3"><b>Design Category</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.designCategory}
                        </dd>
                       </div>
                       
                       <div className="row" style={{ padding: 20}}>
                       <dt className="col-sm-3"><b>Floor Area</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.area}
                        </dd>
                       </div>
                        
                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Materials</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.materials}
                        </dd>
                        </div>
                       
                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Client Brief</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.clientBrief}
                        </dd>
                        </div>
                       
                       <div className="row" style={{ padding: 20}}>
                       <dt className="col-sm-3"><b>Budget</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.budget}
                        </dd>
                       </div>
                       
                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Location</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.location}
                        </dd>
                        </div>
                        
                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Special Notes</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.special}
                        </dd>
                        </div>
                        
                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Architectural Process</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.architecturalProcess}
                        </dd>
                        </div>
                       
                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Payment Type</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.paymentType}
                        </dd>
                        </div>
                       
                       <div className="row" style={{ padding: 20}}>
                       <dt className="col-sm-3"><b>Discussions/ Changes</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.changes}
                        </dd>
                       </div>
                       
                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Soil Engineer</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.soilEngineer}
                        </dd>
                        </div>
                      
                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Quantity Surveyer</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.quantitySurveyer}
                        </dd>
                        </div>

                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Municiple Council</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.mc}
                        </dd>
                        </div>

                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Construction Party</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.constructionParty}
                        </dd>
                        </div>

                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Interior Designer</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.interiorDesigner}
                        </dd>
                        </div>

                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Landscape Designer</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.landscapeDesigner}
                        </dd>
                        </div>

                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Soil Test Result</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.soilTest}
                        </dd>
                        </div>

                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Bill of Quantity</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.boq}
                        </dd>
                        </div>
                        
                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>MC Approval</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.mcApproval}
                        </dd>
                        </div>

                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Plan</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.plan}
                        </dd>
                        </div>

                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Soil Engineer's Payment Rate</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.paySoil}%
                        </dd>
                        </div>

                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Quantity Surveyer's Payment Rate</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.payQuantity}%
                        </dd>
                        </div>
                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Subscription</b></dt>
                        <dd className="col-sm-9">
                            {this.props.obj.payWeb}%
                        </dd>
                        </div>
                        <div className="row" style={{ padding: 20}}>
                        <dt className="col-sm-3"><b>Other Costs</b></dt>
                        <dd className="col-sm-9">
                            Rs. {this.props.obj.otherCosts}
                        </dd>
                        </div>
                    </dl>

                    <Link id="edit" classNameName="edit-link" to={"/archi-dashboard/work-schedule/edit-task/" + this.props.obj._id}>
                        <i className="fas fa-edit"></i>   Edit
                    </Link>
                    <Button id="delete" onClick={this.deleteTask} size="sm" variant="primary"> 
                        <i className="fas fa-trash-alt"></i> Delete
                    </Button>    
                </Card.Body>
            </Card>                       
        )
    }
}

export default TaskCard

