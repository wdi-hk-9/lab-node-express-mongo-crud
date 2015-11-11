var express    = require('express'),
    router     = express.Router(),
    bodyParser = require('body-parser'),
      // https://www.npmjs.com/package/body-parser
    methodOverride = require('method-override');
      // https://www.npmjs.com/package/method-override

var Animal = require('./models/user');

// http://nano:3000/animals
router.route('/')
  // INDEX
  .get(function(req, res, next) {
    Animal.find({}, function(err, animals){
      if (err) console.log(err);
      res.render('index',{
        animal: animal
      });
    });
  });
  // CREATE
  .post(function(req, res) {
    var newAnimal = Animal({
      name: 'test',
      breed: 'String',
      dob: 'Date',
      gender: 'String',
      family: 'String',
      status: 'String',
    });

    //save the user
    newAnimal.save(function(err){
      if (err) console.log(err);
      res.render('index',{
        animal: animal
      });
    });
  });

  module.exports = router