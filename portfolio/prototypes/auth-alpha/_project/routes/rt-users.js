var express = require('express'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    router = express.Router();

var User = require('../models/mdl-users');

// POST REQ: REGISTER
router.post('/register', function(req, res, next) {

  // Get all the things being submited and put them into a variable.
  var email = req.body.createEmail,
      phone = req.body.createPhone,
      password = req.body.createPassword;

  // VALIDATION
  // This needs to be updated to the ES6 version
  req.checkBody('createEmail', 'Email is required.').isEmail();
  req.checkBody('createPhone', 'Phone is required.').notEmpty();
  req.checkBody('createPassword', 'Password is required.').notEmpty();

  // Define errors variable as the validation errors function.
  var errors = req.validationErrors();

  if(errors){
    res.render('index', {
      log: "Something is Wrong..",
      errors: errors
    });

    console.log(errors);

  }else {
    // Create A New User
    var newUser = new User({
      email: email,
      phone: phone,
      password: password
    });

    User.createUser(newUser, function(err, user){
      if(err) throw err;
    });

    req.flash('success_msg', 'You Are Registered And Can Now Log In.');

    res.redirect('/');
  }
});

// LOCAL STRATEGY CONFIGURATION
passport.use(new LocalStrategy(function(username, password, done) {

  // MODEL FUNCTION: 'GET USER BY USERNAME'
  User.getUserByUsername(username, function(err, user){
    if(err) throw err;
    if(!user){
      return done(null, false, {message: "Unknown User"});
    }

    // MODEL FUNCTION: 'COMPARE PASSWORD'
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

// POST REQ: LOGIN
router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: true
  }), function(req, res) {
    res.redirect('/dashboard');
});



module.exports = router;
