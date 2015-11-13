var express        = require('express'),
    router         = express.Router(),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override');

var Animal = require('../models/animal');

// Index
router.get("/animals", function(req, res){
  Animal.find({}, function (err, animals) {
    res.render('animals/index', { animals: animals });
  });
});

//Create
router.post("/animals", function(req, res){
  Animal.create(req.body.animal, function (err, animal) {
    if(err){
      res.send("something wrong happened"+ err);
    }else{
      res.redirect('/animals');
    }
  });
});

router.get("/animals/:id/adopt", function(req, res){
  Animal.findByIdAndUpdate(req.params.id, {status: "adopted"}, function(err, animal){
    res.redirect('/animals');
  })
});

router.get("/animals/:id/abandon", function(req, res){
  Animal.findByIdAndUpdate(req.params.id, {status: "orphan"}, function(err, animal){
    res.redirect('/animals');
  })
});

module.exports = router;
