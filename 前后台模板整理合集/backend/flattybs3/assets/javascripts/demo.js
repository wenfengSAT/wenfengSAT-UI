(function() {
  $(document).ready(function() {
    $(".color-settings-body-color > a").hover(function() {
      return $("#color-settings-body-color").attr("href", $(this).data("change-to"));
    });
    return $(".color-settings-contrast-color > a").hover(function() {
      $('body')[0].className = $('body')[0].className.replace(/(^|\s)contrast.*?(\s|$)/g, ' ').replace(/\s\s+/g, ' ').replace(/(^\s|\s$)/g, '');
      return $('body').addClass($(this).data("change-to"));
    });
  });

}).call(this);
