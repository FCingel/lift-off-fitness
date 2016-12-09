var express = require('express');
var router = express.Router();
var models = require('../../models');
var sequelize = require('sequelize');

// middleware that is specific to this router
// applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('stats Controller :: Time: ', Date.now());
  next();
});

//military press leaderboard page
router.get('/', function(req, res) {
  models.Stats.findAll({
    order: '"military_press" DESC'
  })
    .then(function (stats) {
      if (stats != null) {
        res.render('leaderboard/military_press', {stats: stats});
      } else {
        res.send('stats page not found');
      }
    });
});



module.exports = router;