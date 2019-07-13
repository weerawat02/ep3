var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'โคตรกรวย' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'กรวยใต' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'กรวยใต' });
});

module.exports = router;
