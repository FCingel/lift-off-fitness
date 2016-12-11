const express = require('express');
var router = express.Router();


module.exports = {
  // registerRouter() {
  //   const router = express.Router();

  //   router.post('/', this.logout);

  //   return router;
  // },
  logout(req, res) {
    req.session.destroy();
    res.redirect('/');
  },
};

module.exports = router;
