var express        = require('express');
var path           = require('path');
var debug          = require("debug");
var logger         = require('morgan');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var expressLayouts = require('express-ejs-layouts');

var app = express();
var router = express.Router();

var moongoose = require('mongoose');
moongoose.connect('mongodb://localhost/animalshelter');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
// app.use(expressLayouts);
// app.engine('ejs', require('ejs').renderFile);
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
//
var Animal = require('./models/animal');

// Index
router.get('/', function(req,res){
  Animal.find({}, function(err,animals){
    res.render('index',{animals});
  })
});
// Show
router.get('/:id', function(req,res){
  Animal.findById(req.params.id,function(err,animal){
    res.render('show',{animal});
  });
});

// Update
router.post('/:id', function(req,res){
  Animal.findById(req.params.id,function(err,animal){
    switch(animal.status){
      case "Abandon":
        animal.status = "Adopt";
        animal.save(function(err){
          if (err) console.log(err);
          res.redirect('/animals/');
        });
        break;
      case "Adopt":
        animal.status = "Abandon";
        animal.save(function(err){
          if (err) console.log(err);
          res.redirect('/animals/');
        });
        break;
      }
  });
});

// New
router.post('/', function(req,res){
  var newPetBase = req.body;
  newPetBase.status = "Abandon";
  var newPet = Animal(newPetBase);
  console.log(newPet);
  newPet.save(function(err){
    if (err) console.log(err);
    res.redirect('/animals')
  })
});

// Route middleware
app.use('/animals', router);

