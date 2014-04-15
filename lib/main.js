var $ = require('jquery');

module.exports = (function($) {
  var submit = function() {
    $.ajax({
      url: '/translate',
      data: {
        url: 'http://rd.io/x/QV5PjDeIdGM/'
      }
    }).done(function(data) {
      console.log(data);
    });
  };

  console.log($('.btn-submit'));

  $(document).ready(function() {
    $('.btn-submit').on('click', function(e) {
      if (e) { e.preventDefault(); }
      submit();
    });
  });

})($);

