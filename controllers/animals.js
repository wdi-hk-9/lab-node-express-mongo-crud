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
  })
  // CREATE
  .post(function(req, res) {
    return Animal.save(function(err) {
      if (!err){
        Animal.push(req.body)
        res.json(req.body);
        console.log('User created!');
      }
    })
  });


module.exports = router

// Testing if DB is working
// var newAnimal = Animal({
//   name: 'testing'
// });
