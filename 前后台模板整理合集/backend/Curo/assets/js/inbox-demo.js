/*global $ */

//Toggle Mail Item Checkbox
$('.mail-item .checkbox').on('click', function (e) {
    "use strict";
    e.preventDefault();
    var child = $(this).children('i');

    if (child.hasClass('fa-square-o')) {
        child.removeClass('fa-square-o').addClass('fa-check-square-o');
    } else if (child.hasClass('fa-check-square-o')) {
        child.removeClass('fa-check-square-o').addClass('fa-square-o');
    }
});
//End Toggle Mail Item Checkbox

//Toggle Mail Item Star
$('.mail-item .star').on('click', function (e) {
    "use strict";
    e.preventDefault();
    var child = $(this).children('i');

    if (child.hasClass('fa-star color-light-orange')) {
        child.removeClass('fa-star color-light-orange').addClass('fa-star-o');
    } else if (child.hasClass('fa-star-o')) {
        child.removeClass('fa-star-o').addClass('fa-star color-light-orange');
    }
});
//End Toggle Mail Item Star