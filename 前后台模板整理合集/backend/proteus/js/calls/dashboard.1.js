/*  ==========================================================================
    Table of Content for Dashboard 1:

    === Function ===
    - runCheckBo
	- runOptionsWidget
	- runOptionsWidgetDataDisplay
    - runRevenueWidget
    - runCustomerChart
    - runOrdersChart
    - runReportsChart
    - runPaymentChart
    - runMembersPreventDefault
    - runCheckCharts
    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runCheckBo
    ========================================================================== */
function runCheckBo(input){

    $(input).checkBo({
        checkAllButton: "#members-all",
        checkAllTarget: ".members-row"
    });
}


/*
    runMembersPreventDefault
    ========================================================================== */
function runMembersPreventDefault(spark){

    $('.widget-members .btn').on('click', function(e){
        e.preventDefault();
    });

}


/* ---------------------------------------------------------------------------------- */


/*
    runToggleFullScreen
    ========================================================================== */
function runToggleFullScreen(){

    $('.full-screen-page').on('click', function() {
        toggleFullScreen();
    });

}

function toggleFullScreen() {

    var icon = $('.full-screen-page i');

    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
        icon.removeClass('fa-expand').addClass('fa-compress');
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        icon.removeClass('fa-compress').addClass('fa-expand');
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}


/*
    runForecast
    ========================================================================== */
function runForecast(){

    // Default Setup
    runSetForecastWeather('New York, NY','f');

    // Search On Enter Press Setup
    $(document).keypress(function(e) {
        if(e.which == 13) {

            if ($(".forecast-location").is(":focus")) {
                var location = $('.forecast-location').val();
                var unit = $('input:radio[name="temperature"]:checked').val();

                runSetForecastWeather(location,unit);
            }
        }
    });


    // Search Location Setup
    $('.forecast-unit, .forecast-location-btn').on('click', function() {
        var location = $('.forecast-location').val();
        var unit = $('input:radio[name="temperature"]:checked').val();

        runSetForecastWeather(location,unit);
    });


    // Geolocation Setup

    /* Does your browser support geolocation? */
    if ("geolocation" in navigator) {
        $('.forecast-geo-location').show();
    } else {
        $('.forecast-geo-location').hide();
    }

    /* Where in the world are you? */
    $('.forecast-geo-location').on('click', function() {
        var unit = $('input:radio[name="temperature"]:checked').val();
        navigator.geolocation.getCurrentPosition(function(position) {
            runSetForecastWeather(position.coords.latitude+','+position.coords.longitude, unit); //load weather using your lat/lng coordinates
        });
    });
}


/*
    runSetForecastWeather
    ========================================================================== */
function runSetForecastWeather(location,unit){


    $.simpleWeather({
        location: location,
        unit: unit,
        success: function(weather) {

            var weatherCont = $("#weatherForecast");

            html = "";
            for(var i=0;i<weather.forecast.length;i++) {
                html += '<a href="#" class="weather-day-col">';
                html += '<div class="weather-day">'+weather.forecast[i].day+'</div>';
                html += '<div class="weather-date">' +weather.forecast[i].date+ '</div>';
                html += '<div class="weather-icon"><i class="ac ac-'+weather.forecast[i].code+'"></i></div>';
                html += '<div class="weather-temp">'+weather.forecast[i].high+'&deg;' + weather.units.temp + '</div>';
                html += '<div class="weather-description">'+weather.forecast[i].text+'</div>';
                html += '</a>';
            }

            $('.forecast-location').val(weather.city+', '+weather.region);

            weatherCont.html(html);
            $("#weatherForecast .weather-day-col").velocity("transition.slideDownIn", { stagger: 100, drag: true });

        },
        error: function(error) {
            $("#weatherForecast").html('<div class="forecast-error">'+error.message+'</div>');
        }
    });

}


/*
    runToggleSidebarProfile
    ========================================================================== */
