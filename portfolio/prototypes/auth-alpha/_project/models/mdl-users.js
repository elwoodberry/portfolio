// Packages
var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs');

// Create A Schema
var UserSchema = mongoose.Schema({
  email: {
    type: String,
    index: true
  },
  phone: {
    type: String
  },
  password: {
    type: String
  }
});

// Create A Variable To Accessed Externally
var User = module.exports = mongoose.model('User', UserSchema);

// Create User Function
module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(newUser.password, salt, function(err, hash){
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.getUserByUsername = function(email, callback){
  var query = {email: email}
  User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch){
    if(err) throw err;
    callback(null, isMatch);
  });
}
