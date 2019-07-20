var BlankonChartMorris = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonChartMorris.lineChartMorris();
            BlankonChartMorris.areaChartMorris();
            BlankonChartMorris.barChartMorris();
            BlankonChartMorris.donutChartMorris();
            BlankonChartMorris.expandPanel();
        },

        // =========================================================================
        // MORRIS CHART / LINE
        // =========================================================================
        lineChartMorris: function () {
            $(window).resize(function() {
                window.line.redraw();
            });
            function morrisLine(){
                window.line = Morris.Line({
                    element: 'morris-line-chart',
                    data: [
                        { y: '2008', a: 20, b: 30 },
                        { y: '2009', a: 40,  b: 50 },
                        { y: '2010', a: 30,  b: 40 },
                        { y: '2011', a: 50,  b: 60 },
                        { y: '2012', a: 40,  b: 50 },
                        { y: '2013', a: 60,  b: 70 },
                        { y: '2014', a: 50, b: 60 }
                    ],
                    xkey: 'y',
                    ykeys: ['a', 'b'],
                    labels: ['Series A', 'Series B'],
                    lineColors: ['#E9573F', '#00B1E1'],
                    lineWidth: '2px',
                    hideHover: true,
                    resize: true,
                    redraw: true
                });
            }
            morrisLine();
        },

        // =========================================================================
        // MORRIS CHART / AREA
        // =========================================================================
        areaChartMorris: function () {
            $(window).resize(function() {
                window.area.redraw();
            });
            function morrisArea(){
                window.area = Morris.Area({
                    element: 'morris-area-chart',
                    data: [
                        { y: '2008', a: 20, b: 30 },
                        { y: '2009', a: 40,  b: 50 },
                        { y: '2010', a: 30,  b: 40 },
                        { y: '2011', a: 50,  b: 60 },
                        { y: '2012', a: 40,  b: 50 },
                        { y: '2013', a: 60,  b: 70 },
                        { y: '2014', a: 50, b: 60 }
                    ],
                    xkey: 'y',
                    ykeys: ['a', 'b'],
                    labels: ['Series A', 'Series B'],
                    lineColors: ['#E9573F', '#00B1E1'],
                    lineWidth: '2px',
                    hideHover: true,
                    resize: true
                });
            }
            morrisArea();
        },

        // =========================================================================
        // MORRIS CHART / BAR
        // =========================================================================
        barChartMorris: function () {
            $(window).resize(function() {
                window.bar.redraw();
            });
            function morrisBar(){
                window.bar = Morris.Bar({
                    element: 'morris-bar-chart',
                    data: [
                        { y: '2008', a: 20, b: 30 },
                        { y: '2009', a: 40,  b: 50 },
                        { y: '2010', a: 30,  b: 40 },
                        { y: '2011', a: 50,  b: 60 },
                        { y: '2012', a: 40,  b: 50 },
                        { y: '2013', a: 60,  b: 70 },
                        { y: '2014', a: 50, b: 60 }
                    ],
                    xkey: 'y',
                    ykeys: ['a', 'b'],
                    labels: ['Series A', 'Series B'],
                    lineWidth: '2px',
                    fillOpacity: 0.8,
                    smooth: false,
                    hideHover: true,
                    resize: true
                });
            }
            morrisBar();
        },

        // =========================================================================
        // MORRIS CHART / DONUT
        // =========================================================================
        donutChartMorris: function () {
            $(window).resize(function() {
                window.donut.redraw();
            });
            function morrisDonut(){
                window.donut = Morris.Donut({
                    element: 'morris-donut-chart',
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
            morrisDonut();
        },

        expandPanel : function () {
            $('[data-action=expand]').on('click', function(){
                window.line.redraw();
                window.area.redraw();
                window.bar.redraw();
                window.donut.redraw();
            });
        }

    };

}();

// Call main app init
BlankonChartMorris.init();












