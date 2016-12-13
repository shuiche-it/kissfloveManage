var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session')

var routes = require('./routes/api');
global.dbHelper = require('./common/dbHelper');
global.db = mongoose.connect('mongodb://59.110.63.96:27017/test3');

var app = express();

app.use(session({
  secret: 'fuckyou',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000*60*10
  }
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// 路由
routes(app);

app.listen(3000);

module.exports = app;
