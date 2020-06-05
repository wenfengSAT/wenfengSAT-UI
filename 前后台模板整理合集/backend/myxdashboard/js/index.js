   //Pizza
        $(window).load(function() {
      Pizza.init();
    })


    //Calendar test
    $(document).ready( function(){
    theMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    theDays = ["S", "M", "T", "W", "T", "F", "S"];

    $('#calendar_test').calendar({
        months: theMonths,
        days: theDays,
        req_ajax: {
            type: 'get',
            url: 'json.php'
        }
    });
});



    //calling bootstrap fili input
    $('input[type=file]').bootstrapFileInput();
    $('.file-inputs').bootstrapFileInput();
  
    //slimscrool
    $(function(){
    $('#slimscrool').slimScroll({
        height: '250px'
    });
    });


     //LIVE FLOT
    $(function() {
        var data = [],
            totalPoints = 400;

        function getRandomData() {

            if (data.length > 0)
                data = data.slice(1);

            while (data.length < totalPoints) {

                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;

                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }

                data.push(y);
            }

            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }

            return res;
        }

        // Set up the control widget
        var updateInterval = 40;
        $("#updateInterval").val(updateInterval).change(function () {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                if (updateInterval < 1) {
                    updateInterval = 1;
                } else if (updateInterval > 2000) {
                    updateInterval = 2000;
                }
                $(this).val("" + updateInterval);
            }
        });

        var plot = $.plot("#placeholder", [ getRandomData() ], {
            series: {
                shadowSize: 0   // Drawing is faster without shadows
            },
            yaxis: {
                min: 0,
                max: 200
            },
            xaxis: {
                show: true
            }
        });

        function update() {

            plot.setData([getRandomData()]);
            plot.draw();
            setTimeout(update, updateInterval);
        }

        update();
        
    });





       //jvectormap data
    var visitorsData = {
        "US": 398, //USA
        "SA": 400, //Saudi Arabia
        "CA": 1000, //Canada
        "DE": 500, //Germany
        "FR": 760, //France
        "CN": 300, //China
        "AU": 700, //Australia
        "BR": 600, //Brazil
        "IN": 800, //India
        "GB": 320, //Great Britain
        "RU": 3000, //Russia
        "PH": 1200 //Russia

    };
    $(function(){
     //World map by jvectormap
    $('#world-map').vectorMap({
        map: 'world_mill_en',
        backgroundColor: "#fff",
        regionStyle: {
            initial: {
                fill: '#e4e4e4',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            }
        },
        series: {
            regions: [{
                    values: visitorsData,
                    scale: ["#a9b2c0", "#344154"], //['#3E5E6B', '#A6BAC2'],
                    normalizeFunction: 'polynomial'
                }]
        },
        onRegionLabelShow: function(e, el, code) {
            if (typeof visitorsData[code] != "undefined")
                el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
        }
    });
    });




 //Sparkline charts
    var myvalues = [15, 19, 20, -22, -33, 27, 31, 27, 19, 30, 21];
    $('#sparkline-1').sparkline(myvalues, {
        type: 'bar',
        barColor: '#43aea8',
        negBarColor: "#ddd",
        height: '20px'
    });
    myvalues = [15, 19, 20, 22, -2, -10, -7, 27, 19, 30, 21];
    $('#sparkline-2').sparkline(myvalues, {
        type: 'bar',
        barColor: '#43aea8',
        negBarColor: "#ddd",
        height: '20px'
    });
    myvalues = [15, -19, -20, 22, 33, 27, 31, 27, 19, 30, 21];
    $('#sparkline-3').sparkline(myvalues, {
        type: 'bar',
        barColor: '#43aea8',
        negBarColor: "#ddd",
        height: '20px'
    });
    myvalues = [15, 19, 20, 22, 33, -27, -31, 27, 19, 30, 21];
    $('#sparkline-4').sparkline(myvalues, {
        type: 'bar',
        barColor: '#43aea8',
        negBarColor: "#ddd",
        height: '20px'
    });
    myvalues = [15, 19, 20, 22, 33, 27, 31, -27, -19, 30, 21];
    $('#sparkline-5').sparkline(myvalues, {
        type: 'bar',
        barColor: '#43aea8',
        negBarColor: "#ddd",
        height: '20px'
    });
    myvalues = [15, 19, -20, 22, -13, 27, 31, 27, 19, 30, 21];
    $('#sparkline-6').sparkline(myvalues, {
        type: 'bar',
        barColor: '#43aea8',
        negBarColor: "#ddd",
        height: '20px'
    });

    myvalues = [15, 19, 20, 22, -13, 27, 31, 27, -19, 30, -21];
    $('#sparkline-7').sparkline(myvalues, {
        type: 'bar',
        barColor: '#43aea8',
        negBarColor: "#ddd",
        height: '20px'
    });

    myvalues = [45, 9, 50, 22, 13, 27, 31, -7, 19, 30, 21];
    $('#sparkline-8').sparkline(myvalues, {
        type: 'bar',
        barColor: '#43aea8',
        negBarColor: "#ddd",
        height: '20px'
    });




   //COUNTER UP
       jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    });





    //DATA GRID
    $('#myModal').on('show', function() {
    var tit = $('.confirm-delete').data('title');

    //$('#myModal .modal-body p').html("Are you sure you want to delete this order " + '<b>' + tit +'</b>' + ' ?');
    $('#myModal .modal-body p').html("Are you sure you want to delete this order?");
    var id = $(this).data('id'),
    removeBtn = $(this).find('.danger');
    })

    $('.confirm-delete').on('click', function(e) {
    e.preventDefault();

    var id = $(this).data('id');
    $('#myModal').data('id', id).modal('show');
    });

    $('#btnYes').click(function() {
    // handle deletion here
    var id = $('#myModal').data('id');
    $('[data-id='+id+']').parents('tr').remove();
    $('#myModal').modal('hide');
    
    });



    //NOTIFICATION
    function create( template, vars, opts ){
    return $container.notify("create", template, vars, opts);
    }

    $(function(){
    // initialize widget on a container, passing in all the defaults.
    // the defaults will apply to any notification created within this
    // container, but can be overwritten on notification-by-notification
    // basis.
    $container = $("#container").notify();
    // create two when the pg loads
    create("default", { title:'YOU HAVE 3 NEW MESSAGES', text:'Go to <a href=\'inbox.html\'>Mailbox</a> to see who wrote to you. Check the date and today\'s tasks.'});
  });
