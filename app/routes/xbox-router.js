// routes/xboxRouter.js

var express  = require('express');
var request = require('request');
var async = require("async");
var router = express.Router();

router.use(function(req, res, next) {
    next();
});

router.get('/profile/:accountId?', async (req, res) => {
    if(req.params.accountId == null) { accountId = 2659938529929688; } else { accountId = req.params.accountId }

    xboxGetProfileByAccountId(accountId, function(error, callback) {
        res.type('json');
        res.end(JSON.stringify(callback));
    });
});

function xboxGetProfileByAccountId(accountId, callback) {
    request({
        url: "https://xboxapi.com/v2/"+ accountId +"/profile",
        json: true,
        headers: {
            'X-Auth': 'd56c281787aa8f99d8432914911e5fc8be1d058c',
            'Content-Type': 'application/json'}
    }, function (error, response, body) {
        if (error || response.statusCode != 200) {
            callback("Xbox profile endpoint failed");
        } else {
            callback(null, body);
        }
    });
}

router.get('/games/:platform/:accountId?', async (req, res) => {
    if(req.params.accountId == null) { accountId = 2659938529929688; } else { accountId = req.params.accountId }

    if(req.params.platform == "360" || req.params.platform == null) {
        xboxGet360GamesByAccountId(accountId, function(error, callback) {
            res.type('json');
            res.end(JSON.stringify(callback));
        });
    }
    else {
        xboxGetOneGamesByAccountId(accountId, function(error, callback) {
            res.type('json');
            res.end(JSON.stringify(callback));
        });
    }
});

function xboxGetOneGamesByAccountId(accountId, callback) {
    request({
        url: "https://xboxapi.com/v2/"+ accountId +"/xboxonegames",
        json: true,
        headers: {
            'X-Auth': 'd56c281787aa8f99d8432914911e5fc8be1d058c',
            'Content-Type': 'application/json'}
    }, function (error, response, body) {
        if (error || response.statusCode != 200) {
            callback("Xbox One games endpoint failed");
        } else {
            callback(null, body);
        }
    });
}

function xboxGet360GamesByAccountId(accountId, callback) {
    request({
        url: "https://xboxapi.com/v2/"+ accountId +"/xbox360games",
        json: true,
        headers: {
            'X-Auth': 'd56c281787aa8f99d8432914911e5fc8be1d058c',
            'Content-Type': 'application/json'}
    }, function (error, response, body) {
        if (error || response.statusCode != 200) {
            callback("Xbox 360 games endpoint failed");
        } else {
            callback(null, body);
        }
    });
}

module.exports = router;