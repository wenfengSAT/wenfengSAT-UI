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

    metricFlot($('#metric-1'), [
        [0, 13],
        [1, 16],
        [2, 17],
        [3, 19],
        [4, 18],
        [5, 21],
        [6, 22],
        [7, 23]
    ], {
        min: 6,
        max: 25
    });

    metricFlot($('#metric-2'), [
        [0, 14],
        [1, 15],
        [2, 20],
        [3, 13],
        [4, 16],
        [5, 23],
        [6, 19],
        [7, 17],
        [8, 14],
        [9, 15],
        [10, 13],
        [11, 16]
    ], {
        min: 7,
        max: 25
    });

    metricFlot($('#metric-3'), [
        [0, 10],
        [1, 12],
        [2, 14],
        [3, 14],
        [4, 16],
        [5, 17],
        [6, 20],
        [7, 21]
    ], {
        min: 4,
        max: 25
    });

    metricFlot($('#metric-4'), [
        [0, 21],
        [1, 15],
        [2, 18],
        [3, 17],
        [4, 21],
        [5, 22],
        [6, 26],
        [7, 24],
        [8, 25],
        [9, 29],
        [10, 27],
        [11, 19],
        [12, 28],
        [13, 23],
        [14, 30],
    ], {
        min: 9,
        max: 35
    });


    metricFlot($('#metric-5'), [
        [0, 16],
        [1, 14],
        [2, 31],
        [3, 23],
        [4, 19],
        [5, 37],
        [6, 20],
        [7, 14],
        [8, 23],
        [9, 37],
        [10, 27],
        [11, 22],
        [12, 12],
        [13, 22],
        [14, 22]
    ], {
        min: 2,
        max: 40
    });

    metricFlot($('#metric-6'), [
        [0, 14],
        [1, 19],
        [2, 14],
        [3, 20],
        [4, 21],
        [5, 22],
        [6, 13],
        [7, 12],
        [8, 19],
        [9, 11],
        [10, 29],
        [11, 13],
        [12, 25],
        [13, 19],
        [14, 23]
    ], {
        min: 2,
        max: 35
    });

    metricFlot($('#metric-7'), [
        [0, 2],
        [1, 1],
        [2, 1],
        [3, 3],
        [4, 1],
        [5, 2],
        [6, 1],
        [7, 1],
        [8, 1],
        [9, 3],
        [10, 1],
        [11, 1],
        [12, 3],
        [13, 1],
        [14, 1]
    ], {
        min: 0,
        max: 4
    });

    metricFlot($('#metric-8'), [
        [0, 1],
        [1, 2],
        [2, 6],
        [3, 3],
        [4, 6],
        [5, 2],
        [6, 6],
        [7, 4],
        [8, 6],
        [9, 3],
        [10, 2],
        [11, 4],
        [12, 4],
        [13, 5]
    ], {
        min: 0,
        max: 7
    });

    metricFlot($('#metric-9'), [
        [0, 10],
        [1, 9],
        [2, 4],
        [3, 1],
        [4, 3],
        [5, 4],
        [6, 6],
        [7, 2],
        [8, 6],
        [9, 5],
        [10, 8],
        [11, 5],
        [12, 8],
        [13, 10]
    ], {
        min: 0,
        max: 12
    });

    metricFlot($('#metric-10'), [
        [0, 3],
        [1, 2],
        [2, 3],
        [3, 2],
        [4, 2],
        [5, 1],
        [6, 2],
        [7, 1],
        [8, 1],
        [9, 3],
        [10, 2],
        [11, 1],
        [12, 2],
        [13, 2]
    ], {
        min: 0,
        max: 4
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
        color: '#606A77'
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
        [15, 21],
    ], {
        min: 6,
        max: 25
    }, {
        color: '#2478BB'
    });
});
