// routes/portfolioRouter.js

var express  = require('express');
var request = require('request');
var async = require("async");
var router = express.Router();

router.use(function(req, res, next) {
    next();
});

router.get('/', async (req, res) => {
    var googleAnalytics = null;
    
    if(process.env.PLATFORM == "prod") {
        googleAnalytics = process.env.GOOGLE_ANALYTICS;
    }
    
    res.render(__dirname + '/../views/portfolio', {
        title: "Reece Warrender | Portfolio",
        googleAnalytics: googleAnalytics
    });
});

module.exports = router;