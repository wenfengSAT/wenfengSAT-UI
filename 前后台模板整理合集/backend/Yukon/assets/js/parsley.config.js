/* parsley config */
    window.ParsleyConfig = {
        errorsWrapper: '<div class="parsley-errors-list"></div>',
        errorTemplate: '<span></span>',
        errorsContainer: function (ParsleyField) {
            var element = ParsleyField.$element;
            if( (element.is(':checkbox') || element.is(':radio')) && element.parent().is('label') ) {
                return element.closest('div');
            }
        }
    };