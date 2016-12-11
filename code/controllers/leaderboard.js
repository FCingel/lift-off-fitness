var express = require('express');
var router = express.Router();
var models = require('../models');
var sequelize = require('sequelize');

// middleware that is specific to this router
// applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('leaderboard Controller :: Time: ', Date.now());
  next();
});

//main leaderboard page
//sorts table by username
router.get('/', function(req, res) {
  models.User.findAll({
    order: '"username" ASC'
  })
    .then(function (users) {
      if (users != null) {
        res.render('leaderboard/leaderboard', {users: users});
      } else {
        res.send('users page not found');
      }
    });
});



module.exports = router;
