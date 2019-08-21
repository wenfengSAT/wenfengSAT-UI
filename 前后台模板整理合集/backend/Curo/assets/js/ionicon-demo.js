/*global $ */
$(document).ready(function () {
    "use strict";

    $('#ionicons>li').mousemove(function (e) {
        var content = '<div class="tooltip-arrow"></div><div class="tooltip-inner">' + $(this).attr('class') + '</div>';
        $('#ion-tooltip').html(content);
        $('#ion-tooltip').css({
            'top': e.pageY,
            'left': e.pageX - 40,
            'display': 'block'
        });
    });

});