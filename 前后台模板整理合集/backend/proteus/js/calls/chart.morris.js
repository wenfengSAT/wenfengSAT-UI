/*  ==========================================================================
    Table of Content for Morris Charts:

    === Function ===
	- runMorrisArea
	- runMorrisBar
	- runMorrisStacked
	- runMorrisDonut
    - runMorrisLine

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runMorrisArea
    ========================================================================== */
function runMorrisArea(morrisChart){

    var color_1 = $('.morris-area-1').css('color'),
        color_2 = $('.morris-area-2').css('color'),
        color_3 = $('.morris-area-3').css('color');

    Morris.Area({
      element: morrisChart,
      data: [
        {x: '2012 Q4', y: 1, z: 2, a: 10},
        {x: '2013 Q1', y: 3, z: 4, a: 2},
        {x: '2013 Q2', y: null, z: 1, a: 5},
        {x: '2013 Q3', y: 3, z: 6, a: 1},
        {x: '2013 Q4', y: 10, z: 4, a: 2},
        {x: '2014 Q1', y: 5, z: 12, a: 5}
      ],
      xkey: 'x',
      ykeys: ['y', 'z', 'a'],
      labels: ['Y', 'Z', 'A'],
      lineColors: [color_1, color_2, color_3],
      resize: true
    });
}

/*
    runMorrisBar
    ========================================================================== */
function runMorrisBar(morrisChart){

    var color_1 = $('.morris-bar-1').css('color'),
        color_2 = $('.morris-bar-2').css('color'),
        color_3 = $('.morris-bar-3').css('color');

    Morris.Bar({
      element: morrisChart,
      data: [
        {x: '2010 Q4', y: 1, z: 2, a: 10},
        {x: '2011 Q1', y: 3, z: 4, a: 2},
        {x: '2011 Q2', y: null, z: 1, a: 5},
        {x: '2011 Q3', y: 3, z: 6, a: 1},
        {x: '2011 Q4', y: 10, z: 4, a: 2},
        {x: '2012 Q1', y: 5, z: 12, a: 5}
      ],
      xkey: 'x',
      ykeys: ['y', 'z', 'a'],
      labels: ['Y', 'Z', 'A'],
      barColors: [color_1, color_2, color_3],
      resize: true
    });
}

/*
    runMorrisStacked
    ========================================================================== */
function runMorrisStacked(morrisChart){

    var color_1 = $('.morris-stacked-1').css('color'),
        color_2 = $('.morris-stacked-2').css('color'),
        color_3 = $('.morris-stacked-3').css('color');

    Morris.Bar({
      element: morrisChart,
      data: [
        {x: '2011 Q1', y: 3, z: 2, a: 7},
        {x: '2011 Q2', y: 2, z: 5, a: 1},
        {x: '2011 Q3', y: 5, z: 2, a: 4},
        {x: '2011 Q4', y: 1, z: 7, a: 6}
      ],
      xkey: 'x',
      ykeys: ['y', 'z', 'a'],
      labels: ['Y', 'Z', 'A'],
      barColors: [color_1, color_2, color_3],
      stacked: true,
      resize: true
    });
}

/*
    runMorrisDonut
    ========================================================================== */
function runMorrisDonut(morrisChart){

    var color_1 = $('.morris-donut-1').css('color'),
        color_2 = $('.morris-donut-2').css('color'),
        color_3 = $('.morris-donut-3').css('color'),
        color_4 = $('.morris-donut-4').css('color');

    Morris.Donut({
      element: morrisChart,
      data: [
        {value: 60, label: 'Colour'},
        {value: 15, label: 'Coherence'},
        {value: 10, label: 'Consistency'},
        {value: 15, label: 'Text Clarity'}
      ],
      labelColor: '#631a27',
      colors: [
          color_1,
          color_2,
          color_3,
          color_4
      ],
      formatter: function (x) { return x + "%"},
      resize: true
    });
}

/*
    runMorrisLine
    ========================================================================== */
function runMorrisLine(morrisChart){

    var color_1 = $('.morris-line-1').css('color');

    Morris.Line({
        element: morrisChart,
        data: [
            {"period": "2013-01-10", "a": 0},
            {"period": "2013-03-10", "a": 25},
            {"period": "2013-05-10", "a": 50},
            {"period": "2013-07-10", "a": 75},
            {"period": "2013-09-10", "a": 100},
            {"period": "2013-11-10", "a": 75},
            {"period": "2014-01-10", "a": 50},
            {"period": "2014-03-10", "a": 25},
            {"period": "2014-05-10", "a": 0}
        ],
        xkey: 'period',
        ykeys: ['a'],
        labels: ['Series A'],
        units: '%',
        lineColors: [color_1],
        resize: true
    });

}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var morrisArea    = 'morrisArea';
    var morrisBar     = 'morrisBar';
    var morrisStacked = 'morrisStacked';
    var morrisDonut   = 'morrisDonut';
    var morrisLine    = 'morrisLine';

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runMorrisArea(morrisArea);
    runMorrisBar(morrisBar);
    runMorrisStacked(morrisStacked);
    runMorrisDonut(morrisDonut);
    runMorrisLine(morrisLine);

    $('.sidebar-switcher').on('click', function(){

        $('#morrisArea, #morrisBar, #morrisStacked, #morrisDonut, #morrisLine').empty();

        runMorrisArea(morrisArea);
        runMorrisBar(morrisBar);
        runMorrisStacked(morrisStacked);
        runMorrisDonut(morrisDonut);
        runMorrisLine(morrisLine);
    });

});