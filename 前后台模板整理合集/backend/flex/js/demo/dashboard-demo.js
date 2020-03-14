//Date Range Picker
$(document).ready(function() {
    $('#reportrange').daterangepicker({
            startDate: moment().subtract('days', 29),
            endDate: moment(),
            minDate: '01/01/2012',
            maxDate: '12/31/2014',
            dateLimit: {
                days: 60
            },
            showDropdowns: true,
            showWeekNumbers: true,
            timePicker: false,
            timePickerIncrement: 1,
            timePicker12Hour: true,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                'Last 7 Days': [moment().subtract('days', 6), moment()],
                'Last 30 Days': [moment().subtract('days', 29), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
            },
            opens: 'left',
            buttonClasses: ['btn btn-default'],
            applyClass: 'btn-small btn-primary',
            cancelClass: 'btn-small',
            format: 'MM/DD/YYYY',
            separator: ' to ',
            locale: {
                applyLabel: 'Submit',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom Range',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                firstDay: 1
            }
        },
        function(start, end) {
            console.log("Callback has been called!");
            $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
    );
    //Set the initial state of the picker label
    $('#reportrange span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
});

//Morris Area Chart
var sales_data = [{
    date: '2014-1-25',
    productA: 80.26,
    productB: 92.26,
    productC: 79.91,
    productD: 81.63
}, {
    date: '2014-1-26',
    productA: 251.34,
    productB: 115.62,
    productC: 128.34,
    productD: 92.35
}, {
    date: '2014-1-27',
    productA: 90.91,
    productB: 89.26,
    productC: 124.48,
    productD: 152.61
}, {
    date: '2014-1-28',
    productA: 91.23,
    productB: 87.94,
    productC: 250.79,
    productD: 352.24
}, {
    date: '2014-1-29',
    productA: 148.26,
    productB: 151.98,
    productC: 164.33,
    productD: 142.43
}, {
    date: '2014-1-30',
    productA: 74.53,
    productB: 71.26,
    productC: 78.91,
    productD: 76.32
}, {
    date: '2014-1-31',
    productA: 84.26,
    productB: 62.87,
    productC: 156.72,
    productD: 163.06
}, ];
Morris.Area({
    element: 'morris-chart-dashboard',
    data: sales_data,
    xkey: 'date',
    xLabelFormat: function(date) {
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    },
    xLabels: 'day',
    ykeys: ['productA', 'productB', 'productC', 'productD'],
    yLabelFormat: function(y) {
        return "$" + y;
    },
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    lineColors: ['#fff', '#fff', '#fff', '#fff'],
    hideHover: 'auto',
    resize: true,
    gridTextFamily: ['Open Sans'],
    gridTextColor: ['rgba(255,255,255,0.7)'],
    fillOpacity: 0.1,
    pointSize: 0,
    smooth: true,
    lineWidth: 2,
    grid: true,
    dateFormat: function(date) {
        d = new Date(date);
        return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
    },
});

//Responsive Sparkline Inline Charts
$("#sparklineA").sparkline([200, 215, 221, 214, 232, 265], {
    type: 'bar',
    zeroAxis: false,
    height: 24,
    chartRangeMin: 100,
    barColor: 'rgba(255,255,255,0.5)',
    negBarColor: 'rgba(255,255,255,0.5)'
});

$("#sparklineB").sparkline([10, 24, 18], {
    type: 'pie',
    height: 24,
    sliceColors: ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.6)']
});

$("#sparklineC").sparkline([22, 29, 14, 12, 18, 21, 24], {
    type: 'bar',
    zeroAxis: false,
    height: 24,
    chartRangeMin: 0,
    barColor: 'rgba(255,255,255,0.5)',
    negBarColor: 'rgba(255,255,255,0.5)'
});

$("#sparklineD").sparkline([72, 65, 45, 65, 82, 78, 92, 83, 46, 87, 69, 96], {
    type: 'line',
    lineColor: 'rgba(255,255,255,0.8)',
    fillColor: 'rgba(255,255,255,0.3)',
    spotColor: '#ffffff',
    minSpotColor: '#ffffff',
    maxSpotColor: '#ffffff',
    highlightLineColor: '#ffffff',
    height: 24,
    chartRangeMin: 25,
    drawNormalOnTop: false
});

//Flot Chart Dynamic Chart

var container = $("#flot-chart-moving-line");

// Determine how many data points to keep based on the placeholder's initial size;
// this gives us a nice high-res plot while avoiding more than one point per pixel.

var maximum = container.outerWidth() / 10 || 300;

//

var data = [];

function getRandomData() {

    if (data.length) {
        data = data.slice(1);
    }

    while (data.length < maximum) {
        var previous = data.length ? data[data.length - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        data.push(y < 0 ? 0 : y > 100 ? 100 : y);
    }

    // zip the generated y values with the x values

    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
    }

    return res;
}

//

series = [{
    data: getRandomData(),
    lines: {
        fill: true,
        fillColor: "rgba(255,255,255,0.4)",
    },
}];

//

var plot = $.plot(container, series, {
    grid: {
        borderWidth: 0,
        minBorderMargin: 10,
        labelMargin: 10,
        backgroundColor: {
            colors: ["rgba(255, 255, 255,0)", "rgba(255, 255, 255,0)"]
        },
        margin: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        markings: function(axes) {
            var markings = [];
            var xaxis = axes.xaxis;
            for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 2) {
                markings.push({
                    xaxis: {
                        from: x,
                        to: x + xaxis.tickSize
                    },
                    color: "rgba(255, 255, 255, 0)"
                });
            }
            return markings;
        }
    },
    xaxis: {
        tickFormatter: function() {
            return "";
        }
    },
    yaxis: {
        min: 10,
        max: 110,
        show: false
    },
    legend: {
        show: false
    },
    colors: ["#fff"]

});

