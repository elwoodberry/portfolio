var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Title",
    description: "Description",
    robots: "follow",
    canonical: "http://domain.com",
    twitterImage: "http://domain.com"
  });
});

module.exports = router;
