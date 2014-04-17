var express = require('express');
var spotify = require('../lib/spotify');
var rdio = require('../lib/rdio');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'FstFwd' });
});

module.exports = router;
