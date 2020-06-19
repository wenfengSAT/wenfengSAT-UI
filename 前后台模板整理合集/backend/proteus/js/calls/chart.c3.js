/*  ==========================================================================
    Table of Content for C3 Charts:

    === Function ===
    - runC3Line
	- runC3Area
    - runC3Spline
    - runC3Mixed
    - runC3Pie
    - runC3Donut

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runC3Line
    ========================================================================== */
function runC3Line(c3Chart){

    var color_1 = $('.c3-line-1').css('color'),
        color_2 = $('.c3-line-2').css('color'),
        color_3 = $('.c3-line-3').css('color');

    var chart = c3.generate({
        bindto: c3Chart,
        data: {
            columns: [
                ['Amazon Kindle', 30, 200, 100, 400, 150, 250],
                ['Apple Ipad', 50, 20, 10, 40, 15, 25]
            ]
        },color: {
            pattern: [color_1, color_2, color_3]
        },zoom: {
            enabled: true
        }
    });

    setTimeout(function () {
        chart.load({
            columns: [
                ['Amazon Kindle', 230, 190, 300, 500, 300, 400]
            ]
        });
    }, 1000);

    setTimeout(function () {
        chart.load({
            columns: [
                ['Samsung Papyrus', 130, 150, 200, 300, 200, 100]
            ]
        });
    }, 1500);

}

/*
    runC3Area
    ========================================================================== */
function runC3Area(c3Chart){

    var color_1 = $('.c3-area-1').css('color'),
        color_2 = $('.c3-area-2').css('color');

    var chart = c3.generate({
        bindto: c3Chart,
        data: {
          columns: [
            ['iPad', 250, 350, 300, 0, 200, 0],
            ['iPhone', 100, 150, 140, 200, 150, 50]
          ],
          type: 'area'
        },color: {
            pattern: [color_1, color_2]
        }
    });
}

/*
    runC3Spline
    ========================================================================== */
function runC3Spline(c3Chart){

    var color_1 = $('.c3-spline-1').css('color'),
        color_2 = $('.c3-spline-2').css('color'),
        color_3 = $('.c3-spline-3').css('color');

    var chart = c3.generate({
        bindto: c3Chart,
        data: {
            columns: [
                ['LG', 30, 200, 100, 400, 150, 250,],
                ['Nokia', 130, 100, 140, 200, 150, 50],
                ['Samsung', 80, 50, 220, 170, 100, 400]
            ],
            type: 'spline'
        },color: {
            pattern: [color_1, color_2, color_3]
        }
    });
}

/*
    runC3Mixed
    ========================================================================== */
function runC3Mixed(c3Chart){

    var color_1 = $('.c3-mixed-1').css('color'),
        color_2 = $('.c3-mixed-2').css('color'),
        color_3 = $('.c3-mixed-3').css('color');

    var chart = c3.generate({
        bindto: c3Chart,
        data: {
            columns: [
                ['New York', 30, 200, 100, 400, 150, 250],
                ['San Francisco', 50, 20, 10, 40, 15, 25],
                ['Los Angeles', 80, 50, 220, 170, 100, 200]
            ],
            types: {
                'New York': 'bar',
                'San Francisco': 'spline',
                'Los Angeles': 'spline'
            }
        },
        axis: {
            rotated: true
        },color: {
            pattern: [color_1, color_2, color_3]
        }
    });
}

/*
    runC3Pie
    ========================================================================== */
function runC3Pie(c3Chart){

    var color_1 = $('.c3-pie-1').css('color'),
        color_2 = $('.c3-pie-2').css('color'),
        color_3 = $('.c3-pie-3').css('color'),
        color_4 = $('.c3-pie-4').css('color'),
        color_5 = $('.c3-pie-5').css('color');

    var chart = c3.generate({
        bindto: c3Chart,
        data: {
            // iris data from R
            columns: [
                ['Books', 30],
                ['Portfolio', 120],
            ],
            type : 'pie'
        },color: {
            pattern: [color_1, color_2, color_3, color_4, color_5]
        }


    });

    setTimeout(function () {
        chart.load({
            columns: [
                ["Online Tutorials", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                ["Internship", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                ["College", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
            ]
        });
    }, 1500);

}

/*
    runC3Donut
    ========================================================================== */
function runC3Donut(c3Chart){

    var color_1 = $('.c3-donut-1').css('color'),
        color_2 = $('.c3-donut-2').css('color'),
        color_3 = $('.c3-donut-3').css('color'),
        color_4 = $('.c3-donut-4').css('color'),
        color_5 = $('.c3-donut-5').css('color');

    var chart = c3.generate({
        bindto: c3Chart,
        data: {
            columns: [
                ['Books', 30],
                ['Portfolio', 120],
            ],
            type : 'donut'
        },color: {
            pattern: [color_1, color_2, color_3, color_4, color_5]
        },
        donut: {
            title: "How to be a Designer"
        }
    });

    setTimeout(function () {
        chart.load({
            columns: [
                ["Online Tutorials", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                ["Internship", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                ["College", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
            ]
        });
    }, 1500);
}



/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var c3Line   = '#c3Line',
        c3Area   = '#c3Area',
        c3Spline = '#c3Spline',
        c3Mixed  = '#c3Mixed',
        c3Pie    = '#c3Pie',
        c3Donut  = '#c3Donut';


    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runC3Line(c3Line)
    runC3Area(c3Area);
    runC3Spline(c3Spline);
    runC3Mixed(c3Mixed);
    runC3Pie(c3Pie);
    runC3Donut(c3Donut);

    $('.sidebar-switcher').on('click', function(){
        runC3Line(c3Line)
        runC3Area(c3Area);
        runC3Spline(c3Spline);
        runC3Mixed(c3Mixed);
        runC3Pie(c3Pie);
        runC3Donut(c3Donut);
    });

});