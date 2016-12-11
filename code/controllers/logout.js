const express = require('express');
var router = express.Router();


module.exports = {
  // registerRouter() {
  //   const router = express.Router();

  //   router.post('/', this.logout);

  //   return router;
  // },
  logout(req, res) {
    req.logout();
    res.redirect('/');
  },
};

module.exports = router;
