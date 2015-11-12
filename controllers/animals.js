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
        res.render('index', {animals});
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

router.route('/:id')
  // SHOW
  .get (function(req, res){
    Animal.findById(req.params.id, function(err, animal) {
      if (!err){
        res.render('show', {animal})
      } else  {
        console.log(err)
      }
    });
});

   // res.json(products[req.params.id])

module.exports = router

// Testing if DB is working
// var newAnimal = Animal({
//   name: 'testing'
// });
