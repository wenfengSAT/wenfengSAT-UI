/*  ==========================================================================
    Table of Content for Dashboard 2:

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
    runOptionsWidget
    ========================================================================== */
function runOptionsWidget(){

    $('.toggler-btn').on('click',function(e){
        e.preventDefault();

        var toggler  = $(this),
            widget   = toggler.parents('.widget-options'),
            state    = widget.hasClass('is-options-right') ? true : false,
            mainItem = widget.find('.option-main-item'),
            subItem  = widget.find('.option-sub-item'),
            speed    = 400;

        if(toggler.hasClass('open')){
            if(state){
                mainItem.velocity("stop").velocity("transition.slideLeftOut", { stagger: 100, duration: speed  });
            }else{
                mainItem.velocity("stop").velocity("transition.slideRightOut", { stagger: 100, duration: speed });
            }
            subItem.velocity("stop").velocity("transition.slideDownOut", { stagger: 100, backwards: true, duration: speed  });

            toggler.removeClass('open');
            toggler.html('<i class="fa fa-circle-thin">');
        }else{
            if(state) {
                mainItem.velocity("stop").velocity("transition.slideLeftIn", {stagger: 100, backwards: true, duration: speed });
            }else{
                mainItem.velocity("stop").velocity("transition.slideRightIn", {stagger: 100, backwards: true, duration: speed });
            }
            subItem.velocity("stop").velocity("transition.slideUpIn", { stagger: 100, duration: speed  });
            toggler.addClass('open');
            toggler.html('<i class="fa fa-dot-circle-o">');
        }

    });
}


/*
    runOptionsWidgetDataDisplay
    ========================================================================== */
function runOptionsWidgetDataDisplay(){

    $('.details-btn').on('click',function(e){
        e.preventDefault();

        var details   = $(this),
            widget    = details.parents('.widget-info'),
            infoData  = widget.find('.info-data'),
            infoChart = widget.find('.info-chart'),
            speed     = 400;

        if(infoChart.hasClass('open')){

            infoChart.removeClass('open').velocity("stop").velocity("transition.flipYOut", { stagger: 100, backwards: true, duration: speed,
                complete: function(elements) {
                    infoData.addClass('open').velocity("stop").velocity("transition.flipYIn", { stagger: 100, backwards: true, duration: speed  });
                }
            });

        }
    });

    $('.chart-btn').on('click',function(e){
        e.preventDefault();

        var details   = $(this),
            widget    = details.parents('.widget-info'),
            infoData  = widget.find('.info-data'),
            infoChart = widget.find('.info-chart'),
            speed     = 400;


        if(infoData.hasClass('open')){

            infoData.removeClass('open').velocity("stop").velocity("transition.flipYOut", { stagger: 100, backwards: true, duration: speed,
                complete: function() {
                    infoChart.addClass('open').velocity("stop").velocity("transition.flipYIn", { stagger: 100, backwards: true, duration: speed,
                        complete: function() {
                            runCheckCharts();
                        }
                    });
                }
            });
        }

    });
}


/*
    runRevenueWidget
    ========================================================================== */
function runRevenueWidget(c3Chart){

    var color_1 = $('.c3-revenue-1').css('color'),
        color_2 = $('.c3-revenue-2').css('color'),
        color_3 = $('.c3-revenue-3').css('color'),
        color_4 = $('.c3-revenue-4').css('color'),
        color_5 = $('.c3-revenue-5').css('color');

    var chart = c3.generate({
        bindto: c3Chart,
        data: {
            x: 'x',
            columns: [
                ['x', '2010-01-01', '2010-06-01', '2011-01-01', '2011-06-01', '2012-01-01', '2012-07-02', '2013-01-01', '2013-06-01', '2014-01-01', '2014-06-01', '2015-01-01'],
                ['PHONES',      30, 200, 100, 400, 150, 250, 220, 280, 310, 370, 450],
                ['TABLETS',    130, 100, 140, 200, 150,  50, 180, 315, 360, 260, 410],
                ['COMPUTERS',   80,  50, 220, 170, 100, 300, 340, 300, 240, 370, 360],
                ['SOFTWARE',    50, 120, 150, 320, 130, 200, 220, 260, 330, 190, 280],
                ['ACCESSORIES', 10,  80, 180, 220, 260, 190, 340, 360, 280, 420, 480]
            ],
            type: 'area-spline'
        },
        axis : {
            x : {
                type : 'timeseries',
                tick: {
                    fit: false,
                    //format: "%e %b %y"
                    //format: function (x) { return x.getFullYear(); }
                    format: '%m/%Y' // format string is also available for timeseries data

                }
            },
            y : {
                tick: {
                    //format: d3.format("$,")
                    format: function (d) { return "$ " + d + " M"; }
                }
            }
        },
        color: {
            pattern: [color_1, color_2, color_3, color_4, color_5]
        }
    });

    chart.hide(['COMPUTERS', 'SOFTWARE']);
}


