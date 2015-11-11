var express    = require('express'),
    router     = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose       = require('mongoose'),
    Animal         = require('../models/animal');

router.route('/')
  // INDEX
  .get(function(req, res, next) {
    return Animal.find({}, function(err, animals) {
      if (!err){
        res.render('index', {
          animals: animals
        });
        console.log(animals);
      } else {
          return console.log(err);
      }
    });
  });

module.exports = router

// Testing if DB is working
// var newAnimal = Animal({
//   name: 'testing'
// });

// newAnimal.save(function(err) {
//   if (err) console.log(err);
//   console.log('User created!');
// });