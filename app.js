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

app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);
// app.use(expressLayouts);

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

router.route('/')
  .get(function(req, res) {
    Animal.find(function(err, animals) {
      if (err) {
        return res.send(err);
      }
      res.render('index', {
        animals: animals,
      });
    });
  })

  .post(function(req, res) {
    var newAnimal = new Animal(req.body);

    newAnimal.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Animal Added' });
    });
  });

router.route('/animals/:id')
  .put(function(req, res) {
    Animal.findOne({ _id: req.params.id}, function(err, animal) {
      if (err) {
        return res.send(err);
      }
      if (animal[status] == 'adopted') {
        animal[status] = 'orphan';
      }
      animal[status] = 'adopted';
    })
  });

app.use('/', router);