function runToggleSidebarProfile(){

    $('.profile-2-toggle').on('click', function() {

        var widgetProfile = $(this).parent('.widget-profile-2');
        var widgetProfileWrapper = $('.profile-2-wrapper');
        var profileOpen = 'profile-2-open';

        if(widgetProfile.hasClass(profileOpen)){
            widgetProfileWrapper.slideUp('fast');
            widgetProfile.removeClass(profileOpen);
        }else{
            widgetProfileWrapper.slideDown('fast');
            widgetProfile.addClass(profileOpen);
        }
    });

    $('.toggle-stats').on('click', function() {

        var toggleStats = $(this);
        var profileSocialStats = $('.profile-2-social-stats');
        var statsActive = 'active';

        if(toggleStats.hasClass(statsActive)){
            profileSocialStats.removeClass('open').slideUp('fast');
            toggleStats.removeClass(statsActive);
        }else{
            profileSocialStats.addClass('open').slideDown('fast');
            toggleStats.addClass(statsActive);
        }

    });

    $('.toggle-visitors').on('click', function() {

        var toggleStats = $(this);
        var profileSocialStats = $('.profile-2-chart');
        var statsActive = 'active';

        if(toggleStats.hasClass(statsActive)){
            profileSocialStats.removeClass('open').slideUp('fast');
            toggleStats.removeClass(statsActive);
        }else{
            profileSocialStats.addClass('open').slideDown('fast');
            toggleStats.addClass(statsActive);
        }

    });
}


/*
    runRickshawVisitors
    ========================================================================== */
function runRickshawVisitors(element, legend){

    $('#'+ element).empty();
    $('#'+ legend).empty();

    var data = [
        { x: 0, y: 10 },
        { x: 1, y: 18 },
        { x: 2, y: 28 },
        { x: 3, y: 17 },
        { x: 4, y: 25 },
        { x: 5, y: 15 },
        { x: 6, y: 23 },
        { x: 7, y: 38 },
        { x: 8, y: 17 },
        { x: 9, y: 32 },
        { x: 10, y: 15 }
    ];

    var color_1 = $('.rickshaw-visitors').css('color');

    var graph = new Rickshaw.Graph( {
        element: document.getElementById(element),
        height: 100,
        renderer: 'area',
        series: [
            {
                color: color_1,
                data : data,
                name: 'Visitors'
            }
        ]
    } );

    graph.render();

    var hoverDetail = new Rickshaw.Graph.HoverDetail( {
        graph: graph
    } );

    var legend = new Rickshaw.Graph.Legend( {
        graph: graph,
        element: document.getElementById(legend)

    } );

}

/*
    runTextRotator
    ========================================================================== */
function runTextRotator(){

    $("#rotating-text").textrotator({
        animation: "fade",
        separator: ",",
        speed: 5000,
        speedAnim : 500
    });
}

/*
    runSetupWeather
    ========================================================================== */
function runDisplayWeather(){

    // Default Setup
    runSetWeather('New York, NY','f');

    // Default Setup
    var color = $('.switcheryUnits').css('color');

    var switcheryUnits = document.querySelector('#switcheryUnits');
    var switchery = new Switchery(switcheryUnits, { color: color, size : 'extra-small' });

    // Toggle Temperature Unit Display
    if(switcheryUnits){
        switcheryUnits.onchange = function() {

            if($('.time-status-toggle').hasClass('activated')){
                if(switcheryUnits.checked){
                    runGeolocation('c');
                }else{
                    runGeolocation('f');
                }
            }else{
                if(switcheryUnits.checked){
                    runSetWeather('New York, NY','c');
                }else{
                    runSetWeather('New York, NY','f');
                }
            }

        };

        // Geolocation Setup

        /* Does your browser support geolocation? */
        if ("geolocation" in navigator) {
            $('.current-weather-location').show();
        } else {
            $('.current-weather-location').hide();
        }

        /* Where in the world are you? */
        $('.current-weather-location').on('click', function() {
            $('.time-status-toggle').addClass('activated');
            if(switcheryUnits.checked){
                runGeolocation('c');
            }else{
                runGeolocation('f');
            }
        });
    }
}

/*
    runGeolocation
    ========================================================================== */
function runGeolocation(unit){
    navigator.geolocation.getCurrentPosition(function(position) {
        runSetWeather(position.coords.latitude+','+position.coords.longitude, unit);
    });
}

/*
    runSetWeather
    ========================================================================== */
function runSetWeather(location,unit){

    $.simpleWeather({
        location: location,
        unit: unit,
        success: function(weather) {

            var weatherCont = $("#weather");

            html = "";

            html += '<div class="l-span-sm-6 l-span-xs-12">';
            html += '<div class="weather-location">'+weather.city+', '+weather.region+'</div>';
            html += '<div class="weather-description">'+weather.currently+'</div>';
            html += '</div>';

            html += '<div class="l-span-sm-3 l-span-xs-9">';
            html += '<div class="weather-temp">'+weather.temp+'&deg;'+weather.units.temp+'</div>';
            html += '</div>';

            html += '<div class="l-span-sm-3 l-span-xs-3">';
            html += '<div class="weather-icon"><i class="ac ac-'+weather.code+'"></i></div>';
            html += '</div>';

            weatherCont.html(html);
            //$("#weather .weather-day-col").velocity("transition.slideLeftIn", { stagger: 100, drag: true });

        },
        error: function(error) {
            $("#weather").html('<div class="forecast-error">'+error.message+'</div>');
        }
    });

}

