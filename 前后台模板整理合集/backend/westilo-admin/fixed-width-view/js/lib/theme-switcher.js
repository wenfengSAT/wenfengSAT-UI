// **-------------
// theme-switcher
// **-------------
$(".theme-switcher-icon").hammer().on("click touchstart", function(e) {
    e.preventDefault();
    if ($(".theme-switcher").hasClass("theme-switcher-toggle")) {
        $(".theme-switcher").removeClass("theme-switcher-toggle");
    } else {
        $(".theme-switcher").addClass("theme-switcher-toggle");
    }
});
$(".s-w-c").each(function(){
    var swColor = $(this).data('color');
    if (swColor) {
        $(this).css({
            'background-color': swColor
        });
    }
});


$(".t-sw-color").on("click", function(){
    var stylesheet = $(this).attr('title').toLowerCase();
    $('#themes').attr('href','css'+'/'+stylesheet+'.css');
});
