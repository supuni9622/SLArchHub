import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

class BookingForm extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeDay = this.onChangeDay.bind(this);
        this.onChangeTimeSlot = this.onChangeTimeSlot.bind(this);
        this.onChangeDesignType = this.onChangeDesignType.bind(this);
        this.onChangeDesignCategory = this.onChangeDesignCategory.bind(this); 
        this.onChangeRequirements = this.onChangeRequirements.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    

     // Setting up state
     this.state = {
         day: '',
         timeSlot: '',
         designType: '',
         designCategory: '', 
         requirements: ''
     }
    }

     onChangeDay(e) {
        this.setState({day: e.target.value})
      }
    
      onChangeTimeSlot(e) {
        this.setState({timeSlot: e.target.value})
      }

      onChangeDesignType(e) {
        this.setState({designType: e.target.value})
      }

      onChangeDesignCategory(e) {
        this.setState({designCategory: e.target.value}) 
      } 
      onChangeRequirements(e) {
        this.setState({requirements: e.target.value})
      }

      onSubmit(e) {
        e.preventDefault()

        const appointmentObject = {
            day: this.state.day,
            timeSlot: this.state.timeSlot,
            designType: this.state.designType,
            designCategory: this.state.designCategory, 
            requirements: this.state.requirements,
            serviceProvider : this.props.serviceProvider,
            userFrom : this.props.userFrom
        };
        axios.post('http://localhost:5000/booking/saveBooking', appointmentObject)
        .then(res => console.log(res.data));

    }

    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h3>Add New Appointment</h3>
                <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="day">
                    <Form.Label>
                        Select a Day for your Appointment
                    </Form.Label>
                    
                    <Form.Control 
                        type="date" 
                        value={this.state.day} 
                        onChange={this.onChangeDay} 
                    />
                            
                </Form.Group>
                <Form.Group controlId="timeSlot">
                    <Form.Label>
                        Select an Available Time Slot for your Appointment
                    </Form.Label>
                    
                        <Form.Control 
                            type="time" 
                            value={this.state.timeSlot} 
                             onChange={this.onChangeTimeSlot} 
                        />
                           
                </Form.Group>
                <Form.Group controlId="designType">
                    <Form.Label>
                        Select the Service type 
                    </Form.Label>
                    <Form.Control 
                        as="select"
                        type="text" 
                        value={this.state.designType} 
                        onChange={this.onChangeDesignType} 
                    >
                        <option value="exteriorDesign">Exterior Design</option>
                        <option value="landscapeDesign">Landscape Design</option>
                        <option value="interiorDesign">Interior Design</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="designCategory">
                    <Form.Label>
                        Select the Required Design Type
                    </Form.Label>
                    <Form.Control 
                        as="select"
                        type="text" 
                        value={this.state.designCategory} 
                        onChange={this.onChangeDesignCategory} 
                    >
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="hotel">Hotel</option>
                        <option value="restaurent">Restaurent</option>
                        <option value="commercialBuilding">Commercial Building</option>
                        <option value="indoorCourtyard">Indoor Courtyard</option>
                        <option value="smallHomeGarden">Small Home Garden</option>
                        <option value="largeGarden">Large Garden</option>
                    </Form.Control>
                </Form.Group>  
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>
                        Specify Your Basic Requirements
                    </Form.Label>
                    <Form.Control 
                        type="text" 
                        as="textarea" 
                        rows="4" 
                        placeholder="You can specify what kind of design that you expect"
                        value={this.state.requirements} 
                        onChange={this.onChangeRequirements} 
                    />
                </Form.Group>
                <Button type="submit"  variant="primary" size="md" block="block"> 
                    Make Appointment
                </Button>
            </Form>        
        </div>
        )
    }
}

export default BookingForm
