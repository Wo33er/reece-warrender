// Express dependencies
require('dotenv').load();
const express = require('express');
var exphbs  = require('express-handlebars');
var request = require('request');
var async = require("async");
var bodyParser = require('body-parser');
var stylus = require('stylus');
const app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials/',
    helpers: {
        cleanString: function(value) {
            var cleanString = value.replace(/[^a-zA-Z0-9 ]/g, "").split(' ').join('_').toLowerCase();
            return cleanString;
        },
        addOne: function(value) {
            var addOne = value + 1;
            return addOne;
        },
        reverse: function(array) {
            return array.reverse();
        }
    },
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/');
app.use(bodyParser.json());
app.use(stylus.middleware({
    src:  __dirname + "/resources", 
    dest: __dirname + "/public",
    debug: true,
    compress: true
}));

app.use(express.static(__dirname + '/public'));

// Routes - General
app.get('/', async (req, res) => {
    var googleAnalytics = null;

    if(process.env.PLATFORM == "prod") {
        googleAnalytics = process.env.GOOGLE_ANALYTICS;
    }

    res.render(__dirname + '/views/index', {
        layout: 'intro.hbs',
        googleAnalytics: googleAnalytics
    });
});

// Routes - Gaming
var gamingRouter = require('./routes/gaming-router');
app.use('/gaming', gamingRouter);

// Routes - Portfolio
var portfolioRouter = require('./routes/portfolio-router');
app.use('/portfolio', portfolioRouter);

// Routes - Portfolio
var xboxRouter = require('./routes/xbox-router');
app.use('/xbox', xboxRouter);

// Start app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});