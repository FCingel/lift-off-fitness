var express = require('express');
var router = express.Router();
var models = require('../../models');
var sequelize = require('sequelize');

// middleware that is specific to this router
// applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('leaderboard squat Controller :: Time: ', Date.now());
  next();
});

//squat leaderboard page
router.get('/', function(req, res) {
  models.User.findAll({
    order: '"squat" DESC'
  })
    .then(function (users) {
      if (users != null) {
        res.render('leaderboard/squat', {users: users});
      } else {
        res.send('users page not found');
      }
    });
});



module.exports = router;