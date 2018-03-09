+function ($) {
    'use strict';

    $(document).on('topJUI.eventType.initUI.base', function (e) {

        $('[data-toggle="topjui-dialog"]').each(function (i) {
            var $element = $(this);
            var options = getOptionsJson($element);

            $(this).wwDialog(options);
        });

    });

}(jQuery);

$(function () {
    $(this).trigger('topJUI.eventType.initUI.base');
});