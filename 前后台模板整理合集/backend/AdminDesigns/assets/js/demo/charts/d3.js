/* All functions in this file are used only for charts.html */
var D3Charts = function () {

    // Init Flot Chart Plugins
    var runD3Plugins = function () {

		// Plugin 1

	}

    // Init Flot Charts Plugin
    var runD3Charts = function () {

       // Add a series of colors to be used in the charts and pie graphs
        var Colors = [bgPrimary, bgInfo, bgWarning, bgAlert, bgDanger, bgSystem, bgSuccess,];

        // Line Chart
        var chart1 = c3.generate({
        	bindto: '#line-chart',
          color: {
            pattern: Colors,
          },
          point: {
            r: 3
          },
          padding: {
            left: 30,
            right: 30,
            top: 0,
            bottom: 0,
          },
          data: {
            columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 50, 20, 10, 40, 15, 25]
            ],
            axes: {
              data1: 'y',
              data2: 'y2',
            }
          },
          axis: {
            x: {
              label: 'X Label'
            },
            y: {
              label: {
                text: 'Y Axis Label',
                position: 'outer-middle'
              }
            },
            y2: {
              show: true,
              label: {
                text: 'Y2 Axis Label',
                position: 'outer-middle'
              }
            }
          }
        });
        // setTimeout(function () {
        //   chart1.axis.labels({
        //     x: 'New X Axis Label',
        //     y: 'New Y Axis Label',
        //     y2: 'New Y2 Axis Label',
        //   });
        // }, 1000);
        // setTimeout(function () {
        //   chart1.load({
        //     columns: [
        //       ['data1', 100, 300, 600, 200, 400, 500]
        //     ]
        //   });
        //   chart.axis.labels({y: 'New Y Axis Label Again'});
        // }, 2000);


        // Area Chart
        var chart2 = c3.generate({
            bindto: '#area-chart',
            color: {
              pattern: Colors,
            },
            padding: {
            left: 30,
              right: 15,
              top: 0,
              bottom: 0,
           },
            data: {
                columns: [
                    ['data1', 300, 350, 300, 0, 0, 0],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                types: {
                    data1: 'area',
                    data2: 'area-spline'
                }
            }
        });


        // Step Chart
        var chart3 = c3.generate({
            bindto: '#step-chart',
            color: {
              pattern: Colors,
            },
            padding: {
              left: 30,
              right: 15,
              top: 0,
              bottom: 0,
           },
            data: {
                columns: [
                    ['data1', 300, 350, 300, 0, 0, 100],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                types: {
                    data1: 'step',
                    data2: 'area-step'
                }
            }
        });


        // Bar Chart
        var chart4 = c3.generate({
            bindto: '#bar-chart',
            color: {
              pattern: Colors,
            },
            padding: {
            left: 30,
              right: 15,
              top: 0,
              bottom: 0,
           },
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                type: 'bar'
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
                // or
                //width: 100 // this makes bar width 100px
            }
        });
        setTimeout(function () {
            chart4.load({
                columns: [
                    ['data3', 130, -150, 200, 300, -200, 100]
                ]
            });
        }, 1000);


        // TimeSeries Chart
        var chart5 = c3.generate({
            bindto: '#timeseries-chart',
            color: {
              pattern: Colors,
            },
            padding: {
              left: 30,
              right: 15,
              top: 0,
              bottom: 0,
           },
            data: {
                x: 'x',
                // xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
                columns: [
                    ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
                    // ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 130, 340, 200, 500, 250, 350]
                ]
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d'
                    }
                }
            }
        });
        // setTimeout(function () {
        //     chart5.load({
        //         columns: [
        //             ['data3', 400, 500, 450, 700, 600, 500]
        //         ]
        //     });
        // }, 1000);


        // Scatter Chart
        var chart6 = c3.generate({
            bindto: '#scatter-chart',
            color: {
              pattern: Colors,
            },
            padding: {
              left: 30,
              right: 15,
              top: 0,
              bottom: 0,
           },
            data: {
                xs: {
                    setosa: 'setosa_x',
                    versicolor: 'versicolor_x',
                },
                // iris data from R
                columns: [
                    ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
                    ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
                    ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                    ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                ],
                type: 'scatter'
            },
            axis: {
                x: {
                    label: 'Sepal.Width',
                    tick: {
                        fit: false
                    }
                },
                y: {
                    label: 'Petal.Width'
                }
            }
        });
        // setTimeout(function () {
        //     chart6.load({
        //         xs: {
        //             virginica: 'virginica_x'
        //         },
        //         columns: [
        //             ["virginica_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
        //             ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
        //         ]
        //     });
        // }, 1000);
        // setTimeout(function () {
        //     chart6.unload({
        //         ids: 'setosa'
        //     });
        // }, 2000);
        // setTimeout(function () {
        //     chart6.load({
        //         columns: [
        //             ["virginica", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
        //         ]
        //     });
        // }, 3000);


        // Spline Chart
        var chart7 = c3.generate({
            bindto: '#spline-chart',
            color: {
              pattern: Colors,
            },
            padding: {
              left: 30,
              right: 15,
              top: 0,
              bottom: 0,
           },
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                type: 'spline'
            }
        });


        // Sub Navigation Chart
        var chart8 = c3.generate({
            bindto: '#subnav-chart',
            color: {
              pattern: Colors,
            },
            padding: {
              left: 25,
              right: 15,
              top: 0,
              bottom: 0,
           },
            data: {
                columns: [
                    ['sample', 30, 200, 100, 400, 150, 250]
                ]
            },
            subchart: {
                show: true
            }
        });


        // MouseWheel Zoom
        var chart9 = c3.generate({
            bindto: '#zoom-chart',
            color: {
              pattern: Colors,
            },
            padding: {
              left: 30,
              right: 15,
              top: 0,
              bottom: 0,
           },
            data: {
                columns: [
                    ['sample', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40]
                ]
            },
            zoom: {
                enabled: true
            }
        });


        // Donut Chart
        var chart10 = c3.generate({
            bindto: '#donut-chart',
            color: {
              pattern: Colors,
            },
            data: {
                columns: [
                    ['data1', 30],
                    ['data2', 120],
                ],
                type : 'donut',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            donut: {
                title: "Iris Petal Width"
            }
        });
        // setTimeout(function () {
        //     chart10.load({
        //         columns: [
        //             ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
        //             ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
        //             ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
        //         ]
        //     });
        // }, 1500);
        // setTimeout(function () {
        //     chart10.unload({
        //         ids: 'data1'
        //     });
        //     chart10.unload({
        //         ids: 'data2'
        //     });
        // }, 2500);


        // Guage Chart
        var chart11 = c3.generate({
            bindto: '#guage-chart',
            color: {
              pattern: Colors,
              threshold: {
                 // unit: 'value', // percentage is default
                 // max: 200, // 100 is default
                 values: [30, 60, 90, 100]
              }
            },
            data: {
                columns: [
                    ['data', 91.4]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
             // label: {
             //     format: function(value, ratio) {
             //         return value;
             //     },
             //     show: false // to turn off the min/max labels.
             // },
             // min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
             // max: 100, // 100 is default
             // units: ' %',
             // width: 39 // for adjusting arc thickness
            },
            size: {
                height: 180
            }
        });
        // setTimeout(function () {
        //     chart11.load({
        //         columns: [['data', 10]]
        //     });
        // }, 1000);
        // setTimeout(function () {
        //     chart11.load({
        //         columns: [['data', 50]]
        //     });
        // }, 2000);
        // setTimeout(function () {
        //     chart11.load({
        //         columns: [['data', 70]]
        //     });
        // }, 3000);
        // setTimeout(function () {
        //     chart11.load({
        //         columns: [['data', 0]]
        //     });
        // }, 4000);
        // setTimeout(function () {
        //     chart11.load({
        //         columns: [['data', 100]]
        //     });
        // }, 5000);

        // Pie Chart
        var chart12 = c3.generate({
            bindto: '#pie-chart',
            color: {
              pattern: Colors,
            },
            data: {
                // iris data from R
                columns: [
                    ['data1', 30],
                    ['data2', 120],
                ],
                type : 'pie',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            }
        });
        // setTimeout(function () {
        //     chart12.load({
        //         columns: [
        //             ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
        //             ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
        //             ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
        //         ]
        //     });
        // }, 1500);
        // setTimeout(function () {
        //     chart12.unload({
        //         ids: 'data1'
        //     });
        //     chart12.unload({
        //         ids: 'data2'
        //     });
        // }, 2500);


        // Combination Chart
        var chart13 = c3.generate({
            bindto: '#combo-chart',
            color: {
              pattern: Colors,
            },
            padding: {
              left: 30,
              right: 15,
              top: 0,
              bottom: 0,
           },
            data: {
                columns: [
                    ['data1', 30, 20, 50, 40, 60, 50],
                    ['data2', 200, 130, 90, 240, 130, 220],
                    ['data3', 300, 200, 160, 400, 250, 250],
                    ['data4', 200, 130, 90, 240, 130, 220],
                    ['data5', 130, 120, 150, 140, 160, 150],
                    ['data6', 90, 70, 20, 50, 60, 120],
                ],
                type: 'bar',
                types: {
                    data3: 'spline',
                    data4: 'line',
                    data6: 'area',
                },
                groups: [
                    ['data1','data2']
                ]
            }
        });

    };
    return {
        init: function () {
			runD3Plugins();
        	runD3Charts();
        }
    };
}();