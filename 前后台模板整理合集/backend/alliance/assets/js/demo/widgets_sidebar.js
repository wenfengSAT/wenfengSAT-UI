'use strict';
/*
 * http://themerex.com/
 * Copyright (c) 2015 ThemeREX;
 */


/*
 * Demo theme functions.
 * Required for Settings Pane and
 * misc functions
 */

var demoHighChartsSidebar = function () {

    // Column Charts
    var demoHighColumnsSidebar = function () {

        // Define chart color patterns
        var highColors = [bgInfo, bgPrimary, bgSuccess, bgWarning,
            bgDanger, bgSuccess, bgSystem, bgDark
        ];

        var column4 = $('#high-column4');

        if (column4.length) {

            // Column Chart 4
            $('#high-column4').highcharts({
                credits: false,
                colors: [bgSuccess, bgSuccess, bgWarning,
                    bgWarning, bgInfo, bgInfo
                ],
                chart: {
                    backgroundColor: 'transparent',
                    padding: 0,
                    marginTop: 5,
                    marginLeft:  35,
                    marginRight: 20,
                    marginBottom: 50,
                    type: 'column'
                },
                legend: {
                    enabled: false
                },
                title: {
                    text: null
                },
                xAxis: {
                    lineWidth: 0,
                    tickLength: 3,
                    offset: 3,
                    title: {
                        text: null
                    },
                    labels: {
                        enabled: true
                    }
                },
                yAxis: {
                    max: 10,
                    min: 0,
                    lineWidth: 0,
                    gridLineWidth: 0,
                    title: {
                        text: 'September'
                    },
                    labels: {
                        enabled: false,
                        style: {
                            fontWeight: '400'
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        colorByPoint: true,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Daily Earnings',
                    data: [2, 4, 2, 9, 3, 2,
                        4, 2, 5, 6, 8, 2,
                        4, 2, 1, 5, 6, 8,
                        2, 4, 2, 9, 1, 1,
                        6, 3, 2, 8, 6, 8, 3
                    ]
                }]
            });

        }

        var column5 = $('#high-column5');

        if (column5.length) {

            // Column Chart 5
            $('#high-column5').highcharts({
                credits: false,
                colors: [bgPrimary, bgPrimary, bgWarning,
                    bgWarning, bgInfo, bgInfo
                ],
                chart: {
                    backgroundColor: 'transparent',
                    padding: 0,
                    marginTop: 5,
                    marginLeft: 35,
                    marginRight: 20,
                    marginBottom: 50,
                    type: 'column'
                },
                legend: {
                    enabled: false
                },
                title: {
                    text: null
                },
                xAxis: {
                    lineWidth: 0,
                    tickLength: 3,
                    offset: 3,
                    title: {
                        text: null
                    },
                    labels: {
                        enabled: true
                    }
                },
                yAxis: {
                    max: 10,
                    min: 0,
                    lineWidth: 0,
                    gridLineWidth: 0,
                    title: {
                        text: 'August'
                    },
                    labels: {
                        enabled: false,
                        style: {
                            fontWeight: '400'
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        colorByPoint: true,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Daily Earnings',
                    data: [6, 3, 2, 8, 6, 8, 3,
                        4, 2, 1, 5, 6, 8,
                        2, 4, 2, 9, 3, 2,
                        2, 4, 2, 9, 1, 1,
                        4, 2, 5, 6, 8, 2
                    ]
                }]
            });

        }


    } // End High Columns

    // Init Chart Types
    demoHighColumnsSidebar();


    return {
        init: function () {

            // Init Demo Charts 
            demoHighChartsSidebar();

        }
    }
}();










