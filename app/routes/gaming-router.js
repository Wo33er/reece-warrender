// routes/gamingRouter.js

var express  = require('express');
var request = require('request');
var async = require("async");
var router = express.Router();

router.use(function(req, res, next) {
    next();
});

router.get('/', async (req, res) => {
    var gamingData = require("../data/completions-2018.js");

    res.render(__dirname + '/../views/gaming', {
        gamingData,
        sidebar: 'gaming-sidebar'
    });
});

router.get('/2018', async (req, res) => {
    var gamingData = require("../data/completions-2018.js");

    res.render(__dirname + '/../views/gaming', {
        gamingData,
        sidebar: 'gaming-sidebar'
    });
});

router.get('/2017', async (req, res) => {
    var gamingData = require("../data/completions-2017.js");

    res.render(__dirname + '/../views/gaming', {
        gamingData,
        sidebar: 'gaming-sidebar'
    });
});

router.get('/2016', async (req, res) => {
    var gamingData = require("../data/completions-2016.js");

    res.render(__dirname + '/../views/gaming', {
        gamingData,
        sidebar: 'gaming-sidebar'
    });
});

router.get('/2015', async (req, res) => {
    var gamingData = require("../data/completions-2015.js");

    res.render(__dirname + '/../views/gaming', {
        gamingData,
        sidebar: 'gaming-sidebar'
    });
});

router.get('/backlog', async (req, res) => {
    var gamingData = require("../data/backlog.js");

    res.render(__dirname + '/../views/gaming', {
        gamingData,
        sidebar: 'gaming-sidebar'
    });
});

module.exports = router;