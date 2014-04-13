var express = require('express');
var spotify = require('./spotify');
var rdio = require('./rdio');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  spotify.getTrackUrl('seventy times 7', function(err, url) {
    console.log(url);
  });

  spotify.getTrackName('78HsNTKVNADOaGxS41OSW7', function(err, name) {
    console.log(name);
  });

  rdio.getTrackName('QV5PjDddkJbX', function(err, name) {
    console.log(name);
  });

  rdio.getTrackUrl('Artifice', function(err, url) {
    console.log(url);
  });

  res.render('index', { title: 'FstFwd' });
});

module.exports = router;
