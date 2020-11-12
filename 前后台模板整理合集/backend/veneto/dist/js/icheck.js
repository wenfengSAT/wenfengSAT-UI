jQuery(function ($) {
    'use strict';
    function iCheckLine() {
        var self = $(this),
            label = self.parent().text();

        self.parent().empty().append(self);

        self.iCheck({
            checkboxClass: 'icheckbox_' + cl,
            radioClass: 'iradio_' + cl,
            insert: '<div class="icheck_line-icon"></div>' + label
        });
    }

    var styles = {
        'flat': [
            null,
            'aero',
            'blue',
            'green',
            'grey',
            'orange',
            'pink',
            'purple',
            'red',
            'yellow'
        ],
        'futurico': [null],
        'line': [
            null,
            'aero',
            'blue',
            'green',
            'grey',
            'orange',
            'pink',
            'purple',
            'red',
            'yellow'
        ],
        'minimal': [
            null,
            'aero',
            'blue',
            'green',
            'grey',
            'orange',
            'pink',
            'purple',
            'red',
            'yellow'
        ],
        'polaris': [null],
        'square': [
            null,
            'aero',
            'blue',
            'green',
            'grey',
            'orange',
            'pink',
            'purple',
            'red',
            'yellow'
        ]
    };
    var j, name, cl, style;
    var $ichecks = $('input.icheck');
    for (name in styles) {
        style = styles[name];
        for (j = 0; j < style.length; j++) {
            cl = name;
            if (style[j]) cl += '-' + style[j];

            if (name == 'line') {
                $ichecks.filter('.' + cl).each(iCheckLine);
            } else {
                $ichecks.filter('.' + cl).iCheck({
                    checkboxClass: 'icheckbox_' + cl,
                    radioClass: 'iradio_' + cl
                });
            }
        }
    }
});
