let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

    // Tasks Model
let Task = require('../models/Tasks');

// Tasks Table
router.route('/ongoing-tasks').get((req, res, next) => {
    Task.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
       //res.send('Router is working properly');
      }
    })
  });


  //Add Task 
  router.post("/add-task", (req, res) => {

    const task = new Task(req.body)
  
    task.save((err, task) => {
        if (err) return res.json({ success: false, err })
  
        Task.find({ '_id': task._id })
            .populate('owner')
            .exec((err, result) => {
                if (err) return res.json({ success: false, err })
                return res.status(200).json({ success: true, result })
            })
    })
  
  })

router.post("/ongoingProject", (req, res) => {

    Task.find({'owner': req.body.owner })
        .exec((err, task) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, task })
        })
});

  // Get Single Task
router.route('/edit-task/:id').get((req, res, next) => {
  Task.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Task
router.route('/update-task/:id').put((req, res, next) => {
  Task.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error)
      return next(error);
    } else {
       res.json(data)
      console.log('Task updated successfully !')
    }
  })
})

// Delete Task
router.route('/delete-task/:id').delete((req, res, next) => {
  Task.findByIdAndRemove(req.params.id, (error, data) => {
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
