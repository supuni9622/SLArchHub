const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite");

const { auth } = require("../middleware/auth");

//=================================
//            Favourite Projects
//=================================

// Number of favorites
router.post("/favoriteNumber", (req, res) => {

    Favorite.find({ "projectId": req.body.projectId })
        .exec((err, favourite) => {
            if (err) return res.status(400).send(err)

            res.status(200).json({ success: true, favouriteNumber: favourite.length })
        })

});

// After adding favorites 
router.post("/favorited", (req, res) => {

    Favorite.find({ "projectId": req.body.projectId, "userFrom": req.body.userFrom })
        .exec((err, favourite) => {
            if (err) return res.status(400).send(err)

            let result = false;
            if (favourite.length !== 0) {
                result = true
            }

            res.status(200).json({ success: true, favorited: result })
        })

});

// Add to favorites
router.post("/addToFavorite", (req, res) => {

    console.log(req.body)

    const favorite = new Favorite(req.body);

    favorite.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});

// Remover from favorites
router.post("/removeFromFavorite", (req, res) => {

    Favorite.findOneAndDelete({ projectId: req.body.projectId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, err });
            res.status(200).json({ success: true, doc })
        })
});

//Display favorite projects in dashboard favorite tab
router.post("/getFavoredProject", (req, res) => {

    //Need to find all of the Users that I am subscribing to From favouriter Collection 
    Favorite.find({'userFrom': req.body.userFrom })
        .exec((err, favorites) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, favorites })
        })
});


module.exports = router;
