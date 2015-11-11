var express        = require('express');
var path           = require('path');
var debug          = require("debug");
var logger         = require('morgan');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var expressLayouts = require('express-ejs-layouts');

var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;

var moongoose = require('mongoose');
moongoose.connect('mongodb://127.0.0.1/animalshelter');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
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

app.listen(3000);
console.log("Server Started");

// ############ YOU CAN ADD YOUR CODE BELOW ########
// ###### HAPPY CODING  :) #########################
var Animal = require('./models/animal')

// Animal.find({}, function(err, animals) {
//   if (err) console.log(err);
//   console.log(animals);
// });

// var cat = new Animal({ family: 'cat'});

// cat.findSimilarFamily(function (err, cats ) {
//   console.log(cats);
// })

Animal.all({}, function (err, animals) {
  console.log(animals);
});



// router.get('/', function(req, res) {

// });