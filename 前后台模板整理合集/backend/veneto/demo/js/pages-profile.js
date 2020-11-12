jQuery(function ($) {
    'use strict';
    function metricFlot($el, data, yaxis, options) {
        options = $.extend({
            color: '#DDEEFA',
            type: 'area'
        }, options);

        var series = {
            shadowSize: 0
        };
        switch (options.type) {
            case 'bar':
                series.bars = {
                    show: true,
                    align: 'center',
                    lineWidth: 1,
                    fill: true,
                    fillColor: null
                };
                break;
            case 'area-points':
                series.lines = {
                    lineWidth: 2,
                    show: true,
                    fill: true
                };
                series.points = {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: '#ffffff',
                    symbol: 'circle',
                    radius: 3
                };
                break;
            default:
                series.lines = {
                    lineWidth: 6,
                    show: true,
                    fill: true
                };
        }
        $.plot($el, [
            {
                label: 'Data 1',
                data: data,
                color: options.color
            }
        ], {
            series: series,
            grid: {
                show: false,
                borderWidth: 0
            },
            yaxis: yaxis,
            xaxis: {
                tickDecimals: 0
            },
            legend: {
                show: false
            }
        });
    }

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
        fillColor: false
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


    metricFlot($('#metric-sales'), [
        [0, 10],
        [1, 14],
        [2, 16],
        [3, 17],
        [4, 19],
        [5, 18],
        [6, 16],
        [7, 17],
        [8, 18],
        [9, 21]
    ], {
        min: 6,
        max: 25
    }, {
        color: '#F4A04F'
    });
    metricFlot($('#metric-orders'), [
        [0, 10],
        [1, 11],
        [2, 14],
        [3, 12],
        [4, 16],
        [5, 13],
        [6, 18],
        [7, 14],
        [8, 19],
        [9, 15],
        [10, 14],
        [11, 16],
        [12, 11],
        [13, 13],
        [14, 19],
        [15, 21]
    ], {
        min: 6,
        max: 25
    }, {
        color: '#2478BB'
    });
});
