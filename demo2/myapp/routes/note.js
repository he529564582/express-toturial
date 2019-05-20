var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send('list');
});
router.get('/create', function(req, res, next) {
  // res.send('create');
  res.send('create');
});
router.get('/detail/:d', function(req, res, next) {
  res.send('detail');
});

module.exports = router;
