jQuery(function ($) {
    'use strict';

    function flotTooltip() {
        return $('<div></div>').css({
            position: 'absolute',
            display: 'none',
            border: '1px solid rgba(0, 0, 0, 0.4)',
            borderRadius: '3px',
            padding: '0.25em',
            'background-color': 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fontSize: '12px'
        }).appendTo('body');
    }

    function flotBasic() {
        var d1 = [
            [0, 13],
            [1, 11],
            [2, 11],
            [3, 13],
            [4, 18],
            [5, 20],
            [6, 19],
            [7, 22]
        ];
        var d2 = [
            [0, 12],
            [1, 8],
            [2, 9],
            [3, 12],
            [4, 10],
            [5, 11],
            [6, 14],
            [7, 17]
        ];

        $.plot('#flot-basic', [
            {
                data: d1,
                label: 'Product #1',
                color: '#49BFAE'
            },
            {
                data: d2,
                label: 'Product #2',
                color: '#34A8DB'
            }
        ],
            {
                series: {
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 1,
                        fillColor: {
                            colors: [
                                { opacity: 0.5 },
                                { opacity: 0.6 }
                            ]
                        }
                    },
                    points: {
                        show: true,
                        lineWidth: 2,
                        fill: true,
                        fillColor: '#ffffff',
                        symbol: 'circle',
                        radius: 5
                    },
                    shadowSize: 0
                },
                legend: {
                    position: 'nw'
                },
                grid: {
                    borderColor: '#ddd',
                    borderWidth: 1,
                    labelMargin: 10,
                    backgroundColor: '#fff'
                },
                yaxis: {
                    min: 0,
                    max: 30,
                    color: '#edeff0'
                },
                xaxis: {
                    tickLength: 0
                }
            }
        );
    }

    function flotInteractive() {
        var d1 = [
            [0, 10],
            [1, 12],
            [2, 13],
            [3, 14],
            [4, 13],
            [5, 16],
            [6, 20],
            [7, 22]
        ];
        var d2 = [
            [0, 6],
            [1, 7],
            [2, 10],
            [3, 11],
            [4, 9],
            [5, 8],
            [6, 12],
            [7, 15]
        ];

        var plot = $.plot('#flot-interactive', [
            {
                data: d1,
                label: 'New Orders',
                color: '#428BCA',
                lines: {
                    show: true,
                    lineWidth: 2
                }
            },
            {
                data: d2,
                label: 'New Customers',
                color: '#D95043',
                lines: {
                    show: true,
                    fill: true,
                    lineWidth: 1
                }
            }
        ],
            {
                series: {
                    points: {
                        show: true,
                        lineWidth: 2,
                        fill: true,
                        fillColor: '#ffffff',
                        symbol: 'circle',
                        radius: 5
                    },
                    shadowSize: 0
                },
                legend: {
                    position: 'nw'
                },
                grid: {
                    hoverable: true,
                    clickable: true,
                    borderColor: '#ddd',
                    borderWidth: 1,
                    labelMargin: 10,
                    backgroundColor: '#fff'
                },
                yaxis: {
                    min: 0,
                    max: 30,
                    color: '#edeff0'
                },
                xaxis: {
                    tickLength: 0
                }
            }
        );

        var prev = null;
        var $tooltip = flotTooltip();
        $('#flot-interactive').bind('plothover', function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                if (prev != x + '_' + y) {
                    prev = x + '_' + y;

                    $tooltip.html(item.series.label + ' of ' + x + ' = ' + y)
                        .css({top: item.pageY + 5, left: item.pageX + 5})
                        .fadeIn(200);
                }
            } else {
                $tooltip.fadeOut(100);
                prev = null;
            }
        });

        $('#flot-interactive').bind('plotclick', function (event, pos, item) {
            if (item) {
                plot.highlight(item.series, item.datapoint);
            }
        });
    }

    function flotTracking() {
        var sin = [], cos = [];
        for (var i = 0; i < 20; i += 0.1) {
            sin.push([i, Math.sin(i)]);
            cos.push([i, Math.cos(i)]);
        }

        $.plot('#flot-tracking', [
            {
                data: sin,
                label: 'Series&nbsp;1',
                color: '#D95043'
            },
            {
                data: cos,
                label: 'Series&nbsp;2',
                color: '#428BCA'
            }
        ], {
            series: {
                lines: {
                    show: true
                },
                shadowSize: 0
            },
            crosshair: {
                mode: 'x',
                color: '#336666'
            },
            grid: {
                hoverable: true,
                autoHighlight: false,
                borderWidth: 0,
                labelMargin: 10
            },
            yaxis: {
                min: -1.5,
                max: 1.5,
                color: '#edeff0'
            },
            xaxis: {
                tickLength: 0
            }
        });
    }

    function flotLive() {
        // We use an inline data source in the example, usually data would
        // be fetched from a server
        var series = [
                {
                    'data': [],
                    'color': '#34A8DB'
                },
                {
                    'data': [],
                    'color': '#EDEFF0'
                }
            ],
            totalPoints = 60;

        function getRandomData(s) {
            if (s.data.length > 0)
                s.data = s.data.slice(1);
            // Do a random walk
            while (s.data.length < totalPoints) {
                var prev = s.data.length > 0 ? s.data[s.data.length - 1] : 20,
                    y = prev + Math.random() * 6 - 3;
                if (y < 1) {
                    y = 4;
                } else if (y >= 50) {
                    y = 50;
                }
                s.data.push(y);
            }
            // Zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < s.data.length; ++i) {
                res.push([i, s.data[i]]);
            }
            return { data: res, color: s.color };
        }

        var plot = $.plot('#flot-live', [ getRandomData(series[0]), getRandomData(series[1]) ], {
            series: {
                stack: true,
                lines: {
                    show: true,
                    fill: true,
                    lineWidth: 2,
                    fillColor: {
                        colors: [
                            { opacity: 0.2 },
                            { opacity: 0.2 }
                        ]
                    }
                },
                shadowSize: 0
            },
            grid: {
                borderColor: '#edeff0',
                borderWidth: 1,
                labelMargin: 10
            },
            yaxis: {
                min: 0,
                max: 100,
                color: '#edeff0'
            },
            xaxis: {
                show: false
            }
        });

        setInterval(function () {
            plot.setData([getRandomData(series[0]), getRandomData(series[1])]);
            plot.draw();
        }, 1000);
    }

    function flotPie() {
        var data = [
            {
                label: 'Internet Explorer',
                data: 25,
                color: '#F0AD4E'
            },
            {
                label: 'Chrome',
                data: 37,
                color: '#428BCA'
            },
            {
                label: 'Firefox',
                data: 21,
                color: '#5CB85C'
            },
            {
                label: 'Safari',
                data: 20,
                color: '#D9534F'
            }
        ];

        $.plot('#flot-pie', data, {
            series: {
                pie: {
                    show: true,
                    radius: 1,
                    label: {
                        show: true,
                        radius: 2 / 3,
                        formatter: labelFormatter,
                        threshold: 0.1
                    }
                }
            },
            grid: {
                hoverable: true
            }
        });

        function labelFormatter(label, series) {
            return '<div style="font-size:8pt; text-align:center; padding:2px; color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
        }
    }

    function flotDonut() {
        var data = [
            {
                label: 'Internet Explorer',
                data: 25,
                color: '#F0AD4E'
            },
            {
                label: 'Chrome',
                data: 37,
                color: '#428BCA'
            },
            {
                label: 'Firefox',
                data: 21,
                color: '#5CB85C'
            },
            {
                label: 'Safari',
                data: 20,
                color: '#D9534F'
            }
        ];

        $.plot('#flot-donut', data, {
            series: {
                pie: {
                    innerRadius: 0.8,
                    show: true,
                    radius: 1
                }
            },
            grid: {
                hoverable: true
            }
        });
    }

    function flotBar() {
        function flotTooltip() {
            return $('<div></div>').css({
                position: 'absolute',
                display: 'none',
                border: '1px solid rgba(0, 0, 0, 0.4)',
                borderRadius: '3px',
                padding: '0.25em',
                'background-color': 'rgba(0, 0, 0, 0.8)',
                color: '#fff',
                fontSize: '12px'
            }).appendTo('body');
        }

        var series = [
            {
                label: 'Sells',
                color: '#428BCA',
                data: [
                    ['January', 38],
                    ['February', 43],
                    ['March', 37],
                    ['April', 40],
                    ['May', 24],
                    ['June', 32]
                ],
                bars: {
                    fillColor: '#428BCA'
                }
            }
        ];

        $.plot('#flot-bar', series, {
            series: {
                lines: {
                    show: false,
                    fill: true,
                    steps: false
                },
                bars: {
                    show: true,
                    barWidth: 0.4,
                    align: 'center',
                    lineWidth: 0,
                    fill: true,
                    fillColor: null
                },
                highlightColor: 'rgba(0,0,0,0.6)'
            },
            grid: {
                hoverable: true,
                borderWidth: 0,
                labelMargin: 10
            },
            yaxis: {
                color: '#edeff0'
            },
            xaxis: {
                mode: 'categories',
                tickLength: 0
            }
        });

        var prev = null;
        var $tooltip = flotTooltip();
        $('#flot-bar').bind('plothover', function (event, pos, item) {
            if (item) {
                var y = item.datapoint[1].toFixed(2);
                if (prev != item.dataIndex) {
                    prev = item.dataIndex;

                    $tooltip.html(item.series.label + ': ' + y)
                        .css({top: item.pageY + 25, left: item.pageX + 5})
                        .fadeIn(200);
                }
            } else {
                $tooltip.fadeOut(100);
                prev = null;
            }
        });
    }

    function flotBarStacked() {
        var series = [
            {
                label: 'Google',
                color: '#428BCA',
                data: [
                    ['January', 16],
                    ['February', 30],
                    ['March', 22],
                    ['April', 24],
                    ['May', 18],
                    ['June', 20]
                ],
                bars: {
                    fillColor: '#428BCA'
                }

            },
            {
                label: 'Apple',
                color: '#5CB85C',
                data: [
                    ['January', 8],
                    ['February', 10],
                    ['March', 22],
                    ['April', 18],
                    ['May', 12],
                    ['June', 12]
                ],
                bars: {
                    fillColor: '#5CB85C'
                }
            }
        ];

        $.plot('#flot-bar-stacked', series, {
            series: {
                stack: true,
                bars: {
                    show: true,
                    barWidth: 0.4,
                    align: 'center',
                    lineWidth: 0,
                    fill: true,
                    fillColor: null
                },
                highlightColor: 'rgba(0,0,0,0.6)'
            },
            grid: {
                hoverable: true,
                borderWidth: 0,
                labelMargin: 10
            },
            yaxis: {
                color: '#edeff0'
            },
            xaxis: {
                mode: 'categories',
                tickLength: 0
            }
        });


        var prev = null;
        var $tooltip = flotTooltip();
        $('#flot-bar-stacked').bind('plothover', function (event, pos, item) {
            if (item) {
                var val = item.datapoint[1] - item.datapoint[2];
                if (prev != item.dataIndex + ' ' + item.seriesIndex) {
                    prev = item.dataIndex + ' ' + item.seriesIndex;

                    $tooltip.html(item.series.label + ': ' + val)
                        .css({top: item.pageY + 30, left: item.pageX + 5})
                        .fadeIn(200);
                }
            } else {
                $tooltip.fadeOut(100);
                prev = null;
            }
        });
    }

    flotBasic();
    flotInteractive();
    flotTracking();
    flotLive();
    flotPie();
    flotDonut();
    flotBar();
    flotBarStacked();
});
