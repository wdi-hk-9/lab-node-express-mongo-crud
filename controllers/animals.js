var express    = require('express'),
    router     = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose       = require('mongoose'),
    Animal         = require('../models/animal');

router.route('/animals')
  // INDEX
  .get(function(req, res, next) {
    return Animal.find({}, function(err, animals) {
      if (!err){
        res.render('index', {animals: animals});
        console.log(animals);
      } else {
          return console.log(err);
      }
    });
  })

  // CREATE
  .post(function(req, res) {
    var newAnimal = Animal (req.body)

    // Submit to the DB
    newAnimal.save(function(err) {
      if (err) console.log(err);
        console.log('User created!');
        res.redirect('/animals');
    });
  })

router.route('/animals/:id')
  // SHOW individual
  .get(function(req, res){
    Animal.findById(req.params.id, function(err, animal) {
      res.render('show', {animal: animal})
      })
    });

module.exports = router

// Testing if DB is working
// var newAnimal = Animal({
//   name: 'testing'
// });
