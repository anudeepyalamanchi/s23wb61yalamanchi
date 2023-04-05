var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Account', { title: 'Search Results Accounts' });
});

module.exports = router;
