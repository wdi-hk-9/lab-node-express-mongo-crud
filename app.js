var express        = require('express');
var path           = require('path');
var debug          = require("debug");
var logger         = require('morgan');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var app            = express();
var router         = express.Router();

var moongoose      = require('mongoose');
moongoose.connect('mongodb://localhost/animalshelter');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

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
var Animal = require('./models/animal');

//create an animal
var oreo = new Animal({
  name: "Oreo",
  breed: "Ragdoll",
  gender: "F",
  family: "Cat",
  status: "Abandon"
})

//save the animal
oreo.save(function(err) {
  if (err)
    console.log(err);
  console.log('Animal created');
});

// INDEX
router.get(function(req, res, next) {
  return Animal.find({}, function(err, animals) {
    if (!err){
      res.render('index', { animals: animals });
    } else {
        return console.log(err);
    }
  });
});

//CREATE
// router.post(function(req,res){

//   var animal    = new Animal();
//   animal.name   = req.body.name;
//   animal.breed  = req.body.breed;
//   animal.dob    = req.body.dob;
//   animal.gender = req.body.gender;
//   animal.family = req.body.family;
//   animal.status = req.body.status;

//   animal.save(function(err){
//     if (err)
//       res.send(err);

//     res.send({message: 'Animal created1'});
//   });
// });


//UPDATE
// router.put(function(req, res) {
//   Bear.findById(req.params.id, function(err, bear) {
//     if (err)
//       res.send(err);

//     animal.status = req.body.status; //update animal status

//     animal.save(function(err){
//       if (err)
//         res.send(err);

//       res.render('index', { header: bear });
//     })

//   });
// });

app.use('/animals', router);

