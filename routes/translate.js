var express = require('express');
var spotify = require('../lib/spotify');
var rdio = require('../lib/rdio');
var router = express.Router();

router.post('/translate', function(req, res) {
  console.log('req', req);
});

module.exports = router;
