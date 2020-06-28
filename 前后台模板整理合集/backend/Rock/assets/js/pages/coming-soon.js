$(function () {

    /* Begin jQuery Countdown */
    var newYear = new Date();
    newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1);
    $("#countdown").countdown({until: newYear});
    /* End jQuery Countdown */

});

