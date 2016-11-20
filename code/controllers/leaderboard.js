/*var express = require('express');
var router = express.Router();

// middleware that is specific to this router
// applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('leaderboard Controller :: Time: ', Date.now());
  next();
});


// define the root leaderboard route
router.get('/', function(req, res) {
  res.send('The leaderboard page');
});

// define the specific leaderboard route
// Note: 'slug' is how we refer to document titles in url's
// For some history checkout: http://stackoverflow.com/a/4230937
router.get('/:slug', function(req, res) {
  res.send('This is leaderboard: ' + req.params.slug);
});

module.exports = router;*/
var express = require('express');
var router = express.Router();
var models = require('../models');

// middleware that is specific to this router
// applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('user Controller :: Time: ', Date.now());
  next();
});


// define the root users route
router.get('/', function(req, res) {
  models.User.findAll({})
    .then(function (users) {
      if (users != null) {
        res.render('leaderboard/leaderboard', {users: users});
      } else {
        res.send('users page not found');
      }
    });
});

module.exports = router;
