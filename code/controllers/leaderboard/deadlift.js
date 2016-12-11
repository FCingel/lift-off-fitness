var express = require('express');
var router = express.Router();
var models = require('../../models');
var sequelize = require('sequelize');

// middleware that is specific to this router
// applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('leaderboard deadlift Controller :: Time: ', Date.now());
  next();
});

//deadlift leaderboard page
router.get('/', function(req, res) {
  models.User.findAll({
    order: '"deadlift" DESC'
  })
    .then(function (users) {
      if (users != null) {
        res.render('leaderboard/deadlift', {users: users});
      } else {
        res.send('users page not found');
      }
    });
});



module.exports = router;