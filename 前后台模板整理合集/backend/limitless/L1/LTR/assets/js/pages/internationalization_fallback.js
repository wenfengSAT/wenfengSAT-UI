/* ------------------------------------------------------------------------------
*
*  # Set fallback language
*
*  Specific JS code additions for internationalization_fallback.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Configuration
    // -------------------------

    // Add options
    i18n.init({
        resGetPath: 'assets/locales/__lng__.json',
        debug: true,
        load: 'unspecific',
        detectLngQS: 'lang',
        fallbackLng : 'en'
    },
    function () {
        $('body').i18n(); // Init
    });



    // Change languages in dropdown
    // -------------------------

    if(i18n.lng() === "en" || "hu" || "es") {

        // Set active class
        $('.english').parent().addClass('active');

        // Change language in dropdown
        $('.language-switch').children('.dropdown-toggle').html(
            $('.language-switch').find('.english').html() + ' <i class="caret" />'
        ).children('img').addClass('position-left');
    }

});
