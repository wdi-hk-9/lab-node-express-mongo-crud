var express        = require('express');
var path           = require('path');
var debug          = require("debug");
var logger         = require('morgan');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var expressLayouts = require('express-ejs-layouts');

var port    = process.env.PORT || 3000;
var app = express();
var router = express.Router();

var moongoose = require('mongoose');
moongoose.connect('mongodb://localhost/animalshelter');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));


app.set('views', './views');
app.set('view engine', 'ejs');


// Requring Animal model
var Animal = require('./models/animal');

var newAnimal = Animal({
  breed: 'Ragdoll',
  family: 'Cat',
  name: 'Dob',
  gender: 'F',
  date: '',
});

// save the user
newAnimal.save(function(err) {
  if (err) console.log(err);
  console.log('Animal created!');
});


// Routes
// Index
app.get('/', function(req, res) {
  res.render('index');
});

// Create
app.post('/', function(req, res){
  res.send
})




app.listen(port);
console.log("Server Started" + port);
