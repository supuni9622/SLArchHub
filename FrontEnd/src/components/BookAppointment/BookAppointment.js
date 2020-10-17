import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import TimeSlotTable from './TimeSlotTable';
import BookingForm from './BookingForm';
import Booking from '../Booking/Booking';

export default function BookAppointment(props) {
    const [lgShow, setLgShow] = React.useState(false);
    const userId = props.userId

    return (
        <React.Fragment>
             <Button onClick={() => setLgShow(true)}>Book Appointment</Button>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Book Appointment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BookingForm serviceProvider={userId} userFrom={localStorage.getItem('userId')}></BookingForm> 
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}


