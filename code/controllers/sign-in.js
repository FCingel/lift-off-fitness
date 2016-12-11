const express = require('express');
const passport = require('../middlewares/authentication');
const Redirect = require('../middlewares/redirect');
const router = express.Router();


router.get('/', Redirect.ifLoggedIn('/profile'), function(req, res) {
  res.render('sign-in/signin', { error: req.flash('error') });
});


router.post('/', function(req, res) {
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/sign-in',
    failureFlash: true,
    successFlash: true,
  })(req, res);
});


module.exports = router;