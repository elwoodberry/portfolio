var express = require('express');
var router = express.Router();

// ROOT
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Acme Inc.  - Access Alpha",
    description: "Access Alpha || This is a login, register & forgot password demo",
    robots: "follow",
    canonical: "http://domain.com",
    twitterImage: "http://domain.com"
  });
});

// DASHBOARD
router.get('/dashboard', ensureAuthenticated, function(req, res){
  res.render('dashboard', {
    title: "Dashboard Title Has Been Here",
    description: "index description"
  })
});

// LOGOUT
router.get('/logout', function(req, res){
  req.logout();

  req.flash('success_msg', 'You Are Logged Out.');

  res.redirect('/');

});

function ensureAuthenticated(req, res, next){
      if(req.isAuthenticated()){
        return next();
      }else {
        req.flash('error_msg', 'You Are Not Logged In');
        res.redirect('/');
      }
}

module.exports = router;
