var express = require('express');
var router = express.Router();

// middleware that is specific to this router (We did not cover this in class)
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('profile Controller :: Time: ', Date.now());
  next();
});


// define the root sign-ups route
router.get('/', function(req, res) {
  res.send('The profile page');
});

// define the specific sign-up route
// Note: 'slug' is how we refer to document titles in url's
// For some history checkout: http://stackoverflow.com/a/4230937
router.get('/:slug', function(req, res) {
  res.send('This is profile: ' + req.params.slug);
});

module.exports = router;