jQuery(function ($) {
    'use strict';
    $('.sparkline').sparkline();
    $('.sparkbar').sparkline('html', {type: 'bar'});
    $('.sparktristate').sparkline('html', {type: 'tristate'});
    $('.sparkpie').sparkline('html', { type: 'pie', height: '1.0em' });

    $('#mini-chart-1').sparkline([3, 7, 5, 4], {
        type: 'pie',
        height: '30px',
        sliceColors: ['#49BFAE', '#34A8DB', '#F0AD4E', '#D9534F']
    });

    $('#mini-chart-2').sparkline([4, 8, 6, 4, 2, 4, 4, 5, 7], {
        type: 'line',
        height: '30px',
        width: '50px',
        lineColor: '#D9534F',
        fillColor: false,
    }).sparkline([3, 5, 10, 6, 9, 6, 7, 6, 2], {
        type: 'line',
        height: '30px',
        width: '50px',
        lineColor: '#5BC0DE',
        fillColor: false,
        composite: true
    });

    $('#mini-chart-3').sparkline([1, 2, 4, 3, 4, 1, 4, 5, 3], {
        type: 'bar',
        height: '30px',
        width: '50px',
        barColor: '#D9534F'
    });

    $('#mini-chart-4').sparkline([1, 2, 4, 3, 4, 1, 4, 5, 3], {
        type: 'line',
        height: '30px',
        width: '50px',
        lineColor: '#4CA84C',
        fillColor: '#5CB85C'
    });
});
