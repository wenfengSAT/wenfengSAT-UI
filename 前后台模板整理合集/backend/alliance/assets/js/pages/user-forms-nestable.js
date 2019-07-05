'use strict';
//  Author: ThemeREX.com
//
//  .html scripts
//

(function($) {

    $(document).ready(function() {

        "use strict";

        // Init Theme Core
        Core.init();

        // Init Demo JS
        Demo.init();

        // Nestable Output
        var updateOutput = function(e) {
            var list = e.length ? e : $(e.target),
                output = list.data('output');
            if (window.JSON) {
                output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
            } else {
                output.val('JSON browser support required for this demo.');
            }
        };

        // Init Nestable on list 1
        $('#nestable').nestable({
            group: 1
        }).on('change', updateOutput);

        // Init Nestable on list 2
        $('#nestable-alt').nestable({
            group: 2
        }).on('change', updateOutput);

        // Init Nestable on list 3
        $('#nestable-contextual').nestable({
            group: 3
        }).on('change', updateOutput);

        // nestable serialized output functionality
        updateOutput($('#nestable').data('output', $('#nestable-output')));
        updateOutput($('#nestable-alt').data('output', $('#nestable-output2')));
        updateOutput($('#nestable-contextual').data('output', $('#nestable-output3')));

        // nestable menu functionality
        $('#nestable-menu').on('change', function(e) {
            var target = $(e.target),
                action = target.data('action');
            if (action === 'expand-all') {
                $('.dd').nestable('expandAll');
            }
            if (action === 'collapse-all') {
                $('.dd').nestable('collapseAll');
            }
        });
    });

})(jQuery);
