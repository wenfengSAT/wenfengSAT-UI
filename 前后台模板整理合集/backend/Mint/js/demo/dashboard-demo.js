$(function() {
     var morris1 = Morris.Area({
        element: 'morris-dashboard-chart',
        data: [{
                period: '2010 Q1',
                visits: 0,
                unique: 120
            },
            {
                period: '2010 Q2',
                visits: 200,
                unique: 200
            },
            {
                period: '2010 Q3',
                visits: 600,
                unique: 800
            },
            {
                period: '2010 Q4',
                visits: 300,
                unique: 400
            }, {
                period: '2011 Q1',
                visits: 200,
                unique: 300
            }, {
                period: '2011 Q2',
                visits: 400,
                unique: 330
            },
            {
                period: '2011 Q3',
                visits: 600,
                unique: 435
            },
            {
                period: '2011 Q4',
                visits: 800,
                unique: 100
            },
            {
                period: '2012 Q1',
                visits: 1000,
                unique: 0
            }, {
                period: '2012 Q2',
                visits: 1200,
                unique: 0
            }, {
                period: '2012 Q3',
                visits: 1380,
                unique: 0
            }, {
                period: '2012 Q4',
                visits: 1490,
                unique: 0
            }, {
                period: '2013 Q1',
                visits: 1550,
                unique: 0
            }, {
                period: '2013 Q2',
                visits: 1470,
                unique: 50
            }, {
                period: '2013 Q3',
                visits: 1300,
                unique: 100
            }, {
                period: '2013 Q4',
                visits: 1000,
                unique: 200
            }, {
                period: '2014 Q1',
                visits: 600,
                unique: 400
            }, {
                period: '2014 Q2',
                visits: 200,
                unique: 800
            }, {
                period: '2014 Q3',
                visits: 0,
                unique: 1400
            }],
        xkey: 'period',
        ykeys: ['visits', 'unique'],
        labels: ['Visits', 'Unique'],
        pointSize: 2,
        hideHover: 'true',
        resize: true,
        lineColors: ['#1abc9c', '#6ce3cc']
    });


     var morris2 = Morris.Area({
        element: 'morris-area-chart',
        data: [{
                period: '2010 Q1',
                iphone: 2666,
                ipad: null,
                itouch: 2647
            }, {
                period: '2010 Q2',
                iphone: 2778,
                ipad: 2294,
                itouch: 2441
            }, {
                period: '2010 Q3',
                iphone: 4912,
                ipad: 1969,
                itouch: 2501
            }, {
                period: '2010 Q4',
                iphone: 3767,
                ipad: 3597,
                itouch: 5689
            }, {
                period: '2011 Q1',
                iphone: 6810,
                ipad: 1914,
                itouch: 2293
            }, {
                period: '2011 Q2',
                iphone: 5670,
                ipad: 4293,
                itouch: 1881
            }, {
                period: '2011 Q3',
                iphone: 4820,
                ipad: 3795,
                itouch: 1588
            }, {
                period: '2011 Q4',
                iphone: 15073,
                ipad: 5967,
                itouch: 5175
            }, {
                period: '2012 Q1',
                iphone: 10687,
                ipad: 4460,
                itouch: 2028
            }, {
                period: '2012 Q2',
                iphone: 8432,
                ipad: 5713,
                itouch: 1791
            }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        lineColors: ['#1abc9c', '#15a88b', '#6ce3cc'],
        resize: true
    });

     var morris3 = Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
                label: "Download Sales",
                value: 12
            }, {
                label: "In-Store Sales",
                value: 30
            }, {
                label: "Mail-Order Sales",
                value: 20
            }],
        resize: true
    });

    var morris4 = Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
                y: '2006',
                a: 100,
                b: 90
            }, {
                y: '2007',
                a: 75,
                b: 65
            }, {
                y: '2008',
                a: 50,
                b: 40
            }, {
                y: '2009',
                a: 75,
                b: 65
            }, {
                y: '2010',
                a: 50,
                b: 40
            }, {
                y: '2011',
                a: 75,
                b: 65
            }, {
                y: '2012',
                a: 100,
                b: 90
            }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });


    /**
     * Window Resize Function
     */
    var delay = (function() {
        var timer = 0;
        return function(callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();
    $(window).resize(function() {
        delay(function() {
            morris1.redraw();
            morris2.redraw();
            morris3.redraw();
            morris4.redraw();
        }, 500);
    }).trigger('resize');
    
});
