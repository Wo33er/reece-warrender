// routes/portfolioRouter.js

var express  = require('express');
var request = require('request');
var async = require("async");
var router = express.Router();

router.use(function(req, res, next) {
    next();
});

router.get('/', async (req, res) => {
    var portfolioData = null;

    res.render(__dirname + '/../views/portfolio', {
        portfolioData
    });
});

module.exports = router;