var request = require('request');

var BASE_WEB_URL = 'http://play.spotify.com';
var BASE_API_URL = 'http://ws.spotify.com';

var lookup = function(uri, cb) {
  request(BASE_API_URL + '/lookup/1/.json?uri=' + uri, function(error, response, body) {
    if (error) {
      cb(error);
    }
    return cb(null, JSON.parse(body));
   });
};

var search = function(query, cb) {
  request(BASE_API_URL + '/search/1/track.json?q=' + query, function(error, response, body) {
    if (error) {
      cb(error);
    }
    return cb(null, JSON.parse(body));
   });
};

var parseSearchForUrl = function(json) {
  if (json && json.tracks && json.tracks.length) {
    var href = json.tracks[0].href,
        parts = href.split(':');
    var playUrl = BASE_WEB_URL + '/track/' + parts[parts.length - 1];
    return playUrl;
  } else {
    return false;
  }
};

var parseLookupForName = function(json) {
  if (json && json.track) {
    return json.track.name;
  } else {
    return false;
  }
};

exports.getTrackUrl = function(query, cb) {
  search(query, function(err, data) {
    return cb(err, parseSearchForUrl(data));
  });
};

exports.getTrackName = function(uri, cb) {
  lookup('spotify:track:'+uri, function(err, data) {
    return cb(err, parseLookupForName(data));
  });
};
