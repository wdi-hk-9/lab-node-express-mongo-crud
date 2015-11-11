var Animal = require('./models/animal')

var animal_1 = Animal({
  name: "Oreo",
  breed: "Ragdoll",
  dob: new Date('Thu Jan 01 2015'),
  gender: "F",
  family: "Cat",
  status: "Abandon"
});

animal_1.save(function(err){
  if (err) console.log(err);
  console.log('User created!');
});

var animal_2 = Animal({
  name: "Hector",
  breed: "Ragdoll",
  dob: new Date('Thu Jan 01 2015'),
  gender: "M",
  family: "Cat",
  status: "Adopt"
});

animal_2.save(function(err){
  if (err) console.log(err);
  console.log('User created!');
});