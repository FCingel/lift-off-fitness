/*var express = require('express');
var router = express.Router();

// middleware that is specific to this router
// applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('profile Controller :: Time: ', Date.now());
  next();
});


// define the root profile route
router.get('/', function(req, res) {
  res.send('The profile page');
});

// define the specific profile route
// Note: 'slug' is how we refer to document titles in url's
// For some history checkout: http://stackoverflow.com/a/4230937
router.get('/profile', function(req,res){
  res.send('profile/profile');
};

module.exports = router;*/
var express = require('express');
var router = express.Router();
var models = require('../models');

// middleware that is specific to this router
// applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('profile Controller :: Time: ', Date.now());
  next();
});

//define the root profile route
router.get('/', function(req, res) {
  models.Stats.findAll({
    where: {
      id: 4
    }
  })
  .then(function (stats) {
      if (stats != null) {
        res.render('profile/profile', {stats: stats});
      } else {
        res.send('profile page not found');
      }
    });
});

// router.get('/', function(req, res) {
//   models.User.findAll({
//     where: {
//       id: 4
//     }
//   })
//     .then(function (users) {
//       if (users != null) {
//         res.render('profile/profile', {users: users});
//       } else {
//         res.send('profile page not found');
//       }
//     });
// });



// Display the Form
router.get('/profile', function (req,res) {
  res.render('profile/profile');
});


// router.put('/', function(req,res) {
//   console.log(req.body);
//   models.Stats.update({
//     bench_press: req.body.bench_press,
//     military_press: req.body.military_press,
//     squat: req.body.squat,
//     deadlift: req.body.deadlift,
//     height: req.body.height,
//     weight: req.body.weight
//   }).then(function (profile) {
//     //SHOULD UPDATE PROFILE 
//     res.redirect('/profile')
//   }).catch(function (e) {
//     res.render('profile', {errors: e.errors});
//     //res.json(e);
//   })
// });



router.get('/:username', function (req, res) {
  models.User.findOne({where: {username: req.params.username}})
    .then(function (user) {
      res.send(user);
    });
});

router.delete('/', function(req, res){
  models.Stats.destroy({
    where: {
      id: 1
    }
  })

});


module.exports = router;








