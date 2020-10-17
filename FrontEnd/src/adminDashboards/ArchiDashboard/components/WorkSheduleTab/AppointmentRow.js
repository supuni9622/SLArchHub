import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class AppointmentRow extends Component {
    constructor(props) {
        super(props);
        this.deleteAppointment = this.deleteAppointment.bind(this);
        this.acceptAppointment = this.acceptAppointment.bind(this);
    }

    deleteAppointment() {
        axios.delete('http://localhost:5000/workSchedule/delete-appointment/' + this.props.obj._id)
            .then((res) => {
                console.log('Appointment successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    acceptAppointment(){

    }

    render(){
        return(
            <React.Fragment>
                <tr>
                    <td>Day</td>
                    <td>Time Slot</td>
                    <td>Client</td>
                    <td>Design Type</td>
                    <td>Design Category</td>
                    <td>Basic Requirements</td>
                    <td>
                    <Button id="accept" onClick={this.acceptAppointment} size="sm" variant="danger">
                            <i class="fas fa-trash-alt"></i>   <b>Accept</b>
                    </Button> 
                    <Button id="delete" onClick={this.deleteAppointment} size="sm" variant="danger">
                            <i class="fas fa-trash-alt"></i>   <b>Cancle</b>
                    </Button>          
                    </td>         
                </tr>

            </React.Fragment>

        )
    }

}

export default AppointmentRow