/*
    runCustomerChart
    ========================================================================== */
function runCustomerChart(spark,w){

    var color_1 = $('.info-t-1-spark-1-c').css('color');

    $(spark).sparkline(
        [5,6,7,2,1,4,2,5,3,7,5,4],
        {
            tooltipClassname: 'sparklineTooltip',
            type: 'bar',
            height: '110',
            barWidth: w,
            barColor: color_1
        }
    );

}

/*
    runOrdersChart
    ========================================================================== */
function runOrdersChart(spark,w){

    var color_1 = $('.info-t-2-spark-1-c').css('color'),
        color_2 = $('.info-t-2-spark-2-c').css('color'),
        color_3 = $('.info-t-2-spark-3-c').css('color');

    $(spark).sparkline(
        [5,6,7,9,9,5,3,5,4,6,7],
        {
            tooltipClassname: 'sparklineTooltip',
            type: 'line',
            width: w,
            height: '102px',
            lineColor: color_1,
            fillColor: color_2,
            spotColor: color_3,
            minSpotColor: color_3,
            maxSpotColor: color_3
        }
    );

}

/*
    runReportsChart
    ========================================================================== */
function runReportsChart(spark,w){

    var color_1 = $('.info-t-3-spark-1-c').css('color');

    $(spark).sparkline(
        [5,6,7,9,9,5,3,5,4,6,7,4,2,6,8,9,3,1,7,5,9,4,8,9],
        {
            tooltipClassname: 'sparklineTooltip',
            type: 'discrete',
            width: w,
            height: '100',
            lineColor: color_1
        }
    );

}

/*
    runPaymentChart
    ========================================================================== */
function runPaymentChart(spark,w){

    var color_1 = $('.info-t-4-spark-1-c').css('color');

    $(spark).sparkline(
        [2,5,3,7,5,4,5,6,7,0,1,3,4,6],
        {
            tooltipClassname: 'sparklineTooltip',
            type: 'bar',
            height: '110',
            barWidth: w, // 10
            barSpacing: '5',
            barColor: color_1
        }
    );

}

/*
    runMembersPreventDefault
    ========================================================================== */
function runMembersPreventDefault(spark){

    $('.widget-members .btn').on('click', function(e){
        e.preventDefault();
    });

}


/*
    runCheckCharts
    ========================================================================== */
function runCheckCharts(){

    var chartWidth = $('#user-info').width();

    if(chartWidth < 200){
        runCustomerChart(customerChart, 10);
        runOrdersChart  (ordersChart,100);
        runReportsChart (reportsChart,80);
        runPaymentChart (paymentChart,4);
    }else{
        runCustomerChart(customerChart, 18);
        runOrdersChart  (ordersChart,200);
        runReportsChart (reportsChart,200);
        runPaymentChart (paymentChart,10);
    }

}

/*
    runAddTodoItem
    ========================================================================== */
function runAddTodoItem(){

    var itemNr = 1;

    $('#addTaskButton').on('click',function(){

        var input = $('#addTaskInput').val();
        if(input){
            var template  = '<li class="todo-item-'+itemNr+' todo-item ui-drag-item"><a href="#" class="ui-drag-handle"><i class="fa fa-bars"></i></a>';
                template += '<label class="cb-checkbox cb-checkbox-dark-2">'
                template += '    <input type="checkbox" value=""><span class="todo-text">'+input+'</span>'
                template += '</label><a href="#" class="button_'+itemNr+' delete-todo pull-right"><i class="fa fa-times"></i></a>'
                template += '</li>';

            $(".todo-list").append( template );

            $(".button_"+itemNr).asonwidget({
                type: 'delete',
                target: '.todo-item',
                animation: "fadeOut",
                content: true
            });

            $(".todo-item-"+itemNr).checkBo({});
            $('#addTaskInput').val("");
            itemNr++;
        }
    });



}



/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var checkbo        = '.todocheckbo',
        revenueChart   = '#revenueChart',
        customerChart  = '#customerChart',
        ordersChart    = '#ordersChart',
        reportsChart   = '#reportsChart',
        paymentChart   = '#paymentChart';


    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runCheckBo(checkbo);

    runOptionsWidget();
    runOptionsWidgetDataDisplay();
    runRevenueWidget(revenueChart);


    runCustomerChart(customerChart, 18);
    runOrdersChart  (ordersChart,200);
    runReportsChart (reportsChart,200);
    runPaymentChart (paymentChart,10);

    runAddTodoItem();

    runMembersPreventDefault();


    $('.sidebar-switcher').on('click', function(){
        runRevenueWidget(revenueChart);
        runCheckCharts();
    });


    var sparklineResize;

    $(window).resize(function(e) {

        clearTimeout(sparklineResize);
        sparklineResize = setTimeout(function(){ runCheckCharts() }, 500);

    });

});