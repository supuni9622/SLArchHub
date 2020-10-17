const express = require('express');
const router = express.Router();
const { User} = require("../models/User");
const { auth } = require("../middleware/auth");
//const { Payment } = require('../models/Payment');

const async = require('async');

//=================================
//             User
//=================================

//When user logged in then user data load to the redux storage --> middleware/auth
// Before logged in --> isAuth: false
//After isAuth: true we came here to send data to frontend

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
       isAdmin: req.user.userType == 'Admin' ? true : false,
       isExteriorDesigner: req.user.userType == 'Exterior-designer' ? true : false,
       isLandscapeDesigner: req.user.userType == 'Landscape-designer' ? true : false,
       isInteriorDesigner: req.user.userTyep == 'Interior-designer' ? true : false,
       isClient: req.user.userType == 'Client' ? true : false,
       isConstructionCompany: req.user.userTyep == 'Construction-company' ? true : false,
       isSoilEngineer: req.user.userTyep == 'Soil-Engineer' ? true : false,
        isAuth: true,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        userType: req.user.userType,
        contactNumber: req.user.contactNumber,
        address: req.user.address,
        province: req.user.province,
        profile_photo: req.user.profile_photo,
        cover_photo: req.user.cover_photo,
        payRate: req.user.payRate,
        squareRate: req.user.squareRate,
        proffesion: req.user.proffesion,
        about:req.user.about
    });
});
 

// ========================== Register User ===================================
router.post("/add-user", (req, res) => {

  //Craete new user under userSchma and save data to db
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/login", (req, res) => {
  //Check the existance of the current user by using email
    User.findOne({ email: req.body.email}, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

            // Then comapare the current input and password saved inthe db according to the email
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

                // isLogged: success; then issue a token token to a session with cockies
                // This cookie goes to middleware/auth and comeback here 111th line and issue the relavent data of the current user
                // middleware/auth get data and send it to frontend --> hoc/auth
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, 
                        userId: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName

                    });
            });
        });
    });
});

// Logout by using cookie value
router.get("/logout", auth, (req, res) => {
  //When we logged in we are given token. When we log out the token value  becomes empty. All the login/logout functions of backend works well.
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});

//===========================================================

 //Get Single project
 router.get('/edit/:id',auth, (req, res, next) => {
    User.findById( req.user._id, (error, user) => {
        if (error) {
            return next(error)
          } else {
            res.status(200).json({
              success : true,
              firstName: user.firstName,
              lastName:  user.lastName 
              //data})
            })
    }
  })
  })

 /* router.get("/edit/:id", (req, res) => {
    User.findById(req.params._id)
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json("User not found"));
  });*/

// Update project
router.put('/update/:id', auth, (req, res, next) => {
    User.findByIdAndUpdate( req.user._id , {
      $set: req.body
    }, (error, data) => {
      if (error) {
        console.log(error)
        return next(error);
      } else {
        res.json(data)
        console.log('User updated successfully !', data)

      }
    })
  })

//Get Avatar images
router.post("/avatar", (req, res) => {

  //Need to find all of the Users that I am subscribing to From favouriter Collection 
  User.find({'_id': req.body._id })
      .exec((err, user) => {
          if (err) return res.status(400).send(err)
          return res.status(200).json({ success: true, user })
      })
});


module.exports = router;