/*
    runDisplayClock
    ========================================================================== */
function runDisplayClock(){
    $("#clock").clock();
}


/*
    runPageSummarySettings
    ========================================================================== */
function runPageSummarySettings(){
    var color = $('.switcherySettings').css('color');

    var switcherySettings = document.querySelector('#switcherySettings');
    var switchery = new Switchery(switcherySettings, { color: color, size : 'extra-small' });

    // Toggle Summary Info Display
    if(switcherySettings){
        switcherySettings.onchange = function() {
            if(switcherySettings.checked){
                $('.chart-toggle').fadeOut('fast', function(){ $('.time-status-toggle').fadeIn(); });
                $('.summary-chart').velocity("stop").velocity("transition.slideLeftOut",
                    {
                        duration: 200,
                        stagger: 250,
                        reverse: true,
                        complete: function() {
                            $('.summary-time-status').velocity("stop").velocity("transition.slideLeftIn", { stagger: 250 });
                        }
                    });

            }else{
                $('.time-status-toggle').fadeOut('fast', function(){ $('.chart-toggle').fadeIn(); });
                $('.summary-time-status').velocity("stop").velocity("transition.slideLeftOut",
                    {
                        duration: 200,
                        stagger: 250,
                        complete: function() {
                            $('.summary-chart').velocity("stop").velocity("transition.slideLeftIn", { stagger: 250, reverse: true });
                        }
                    }
                );
            }

        };
    }
}

/*
    runGenerateRandomChartData
    ========================================================================== */
function runGenerateRandomChartData(totalElements, elementsInterval){

    var randomData = [], i;

    for (i = 1; i <= totalElements; i++) {
        var randomNr =  Math.floor((Math.random() * elementsInterval) + 1);
        randomData.push( { x: i, y: randomNr } );
    }

    return randomData;
}

/*
    runPageSummaryCharts
    ========================================================================== */
function runPageSummaryCharts(element, type){

    switch (type) {

        case 'views':

            var color = $('.rickshaw-views').css('color'),
                data = runGenerateRandomChartData(12,2400),
                name = "Page views";


            break;

        case 'followers':

            var color = $('.rickshaw-followers').css('color'),
                data = runGenerateRandomChartData(12,470),
                name = "Followers";

            break;

        case 'comments':

            var color = $('.rickshaw-comments').css('color'),
                data = runGenerateRandomChartData(12,690),
                name = "Comments";

            break;
    }

    var graph = new Rickshaw.Graph( {
        element: document.getElementById(element),
        height: 40,
        renderer: 'bar',
        series: [
            {
                color: color,
                data : data,
                name: name
            }
        ]
    } );

    graph.render();

    var hoverDetail = new Rickshaw.Graph.HoverDetail( {
        graph: graph
    } );

    return graph;

}

/*
    runPageSummaryUpdateCharts
    ========================================================================== */
function runPageSummaryUpdateCharts(viewChart, followersChart, commentsChart){


    var resize = function() {
        var rickshawViewsWidth = $('#rickshawViews').width();
        viewChart.configure({ width : rickshawViewsWidth, height: 40 });
        viewChart.render();

        var rickshawFollowersWidth = $('#rickshawFollowers').width();
        followersChart.configure({ width : rickshawFollowersWidth, height: 40 });
        followersChart.render();

        var rickshawCommentsWidth = $('#rickshawComments').width();
        commentsChart.configure({ width : rickshawCommentsWidth, height: 40 });
        commentsChart.render();


        var ww =  $( window ).width();

        if(ww > 1180){
            $('.page-summary-info').removeAttr('style');
            $('.page-summary-info-switcher').removeClass('open');
        }

    }

    window.addEventListener('resize', resize);

    $('.sidebar-switcher').on('click', function(e){
        resize();
    });

    $('.chart-toggle').on('click', function() {

        runUpdateCurrentChart(viewChart,12,2400);
        runUpdateCurrentChart(followersChart,12,470);
        runUpdateCurrentChart(commentsChart,12,690);

    });

    $('.update-chart-views').on('click', function() {     runUpdateCurrentChart(viewChart,12,2400);     });
    $('.update-chart-followers').on('click', function() { runUpdateCurrentChart(followersChart,12,470); });
    $('.update-chart-comments').on('click', function() {  runUpdateCurrentChart(commentsChart,12,690);  });

    // Page Summary Toggle Handling
    $('.page-summary-info-switcher').on('click', function() {

        var btn  = $(this),
            info = $('.page-summary-info');

        if(btn.hasClass('open')){
            btn.removeClass('open');
            info.velocity("transition.bounceOut");
        }else{
            btn.addClass('open');
            info.velocity("transition.bounceIn", {
                complete: function() {
                    resize();
                }
            });
        }

    });
}

