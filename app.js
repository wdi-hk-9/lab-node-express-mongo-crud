var express        = require('express');
var path           = require('path');
var debug          = require("debug");
var logger         = require('morgan');
var bodyParser     = require('body-parser');
var expressLayouts = require('express-ejs-layouts');

var app = express();

var router = express.Router();

var mongoose       = require('mongoose');
mongoose.connect('mongodb://localhost/animalshelter');

// Custom Middleware
app.use(function(req, res, next) {
  console.log('%s request to %s from %s', req.method, req.path, req.ip);
  next();
});

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views'));
app.use(expressLayouts);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// http://expressjs.com/4x/api.html#app.use
app.use(require('./controllers'));

app.listen(3000);
console.log("Server Started");

// ############ YOU CAN ADD YOUR CODE BELOW ########
// ###### HAPPY CODING  :) #########################
