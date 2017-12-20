var express = require('express'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    router = express.Router();

var User = require('../models/mdl-users');

// POST REQ: REGISTER
router.post('/register', function(req, res, next) {
  var name = req.body.name,
      email = req.body.email,
      username = req.body.username,
      password = req.body.password,
      password2 = req.body.password2;

  // VALIDATION
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid.').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  var errors = req.validationErrors();

  if(errors){
    res.render('register', {
      log: "Something is Wrong..",
      errors: errors
    });
  } else {
    var newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password
    });

    User.createUser(newUser, function(err, user){
      if(err) throw err;
      console.log(user);
    });

    req.flash('success_msg', 'You Are Registered And Can Now Log In.');

    res.redirect('/');
  }
});

// CONFIGURATION
passport.use(new LocalStrategy(function(username, password, done) {

  User.getUserByUsername(username, function(err, user){
    if(err) throw err;
    if(!user){
      return done(null, false, {message: "Unknown User"});
    }

    User.comparePassword(password, user.password, function(err, isMatch){
      if(err) throw err;
      if(isMatch){
        return done(null, user);
      }else {
        return done(null, false, {message: "Invalid Password"})
      }
    });
  });
}));

// SERIALIZE
passport.serializeUser(function(user, done){
  done(null, user.id);
});

// DESERIALIZE
passport.deserializeUser(function(id, done){
  User.getUserById(id, function(err, user){
    done(err, user);
  });
});

// Authenticate
router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/register',
    failureFlash: true
  }), function(req, res) {
    res.redirect('/dashboard');
});

// LOGOUT
router.get('/logout', function(req, res){
  req.logout();

  req.flash('success_msg', 'You Are Logged Out.');

  res.redirect('/');

});

module.exports = router;
