// var express = require('express');
// // const passport = require('../middlewares/authentication');
// // const Redirect = require('../middlewares/redirect');

// var router = express.Router();
// var models = require('../models');


// // middleware that is specific to this router
// // applies to all routes defined in this controller
// router.use(function timeLog(req, res, next) {
//   console.log('Sign-In Controller :: Time: ', Date.now());
//   next();
// });


// // define the root sign-in route
// router.get('/', function(req, res) {
//   models.User.findAll({})
//     .then(function (signin) {
//       if (signin != null) {
//         res.render('sign-in/signin', {signin: signin});
//       } else {
//         res.send('sign-in page not found');
//       }
//     });
// });

// // Display the Form
// router.get('/signin', function (req,res) {
//   res.render('sign-in/signin');
// });


// // Process a submitted form
// router.get('/', function(req,res) {
//   console.log(req.body);
//   // Maybe sign in with username OR email
//   models.User.find({
//   	username: req.body.username,
//    	password: req.body.password
//   }).then(function (signin) {
//   	//SHOULD REDIRECT TO PROFILE AFTER SUCCESSFUL SIGN UP
//     res.redirect('/profile')
//   }).catch(function (e) {
//     res.render('sign-in/signin', {errors: e.errors});
//     // res.json(e);
//   })
// });



// module.exports = router;


const express = require('express');
const passport = require('../middlewares/authentication');
const Redirect = require('../middlewares/redirect');
const router = express.Router();


router.get('/', Redirect.ifLoggedIn('/profile'), function(req, res) {
  res.render('sign-in/signin', { error: req.flash('error') });
});


router.post('/', function(req, res) {
  passport.authenticate('local', {
    successRedirect: '/profile/',
    failureRedirect: '/sign-in',
    failureFlash: true,
    successFlash: true,
  })(req, res);
});


module.exports = router;
