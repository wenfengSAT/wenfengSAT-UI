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

    function chartSalesAndOrders() {
        Morris.Line({
            element: 'sales-orders',
            data: [
                { y: '2006', a: 13, b: 5 },
                { y: '2007', a: 11, b: 8 },
                { y: '2008', a: 11, b: 9 },
                { y: '2009', a: 14, b: 12 },
                { y: '2010', a: 18, b: 10 },
                { y: '2011', a: 20, b: 11 },
                { y: '2012', a: 19, b: 14 }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            lineColors: ['#EFB55B', '#E8524E'],
            lineWidth: 2,
            pointSize: 4,
            parseTime: false,
            gridLineColor: 'rgba(255,255,255,.5)',
            gridTextColor: '#fff',
            hideHover: true,
            resize: true
        });
    }

    function rickshawResize(graph, $el) {
        return function () {
            graph.configure({
                width: $el.parent().width()
            });
            graph.render();
        }
    }

    function rickshawServerLoad() {
        var series = [
            [],
            []
        ];
        var random = new Rickshaw.Fixtures.RandomData(50);

        for (var i = 0; i < 60; i++) {
            random.addData(series);
        }
        var graph = new Rickshaw.Graph({
            element: document.querySelector('#server-load'),
            height: 134,
            series: [
                {
                    data: series[0],
                    color: '#E8524E',
                    name: 'Server No. 1'
                },
                {
                    data: series[1],
                    color: '#f2f4f6',
                    name: 'Server No. 2'
                }
            ]
        });
        var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph
        });
        hoverDetail.hide();

        setInterval(function () {
            random.removeData(series);
            random.addData(series);
            graph.update();
        }, 1100);
        $('#server-load').parent().on('resize', rickshawResize(graph, $('#server-load')))
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
        [15, 21],
    ], {
        min: 6,
        max: 25
    }, {
        color: '#2478BB'
    });

    if (!$('html').hasClass('ie8')) {
        rickshawServerLoad();
    }
    chartSalesAndOrders();

    $('#mini-chart-1').sparkline([4, 8, 6, 4, 2, 4, 4, 5, 7], {
        type: 'line',
        height: '30px',
        width: '44px',
        lineColor: '#D9534F',
        fillColor: false,
    }).sparkline([3, 5, 10, 6, 9, 6, 7, 6, 2], {
        type: 'line',
        height: '30px',
        width: '44px',
        lineColor: '#5BC0DE',
        fillColor: false,
        composite: true
    });

    $('#mini-chart-2').sparkline([1, 2, 4, 3, 4, 1, 4, 5, 3], {
        type: 'bar',
        height: '30px',
        width: '44px',
        barColor: '#D9534F'
    });

    $('#mini-chart-3').sparkline([1, 2, 4, 3, 4, 1, 4, 5, 3], {
        type: 'line',
        height: '30px',
        width: '44px',
        lineColor: '#2478BB',
        fillColor: '#34A8DB'
    });


    $('#map').vectorMap({
        map: 'world_mill_en',
        backgroundColor: '#193341',
        regionStyle: {
            initial: {
                fill: '#FFFFFF',
                'fill-opacity': 0.9,
                stroke: 'none',
                'stroke-width': 1,
                'stroke-opacity': 1
            },
            hover: {
                'fill-opacity': 1
            }
        },
        series: {
            regions: [
                {
                    values: {
                        'US': 550,
                        'GB': 400,
                        'FR': 149,
                        'CA': 100,
                        'CN': 420,
                        'IN': 290,
                        'AU': 200
                    },
                    scale: ['#7CC4E8', '#3F94BF']
                }
            ]
        }
    });
});