/*
    runUpdateCurrentChart
    ========================================================================== */
function runUpdateCurrentChart(chart,minRange,maxRange){

    var data = runGenerateRandomChartData(minRange,maxRange);
    chart.series[0].data  = data;
    chart.render();

}


/*
    runEasyPieChartSetup
    ========================================================================== */
function runEasyPieChartSetup(){

    var colorTrack   = $('.tab-chart-track-color').css('color'),
        colorChart_1 = $('.tab-chart-1-color').css('color'),
        colorChart_2 = $('.tab-chart-2-color').css('color'),
        colorChart_3 = $('.tab-chart-3-color').css('color'),
        colorChart_4 = $('.tab-chart-4-color').css('color');

    runEasyPieChart('.tabChart1', '.tabChartUpdate1', colorTrack, colorChart_1);
    runEasyPieChart('.tabChart2', '.tabChartUpdate2', colorTrack, colorChart_2);
    runEasyPieChart('.tabChart3', '.tabChartUpdate3', colorTrack, colorChart_3);
    runEasyPieChart('.tabChart4', '.tabChartUpdate4', colorTrack, colorChart_4);
}

/*
    runEasyPieChart
    ========================================================================== */
function runEasyPieChart(tabChart,tabChartUpdate,colorTrack,colorChart){

    $(tabChart).easyPieChart({
        easing: 'easeOutQuart',
        size: 70,
        lineWidth: 2,
        scaleColor: false,
        trackColor: colorTrack,
        barColor: colorChart,
        animate: 1000,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    var chart = window.chart = $(tabChart).data('easyPieChart');
    $(tabChartUpdate).on('click', function() {
        //chart.update(Math.random()*200-100); // Values from -100 to 100
        chart.update(Math.random()*100);       // Values from 0 to 100
    });
}

/*
    runStatisticCharts
    ========================================================================== */
function runStatisticCharts(element, legend){

    var unique = [
        [1,8],[2,4],[3,10],[4,5],[5,17],[6,5],[7,10],[8,5],[9,15],[10,24],[11,10],[12,24],[13,15],[14,7],[15,2],[16,9],[17,4],[18,12],[19,6],[20,12]
    ];
    var returning = [
        [1,1],[2,3],[3,12],[4,4],[5,10],[6,2],[7,5],[8,2],[9,10],[10,2],[11,6],[12,2],[13,10],[14,4],[15,0],[16,4],[17,8],[18,4],[19,15],[20,6]
    ];

    var color_1 = $('.rickshaw-statistic-c-1-1').css('color'),
        data_1 = runGetStatisticData(unique),
        name_1 = "Unique",

        color_2 = $('.rickshaw-statistic-c-1-2').css('color'),
        data_2 = runGetStatisticData(returning),
        name_2 = "Returning";

    var graph = new Rickshaw.Graph( {
        element: document.getElementById(element),
        height: 300,
        renderer: 'area',
        stroke: true,
        unstack : true,
        offset : 'zero',
        series: [
            {
                stroke: color_1,
                color: color_1,
                data : data_1,
                name: name_1
            },
            {
                stroke: color_2,
                color: color_2,
                data : data_2,
                name: name_2
            }
        ]
    } );

    var hoverDetail = new Rickshaw.Graph.HoverDetail( {
        graph: graph
    } );

    graph.render();

    return graph;

}

/*
    runStatisticUpdateCharts
    ========================================================================== */
function runStatisticUpdateCharts(statisticChart){

    // Resize
    var resize = function() {
        var rickshawStatisticWidth = $('.statistic-body').width();
        statisticChart.configure({ width : rickshawStatisticWidth, height: 300 });
        statisticChart.render();

    }

    window.addEventListener('resize', resize);

    // Prevent Default
    $('.statistic-options a').on('click', function(e){
        e.preventDefault();
    });

    $('#statisticFullScreen, .sidebar-switcher').on('click', function(e){
        resize();
    });

    // Chart Display Types
    $('#statisticAreaBtn').on('click', function(e){
        statisticChart.configure({ renderer : 'area', unstack: true});
        statisticChart.render();
        runSetStatisticActiveClass('statisticChartType', $(this));
    });

    $('#statisticBarBtn').on('click', function(e){
        statisticChart.configure({ renderer : 'bar', unstack: true});
        statisticChart.render();
        runSetStatisticActiveClass('statisticChartType', $(this));
    });

    $('#statisticLineBtn').on('click', function(e){
        statisticChart.configure({ renderer : 'line', unstack: true});
        statisticChart.render();
        runSetStatisticActiveClass('statisticChartType', $(this));
    });

    // Chart Data Types

    var color_1_1 = $('.rickshaw-statistic-c-1-1').css('color'),
        color_1_2 = $('.rickshaw-statistic-c-1-2').css('color'),
        color_2_1 = $('.rickshaw-statistic-c-2-1').css('color'),
        color_3_1 = $('.rickshaw-statistic-c-3-1').css('color'),
        color_4_1 = $('.rickshaw-statistic-c-4-1').css('color');

    var emptyData = [
        [1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0],[13,0],[14,0],[15,0],[16,0],[17,0],[18,0],[19,0],[20,0]
    ];

    // Visitors
    $('#statisticVisitorsBtn').on('click', function(e){
        var data = [
            {
                stroke: color_1_1,
                color: color_1_1,
                data: runGenerateRandomChartData(20,1200),
                name: "Unique"
            }, {
                stroke: color_1_2,
                color: color_1_2,
                data: runGenerateRandomChartData(20,1100),
                name: "Returning"
            }
        ];

        runSetStatisticData(statisticChart,data);
        runSetStatisticActiveClass('statisticDataType', $(this));
        $('#statisticTitle').html('Visitor Statistics <span class="statistic-title-1">- 2,453</span>');
    });

    // Pageviews
    $('#statisticPageviewsBtn').on('click', function(e){
        var data = [
            {
                stroke: color_2_1,
                color: color_2_1,
                data: runGenerateRandomChartData(20,150),
                name: "Pageviews"
            }, {
                stroke: color_2_1,
                color: color_2_1,
                data: runGetStatisticData(emptyData),
                name: "Pageviews"
            }
        ];

        runSetStatisticData(statisticChart,data);
        runSetStatisticActiveClass('statisticDataType', $(this));
        $('#statisticTitle').html('Pageviews <span class="statistic-title-2">- 578</span>');
    });

    // Time
    $('#statisticTimeBtn').on('click', function(e){
        var data = [
            {
                stroke: color_3_1,
                color: color_3_1,
                data: runGenerateRandomChartData(20,150),
                name: "Average Visit Time"
            }, {
                stroke: color_3_1,
                color: color_3_1,
                data: runGetStatisticData(emptyData),
                name: "Average Visit Time"
            }
        ];

        runSetStatisticData(statisticChart,data);
        runSetStatisticActiveClass('statisticDataType', $(this));
        $('#statisticTitle').html('Average Visit Time <span class="statistic-title-3">- 00:05:23</span>');
    });

    // Bounce Rate
    $('#statisticBounceBtn').on('click', function(e){
        var data = [
            {
                stroke: color_4_1,
                color: color_4_1,
                data: runGenerateRandomChartData(20,150),
                name: "Bounce Rate"
            }, {
                stroke: color_4_1,
                color: color_4_1,
                data: runGetStatisticData(emptyData),
                name: "Bounce Rate"
            }
        ];

        runSetStatisticData(statisticChart,data);
        runSetStatisticActiveClass('statisticDataType', $(this));
        $('#statisticTitle').html('Bounce Rate <span class="statistic-title-4">- 31,08%</span>');
    });
}


/*
    runSetStatisticActiveClass
    ========================================================================== */
function runSetStatisticActiveClass(id,element){

    $('#'+ id +' a').removeClass('active');
    element.addClass('active');
}

/*
    runSetStatisticData
    ========================================================================== */
function runSetStatisticData(chart,data){

    $(chart.series).each(function(i){
        chart.series[i] = data[i];
    });

    chart.render();
}

/*
    runGetStatisticData
    ========================================================================== */
function runGetStatisticData(array){
    var dataArray = [];

    for (var i = 0; i < array.length; i += 1) {
        dataArray.push({ x: array[i][0], y: array[i][1] });
    }

    return dataArray;
}

/*
 runStatisticCharts_2
 ========================================================================== */
function runStatisticCharts_2(element,type){

    var unique = [
        [1,8],[2,4],[3,10],[4,5],[5,17],[6,5],[7,10],[8,5],[9,15],[10,24],[11,10],[12,23],[13,15],[14,7],[15,2],[16,9],[17,4],[18,12],[19,6],[20,12]
    ];

    switch (type) {

        case 'windows':

            var color = $('.rickshaw-statistic-item-1').css('color'),
                data = runGenerateRandomChartData(12,2400),
                name = "Windows";


            break;

        case 'macintosh':

            var color = $('.rickshaw-statistic-item-2').css('color'),
                data = runGenerateRandomChartData(12,470),
                name = "Macintosh";

            break;

        case 'android':

            var color = $('.rickshaw-statistic-item-3').css('color'),
                data = runGenerateRandomChartData(12,690),
                name = "Android";

            break;

        case 'ios':

            var color = $('.rickshaw-statistic-item-4').css('color'),
                data = runGenerateRandomChartData(12,690),
                name = "iOS";

            break;
    }

    var graph = new Rickshaw.Graph( {
        element: document.getElementById(element),
        height: 50,
        renderer: 'area',
        series: [
            {
                color: color,
                data : data,
                name: name
            }
        ]
    } );

    graph.render();

    return graph;

}

/*
    runStatisticUpdateCharts_2
    ========================================================================== */
function runStatisticUpdateCharts_2(statisticChart_1, statisticChart_2, statisticChart_3, statisticChart_4){

    // Resize
    var resize = function() {
        var rickshawStatisticWidth = $('.statistic-item-chart-wrapper').width();
        statisticChart_1.configure({ width : rickshawStatisticWidth, height: 50 });
        statisticChart_1.render();

        statisticChart_2.configure({ width : rickshawStatisticWidth, height: 50 });
        statisticChart_2.render();

        statisticChart_3.configure({ width : rickshawStatisticWidth, height: 50 });
        statisticChart_3.render();

        statisticChart_4.configure({ width : rickshawStatisticWidth, height: 50 });
        statisticChart_4.render();
    }

    window.addEventListener('resize', resize);

    $('#statisticFullScreen_2, .sidebar-switcher').on('click', function(e){
        resize();
    });

}


/*
    runStatisticDemographicUpdate
    ========================================================================== */
function runStatisticDemographicUpdate(){
    var color = $('.switcheryDisplay').css('color');

    var switcherySettings = document.querySelector('#switcheryDisplay'),
        switchery = new Switchery(switcherySettings, { color: color, size : 'extra-small' }),
        speed       = 400,
        langGraph    = $('.statistic-listing'),
        countryGraph = $('.statistic-graphical');

    // Toggle Summary Info Display
    if(switcherySettings){
        switcherySettings.onchange = function() {
            if(switcherySettings.checked){
                $('#statisticTitle_2 span').html('- Graphical');
                langGraph.velocity("transition.slideRightBigOut", {  duration: speed,
                    complete: function() {
                        countryGraph.velocity("transition.slideLeftBigIn", { duration: speed  });
                    }
                });

            }else{
                $('#statisticTitle_2 span').html('- Listing');
                countryGraph.velocity("transition.slideLeftBigOut", {  duration: speed,
                    complete: function() {
                        langGraph.velocity("transition.slideRightBigIn", { duration: speed  });
                    }
                });

            }
        };
    }
}

/*
    runStatisticFooTables
    ========================================================================== */
function runStatisticFooTables(){
    $('#languageListing').footable();
    $('#countryListing').footable();

    var speed        = 400,
        langList     = $('.statistic-language-listing'),
        countryList  = $('.statistic-country-listing'),
        langGraph    = $('.statistic-language-graphical'),
        countryGraph = $('.statistic-country-graphical');

    $( "#typeSelect" ).change(function() {

        switch ($(this).val()) {
            case 'l':
                countryList.velocity("transition.expandOut", {  duration: speed,
                    complete: function() {
                        langList.velocity("transition.expandIn", { duration: speed  });
                    }
                });

                countryGraph.velocity("transition.expandOut", {  duration: speed,
                    complete: function() {
                        langGraph.velocity("transition.expandIn", { duration: speed  });
                    }
                });

                break;
            case 'c':
                langList.velocity("transition.expandOut", {  duration: speed,
                    complete: function() {
                        countryList.velocity("transition.expandIn", { duration: speed  });
                    }
                });

                langGraph.velocity("transition.expandOut", {  duration: speed,
                    complete: function() {
                        countryGraph.velocity("transition.expandIn", { duration: speed  });
                    }
                });

                break;
        }
    });
}

/*
    runC3Language
    ========================================================================== */
function runC3Language(c3Chart){

    var color_1 = $('.c3-donut-1').css('color'),
        color_2 = $('.c3-donut-2').css('color'),
        color_3 = $('.c3-donut-3').css('color'),
        color_4 = $('.c3-donut-4').css('color'),
        color_5 = $('.c3-donut-5').css('color'),
        color_6 = $('.c3-donut-6').css('color'),
        color_7 = $('.c3-donut-7').css('color'),
        color_8 = $('.c3-donut-8').css('color'),
        color_9 = $('.c3-donut-9').css('color');

    var chart = c3.generate({
        bindto: c3Chart,
        data: {
            columns: [
                ['English', 46],
                ['Spanish', 21],
                ['Hungarian', 32],
                ['German', 12],
                ['Swedish', 23],
                ['French', 8],
                ['Italian', 5],
                ['Chinese', 19],
                ['Japanese', 16]
            ],
            type : 'donut'
        },color: {
            pattern: [color_1, color_2, color_3, color_4, color_5, color_6, color_7, color_8, color_9]
        },
        donut: {
            title: "By Language"
        }
    });

}

/*
    runC3Country
    ========================================================================== */
function runC3Country(c3Chart){

    var color_1 = $('.c3-donut-1').css('color'),
        color_2 = $('.c3-donut-2').css('color'),
        color_3 = $('.c3-donut-3').css('color'),
        color_4 = $('.c3-donut-4').css('color'),
        color_5 = $('.c3-donut-5').css('color'),
        color_6 = $('.c3-donut-6').css('color'),
        color_7 = $('.c3-donut-7').css('color'),
        color_8 = $('.c3-donut-8').css('color'),
        color_9 = $('.c3-donut-9').css('color');

    var chart = c3.generate({
        bindto: c3Chart,
        data: {
            columns: [
                ['United States', 16],
                ['United Kingdom', 7],
                ['Australia', 9],
                ['Spain', 21],
                ['Hungary', 32],
                ['Germany', 26],
                ['Sweden', 41],
                ['France', 17],
                ['Italy', 15],
                ['China', 36],
                ['Japan', 29]
            ],
            type : 'donut'
        },color: {
            pattern: [color_1, color_1, color_1, color_2, color_3, color_4, color_5, color_6, color_7, color_8, color_9]
        },
        donut: {
            title: "By Country"
        }
    });

}


/*
    runC3Gender
    ========================================================================== */
function runC3Gender(c3Chart, isFirstTime){

    var color_1 = $('.c3-gender-1').css('color'),
        color_2 = $('.c3-gender-2').css('color');

    if(isFirstTime){

        var chart = c3.generate({
            bindto: c3Chart,
            data: {
                columns: [
                    ['Female', 43]
                ],
                type : 'donut'
            },color: {
                pattern: [color_1, color_2]
            },
            donut: {
                title: 'By Gender'
            }
        });

        setTimeout(function () {
            chart.load({
                columns: [
                    ["Male", 57],
                ]
            });
        }, 2000);

    }else{

        var chart = c3.generate({
            bindto: c3Chart,
            data: {
                columns: [
                    ['Female', 43]
                    ["Male", 57],
                ],
                type : 'donut'
            },color: {
                pattern: [color_1, color_2]
            },
            donut: {
                title: 'By Gender'
            }
        });
    }

}

/*
    runC3GenderUpdate
    ========================================================================== */
function runC3GenderUpdate() {

    $('.sidebar-switcher').on('click', function(e){
        runC3Gender('#c3Gender',false);
    });
}


/*
    runBrowserChart
    ========================================================================== */
function runBrowserChart(element,legend){

    var color_1 = $('.rickshaw-browser-1').css('color'),
        data_1 = runGenerateRandomChartData(5,100),
        name_1 = "Chrome",

        color_2 = $('.rickshaw-browser-2').css('color'),
        data_2 = runGenerateRandomChartData(5,80),
        name_2 = "Firefox",

        color_3 = $('.rickshaw-browser-3').css('color'),
        data_3 = runGenerateRandomChartData(5,50),
        name_3 = "Safari";

    var graph = new Rickshaw.Graph( {
        element: document.getElementById(element),
        height: 300,
        renderer: 'bar',
        unstack : true,
        offset : 'zero',
        series: [
            {
                color: color_1,
                data : data_1,
                name: name_1
            },
            {
                color: color_2,
                data : data_2,
                name: name_2
            }
            ,
            {
                color: color_3,
                data : data_3,
                name: name_3
            }
        ]
    } );


    graph.render();

    var legend = new Rickshaw.Graph.Legend( {
        graph: graph,
        element: document.getElementById(legend)

    } );

    var hoverDetail = new Rickshaw.Graph.HoverDetail( {
        graph: graph
    } );

    var shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
        graph: graph,
        legend: legend
    } );

    return graph;

}

