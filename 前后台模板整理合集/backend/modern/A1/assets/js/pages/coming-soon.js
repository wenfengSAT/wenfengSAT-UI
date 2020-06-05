$(document).ready(function() {
      $('#counter').countdown('2015/09/27', function(event) {
          $(this).html(event.strftime('%d:%H:%M:%S'));
      });
});