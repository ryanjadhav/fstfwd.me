var $ = require('jquery');

module.exports = (function($) {
  var submit = function(url) {
    $.ajax({
      type: 'POST',
      url: '/translate',
      data: {
        url: url
      }
    }).done(function(data) {
      if (data && data.url) {
       $('.result-link').attr('href', data.url).html(data.url);
      }
    });
  };

  $(document).ready(function() {
    $('.btn-submit').on('click', function(e) {
      if (e) { e.preventDefault(); }
      var url = $('.form-input').val();
      submit(url);
    });
  });

  window.$ = $;
})($);

