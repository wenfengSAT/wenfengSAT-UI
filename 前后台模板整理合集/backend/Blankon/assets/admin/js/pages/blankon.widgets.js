var BlankonWidget = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonWidget.browserUsedWidget();
            BlankonWidget.marketChartWidget();
            BlankonWidget.visitorChart();
            BlankonWidget.realtimeStatus();
            BlankonWidget.salesChart();
            BlankonWidget.marketStatus();
            BlankonWidget.miniStat();
        },

        // =========================================================================
        // MOST BROWSER USED
        // =========================================================================
        browserUsedWidget: function () {
            $(window).resize(function() {
                window.donut.redraw();
            });
            function chartBrowser(){
                window.donut = Morris.Donut({
                    element: 'browser-chart',
                    data: [
                        {label: "Chrome", value: 40},
                        {label: "Firefox", value: 20},
                        {label: "Opera", value: 10},
                        {label: "Safari", value: 20},
                        {label: "Internet Explorer", value: 10}
                    ],
                    colors: ['#E9573F','#F6BB42','#906094','#00B1E1','#8CC152'],
                    resize: true
                });
            }
            chartBrowser();
        },

        // =========================================================================
        // MARKET CHART
        // =========================================================================
        marketChartWidget: function () {
            $(window).resize(function() {
                window.line.redraw();
            });
            function marketChart(){
                window.line = Morris.Line({
                    element: 'market-chart',
                    data: [
                        { y: '2008', a: 30, b: 20, c: 10 },
                        { y: '2009', a: 20,  b: 50, c: 67 },
                        { y: '2010', a: 25,  b: 40, c: 32 },
                        { y: '2011', a: 27,  b: 60, c: 78 },
                        { y: '2012', a: 34,  b: 50, c: 12 },
                        { y: '2013', a: 40,  b: 70, c: 78 },
                        { y: '2014', a: 41, b: 60, c: 52 }
                    ],
                    xkey: 'y',
                    ykeys: ['a', 'b', 'c'],
                    labels: ['Apple', 'Android', 'Windows Phone'],
                    lineColors: ['#8CC152', '#F6BB42', '#906094'],
                    pointFillColors: ['#8CC152', '#F6BB42', '#906094'],
                    pointStrokeColors: ['#FFFFFF'],
                    lineWidth: '5px',
                    hideHover: true,
                    grid: false,
                    gridTextColor: '#FFFFFF',
                    resize: true,
                    redraw: true
                });
            }
            marketChart();
        },

        // =========================================================================
        // VISITOR CHART & SERVER STATUS
        // =========================================================================
        visitorChart: function () {
            if($('#visitor-chart').length){
                $.plot("#visitor-chart", [{
                    label: "New Visitor",
                    color: "rgba(0, 177, 225, 0.35)",
                    data: [
                        ["Jan", 450],
                        ["Feb", 532],
                        ["Mar", 367],
                        ["Apr", 245],
                        ["May", 674],
                        ["Jun", 897],
                        ["Jul", 745]
                    ]
                }, {
                    label: "Old Visitor",
                    color: "rgba(233, 87, 63, 0.36)",
                    data: [
                        ["Jan", 362],
                        ["Feb", 452],
                        ["Mar", 653],
                        ["Apr", 756],
                        ["May", 670],
                        ["Jun", 352],
                        ["Jul", 243]
                    ]
                }], {
                    series: {
                        lines: { show: false },
                        splines: {
                            show: true,
                            tension: 0.4,
                            lineWidth: 2,
                            fill: 0.5
                        },
                        points: {
                            show: true,
                            radius: 4
                        }
                    },
                    grid: {
                        borderColor: "transparent",
                        borderWidth: 0,
                        hoverable: true,
                        backgroundColor: "transparent"
                    },
                    tooltip: true,
                    tooltipOpts: { content: "%x : %y" + " People" },
                    xaxis: {
                        tickColor: "transparent",
                        mode: "categories"
                    },
                    yaxis: { tickColor: "transparent" },
                    shadowSize: 0
                });
            }
        },

        // =========================================================================
        // REAL TIME STATUS
        // =========================================================================
        realtimeStatus: function () {
            if($('#realtime-status-chart').length){
                var data = [], totalPoints = 50;

                function getRandomData() {

                    if (data.length > 0)
                        data = data.slice(1);

                    // Do a random walk
                    while (data.length < totalPoints) {

                        var prev = data.length > 0 ? data[data.length - 1] : 50,
                            y = prev + Math.random() * 10 - 5;

                        if (y < 0) {
                            y = 0;
                        } else if (y > 100) {
                            y = 100;
                        }
                        data.push(y);
                    }

                    // Zip the generated y values with the x values
                    var res = [];
                    for (var i = 0; i < data.length; ++i) {
                        res.push([i, data[i]])
                    }
                    return res;
                }


                // Set up the control widget
                var updateInterval = 1000;

                var plot4 = $.plot("#realtime-status-chart", [ getRandomData() ], {
                    colors: ["#F6BB42"],
                    series: {
                        lines: {
                            fill: true,
                            lineWidth: 0
                        },
                        shadowSize: 0	// Drawing is faster without shadows
                    },
                    grid: {
                        borderColor: '#ddd',
                        borderWidth: 1,
                        labelMargin: 10
                    },
                    xaxis: {
                        color: '#eee'
                    },
                    yaxis: {
                        min: 0,
                        max: 100,
                        color: '#eee'
                    }
                });

                function update() {

                    plot4.setData([getRandomData()]);

                    // Since the axes don't change, we don't need to call plot.setupGrid()
                    plot4.draw();
                    setTimeout(update, updateInterval);
                }

                update();
            }
        },

        // =========================================================================
        // SALES CHART
        // =========================================================================
        salesChart: function () {
            $('#market-today-chart').sparkline('html',{
                type: 'bar',
                barColor: '#81b71a',
                height: '50px',
                barWidth: '5px'
            });
            $('#market-average-chart').sparkline('html',{
                type: 'bar',
                barColor: '#81b71a',
                height: '50px',
                barWidth: '5px'
            });
            $('#market-total-chart').sparkline('html',{
                type: 'bar',
                barColor: '#81b71a',
                height: '50px',
                barWidth: '5px'
            });
        },

        // =========================================================================
        // MARKET STATUS
        // =========================================================================
        marketStatus: function () {
            var piedata = [
                { label: "Apple", data: [[1,40]], color: '#906094'},
                { label: "Android", data: [[1,20]], color: '#8CC152'},
                { label: "Windows Phone", data: [[1,50]], color: '#F6BB42'}
            ];

            function labelFormatter(label, series) {
                return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
            }

            $.plot('#market-status-chart', piedata, {
                series: {
                    pie: {
                        show: true,
                        radius: 500,
                        label: {
                            show: true,
                            radius: 2/3,
                            formatter: labelFormatter,
                            threshold: 0.1
                        }
                    }
                },
                legend: {
                    show: false
                },
                grid: {
                    hoverable: true,
                    clickable: true
                }
            });
        },

        // =========================================================================
        // MINI STAT GRAPH
        // =========================================================================
        miniStat: function () {
            $('#sparkline').sparkline('html',{
                type: 'bar',
                barColor: '#FFFFFF',
                height: '50px',
                barWidth: '5px'
            });
            $('#sparkline2').sparkline('html',{
                type: 'line',
                height: '60px',
                defaultPixelsPerValue: 6,
                spotColor: '#FFFFFF',
                highlightSpotColor: '#FFFFFF',
                highlightLineColor: '#FFFFFF',
                fillColor: '#FFFFFF'
            });
        }

    };

}();

// Call main app init
BlankonWidget.init();