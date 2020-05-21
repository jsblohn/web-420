/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   03 May 2020
; Modified By: Janet Blohn
; Last Modified Date: 07 May 2020
; Description: Main program for RESTful APIs Class
============================================
*/

// Import blohn-header.js file
const header = require("../blohn-header");

// Print the Header
console.log(header.display("Janet", "Blohn", "App Program"));

// Create the variables
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var apiCatalog = require('./routes/api-catalog');
mongoose.Promise = require('bluebird');

var indexRouter = require('./routes/index');

var app = express();

// MongoDB Connection
mongoose.connect('mongodb+srv://admin:admin@buwebdev-cluster-1-akhri.mongodb.net/api-gateway', {
  promiseLibrary: require('bluebird'),
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then ( () => console.log('Connection successful'))
  .catch( (err) => console.error(err));

 // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api", apiCatalog);

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
