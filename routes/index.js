var express = require('express');
var spotify = require('./spotify');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  spotify.getTrackUrl('seventy times 7', function(err, url) {
    console.log(url);
  });
  spotify.getTrackName('78HsNTKVNADOaGxS41OSW7', function(err, name) {
    console.log(name);
  });
  res.render('index', { title: 'FstFwd' });
});

module.exports = router;
