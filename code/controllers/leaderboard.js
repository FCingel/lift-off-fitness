//module.exports = router;
var express = require('express');
var router = express.Router();
var models = require('../models');

// middleware that is specific to this router
// applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('stats Controller :: Time: ', Date.now());
  next();
});


// define the root users route
router.get('/', function(req, res) {
  models.Stats.findAll({})
    .then(function (stats) {
      if (stats != null) {
        res.render('leaderboard/leaderboard', {stats: stats});
      } else {
        res.send('stats page not found');
      }
    });
});


module.exports = router;
