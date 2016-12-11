// var express = require('express');
// var router = express.Router();
// var models = require('../models');
// const Redirect = require('../middlewares/redirect');


// // middleware that is specific to this router
// // applies to all routes defined in this controller
// router.use(function timeLog(req, res, next) {
//   console.log('profile Controller :: Time: ', Date.now());
//   next();
// });


// router.get('/', Redirect.ifLoggedIn('/users/:username'), function(req, res) {
//   res.render('sign-in/signin', { error: req.flash('error') });
// });

// //temporarily points to specific profile. Should redirect to signed in user's profile
// // define the root profile route
// // router.get('/', function(req, res) {
// //   models.Stats.findAll({
// //     where: {
// //       id: 1
// //     }
// //   })
// //   .then(function (stats) {
// //       if (stats != null) {
// //         res.render('profile/profile', {stats: stats});
// //       } else {
// //         res.send('profile page not found');
// //       }
// //     });
// // });



// // // Display the Form
// // router.get('/profile', function (req,res) {
// //   res.render('profile/profile');
// // });



// router.get('/:username', function (req, res) {
//   models.User.findOne({where: {username: req.params.username}})
//     .then(function (user) {
//       res.send(user);
//     });
// });

// // router.delete('/', function(req, res){
// //   models.Stats.destroy({
// //     where: {
// //       id: 1
// //     }
// //   })

// // });


// module.exports = router;

const express = require('express');
const Redirect = require('../middlewares/redirect');
var router = express.Router();
var models = require('../models');



module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', Redirect.ifNotLoggedIn(), this.index);

    return router;
  },
  index(req, res) {
    res.render('profile', { user: req.user, success: req.flash('success') });
  },
};

// define the root profile route
router.get('/', function(req, res) {
  models.User.findAll({
    where: {username: req.params.username}})
  .then(function (user) {
      if (user != null) {
        res.render('users/single/users', {user: user});
      } else {
        res.send('profile page not found');
      }
    });
});


module.exports = router;







