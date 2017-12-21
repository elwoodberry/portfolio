var express = require('express');
var router = express.Router();

// ROOT
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Title",
    description: "Description",
    robots: "follow",
    canonical: "http://domain.com",
    twitterImage: "http://domain.com"
  });
});

function ensureAuthenticated(req, res, next){
      if(req.isAuthenticated()){
        return next();
      }else {
        req.flash('error_msg', 'You Are Not Logged In');
        res.redirect('/users/login');
      }
}

module.exports = router;
