var mongoose = require('mongoose');

// create a schema
var animalSchema = new mongoose.Schema({
  name: String,
  breed: String,
  dob: Date,
  gender: String,
  family: String,
  status: String,
  created_at: Date,
  updated_at: Date
});

var Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;