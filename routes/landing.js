const express = require("express");
const passport = require("passport");


let router = express.Router();


router.get("/", (req, res) => {
    res.redirect("/ka");
});


router.get("/ka", (req, res) => {
    res.render("ka/landing.ejs");
});


router.get("/en", (req, res) => {
    res.render("en/landing.ejs");
});




module.exports = router;