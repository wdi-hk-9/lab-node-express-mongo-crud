var mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
  name: String,
  breed: String,
  dob: Date,
  gender: String,
  family: String,
  status: {type: String, enum:["adpoted","orphan"]}
});

var Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;