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
        res.render('users/users', {users: users});
      } else {
        res.send('users page not found');
      }
    });
});

module.exports = router;