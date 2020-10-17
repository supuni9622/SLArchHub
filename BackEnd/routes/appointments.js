let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// appointments Model
let appointmentSchema = require('../models/appointments');
const { auth } = require("../middleware/auth");

// appointments Table
router.route('/appointments').get((req, res, next) => {
    appointmentSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });

    // Add appointment
    router.route('/add-appointment').post((req, res, next) => {
    appointmentSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });

  router.post("/subscribe", (req, res) => {

    const subscribe = new Subscriber(req.body);

    subscribe.save((err, doc) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});

// Delete appointment
router.route('/delete-appointment/:id').delete((req, res, next) => {
  appointmentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
}) 

  module.exports = router;
