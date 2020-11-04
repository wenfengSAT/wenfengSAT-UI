/**
 * @Package: Ultra Admin HTML Theme
 * @Since: Ultra 1.0
 * This file is part of Ultra Admin Theme HTML package.
 */


jQuery(function($) {

    'use strict';

    var ULTRA_SETTINGS = window.ULTRA_SETTINGS || {};

    /*--------------------------------
        Morris Chart
     --------------------------------*/
    ULTRA_SETTINGS.chartMorris = function() {


        /*Area Graph*/
        // Use Morris.Area instead of Morris.Line
        Morris.Area({
            element: 'morris_area_graph',
            data: [{
                x: '2010 Q4',
                y: 3,
                z: 7
            }, {
                x: '2011 Q1',
                y: 3,
                z: 4
            }, {
                x: '2011 Q2',
                y: null,
                z: 1
            }, {
                x: '2011 Q3',
                y: 2,
                z: 5
            }, {
                x: '2011 Q4',
                y: 8,
                z: 2
            }, {
                x: '2012 Q1',
                y: 4,
                z: 4
            }],
            resize: true,
            xkey: 'x',
            ykeys: ['y', 'z'],
            labels: ['Y', 'Z'],
            lineColors: ['#9972b5', '#1fb5ac'],
            pointFillColors: ['#fa8564']
        }).on('click', function(i, row) {
            console.log(i, row);
        });

        /*Bar Graph*/
        // Use Morris.Bar
        Morris.Bar({
            element: 'morris_bar_graph',
            data: [{
                x: '2011 Q1',
                y: 3,
                z: 2,
                a: 3
            }, {
                x: '2011 Q2',
                y: 2,
                z: null,
                a: 1
            }, {
                x: '2011 Q3',
                y: 0,
                z: 2,
                a: 4
            }, {
                x: '2011 Q4',
                y: 2,
                z: 4,
                a: 3
            }],
            resize: true,
            xkey: 'x',
            ykeys: ['y', 'z', 'a'],
            labels: ['Y', 'Z', 'A'],
            barColors: ['#9972b5', '#1fb5ac', '#fa8564']
        }).on('click', function(i, row) {
            console.log(i, row);
        });



        /*Line Graph*/
        /* data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type */
        var day_data = [{
            "period": "2012-10-01",
            "licensed": 3407,
            "sorned": 660
        }, {
            "period": "2012-09-30",
            "licensed": 3351,
            "sorned": 629
        }, {
            "period": "2012-09-29",
            "licensed": 3269,
            "sorned": 618
        }, {
            "period": "2012-09-20",
            "licensed": 3246,
            "sorned": 661
        }, {
            "period": "2012-09-19",
            "licensed": 3257,
            "sorned": 667
        }, {
            "period": "2012-09-18",
            "licensed": 3248,
            "sorned": 627
        }, {
            "period": "2012-09-17",
            "licensed": 3171,
            "sorned": 660
        }, {
            "period": "2012-09-16",
            "licensed": 3171,
            "sorned": 676
        }, {
            "period": "2012-09-15",
            "licensed": 3201,
            "sorned": 656
        }, {
            "period": "2012-09-10",
            "licensed": 3215,
            "sorned": 622
        }];
        Morris.Line({
            element: 'morris_line_graph',
            data: day_data,
            resize: true,
            xkey: 'period',
            ykeys: ['licensed', 'sorned'],
            labels: ['Licensed', 'SORN'],
            lineColors: ['#9972b5', '#1fb5ac'],
            pointFillColors: ['#fa8564']

        });



        /*Donut Graph*/
        Morris.Donut({
            element: 'morris_donut_graph',
            data: [{
                value: 70,
                label: 'foo'
            }, {
                value: 15,
                label: 'bar'
            }, {
                value: 10,
                label: 'baz'
            }, {
                value: 5,
                label: 'A really really long label'
            }],
            resize: true,
            backgroundColor: '#ffffff',
            labelColor: '#999999',
            colors: [
                '#9972b5',
                '#fa8564',
                '#1fb5ac',
                '#ffcc00'
            ],
            formatter: function(x) {
                return x + "%"
            }
        });



        /*Negative Line Graph*/

        var neg_data = [{
            "period": "2011-08-12",
            "a": 100
        }, {
            "period": "2011-03-03",
            "a": 75
        }, {
            "period": "2010-08-08",
            "a": 50
        }, {
            "period": "2010-05-10",
            "a": 25
        }, {
            "period": "2010-03-14",
            "a": 0
        }, {
            "period": "2010-01-10",
            "a": -25
        }, {
            "period": "2009-12-10",
            "a": -50
        }, {
            "period": "2009-10-07",
            "a": -75
        }, {
            "period": "2009-09-25",
            "a": -100
        }];
        Morris.Line({
            element: 'morris_negative_graph',
            data: neg_data,
            resize: true,
            xkey: 'period',
            ykeys: ['a'],
            labels: ['Series A'],
            lineColors: ['#9972b5', '#1fb5ac'],
            units: '%'
        });


        /*No Grid Line Graph*/
        /* data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type */
        var day_data = [{
            "period": "2012-10-01",
            "licensed": 3407,
            "sorned": 660
        }, {
            "period": "2012-09-30",
            "licensed": 3351,
            "sorned": 629
        }, {
            "period": "2012-09-29",
            "licensed": 3269,
            "sorned": 618
        }, {
            "period": "2012-09-20",
            "licensed": 3246,
            "sorned": 661
        }, {
            "period": "2012-09-19",
            "licensed": 3257,
            "sorned": 667
        }, {
            "period": "2012-09-18",
            "licensed": 3248,
            "sorned": 627
        }, {
            "period": "2012-09-17",
            "licensed": 3171,
            "sorned": 660
        }, {
            "period": "2012-09-16",
            "licensed": 3171,
            "sorned": 676
        }, {
            "period": "2012-09-15",
            "licensed": 3201,
            "sorned": 656
        }, {
            "period": "2012-09-10",
            "licensed": 3215,
            "sorned": 622
        }];
        Morris.Line({
            element: 'morris_nogrid_graph',
            grid: false,
            resize: true,
            data: day_data,
            xkey: 'period',
            ykeys: ['licensed', 'sorned'],
            labels: ['Licensed', 'SORN'],
            lineColors: ['#9972b5', '#1fb5ac']
        });


        /*Non Continuous Line Graph*/
        /* data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type */
        var day_data = [{
            "period": "2012-10-01",
            "licensed": 3407
        }, {
            "period": "2012-09-30",
            "sorned": 0
        }, {
            "period": "2012-09-29",
            "sorned": 618
        }, {
            "period": "2012-09-20",
            "licensed": 3246,
            "sorned": 661
        }, {
            "period": "2012-09-19",
            "licensed": 3257,
            "sorned": null
        }, {
            "period": "2012-09-18",
            "licensed": 3248,
            "other": 1000
        }, {
            "period": "2012-09-17",
            "sorned": 0
        }, {
            "period": "2012-09-16",
            "sorned": 0
        }, {
            "period": "2012-09-15",
            "licensed": 3201,
            "sorned": 656
        }, {
            "period": "2012-09-10",
            "licensed": 3215
        }];
        Morris.Line({
            element: 'morris_noncontinuous_graph',
            data: day_data,
            resize: true,
            xkey: 'period',
            ykeys: ['licensed', 'sorned', 'other'],
            labels: ['Licensed', 'SORN', 'Other'],
            lineColors: ['#9972b5', '#1fb5ac'],
            /* custom label formatting with `xLabelFormat` */
            xLabelFormat: function(d) {
                return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
            },
            /* setting `xLabels` is recommended when using xLabelFormat */
            xLabels: 'day'
        });



        /* Stacked Bar Graph*/
        // Use Morris.Bar
        Morris.Bar({
            element: 'morris_stackedbar_graph',
            data: [{
                x: '2011 Q1',
                y: 3,
                z: 2,
                a: 3
            }, {
                x: '2011 Q2',
                y: 2,
                z: null,
                a: 1
            }, {
                x: '2011 Q3',
                y: 0,
                z: 2,
                a: 4
            }, {
                x: '2011 Q4',
                y: 2,
                z: 4,
                a: 3
            }],
            resize: true,
            xkey: 'x',
            ykeys: ['y', 'z', 'a'],
            labels: ['Y', 'Z', 'A'],
            barColors: ['#9972b5', '#1fb5ac', '#fa8564'],
            stacked: true
        });

    };






    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {
        ULTRA_SETTINGS.chartMorris();
    });

    $(window).resize(function() {});

    $(window).load(function() {});

});
