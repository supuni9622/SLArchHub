let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

const { User } = require("../models/User");

//Get exterior designers to the web page
  router.post("/get-Exterior-Designers", (req, res) => {

    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);

    let findArgs = {};
    let term = req.body.searchTerm;

    console.log(req.body.filters)

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
        findArgs[key] = req.body.filters[key]; 
        }
      }

    console.log(findArgs)


    if (term) {
        User.find({exteriorDesign: true }, findArgs)
            .find({ $text: { $search: term, $caseSensitive: false } }) // Search $text is used to search query 
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, users) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, users, postSize: users.length })
            })
    }else{
        User.find({userType: "Exterior-designer" })
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, users) => {
        if (err) return res.status(400).json({ success: false, err })
        res.status(200).json({ success: true, users, postSize: users.length })
    })
}
});

//Get Interior designers to the web page
router.post("/get-Interior-Designers", (req, res) => {

    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);

    User.find({userType: "Interior-designer" })
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, users) => {
        if (err) return res.status(400).json({ success: false, err })
        res.status(200).json({ success: true, users, postSize: users.length })
    })
});

// Get Landscape designers to the web page
router.post("/get-Landscape-Designers", (req, res) => {

    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);

    User.find({userType: "Landscape-designer" })
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, users) => {
        if (err) return res.status(400).json({ success: false, err })
        res.status(200).json({ success: true, users, postSize: users.length })
    })
});

//Get Construction companies to the web page
router.post("/get-Construction-company", (req, res) => {

    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);

    User.find({userType: "Construction-company" })
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, users) => {
        if (err) return res.status(400).json({ success: false, err })
        res.status(200).json({ success: true, users, postSize: users.length })
    })
});

//Get One profile
router.post("/getServiceProvider", (req, res) => {

    User.findOne({ "_id" : req.body.userId })
    //.populate('creater')
    .exec((err,user ) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({ success: true, user })
    })
  });

module.exports = router;