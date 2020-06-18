/*
    THIS code is just for demo purpose. 
    NO support will be provided for this code.
    Do NOT use this for production purporse. 
*/


$(document).ready(function() {
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
                        fillColor: {colors: [{opacity: 0.1}, {opacity: 0.4}]
                    } 
                },
                points: {
                    show: false
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
                tickColor: "rgba(0, 0, 0, 0.0)",
                borderWidth: 1,
                borderColor: {top: "#fff", left: "#ccc", right: "#fff", bottom: "#ccc"} ,
            },
            colors: ["#54bc75",],
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

    $("#sparkline1").sparkline([34,43,43,35,44,32,15,22,46,33,86,54,73,53,12,53,23,65,23,63,53,42,34,56,76,15,54,23,44], {
        type: 'line',
        lineWidth: 2,
        width: '150px',
        height: '20px',
        lineColor: '#54BC75',
        fillColor: '#E5F5EA',
    });

    $("#sparkline2").sparkline([5,6,7,2,0,-4,-2,4, 5,-6,7,2], {
        type: 'line',
        lineWidth: 2,
        width: '150px',
        height: '20px',
        lineColor: '#54BC75',
        fillColor: '#E5F5EA',
    });

    $("#sparkline3").sparkline([34,43,43,35,44,32,15,22,46,33,86,54,73,53,12,53,23,65,23,63,53,42,34,56,76,15,54,23,44], {
        type: 'line',
        lineWidth: 2,
        width: '150px',
        height: '20px',
        lineColor: '#DF4B33',
        fillColor: '#FAE4E0',
    });

    /*COM Chart*/
      var data_com = [
        [1, randValue() - 5],
        [2, randValue() - 5],
        [3, randValue() - 5],
        [4, 6 + randValue()],
        [5, 6 + randValue()],
        [6, 6 + randValue()],
        [7, 5 + randValue()],
        [8, 3 + randValue()],
        [9, 2 + randValue()]
      ];
       var names = [
                    "Alpha",
                    "Beta",
                    "Gamma",
                    "Delta",
                    "Epsilon",
                    "Zeta",
                    "Eta",
                    "Theta"
                ];
          
      var plot_statistics = $.plot($("#com_stats"), [{
        data: data_com, showLabels: true, labels: data_com, labelPlacement: "below", canvasRender: true, cColor: "#FFFFFF" 
      }
      ], {
        series: {
          lines: {
            show: true,
            lineWidth: 2, 
            fill: true,
            fillColor: {
              colors: [{
                opacity: 0.25
              }, {
                opacity: 0.25
              }
              ]
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
          show:false,
          margin: 0,
          labelMargin: 0,
           axisMargin: 0,
          hoverable: true,
          clickable: true,
          tickColor: "rgba(255,255,255,0.22)",
          borderWidth: 0
        },
        colors: ["#118FDD"],
        xaxis: {
          autoscaleMargin: 0.04,
          ticks: 11,
          tickDecimals: 0
        },
        yaxis: {
          autoscaleMargin: 0.2,
          ticks: 5,
          tickDecimals: 0
        }
      });
    
    var data3 = [
        [1, randValue()],
        [2, randValue()],
        [3, 2 + randValue()],
        [4, 3 + randValue()],
        [5, 5 + randValue()],
        [6, 10 + randValue()],
        [7, 15 + randValue()],
        [8, 20 + randValue()],
        [9, 20 + randValue()],
        [10, 20 + randValue()],
        [11, 20 + randValue()],
        [12, 20 + randValue()],
        [13, 20 + randValue()],
        [14, 20 + randValue()],
        [15, 20 + randValue()],
        [16, 75 + randValue()]
        ];

      var plot_statistics2 = $.plot($("#com2_stats"), [{
        data: data3,
        label: "Unique Visits"
      }
      ], {
        series: {
          bars: {
            show: true,
            barWidth: 0.7,
            lineWidth: 0,
            fill: true,
            fillColor: {
              colors: [{
                opacity: 0.8
              }, {
                opacity: 0.8
              }
              ]
            },
            hoverable: true
          },
          shadowSize: 2
        },
        legend:{
          show: false
        },
        grid: {
          show: true,
          labelMargin: 0,
           axisMargin: 0,
          hoverable: true,
          clickable: true,
          tickColor: "rgba(0,0,0,0.1)",
          borderWidth: 0,
          margin: {
            left: 0
          }
        },
        colors: ["#54BC75", "#FFFFFF", "#52e136"],
        xaxis: {
          font:{
            color: "rgba(0,0,0,0.6)",
            lineHeight: '0',
            size: '5px'
          },
          ticks: 11,
          tickDecimals: 0
        },
        yaxis: {
          font:{
            lineHeight: '0',
            size: '5px',
            color: "rgba(255,255,255,0)"
          },
          ticks: 6,
          tickDecimals: 0
        }
      });
});