// Update the random dataset at 25FPS for a smoothly-animating chart

setInterval(function updateRandom() {
    series[0].data = getRandomData();
    plot.setData(series);
    plot.draw();
}, 500);


//Chat Widget SlimScroll Box
$(function() {
    $('.chat-widget').slimScroll({
        start: 'bottom',
        height: '300px',
        alwaysVisible: true,
        disableFadeOut: true,
        touchScrollStep: 50
    });
});

//Moment.js Time Display
var datetime = null,
    date = null;

var update = function() {
    date = moment(new Date())
    datetime.html(date.format('dddd<br>MMMM Do, YYYY<br>h:mm:ss A'));
};

$(document).ready(function() {
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
});

//Custom jQuery - Changes background on time tile based on the time of day.
$(document).ready(function() {
    datetoday = new Date(); // create new Date()
    timenow = datetoday.getTime(); // grabbing the time it is now
    datetoday.setTime(timenow); // setting the time now to datetoday variable
    hournow = datetoday.getHours(); //the hour it is

    if (hournow >= 18) // if it is after 6pm
        $('div.tile-img').addClass('evening');
    else if (hournow >= 12) // if it is after 12pm
        $('div.tile-img').addClass('afternoon');
    else if (hournow >= 6) // if it is after 6am
        $('div.tile-img').addClass('morning');
    else if (hournow >= 0) // if it is after midnight
        $('div.tile-img').addClass('midnight');
});

//Vector Maps
$(function() {
    $('#map').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#bdc3c7'
            }
        },
        series: {
            regions: [{
                values: visitorData,
                scale: ['#bdc3c7', '#16a085'],
                normalizeFunction: 'polynomial'
            }]
        },
        onRegionLabelShow: function(e, el, code) {
            el.html(el.html() + ' (Total Visits - ' + visitorData[code] + ')');
        }
    });
});

//To-Do List jQuery - Adds a strikethrough on checked items
$('.checklist input:checkbox').change(function() {
    if ($(this).is(':checked'))
        $(this).parent().addClass('selected');
    else
        $(this).parent().removeClass('selected')
});

//Easy Pie Charts
$(function() {
    $('#easy-pie-1, #easy-pie-2, #easy-pie-3, #easy-pie-4').easyPieChart({
        barColor: "rgba(255,255,255,.5)",
        trackColor: "rgba(255,255,255,.5)",
        scaleColor: "rgba(255,255,255,.5)",
        lineWidth: 20,
        animate: 1500,
        size: 175,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

});

//DataTables Initialization for Map Table Example
$(document).ready(function() {
    $('#map-table-example').dataTable();
});
