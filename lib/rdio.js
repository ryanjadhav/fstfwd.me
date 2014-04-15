var Rdio = require("node-rdio");
var config = require('../config/config.json');

var rdio = new Rdio([config.rdio.key, config.rdio.secret]);

var parseUrlForName = function(json) {
  if (json && json.result) {
    return json.result.name;
  } else {
    return false;
  }
};

var parseSearchForUrl = function(json) {
  if (json && json.result.results[0]) {
    return json.result.results[0].shortUrl;
  } else {
    return false;
  }
};

exports.getTrackName = function(short_code, cb) {
  rdio.call('getObjectFromShortCode', {'short_code': short_code}, function(err, data) {
    if (err) {
      return cb(err, {});
    }
    return cb(err, parseUrlForName(data));
  });
};

exports.getTrackUrl = function(name, cb) {
  rdio.call('search', {'query' : name, 'types': 'Tracks'}, function(err, data) {
    if (err) {
      return cb(err, {});
    }
    return cb(err, parseSearchForUrl(data));
  });
};
