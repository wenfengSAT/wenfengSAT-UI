/*global $ */
$('.exSlider').slider({
    formater: function (value) {
        "use strict";
        return 'Current value: ' + value;
    }
});

$('.exSlider-range').slider({
    formater: function (value) {
        "use strict";
        return '€ ' + value;
    }
});

$('.exSliderVertical').slider({
    reversed: true
});