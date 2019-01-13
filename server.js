const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

// Loading env variables
require('dotenv').config()

// Middlewares
// Express midd for app
const app =  express();
// to use bodyParser (for text/number data transfer between clientg and server)
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// setting hbs as the view engine
app.set('view engine', 'hbs');
// making ./public as the static directory
app.use(express.static(__dirname + '/public'));
// making ./views as the views directory
app.set('views', __dirname + '/views');
// Express body parser
app.use(express.urlencoded({ extended: true }));

// Routes
// Index
app.use('/', require('./routes/index.js'));
// Upload file
app.use('/upload', require('./routes/upload.js'));

// 404
app.use(function(req, res, next) {
    return res.status(404).render('index.hbs');
});

// Server error
app.use(function(err, req, res, next) {
    return res.status(500).render('index.hbs');
});

// App port to listen on
const PORT =  process.env.PORT || 80;

// Server start 
app.listen(PORT);