let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
const multer = require('multer');
const { auth } = require("../middleware/auth");

    // Project Model
let projectSchema = require('../models/Project');
const { Project } = require("../models/Project");
let Comment = require('../models/Comment');


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


router.post("/uploadImage",(req, res) => {
// After getting image from client we need to save it inside node server
  upload(req, res, err => {
      if (err) {
          return res.json({ success: false, err })
      }
      return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
  })

});

 // READ projects
 /*
 router.route('/').get((req, res, next) => {
    Project.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
       //res.send('Router is working properly');
      }
    })
  }) 
*/


  //Display projects in dashboard project tab

router.post("/", (req, res) => {

  //Need to find all of the Users that I am subscribing to From favouriter Collection 
  Project.find({'creator': req.body.creator})
      .exec((err, projects) => {
          if (err) return res.status(400).send(err);
          console.log(err);
          return res.status(200).json({ success: true, projects })
      })
}); 

  //Get Projects for main pages in Web site not dashboard

  router.post("/getProjects", (req, res) => {

    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);

    let findArgs = {};
    let term = req.body.searchTerm;

    console.log(req.body.filters)

    for (let key in req.body.filters) {

        if (req.body.filters[key].length > 0) {
            if (key === "budget") {
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                }
            }else  if (key === "area") {
              findArgs[key] = {
                  $gte: req.body.filters[key][0],
                  $lte: req.body.filters[key][1]
              } 
            }else {
                findArgs[key] = req.body.filters[key];
            }
        }
      }

    console.log(findArgs)

    if (term) {
        Project.find(findArgs)
            .find({ $text: { $search: term, $caseSensitive: false } }) // Search $text is used to search query 
            .populate("creater")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, projects) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, projects, postSize: projects.length })
            })
    } else {
        Project.find(findArgs)  // Filtering 
            .populate("creater")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, projects) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, projects, postSize: projects.length })
            })
    }

});

// Get one project
router.post("/getProject", (req, res) => {

  Project.findOne({ "_id" : req.body.projectId })
  .populate('creater')
  .exec((err,project ) => {
      if(err) return res.status(400).send(err);
      res.status(200).json({ success: true, project })
  })
});

//Save Project in the data base 
router.post("/create-project", (req, res) => {

  const project = new Project(req.body)

  project.save((err, project) => {
      if (err) return res.json({ success: false, err })

      Project.find({ '_id': project._id })
          .populate('creator')
          .exec((err, result) => {
              if (err) return res.json({ success: false, err })
              return res.status(200).json({ success: true, result })
          })
  })

})

  // SHOW - Show more info about one project
  router.route('/:id').get((req, res, next) =>{
    Project.findById(req.params.id, (error, data) =>{
      if(error){
        return next(error)
      }else{
        res.json(data)
      }
    })
  })

  // Get Single project
router.route('/edit-project/:id').get((req, res, next) => {
    Project.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

// Update project
router.route('/update-project/:id').put((req, res, next) => {
    Project.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        console.log(error)
        return next(error);
      } else {
        res.json(data)
        console.log('project updated successfully !')
      }
    })
  })

  // Delete project
router.route('/delete-project/:id').delete((req, res, next) => {
    Project.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })

//?id=${productId}&type=single
//id=12121212,121212,1212121   type=array 
router.get("/projects_by_id", (req, res) => {
  let type = req.query.type
  let projectIds = req.query.id

  console.log("req.query.id", req.query.id)

  if (type === "array") {
      let ids = req.query.id.split(',');
      projectIds = [];
      projectIds = ids.map(item => {
          return item
      })
  }

  console.log("projectIds", projectIds)


  //we need to find the product information that belong to product Id 
  Project.find({ '_id': { $in: projectIds } })
      .populate('creater')
      .exec((err, project) => {
          if (err) return res.status(400).send(err)
          return res.status(200).send(project)
      })
});
 
     
module.exports = router;