var mongoose = require('mongoose');

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

// animalSchema.statics.all = function() {
//   return this.find({});
// }

animalSchema.methods.findSimilarFamily = function (cb) {
  return this.model('Animal').find({ family: this.family}, cb);
};

animalSchema.statics.all = function (cb) {
  return this.find({ }, cb);
};


// Animal.findOneAndRemove({ name: 'Oreo'}, function(err) {
//   if (err) console.log(err);
//   console.log('Animal deleted');
// });

var Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;