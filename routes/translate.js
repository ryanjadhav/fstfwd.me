var express = require('express');
var spotify = require('../lib/spotify');
var rdio = require('../lib/rdio');
var router = express.Router();

router.post('/', function(req, res, next) {
  var url = req.param('url');


  if (url && !!url.match('rd.io')) {
    var shortCode = url.split('/')[4];
    rdio.getTrackName(shortCode, function(err, name) {
      if (err) {
        return next();
      }
      spotify.getTrackUrl(name, function(err, url) {
        if (err) {
          return next();
        }
        res.send({url: url});
      });
    });
  } else if (url && !!url.match('spotify')) {
    var shortCode = url.split('/')[4];
    spotify.getTrackName(shortCode, function(err, name){
      if (err) {
        return next();
      }
      rdio.getTrackUrl(name, function(err, url) {
        if (err) {
          return next();
        }
        res.send({url: url});
      });
    });
  } else {
    res.send({url: ''});
  }
});

module.exports = router;
