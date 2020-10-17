import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

class AddExperience extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeWork = this.onChangeWork.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          work: '',
          place: '',
          start_date: '',
          end_date: ''
        }
      }
      onChangeWork(e) {
        this.setState({degree: e.target.value})
      }
      
      onChangePlace(e) {
        this.setState({collage: e.target.value})
      }

      onChangeStartDate(e) {
        this.setState({start_date: e.target.value})
      }

      onChangeEndDate(e) {
        this.setState({end_date: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()

        const experienceObject = {
            work: this.state.work,
            place: this.state.place,
            start_date: this.state.start_date,
            end_date: this.state.end_date
          };

          axios.post('http://localhost:5000/archi-dashboard/profile/add-experience/', experienceObject)
            .then(res => console.log(res.data));

            this.setState({work:'', place: '', start_date: '', end_date: ''})

        // Redirect to Experiences list
          this.props.history.push('archi-dashboard/profile/experience')
        }

    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h6>Add Your Work Experience </h6>
                <Form id="addExperienceForm" onSubmit={this.onSubmit}>
                    <Form.Group controlId="Experiences">
                        <Form.Label>Work Experience </Form.Label>
                        <Form.Control type="text" value={this.state.work} onChange={this.onChangeWork}/>
                    </Form.Group>
                    <Form.Group controlId="Experiences1">
                        <Form.Label>Work Place</Form.Label>
                        <Form.Control type="text" value={this.state.place} onChange={this.onChangePlace}/>
                    </Form.Group>
                    <Form.Group controlId="Experiences2">
                        <Form.Label>Started Date</Form.Label>
                        <Form.Control type="date" value={this.state.start_date} onChange={this.onChangeStartDate}/>
                    </Form.Group>
                    <Form.Group controlId="Experiences3">
                        <Form.Label>Ended Date</Form.Label>
                        <Form.Control type="date" value={this.state.end_date} onChange={this.onChangeEndDate}/>
                    </Form.Group>
                    <Button variant="primary" size="md" block="block" type="submit">
                        Add 
                    </Button>
                </Form>    
            </div>
        )
    }
}

export default AddExperience
