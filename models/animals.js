var mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
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