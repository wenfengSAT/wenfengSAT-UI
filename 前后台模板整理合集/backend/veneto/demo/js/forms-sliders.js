jQuery(function ($) {
    'use strict';
    $('.dial').knob();
    $('#ionRangeSlider1').ionRangeSlider({
        min: 1000,
        max: 100000,
        from: 30000,
        to: 90000,
        type: 'double',
        step: 500,
        prefix: '$',
        maxPostfix: '+',
        prettify: false,
        hasGrid: true
    });
    $('#ionRangeSlider2').ionRangeSlider({
        min: 0,
        max: 10,
        type: 'single',
        step: 0.1,
        postfix: ' carats',
        prettify: false,
        hasGrid: true
    });
    $('#ionRangeSlider3').ionRangeSlider({
        min: -50,
        max: 50,
        from: 0,
        type: 'single',
        step: 1,
        postfix: '°',
        prettify: false,
        hasGrid: true
    });
    $('#ionRangeSlider4').ionRangeSlider({
        values: [
            'January', 'February', 'March',
            'April', 'May', 'June',
            'July', 'August', 'September',
            'October', 'November', 'December'
        ],
        type: 'single',
        hasGrid: true
    });
    $('#ionRangeSlider6').ionRangeSlider({
        min: 10000,
        max: 100000,
        step: 100,
        postfix: ' light years',
        from: 55000,
        hideMinMax: false,
        hideFromTo: true
    });

    // jQuery UI Basic Sliders
    $('#slider').slider({range: 'min', max: 100, value: 80 });
    $('#slider-primary').slider({range: 'min', max: 100, value: 65 });
    $('#slider-success').slider({range: 'min', max: 100, value: 50 });
    $('#slider-warning').slider({range: 'min', max: 100, value: 35 });
    $('#slider-danger').slider({range: 'min', max: 100, value: 20 });
    $('#slider-info').slider({range: 'min', max: 100, value: 10 });
    // jQuery UI Vertical Sliders
    $('#slider-vertical').slider({orientation: 'vertical', range: 'min', max: 100, value: 80 });
    $('#slider-vertical-primary').slider({orientation: 'vertical', range: 'min', max: 100, value: 65 });
    $('#slider-vertical-success').slider({orientation: 'vertical', range: 'min', max: 100, value: 50 });
    $('#slider-vertical-warning').slider({orientation: 'vertical', range: 'min', max: 100, value: 35 });
    $('#slider-vertical-danger').slider({orientation: 'vertical', range: 'min', max: 100, value: 20 });
    $('#slider-vertical-info').slider({orientation: 'vertical', range: 'min', max: 100, value: 10 });
    // jQuery UI Range Sliders
    $('#slider-range').slider({range: true, max: 100, values: [60, 80] });
    $('#slider-range-primary').slider({range: true, max: 100, values: [50, 70] });
    $('#slider-range-success').slider({range: true, max: 100, values: [40, 60] });
    $('#slider-range-warning').slider({range: true, max: 100, values: [30, 50] });
    $('#slider-range-danger').slider({range: true, max: 100, values: [20, 40] });
    $('#slider-range-info').slider({range: true, max: 100, values: [10, 30] });
    // jQuery UI Range Vertical Sliders
    $('#slider-range-vertical').slider({orientation: 'vertical', range: true, max: 100, values: [60, 80] });
    $('#slider-range-vertical-primary').slider({orientation: 'vertical', range: true, max: 100, values: [50, 70] });
    $('#slider-range-vertical-success').slider({orientation: 'vertical', range: true, max: 100, values: [40, 60] });
    $('#slider-range-vertical-warning').slider({orientation: 'vertical', range: true, max: 100, values: [30, 50] });
    $('#slider-range-vertical-danger').slider({orientation: 'vertical', range: true, max: 100, values: [20, 40] });
    $('#slider-range-vertical-info').slider({orientation: 'vertical', range: true, max: 100, values: [10, 30] });
    // jQuery UI Slider Variations
    $('#slider-variation').slider({range: 'max', max: 100, value: 80 });
    $('#slider-variation-primary').slider({range: 'max', max: 100, value: 65});
    $('#slider-variation-success').slider({range: 'max', max: 100, value: 50 });
    $('#slider-variation-warning').slider({max: 100, value: 35 });
    $('#slider-variation-danger').slider({max: 100, value: 20});
    $('#slider-variation-info').slider({max: 100, value: 10});
    // jQuery UI  Slider Variations
    $('#slider-vertical-variation').slider({orientation: 'vertical', range: 'max', max: 100, value: 80 });
    $('#slider-vertical-variation-primary').slider({orientation: 'vertical', range: 'max', max: 100, value: 65});
    $('#slider-vertical-variation-success').slider({orientation: 'vertical', range: 'max', max: 100, value: 50 });
    $('#slider-vertical-variation-warning').slider({orientation: 'vertical', max: 100, value: 35 });
    $('#slider-vertical-variation-danger').slider({orientation: 'vertical', max: 100, value: 20});
    $('#slider-vertical-variation-info').slider({orientation: 'vertical', max: 100, value: 10});
});
