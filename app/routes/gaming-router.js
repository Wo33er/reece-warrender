// routes/gamingRouter.js

var express  = require('express');
var request = require('request');
var async = require("async");


var router = express.Router();

router.use(function(req, res, next) {
    next();
});

router.get('/:static?', async (req, res) => {
    if(req.params.static == null) { static = false; } else { static = true }

    var googleAnalytics = null;
    var gamingData = require("../data/completions.js");
    
    if(process.env.PLATFORM == "prod") {
        googleAnalytics = process.env.GOOGLE_ANALYTICS;
    }
    
    res.render(__dirname + '/../views/gaming', {
        title: "Reece Warrender | Gaming",
        googleAnalytics: googleAnalytics,
        gamingData,
        static
    });
});

router.get('/backlog', async (req, res) => {
    var gamingData = require("../data/backlog.js");

    res.render(__dirname + '/../views/backlog', {
        gamingData,
        sidebar: 'gaming-sidebar'
    });
});

module.exports = router;