/* Importing resources */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var api = require('./src/routes/api.route');

/* Express settings */
var app = express();
var cors = require('cors');

/* Body-parser settings */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Application routes */
app.use(cors());
app.use('/api', api);
app.use('/', express.static(path.join(__dirname, './../app/dist')));

/* Start server */
app.listen(process.env.PORT || 8080, function () {
	var port = process.env.PORT || 8080;
    console.log('Running on http://localhost:'+ port);
});