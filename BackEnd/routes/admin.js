let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

const multer = require('multer');

const { Project } = require("../models/Project");
const { User} = require("../models/User");
let Task = require('../models/Tasks');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
  })
  
var upload = multer({ storage: storage }).single("file")

// Upload profile photo
router.post("/uploadProfilePhoto",(req, res) => {
    // After getting image from client we need to save it inside node server
      upload(req, res, err => {
          if (err) {
              return res.json({ success: false, err })
          }
          return res.json({ success: true, profile_photo: res.req.file.path, fileName: res.req.file.filename })
      })
    
    });

// Upload cover photo
router.post("/uploadCoverPhoto",(req, res) => {
     // After getting image from client we need to save it inside node server
    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, cover_photo: res.req.file.path, fileName: res.req.file.filename })
        })
        
    });

// Get all users to the admin dashboard
router.route('/users').get((req, res, next) => {
    User.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }) 

// GEt all Projects to the admin dashboard
router.route('/projects').get((req, res, next) => {
    Project.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }) 

  //Get all ongoing projects to the admin dashboard
router.route('/ongoingProject').get((req, res, next) => {
    Task.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }) 

// Admin profile
router.post("/admin", (req, res) => {
 
    User.find({'_id': req.body._id })
        .exec((err, admin) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, admin })
        })
});

  // Edit admin
  router.route('/edit-admin/:id').get((req, res, next) => {
    User.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

// Update admin
router.route('/update-admin/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        console.log(error)
        return next(error);
      } else {
        res.json(data)
        console.log('Admin updated successfully !')
      }
    })
  })

module.exports = router;