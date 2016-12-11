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

// define the profile route
router.get('/', Redirect.ifNotLoggedIn(), function(req, res) {
  res.render('users/single/users', {user: req.user});
});


module.exports = router;







