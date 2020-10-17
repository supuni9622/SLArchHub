import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { connect } from "react-redux";

import axios from 'axios';

class AddTask extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeTaskName = this.onChangeTaskName.bind(this);
        this.onChangeClientName = this.onChangeClientName.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeTaskType = this.onChangeTaskType.bind(this);
        this.onChangeSustainability = this.onChangeSustainability.bind(this);
        this.onChangeDesignCategory = this.onChangeDesignCategory.bind(this);
       // this.onChangeIsWholeProcess = this.onChangeIsWholeProcess.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          taskName: '',
          clientName: '',
          startDate: '',
          taskType: '',
          sustainability: '',
          designCategory: '',
         // isWholeProcess: ''
        }
      }

      onChangeTaskName(e) {
        this.setState({taskName: e.target.value})
      }
    
      onChangeClientName(e) {
        this.setState({clientName: e.target.value})
      }

      onChangeStartDate(e) {
        this.setState({startDate: e.target.value})
      }

      onChangeTaskType(e) {
        this.setState({taskType: e.target.value})
      }

      onChangeSustainability(e) {
        const target = e.target;
        const value = target.name === 'sustainability' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      onChangeDesignCategory(e) {
        this.setState({designCategory: e.target.value})
      }

     /* onChangeIsWholeProcess(e) {
        const target = e.target;
        const value = target.name === 'isWholeProcess' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        }); 
      }*/
     
      onSubmit(e) {
        e.preventDefault()

        if (this.props.user.userData && !this.props.user.userData.isAuth) {
            return alert('Please Log in First')
        }

        const taskObject = {
            taskName: this.state.taskName,
            clientName: this.state.clientName,
            startDate: this.state.startDate,
            taskType: this.state.taskType,
            sustainability: this.state.sustainability,
            designCategory: this.state.designCategory,
           // isWholeProcess: this.state.isWholeProcess,
            owner: this.props.user.userData._id

          };

          axios.post('http://localhost:5000/archi-dashboard/work-schedule/add-task', taskObject)
            .then(res => console.log(res.data));

            this.setState({
                taskName: '',
                clientName: '',
                startDate: '',
                taskType: '',
                sustainability: '',
                designCategory: '',
               // isWholeProcess:  ''
            })

        }
          

    render() {
        return (
            <div className="container form-wrapper" id="task">
                <h3>Start New Project</h3>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group as={Row} controlId="taskName">
                            <Form.Label column sm={2}>
                                Task Name
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.taskName} 
                                    onChange={this.onChangeTaskName} 
                                    placeholder="Singhe Villa" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="clientName">
                            <Form.Label column sm={2}>
                                Client's Name
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.clientName} 
                                    onChange={this.onChangeClientName} 
                                    placeholder="Mr. Nimal Dasanayake" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="date">
                            <Form.Label column sm={2}>
                                Start Date
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="date" 
                                    value={this.state.startDate} 
                                    onChange={this.onChangeStartDate} 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                    Project Type
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control as="select" value={this.state.taskType} onChange={this.onChangeTaskType}>
                                <option value="null">Select Project Type</option>
                                <option value="Exterior-Design">Exterior Design</option>
                                <option value="Landscape-Design">Landscape Design</option>
                            </Form.Control>
                            </Col>
                        </Form.Group>
                    
                        <Form.Group as={Row} controlId="sustainability">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Form.Check 
                                    type="checkbox" 
                                    name="sustainability"
                                    checked={this.state.sustainability}
                                    onChange={this.onChangeSustainability} 
                                    label="This should be a sustainable design." 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="designCategory">
                            <Form.Label column sm={2}>
                                Design Category
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control as="select" value={this.state.designCategory} onChange={this.onChangeDesignCategory}>
                                    <option value="null">Select Category</option>
                                    <option value="House">House</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Hotel">Hotel</option>
                                    <option value="Restaurent">Restaurent</option>
                                    <option value="CommercialBuilding">Commercial Building</option>
                                    <option value="Indoor Courtyard">Indoor Courtyard</option>
                                    <option value="Small Home Garden">Small Home Garden</option>
                                    <option value="Large Garden">Large Garden</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        {/*}
                        <Form.Group as={Row} controlId="whole">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Form.Check 
                                    type="checkbox" 
                                    name="isWholeProcess"
                                    checked={this.state.isWholeProcess}
                                    onChange={this.onChangeIsWholeProcess} 
                                    label="Responsible for whole construction process" 
                                />
                            </Col>
                        </Form.Group> */}
                        <Button variant="info" size="md" block="block" type="submit">
                            Start Project
                        </Button>
                    </Form>
          </div>
          )  
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
  }
  
export default connect(mapStateToProps)(AddTask);







