/*
    THIS code is just for demo purpose. 
    NO support will be provided for this code.
    Do NOT use this for production purporse. 
*/

$(document).ready(function() {
    function randValue() {
        return (Math.floor(Math.random() * (1 + 50 - 20))) + 10;
    }

    var pageviews = [
        [1, randValue()],
        [2, randValue()],
        [3, 2 + randValue()],
        [4, 3 + randValue()],
        [5, 5 + randValue()],
        [6, 10 + randValue()],
        [7, 15 + randValue()],
        [8, 20 + randValue()],
        [9, 25 + randValue()],
        [10, 30 + randValue()],
        [11, 35 + randValue()],
        [12, 25 + randValue()],
        [13, 15 + randValue()],
        [14, 20 + randValue()],
        [15, 45 + randValue()],
        [16, 50 + randValue()],
        [17, 65 + randValue()],
        [18, 70 + randValue()],
        [19, 85 + randValue()],
        [20, 80 + randValue()],
        [21, 75 + randValue()],
        [22, 80 + randValue()],
        [23, 75 + randValue()]
    ];
    
    var plot_statistics = $.plot($("#site_statistics"), [{
            data: pageviews,
            label: "Sales"
        }], 
        {
            series: {
                lines: {
                        show: true,
                        lineWidth: 2, 
                        fill: true,
                        fillColor: {colors: [{opacity: 0.1}, {opacity: 0.5}]
                    } 
                },
                points: {
                    show: true
                },
                shadowSize: 0
            },
            legend:{
                show: false
            },
            grid: {
                labelMargin: 10,
                axisMargin: 500,
                hoverable: true,
                clickable: true,
                tickColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 0
            },
            colors: ["#118fdd"],
            tooltip: true,
            xaxis: {
                ticks: 11,
                tickDecimals: 0
            },
            yaxis: {
                ticks: 5,
                tickDecimals: 0
            }
    });
    $('#world-vmap').vectorMap({
        map: 'world_en',
        backgroundColor: null,
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        borderWidth:1,
        showTooltip: true,
        values: sample_data,
        scaleColors: ['#795841', '#54bc75'],
        normalizeFunction: 'polynomial'
    });

    $("#sparkline1").sparkline([34,43,43,35,44,32,15,22,46,33,86,54,73,53,12,53,23,65,23,63,53,42,34,56,76,15,54,23,44], {
        type: 'line',
        lineWidth: 1,
        width: '75px',
        height: '24px',
        lineColor: '#54BC75',
        fillColor: '#E5F5EA',
    });

    $("#sparkline2").sparkline([5,6,7,2,0,-4,-2,4, 5,-6,7,2], {
        type: 'line',
        lineWidth: 1,
        width: '75px',
        height: '24px',
        lineColor: '#54BC75',
        fillColor: '#E5F5EA',
    });

    $("#sparkline3").sparkline([34,43,43,35,44,32,15,22,46,33,86,54,73,53,12,53,23,65,23,63,53,42,34,56,76,15,54,23,44], {
        type: 'line',
        lineWidth: 1,
        width: '75px',
        height: '24px',
        lineColor: '#DF4B33',
        fillColor: '#FAE4E0',
    });

    $("#sparkline4").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1], {
        type: 'line',
        lineWidth: 1,
        width: '75px',
        height: '24px',
        lineColor: '#54BC75',
        fillColor: '#E5F5EA',
    });

    $('#reportrange span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

    $('#reportrange').daterangepicker({
        opens: 'left',
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
           'Last 7 Days': [moment().subtract('days', 6), moment()],
           'Last 30 Days': [moment().subtract('days', 29), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
        },
    });

    var data = [{
        label: "Product 1",
        data: 40
    }, {
        label: "Product 2",
        data: 20
    }, {
        label: "Product 3",
        data: 10
    }, {
        label: "Product 4",
        data: 30
    }, {
        label: "Product 5",
        data: 15
    }];
    var options = {
        series: {
            pie: {
                show: true,
                innerRadius: 0.5,
                show: true,
                
        label: {
            show: false
        },
            }
        },
        legend: {
            show: false
        },
        grid: {
            hoverable: true,
            clickable: true
        },
        colors: ['#118FDD', '#54BC75', '#00AFDA', '#FFA800', '#795841'],
        tooltip: true,
        tooltipOpts: {
            defaultTheme: false
        }
    };
    $.plot($("#donut-example"), data, options);

    var visitors = [
        [1, randValue() - 5],
        [2, randValue() - 5],
        [3, randValue() - 5],
        [4, 6 + randValue()],
        [5, 5 + randValue()],
        [6, 20 + randValue()],
        [7, 25 + randValue()],
        [8, 36 + randValue()],
        [9, 26 + randValue()],
        [10, 38 + randValue()],
        [11, 39 + randValue()],
        [12, 50 + randValue()],
        [13, 51 + randValue()],
        [14, 12 + randValue()],
        [15, 13 + randValue()],
        [16, 14 + randValue()],
        [17, 15 + randValue()],
        [18, 15 + randValue()],
        [19, 16 + randValue()],
        [20, 17 + randValue()],
        [21, 18 + randValue()],
        [22, 19 + randValue()],
        [23, 20 + randValue()],
        [24, 21 + randValue()],
        [25, 14 + randValue()],
        [26, 24 + randValue()],
        [27, 25 + randValue()],
        [28, 26 + randValue()],
        [29, 27 + randValue()],
        [30, 31 + randValue()]
    ];

    var plot_statistics2 = $.plot($("#bar-example"), [{
        data: pageviews,
        label: "Unique Visits"
    }, {
        data: visitors,
        label: "Page Views"
    }], {
        series: {
            bars: {
                show: true,
                barWidth: 0.7,
                lineWidth: 1,
                fill: true,
                hoverable: true,
                fillColor: {colors: [{opacity: 0.85}, {opacity: 0.85}]} 
            },
            shadowSize: 2
        },
        legend:{
            show: false
        },
        grid: {
            labelMargin: 10,
            axisMargin: 500,
            hoverable: true,
            clickable: true,
            tickColor: "rgba(255,153,0,0.22)",
            borderWidth: 0
        },
        colors: ["#dd6600", "#FFA800", "ffffff"],
        tooltip: true,
        xaxis: {
            ticks: 11,
            tickDecimals: 0
        },
        yaxis: {
            ticks: 6,
            tickDecimals: 0
        }
    });

    //Sparkline charts
    var myvalues = [15, 19, 20, -22, -33, 27, 31, 27, 19, 30, 21];
    $('#sparkline-1').sparkline(myvalues, {
        type: 'bar',
        barColor: '#54BC75',
        negBarColor: "#DF4B33",
        height: '20px'
    });
    myvalues = [15, 19, 20, 22, -2, -10, -7, 27, 19, 30, 21];
    $('#sparkline-2').sparkline(myvalues, {
        type: 'bar',
        barColor: '#54BC75',
        negBarColor: "#DF4B33",
        height: '20px'
    });
    myvalues = [15, -19, -20, 22, 33, 27, 31, 27, 19, 30, 21];
    $('#sparkline-3').sparkline(myvalues, {
        type: 'bar',
        barColor: '#54BC75',
        negBarColor: "#DF4B33",
        height: '20px'
    });
    myvalues = [15, 19, 20, 22, 33, -27, -31, 27, 19, 30, 21];
    $('#sparkline-4').sparkline(myvalues, {
        type: 'bar',
        barColor: '#54BC75',
        negBarColor: "#DF4B33",
        height: '20px'
    });
    myvalues = [15, 19, 20, 22, 33, 27, 31, -27, -19, 30, 21];
    $('#sparkline-5').sparkline(myvalues, {
        type: 'bar',
        barColor: '#54BC75',
        negBarColor: "#DF4B33",
        height: '20px'
    });
    myvalues = [15, 19, -20, 22, -13, 27, 31, 27, 19, 30, 21];
    $('#sparkline-6').sparkline(myvalues, {
        type: 'bar',
        barColor: '#54BC75',
        negBarColor: "#DF4B33",
        height: '20px'
    });
    myvalues = [15, 19, -20, 22, -13, 27, 31, 27, 19, 30, 21];
    $('#sparkline-7').sparkline(myvalues, {
        type: 'bar',
        barColor: '#54BC75',
        negBarColor: "#DF4B33",
        height: '20px'
    });
    myvalues = [15, 19, -20, 22, -13, 27, 31, 27, 19, 30, 21];
    $('#sparkline-8').sparkline(myvalues, {
        type: 'bar',
        barColor: '#54BC75',
        negBarColor: "#DF4B33",
        height: '20px'
    });
    myvalues = [15, 19, -20, 22, -13, 27, 31, 27, 19, 30, 21];
    $('#sparkline-9').sparkline(myvalues, {
        type: 'bar',
        barColor: '#54BC75',
        negBarColor: "#DF4B33",
        height: '20px'
    });
    myvalues = [15, 19, -20, 22, -13, 27, 31, 27, 19, 30, 21];
    $('#sparkline-10').sparkline(myvalues, {
        type: 'bar',
        barColor: '#54BC75',
        negBarColor: "#DF4B33",
        height: '20px'
    });
    myvalues = [15, 19, -20, 22, -13, 27, 31, 27, 19, 30, 21];
    $('#sparkline-11').sparkline(myvalues, {
        type: 'bar',
        barColor: '#54BC75',
        negBarColor: "#DF4B33",
        height: '20px'
    });
});