/*
    runBrowserUpdateChart
    ========================================================================== */
function runBrowserUpdateChart(viewChart){


    var resize = function() {
        var rickshawBrowserWidth = $('.statistic-browser').width();
        viewChart.configure({ width : rickshawBrowserWidth, height: 300 });
        viewChart.render();

    }

    window.addEventListener('resize', resize);

    $('.sidebar-switcher, #statisticFullScreen_3').on('click', function(e){
        resize();
    });

}

/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var checkbo      = '.forecastcheckbo',
        demographics = "#demographics",
        c3Language   = '#c3Language',
        c3Country    = '#c3Country',
        c3Gender     = '#c3Gender';


    // === Checkers ===

    // === Setters ===

    // === Executions ===

    // Header
    runToggleFullScreen();
    runCheckBo(checkbo);
    runForecast();


    // Widget Sidebar Profile
    // ---------------------------------------------------------------------------------------------
    runToggleSidebarProfile();
    runRickshawVisitors('rickshawVisitors',  'rickshawVisitorsLegend');


    // Widget Page Summary
    // ---------------------------------------------------------------------------------------------
    runTextRotator();
    runDisplayWeather();
    runDisplayClock();
    runPageSummarySettings();

    var viewChart      = runPageSummaryCharts('rickshawViews', 'views');
    var followersChart = runPageSummaryCharts('rickshawFollowers', 'followers');
    var commentsChart  = runPageSummaryCharts('rickshawComments',  'comments');

    runPageSummaryUpdateCharts(viewChart, followersChart, commentsChart);


    // Widget Tabs 2
    // ---------------------------------------------------------------------------------------------
    runEasyPieChartSetup();


    // Widget Statistic - General
    // ---------------------------------------------------------------------------------------------
    var statisticChart = runStatisticCharts('statisticChart', 'statisticChartLegend');
    runStatisticUpdateCharts(statisticChart);


    // Widget Statistic - Operating System
    // ---------------------------------------------------------------------------------------------
    var statisticChart_1 = runStatisticCharts_2('statisticChart_1','windows');
    var statisticChart_2 = runStatisticCharts_2('statisticChart_2','macintosh');
    var statisticChart_3 = runStatisticCharts_2('statisticChart_3','android');
    var statisticChart_4 = runStatisticCharts_2('statisticChart_4','ios');
    runStatisticUpdateCharts_2(statisticChart_1, statisticChart_2, statisticChart_3, statisticChart_4);


    // Widget Statistic - Demographics
    // ---------------------------------------------------------------------------------------------
    runStatisticDemographicUpdate();
    runStatisticFooTables();
    runC3Language(c3Language);
    runC3Country(c3Country);


    // Widget Statistic - Gender
    // ---------------------------------------------------------------------------------------------
    runC3Gender(c3Gender,true);
    runC3GenderUpdate();

    // Widget Statistic - Gender
    // ---------------------------------------------------------------------------------------------
    var browserChart = runBrowserChart('browserChart','browserChartLegend');

    runBrowserUpdateChart(browserChart);

    //runOptionsWidget();
    //runOptionsWidgetDataDisplay();
    //runRevenueWidget(revenueChart);
    //
    //
    //runCustomerChart(customerChart, 18);
    //runOrdersChart  (ordersChart,200);
    //runReportsChart (reportsChart,200);
    //runPaymentChart (paymentChart,10);
    //
    //runMembersPreventDefault();


    //$('.sidebar-switcher').on('click', function(){
    //    runRevenueWidget(revenueChart);
    //    runCheckCharts();
    //});
    //
    //

    // Update Charts on resize
    //var summaryChartResize;
    //$(window).resize(function(e) {
    //
    //    clearTimeout(summaryChartResize);
    //    summaryChartResize = setTimeout(function(){ runCheckCharts() }, 500);
    //
    //});

});