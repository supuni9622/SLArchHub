import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';

function Booking() {
    const user = useSelector(state => state.user)

    const [Bookings, setBookings] = useState([])
    let variable = { userFrom: localStorage.getItem('userId') }

    useEffect(() => {
        axios.post('http://localhost:5000/booking/getBookings', variable)
        .then(response => {
            if (response.data.success) {
                console.log(response.data.bookings)
                setBookings(response.data.bookings)
                
            } else {
                alert('Failed to get Booking Data')
            }
        })
    },[])


    const renderCards = Bookings.map((booking, index) => {

        return <Card style={{ width: '20rem', backgroundColor: 'white', color: 'black', padding: '20px', boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)', margin:'20px' }} id="taskCard" key={index}>
                    <h4> Your Appointment has saved.. </h4>
                    <div className="row">
                        <div className="col-6">
                            Booked Date:
                        </div>
                        <div className="col-6">
                            {booking.day}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            Booked Time:
                        </div>
                        <div className="col-6">
                            {booking.timeSlot}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            Design Type:
                        </div>
                        <div className="col-6">
                            {booking.designType}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            Design Category:
                        </div>
                        <div className="col-6">
                            {booking.designCategory}
                        </div>
                    </div>
                </Card>
    })

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            {renderCards}
        </div>
    )
}

export default Booking
