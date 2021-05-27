const express = require("express");
let router = express.Router();
let seedDBka = require("../seeds_ka.js");
let seedDBen = require("../seeds_en.js");


router.get("/ka/srv", (req, res) => {
    res.render("ka/srv/index.ejs", {seedDBka: seedDBka});
});


router.get("/en/srv", (req, res) => {
    res.render("en/srv/index.ejs", {seedDBen: seedDBen});
});





// router.get("/:id", (req, res) => { // this route must be after /campgrounds/new because you know why
//     Campground.findById(req.params.id).populate("comments").exec((err, foundCampground) => {
//         if(err){
//             console.log(err || !foundCampground);
//             res.redirect("back");
//         } else {
//             // console.log(foundCampground);
//             res.render("campgrounds/show.ejs", {campground: foundCampground});
//         }
//     });
// });





module.exports = router;