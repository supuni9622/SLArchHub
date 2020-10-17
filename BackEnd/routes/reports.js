let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

    // Tasks Model
let Task = require('../models/Tasks');


router.post("/ongoingProject", (req, res) => {

  var month = req.body.startDate.getMonth();
  var today = new Date();
  var now = today.getMonth()
  console.log(now);


    Task.find({'owner': req.body.owner })
        .exec((err, task) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, task })
        })

});

 module.exports = router;
  