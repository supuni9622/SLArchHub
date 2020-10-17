let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

    // Task Progress Model
let taskProggressSchema = require('../models/TaskProggress');

// READ task progress
router.route('/').get((req, res, next) => {
  taskProggressSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
     //res.send('Router is working properly');
    }
  })
})

  // Add task progress
  router.route('/add-task-progress').post((req, res, next) => {
    taskProggressSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});


  /*Get Single taskProggress
router.route('/edit-task-proggress/:id').get((req, res, next) => {
  taskProggressSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update taskProggres
router.route('/update-task-proggress/:id').put((req, res, next) => {
  taskProggressSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error)
      return next(error);
    } else {
      // res.json(data)
      console.log('taskProggress updated successfully !')
    }
  })
}) */

  module.exports = router;
