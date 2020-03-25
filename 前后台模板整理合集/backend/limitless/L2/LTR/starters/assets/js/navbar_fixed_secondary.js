/* ------------------------------------------------------------------------------
*
*  # Fixed secondary navbar
*
*  Specific JS code additions for navbar_fixed_secondary.html blank page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {

    // Attach affix to the navbar
    $('#navbar-second').affix({
        offset: {
            top: function() {
                return (this.top = $('body').children('.navbar').outerHeight(true));
            }
        }
    });


    // When affixed add top margin to next container
    $('#navbar-second').on('affixed.bs.affix', function() {
        $(this).next('.page-container').css('margin-top', $(this).outerHeight());
    });


    // When on top remove margin from the next container
    $('#navbar-second').on('affixed-top.bs.affix', function() {
        $(this).next('.page-container').css('margin-top', '');
    });

});
