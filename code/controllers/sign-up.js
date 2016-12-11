var express = require('express');
var router = express.Router();
var models = require('../models');

// middleware that is specific to this router
// applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('Sign-Up Controller :: Time: ', Date.now());
  next();
});


// define the root sign-up route
router.get('/', function(req, res) {
  models.User.findAll({})
    .then(function (signup) {
      if (signup != null) {
        res.render('sign-up/signup', {signup: signup});
      } else {
        res.send('sign-up page not found');
      }
    });
});

// Display the Form
router.get('/signup', function (req,res) {
  res.render('sign-up/signup');
});


// Process a submitted form
router.post('/', function(req,res) {
  console.log(req.body);
  models.User.create({
  	username: req.body.username,
  	firstName: req.body.firstName,
  	lastName: req.body.lastName,
  	email: req.body.email,
  	password: req.body.password
  })
  models.Stats.create({
    gender: req.body.gender,
    username: req.body.username,
    bench_press: req.body.bench_press,
    military_press: req.body.military_press,
    squat: req.body.squat,
    deadlift: req.body.deadlift,
    height: req.body.height,
    weight: req.body.weight
  }).then(function (signup) {
  	//SHOULD REDIRECT TO PROFILE AFTER SUCCESSFUL SIGN UP
    res.redirect('/users')
  }).catch(function (e) {
    res.render('sign-up/signup', {errors: e.errors});
    //res.json(e);
  })
});


module.exports = router;

