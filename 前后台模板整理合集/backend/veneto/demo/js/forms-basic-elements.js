jQuery(function ($) {
    'use strict';
    $('.autogrow').autogrow();

    // Allow toggle iCheck radio examples
    $('input.icheck[type=radio]').on('ifClicked', function () {
        if ($(this).prop('checked'))
            $(this).iCheck('uncheck');
    });
});
