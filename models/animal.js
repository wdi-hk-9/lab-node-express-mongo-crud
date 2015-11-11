var mongoose = require('mongoose');

// create a schema
var animalSchema = new mongoose.Schema({
  breed: String,
  family: String,
  name: String,
  gender: String,
  date: Date,
  created_at: Date,
  updated_at: Date
});

var Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;