/*  ==========================================================================
    Table of Content for Sidebar 3 v2:

    === Function ===
	- runPCUChart
	- runMemoryChart
	- runTempChart
	- runStatsDisplay

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runPCUChart
    ========================================================================== */
function runPCUChart(morrisChart){

    var color_1 = $('.server-stats-pcu-1').css('color'),
        color_2 = $('.server-stats-pcu-2').css('color');

    Morris.Bar({
        element: morrisChart,
        data: [
            {t: '12:45', n: 2, h: 3},
            {t: '13:22', n: 3, h: 4},
            {t: '13:38', n: 1, h: 2},
            {t: '14:15', n: 5, h: 6},
            {t: '14:45', n: 10, h: 12},
            {t: '15:35', n: 12, h: 15},
            {t: '16:25', n: 9, h: 10},
            {t: '17:45', n: 7, h: 8}
        ],
        xkey: 't',
        ykeys: ['n', 'h'],
        labels: ['Normal', 'High'],
        barColors: [color_1, color_2],
        stacked: true,
        resize: true
    });
}


/*
    runMemoryChart
    ========================================================================== */
function runMemoryChart(morrisChart){

    var color_1 = $('.server-stats-memory-1').css('color'),
        color_2 = $('.server-stats-memory-2').css('color');

    Morris.Area({
        element: morrisChart,
        data: [
            {t: '10:22', n: 2, h: 3},
            {t: '11:46', n: 3, h: 4},
            {t: '12:20', n: 2, h: 3},
            {t: '13:15', n: 5, h: 6},
            {t: '14:30', n: 6, h: 7},
            {t: '14:15', n: 3, h: 4}
        ],
        xkey: 't',
        ykeys: ['n', 'h'],
        labels: ['Normal', 'High'],
        lineColors: [color_1, color_2],
        resize: true
    });
}


/*
    runTempChart
    ========================================================================== */
function runTempChart(morrisChart){

    var color_1 = $('.server-stats-temp-1').css('color');

    Morris.Line({
        element: morrisChart,
        data: [
            {"t": "10:22", "h": 15},
            {"t": "11:46", "h": 35},
            {"t": "12:20", "h": 20},
            {"t": "13:15", "h": 40},
            {"t": "14:30", "h": 50},
            {"t": "15:30", "h": 38},
            {"t": "16:35", "h": 42},
            {"t": "17:25", "h": 30},
            {"t": "18:45", "h": 16}
        ],
        xkey: 't',
        ykeys: ['h'],
        labels: ['Temperature'],
        units: 'c',
        lineColors: [color_1],
        resize: true
    });
}

/*
    runUsersChart
    ========================================================================== */
function runUsersChart(morrisChart){

    var color_1 = $('.server-stats-user-1').css('color'),
        color_2 = $('.server-stats-user-2').css('color');


    Morris.Donut({
        element: morrisChart,
        data: [
            {value: 10332, label: 'Male'},
            {value: 12033, label: 'Female'}
        ],
        labelColor: '#535353',
        colors: [
            color_1,
            color_2
        ],
        formatter: function (x) { return x + "%"},
        resize: true
    });
}


/*
    runStatsDisplay
    ========================================================================== */
function runStatsDisplay(btn){

    $(btn).on('click', function(e){
        e.preventDefault();

        var serverBtn = $(this),
            serverContent = serverBtn.next(".server-stats-content"),
            activeItem;

        if(serverBtn.hasClass('active')){
            serverContent.velocity("transition.perspectiveLeftOut",400);
            serverBtn.removeClass('active');
        }else{
            serverContent.velocity("transition.perspectiveLeftIn",{
                duration: 400,
                complete: function(elements) {
                    activeItem = $(elements).find('.server-stats-chart');
                    activeItem.empty();

                    if(activeItem.hasClass('pcu-chart'))
                        runPCUChart(pcuChart);

                    if(activeItem.hasClass('memory-chart'))
                        runMemoryChart(memoryChart);

                    if(activeItem.hasClass('temp-chart'))
                        runTempChart(tempChart);

                    if(activeItem.hasClass('user-chart'))
                        runUsersChart(userChart);


                }
            });
            serverBtn.addClass('active');
        }

    });

}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var pcuChart       = 'pcuChart',
        memoryChart    = 'memoryChart',
        tempChart      = 'tempChart',
        userChart      = 'userChart',
        serverStatsBtn = '.server-stats-btn';


    // === Checkers ===

    // === Setters ===

    // === Executions ===
    runPCUChart(pcuChart);
    runStatsDisplay(serverStatsBtn);

});