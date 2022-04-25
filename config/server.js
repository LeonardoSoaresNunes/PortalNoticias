var express = require('express');;
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');

app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended:true}));



/*
consign ()
	.include('app/routes')
	.then('config/dbConnection')
	.the('app/models')
	.then('app');
	*/

module.exports = app;