/*global $ */
$(document).ready(function () {
    "use strict";

    //Bar Chart 
    var barData = [{
            label: "Foo",
            data: [[8, 1], [11, 14], [14, 5], [17, 14], [20, 5]],
            color: "#2980b9"
        }
                ];

    $.plot("#chart-bar", barData, {
        series: {
            bars: {
                show: true
            },
            points: {
                show: true
            },
            grid: {
                show: true,
                aboveData: true,
                color: "#bb0000",
                backgroundColor: "#bb0000",
                margin: 5,
                labelMargin: 2,
                axisMargin: 2,
                borderWidt: 2,
                borderColor: "#bb0000",
                minBorderMargin: 2,
                clickable: true,
                hoverable: true,
                autoHighlight: true,
                mouseActiveRadius: 2
            }
        }
    });


    //Line Chart 

    var lineData = [{
            label: "Item 1",
            data: [[0, 6], [5, 12], [14, 8], [20, 17], [22, 30], [30, 34]]
        },
        {
            label: "Item 2",
            data: [[0, 2], [8, 16], [16, 24], [25, 21], [30, 28]]
        }
                ];

    $.plot("#chart-line", lineData, {
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            },
            grid: {
                show: true,
                aboveData: true,
                color: "#bb0000",
                backgroundColor: "#3498db",
                margin: 5,
                labelMargin: 2,
                axisMargin: 2,
                borderWidt: 2,
                borderColor: "#bb0000",
                minBorderMargin: 2,
                clickable: true,
                hoverable: true,
                autoHighlight: true,
                mouseActiveRadius: 2
            }
        }
    });


    //Pie Chart
    var pieData = [
        {
            label: "IE",
            data: 12,
            color: "#1abc9c"
        },
        {
            label: "Safari",
            data: 8,
            color: "#e67e22"
        },
        {
            label: "Firefox",
            data: 15,
            color: "#2ecc71"
        },
        {
            label: "Opera",
            data: 17,
            color: "#3498db"
        },
        {
            label: "Chrome",
            data: 14,
            color: "#9b59b6"
        },
        {
            label: "Other",
            data: 13,
            color: "#e74c3c"
        }
                ];

    $.plot('#chart-pie', pieData, {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 1 / 2,
                    formatter: function (label, series) {
                        return '<div style="font-size:11px; text-align:center; padding:4px 8px; color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                    },
                    background: {
                        opacity: 0.8,
                        color: '#444'
                    }
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

    //Donut Chart

    var donutData = [
        {
            label: "IE",
            data: 12,
            color: "#1abc9c"
        },
        {
            label: "Safari",
            data: 8,
            color: "#e67e22"
        },
        {
            label: "Firefox",
            data: 15,
            color: "#2ecc71"
        },
        {
            label: "Opera",
            data: 17,
            color: "#3498db"
        }
                ];

    $.plot('#chart-donut', donutData, {
        series: {
            pie: {
                show: true,
                innerRadius: 0.5,
                radius: 1,
                label: {
                    show: true,
                    radius: 0.75,
                    formatter: function (label, series) {
                        return '<div style="font-size:11px; text-align:center; padding:4px 8px; color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                    },
                    background: {
                        opacity: 0.8,
                        color: '#444'
                    }
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


    //Realtime Data Chart

    // We use an inline data source in the example, usually data would
    // be fetched from a server

    var data = [],
        totalPoints = 300;

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

    var updateInterval = 30;
    $("#updateInterval").val(updateInterval).change(function () {
        var v = $(this).val();
        v = 30;
        if (v && !isNaN(+v)) {
            updateInterval = +v;
            if (updateInterval < 1) {
                updateInterval = 1;
            } else if (updateInterval > 2000) {
                updateInterval = 2000;
            }
            $(this).val("" + updateInterval);
        }
    });

    var plot = $.plot("#chart-realtime", [getRandomData()], {
        series: {
            shadowSize: 0 // Drawing is faster without shadows
        },
        yaxis: {
            min: 0,
            max: 100
        },
        xaxis: {
            show: false
        }
    });

    function update() {

        plot.setData([getRandomData()]);

        // Since the axes don't change, we don't need to call plot.setupGrid()

        plot.draw();
        setTimeout(update, updateInterval);
    }

    update();


    //Stacked Chart
    var stackedData = [
        {
            label: 'Accepted',
            data: [[1, 800], [2, 600], [3, 500], [4, 300], [5, 400]],
            color: "#1abc9c"
        },
        {
            label: 'Rejected',
            data: [[1, 300], [2, 400], [3, 350], [4, 200], [5, 150]],
            color: "#e67e22"
        },
        {
            label: 'Error',
            data: [[1, 100], [2, 200], [3, 300], [4, 400], [5, 300]],
            color: "#3498db"
        },
                        ];

    $.plot("#chart-stacked", stackedData, {
        series: {
            stack: 0,
            lines: {
                show: false,
                steps: false
            },
            bars: {
                show: true,
                barWidth: 0.9,
                align: 'center',
            },
        },
        xaxis: {
            ticks: [[1, 'One'], [2, 'Two'], [3, 'Three'], [4, 'Four'], [5, 'Five']]
        },
    });


    //Heat Chart
    var males = {
        "15%": [[2, 88.0], [3, 93.3], [4, 102.0], [5, 108.5], [6, 115.7], [7, 115.6], [8, 124.6], [9, 130.3], [10, 134.3], [11, 141.4], [12, 146.5], [13, 151.7], [14, 159.9], [15, 165.4], [16, 167.8], [17, 168.7], [18, 169.5], [19, 168.0]],
        "90%": [[2, 96.8], [3, 105.2], [4, 113.9], [5, 120.8], [6, 127.0], [7, 133.1], [8, 139.1], [9, 143.9], [10, 151.3], [11, 161.1], [12, 164.8], [13, 173.5], [14, 179.0], [15, 182.0], [16, 186.9], [17, 185.2], [18, 186.3], [19, 186.6]],
        "25%": [[2, 89.2], [3, 94.9], [4, 104.4], [5, 111.4], [6, 117.5], [7, 120.2], [8, 127.1], [9, 132.9], [10, 136.8], [11, 144.4], [12, 149.5], [13, 154.1], [14, 163.1], [15, 169.2], [16, 170.4], [17, 171.2], [18, 172.4], [19, 170.8]],
        "10%": [[2, 86.9], [3, 92.6], [4, 99.9], [5, 107.0], [6, 114.0], [7, 113.5], [8, 123.6], [9, 129.2], [10, 133.0], [11, 140.6], [12, 145.2], [13, 149.7], [14, 158.4], [15, 163.5], [16, 166.9], [17, 167.5], [18, 167.1], [19, 165.3]],
        "mean": [[2, 91.9], [3, 98.5], [4, 107.1], [5, 114.4], [6, 120.6], [7, 124.7], [8, 131.1], [9, 136.8], [10, 142.3], [11, 150.0], [12, 154.7], [13, 161.9], [14, 168.7], [15, 173.6], [16, 175.9], [17, 176.6], [18, 176.8], [19, 176.7]],
        "75%": [[2, 94.5], [3, 102.1], [4, 110.8], [5, 117.9], [6, 124.0], [7, 129.3], [8, 134.6], [9, 141.4], [10, 147.0], [11, 156.1], [12, 160.3], [13, 168.3], [14, 174.7], [15, 178.0], [16, 180.2], [17, 181.7], [18, 181.3], [19, 182.5]],
        "85%": [[2, 96.2], [3, 103.8], [4, 111.8], [5, 119.6], [6, 125.6], [7, 131.5], [8, 138.0], [9, 143.3], [10, 149.3], [11, 159.8], [12, 162.5], [13, 171.3], [14, 177.5], [15, 180.2], [16, 183.8], [17, 183.4], [18, 183.5], [19, 185.5]],
        "50%": [[2, 91.9], [3, 98.2], [4, 106.8], [5, 114.6], [6, 120.8], [7, 125.2], [8, 130.3], [9, 137.1], [10, 141.5], [11, 149.4], [12, 153.9], [13, 162.2], [14, 169.0], [15, 174.8], [16, 176.0], [17, 176.8], [18, 176.4], [19, 177.4]]
    };

    var females = {
        "15%": [[2, 84.8], [3, 93.7], [4, 100.6], [5, 105.8], [6, 113.3], [7, 119.3], [8, 124.3], [9, 131.4], [10, 136.9], [11, 143.8], [12, 149.4], [13, 151.2], [14, 152.3], [15, 155.9], [16, 154.7], [17, 157.0], [18, 156.1], [19, 155.4]],
        "90%": [[2, 95.6], [3, 104.1], [4, 111.9], [5, 119.6], [6, 127.6], [7, 133.1], [8, 138.7], [9, 147.1], [10, 152.8], [11, 161.3], [12, 166.6], [13, 167.9], [14, 169.3], [15, 170.1], [16, 172.4], [17, 169.2], [18, 171.1], [19, 172.4]],
        "25%": [[2, 87.2], [3, 95.9], [4, 101.9], [5, 107.4], [6, 114.8], [7, 121.4], [8, 126.8], [9, 133.4], [10, 138.6], [11, 146.2], [12, 152.0], [13, 153.8], [14, 155.7], [15, 158.4], [16, 157.0], [17, 158.5], [18, 158.4], [19, 158.1]],
        "10%": [[2, 84.0], [3, 91.9], [4, 99.2], [5, 105.2], [6, 112.7], [7, 118.0], [8, 123.3], [9, 130.2], [10, 135.0], [11, 141.1], [12, 148.3], [13, 150.0], [14, 150.7], [15, 154.3], [16, 153.6], [17, 155.6], [18, 154.7], [19, 153.1]],
        "mean": [[2, 90.2], [3, 98.3], [4, 105.2], [5, 112.2], [6, 119.0], [7, 125.8], [8, 131.3], [9, 138.6], [10, 144.2], [11, 151.3], [12, 156.7], [13, 158.6], [14, 160.5], [15, 162.1], [16, 162.9], [17, 162.2], [18, 163.0], [19, 163.1]],
        "75%": [[2, 93.2], [3, 101.5], [4, 107.9], [5, 116.6], [6, 122.8], [7, 129.3], [8, 135.2], [9, 143.7], [10, 148.7], [11, 156.9], [12, 160.8], [13, 163.0], [14, 165.0], [15, 165.8], [16, 168.7], [17, 166.2], [18, 167.6], [19, 168.0]],
        "85%": [[2, 94.5], [3, 102.8], [4, 110.4], [5, 119.0], [6, 125.7], [7, 131.5], [8, 137.9], [9, 146.0], [10, 151.3], [11, 159.9], [12, 164.0], [13, 166.5], [14, 167.5], [15, 168.5], [16, 171.5], [17, 168.0], [18, 169.8], [19, 170.3]],
        "50%": [[2, 90.2], [3, 98.1], [4, 105.2], [5, 111.7], [6, 118.2], [7, 125.6], [8, 130.5], [9, 138.3], [10, 143.7], [11, 151.4], [12, 156.7], [13, 157.7], [14, 161.0], [15, 162.0], [16, 162.8], [17, 162.2], [18, 162.8], [19, 163.3]]
    };

    var dataset = [
        {
            label: "Female mean",
            data: females["mean"],
            lines: {
                show: true
            },
            color: "rgb(255,50,50)"
        },
        {
            id: "f15%",
            data: females["15%"],
            lines: {
                show: true,
                lineWidth: 0,
                fill: false
            },
            color: "rgb(255,50,50)"
        },
        {
            id: "f25%",
            data: females["25%"],
            lines: {
                show: true,
                lineWidth: 0,
                fill: 0.2
            },
            color: "rgb(255,50,50)",
            fillBetween: "f15%"
        },
        {
            id: "f50%",
            data: females["50%"],
            lines: {
                show: true,
                lineWidth: 0.5,
                fill: 0.4,
                shadowSize: 0
            },
            color: "rgb(255,50,50)",
            fillBetween: "f25%"
        },
        {
            id: "f75%",
            data: females["75%"],
            lines: {
                show: true,
                lineWidth: 0,
                fill: 0.4
            },
            color: "rgb(255,50,50)",
            fillBetween: "f50%"
        },
        {
            id: "f85%",
            data: females["85%"],
            lines: {
                show: true,
                lineWidth: 0,
                fill: 0.2
            },
            color: "rgb(255,50,50)",
            fillBetween: "f75%"
        },

        {
            label: "Male mean",
            data: males["mean"],
            lines: {
                show: true
            },
            color: "rgb(50,50,255)"
        },
        {
            id: "m15%",
            data: males["15%"],
            lines: {
                show: true,
                lineWidth: 0,
                fill: false
            },
            color: "rgb(50,50,255)"
        },
        {
            id: "m25%",
            data: males["25%"],
            lines: {
                show: true,
                lineWidth: 0,
                fill: 0.2
            },
            color: "rgb(50,50,255)",
            fillBetween: "m15%"
        },
        {
            id: "m50%",
            data: males["50%"],
            lines: {
                show: true,
                lineWidth: 0.5,
                fill: 0.4,
                shadowSize: 0
            },
            color: "rgb(50,50,255)",
            fillBetween: "m25%"
        },
        {
            id: "m75%",
            data: males["75%"],
            lines: {
                show: true,
                lineWidth: 0,
                fill: 0.4
            },
            color: "rgb(50,50,255)",
            fillBetween: "m50%"
        },
        {
            id: "m85%",
            data: males["85%"],
            lines: {
                show: true,
                lineWidth: 0,
                fill: 0.2
            },
            color: "rgb(50,50,255)",
            fillBetween: "m75%"
        }
  ];

    $.plot($("#chart-heat"), dataset, {
        xaxis: {
            tickDecimals: 0
        },
        yaxis: {
            tickFormatter: function (v) {
                return v + " cm";
            }
        },
        legend: {
            position: "se"
        }
    });
});