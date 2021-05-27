// npm init
// installed (with --save) express, ejs, body-parser,
// also (with --save) method-override


const express = require("express");
const app = express();
const bodyParser = require("body-parser");


const methodOverride = require("method-override");



// let Campground = require("./models/campground.js");




let campgroundRoutes = require("./routes/srv.js");
let indexRoutes = require("./routes/landing.js");





app.set("view engine", "ejs"); // or without this line at all, you know
app.use(express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));





app.use(indexRoutes);
app.use(campgroundRoutes);





app.listen(process.env.PORT || 5000, () => {
    console.log("YelpCamp started");
});