var mongoose = require('mongoose');

// CREATE SCHEMA
var animalSchema = new mongoose.Schema({
  name: String,
  breed: String,
  dob: Date,
  gender: String,
  family: String,
  status: String
});

// CREATE MODEL
var Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;