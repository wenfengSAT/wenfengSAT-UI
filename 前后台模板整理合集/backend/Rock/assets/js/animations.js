$(function () {

    /* Begin Demo Animations */
    $(document).ready(function() {
        $('.animation-select').click(function () {
            $('#animation-text').text($(this).text());
            $('#animation-text').removeAttr('class').attr('class', '');
            var animation = $(this).attr("data-animation");
            $('#animation-text').addClass('animated');
            $('#animation-text').addClass(animation);
            return false;
        });
    });
    /* Begin Demo Animations */

});

