let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

const { Project } = require("../models/Project");

//Get Exterior design projects to the web
  router.post("/get-Exterior-Projects", (req, res) => {

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
            } else  if (key === "area") {
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
        Project.find({exteriorDesign: true }, findArgs)
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
        Project.find({exteriorDesign: true })
            .find(findArgs)  // Filtering 
            .populate("creater")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, projects) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, projects, postSize: projects.length })
            })
    }


   /* Project.find( {exteriorDesign: true })
            .populate("creater")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, projects) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, projects, postSize: projects.length })
            })*/
});

//Get Interior design projects to the web
router.post("/get-Interior-Projects", (req, res) => {

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
            } else  if (key === "area") {
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                } 
             } else {
                findArgs[key] = req.body.filters[key];
            }
        }
      }

    console.log(findArgs)

    if (term) {
        Project.find({interiorDesign: true }, findArgs)
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
        Project.find({interiorDesign: true })
            .find(findArgs)  // Filtering 
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

//Get Landscape design projects
router.post("/get-Landscape-Projects", (req, res) => {

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
            } else  if (key === "area") {
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
        Project.find({landscapeDesign: true }, findArgs)
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
        Project.find({landscapeDesign: true })
            .find(findArgs)  // Filtering 
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

//Get Sustainable design projects
router.post("/get-Sustainable-Projects", (req, res) => {

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
            } else  if (key === "area") {
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
        Project.find({sustainability: true }, findArgs)
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
        Project.find({sustainability: true })
            .find(findArgs)  // Filtering 
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

module.exports = router;