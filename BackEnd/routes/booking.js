const express = require('express');
const router = express.Router();
const { Booking } = require("../models/Booking");

const { auth } = require("../middleware/auth");

//=================================
//             Bookings Routes
//=================================

//Save bookings in the data base 
router.post("/saveBooking", (req, res) => {

    const booking = new Booking(req.body)

    booking.save((err, booking) => {
        if (err) return res.json({ success: false, err })

        Booking.find({ '_id': booking._id })
            .populate('serviceProvider')
            .populate('userFrom')
            .exec((err, result) => {
                if (err) return res.json({ success: false, err })
                return res.status(200).json({ success: true, result })
            })
    })

})

//Get bookings to the client page
router.post("/getBookings", (req, res) => {

    //Need to find all of the Users that I am subscribing to From favouriter Collection 
    Booking.find({'userFrom': req.body.userFrom })
        .exec((err, bookings) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, bookings })
        })
});


//Get bookings to the Admin page

module.exports = router;

