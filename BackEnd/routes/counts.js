let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

const { Project } = require("../models/Project");
const { User} = require("../models/User");

console.log(Project.length)

router.get('/projects', (req, res, next) =>{
	return res.json(Project.length)
	})


module.exports = router;