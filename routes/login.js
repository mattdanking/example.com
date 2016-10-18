var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login',
                          css: 'login' });
});

module.exports = router;
