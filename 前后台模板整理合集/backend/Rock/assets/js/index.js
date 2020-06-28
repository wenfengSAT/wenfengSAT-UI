$(function () {

    /* Begin Chart Flot Bar Horizontal */
    var data1 = [
        [10, 10], [20, 20], [30, 30], [40, 40], [50, 50]
    ];

    var options = {
        series:{
            bars:{show: true}
        },
        bars:{
            horizontal:true,
            lineWidth: 0,
            show: true,
            barWidth: 5,
            fill: .9
        },
        grid: {
            borderColor: "#fafafa",
            borderWidth: 0,
            hoverable: true
        },
        xaxis: {
            tickColor: "#fff"
        },
        yaxis: {
            tickColor: "#fff"
        },
        colors: ["#4e8ef7"],
        tooltip : true,
        tooltipOpts : {
            content: "%x : %y",
            defaultTheme : false,
            shifts : {
                x : 0,
                y : 20
            }
        }
    };

    $.plot($("#flot-bar-horizontal"), [data1], options);
    /* End Chart Flot Bar Horizontal */

    /* Begin Chart Flot Real Time */
    if (!jQuery.plot) {
        return;
    }

    var data = [],
        totalPoints = 300;

    function getRandomData() {

        if (data.length > 0)
            data = data.slice(1);

        // Do a random walk

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

        // Zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

    // Set up the control widget

    var updateInterval = 30;
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

    var plot = $.plot("#flot-real-time", [ getRandomData() ], {
        series: {
            lines: {
                show: true,
                fill: true,
                fillColor : {
                    colors : [{
                        opacity : 0.8
                    }, {
                        opacity : 0.8
                    }]
                }
            },
            shadowSize: 0
        },
        yaxis: {
            tickColor: "#ffffff"
        },
        xaxis: {
            tickColor: "#ffffff"
        },
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "#f9f9f9",
            borderWidth: 0,
            borderColor: "#f0f0f0"
        },
        colors: ["#68b828"],
        tooltip : true,
        tooltipOpts : {
            content: "%x : %y",
            defaultTheme : false,
            shifts : {
                x : 0,
                y : 20
            }
        }
    });

    function update() {
        plot.setData([getRandomData()]);
        // Since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        setTimeout(update, updateInterval);
    }

    update();
    /* End Chart Flot Real Time */

    /* Begin jQuery Sparkline */
    $(".sparklines1").sparkline([251,933,353,1200,959,1022,1702,565,1913,889,674], {
        lineWidth: 1.5,
        type: 'line',
        width: '90px',
        height: '20px',
        lineColor: '#b3bcc7',
        fillColor: 'rgba(179,188,199,0.1)',
        spotColor: false,
        minSpotColor: false,
        highlightLineColor: 'rgba(0,0,0,0.1)',
        highlightSpotColor: '#b3bcc7',
        spotRadius: 3,
        maxSpotColor: false
    });
    $(".sparklines2").sparkline([5,3,7,6,2,4,6,8,6,4], {
        lineWidth: 1.5,
        type: 'line',
        width: '90px',
        height: '20px',
        lineColor: '#b3bcc7',
        fillColor: 'rgba(179,188,199,0.1)',
        spotColor: false,
        minSpotColor: false,
        highlightLineColor: 'rgba(0,0,0,0.1)',
        highlightSpotColor: '#b3bcc7',
        spotRadius: 3,
        maxSpotColor: false
    });
    $(".sparklines3").sparkline([1225,6533,2953,3469,21282,7354,1655,2567,1234,677], {
        lineWidth: 1.5,
        type: 'line',
        width: '90px',
        height: '20px',
        lineColor: '#b3bcc7',
        fillColor: 'rgba(179,188,199,0.1)',
        spotColor: false,
        minSpotColor: false,
        highlightLineColor: 'rgba(0,0,0,0.1)',
        highlightSpotColor: '#b3bcc7',
        spotRadius: 3,
        maxSpotColor: false
    });
    $(".sparklines4").sparkline([1225,6533,2953,3469,21282,7354,1655,2567,1234,677], {
        lineWidth: 1.5,
        type: 'bar',
        barWidth: 6,
        height: '20px',
        barColor: '#b3bcc7',
        barSpacing: 1
    });
    $(".sparklines5").sparkline([251,933,353,1200,959,1022,1702,565,1913,889,674], {
        lineWidth: 1.5,
        type: 'bar',
        barWidth: 6,
        height: '20px',
        barColor: '#b3bcc7',
        barSpacing: 1
    });
    $(".sparklines6").sparkline([989,3533,5953,7469,1282,9354,4655,2567,1234,577], {
        lineWidth: 1.5,
        type: 'bar',
        barWidth: 6,
        height: '20px',
        barColor: '#b3bcc7',
        barSpacing: 1
    });
    /* Begin jQuery Sparkline */

    /* Begin Tasks */
    var list = $("#widget-tasks-list");
    list.sortable();
    list.disableSelection();

    list.find('input[type="checkbox"]').live('ifChecked ifUnchecked', function(event) {
        if (event.type == 'ifChecked') {
            $(this).closest('li').addClass('task-completed');
            $(this).closest('li').find('a.edit').remove();
        } else {
            $(this).closest('li').removeClass('task-completed');
            $(this).closest('li').find('.actions').prepend("<a href='javascript:;' class='edit'><i class='icon-pencil'></i></a>");
        }
    });
    $('.remove-tasks-completed').live('click', function () {
        list.find('li.task-completed').remove();
    });

    list.find('a.edit').live('click', function () {
        var text = $(this).closest('li').find('.checkbox span').text();
        var input = $('<input id="attribute" class="form-control input-sm" type="text" value="' + text + '" />')
        $(this).closest('li').find('.checkbox span').text('').append(input);
        input.select();

        input.keypress(function(e) {
            var code = e.which;
            if((code==13)) {
                var text = $('#attribute').val();
                $('#attribute').parent().text(text);
                $('#attribute').remove();
            }
        });
    });

    list.find('a.delete').live('click', function () {
        $(this).closest('li').remove();
    });

    $('#text-add-task').keypress(function(e) {
        var code = e.which;
        if((code==13)){
            list.prepend("<li class='list-group-item'><span class='drag-drop'><i></i></span><div class='checkbox'><label><input type='checkbox'/><span>" + $(this).val() + "</span></label></div><div class='actions'><a href='javascript:;' class='edit'><i class='icon-pencil'></i></a><a href='javascript:;' class='delete'><i class='icon-close'></i></a></div><div class='clearfix'></div></li>");
            $('input[type="checkbox"]').iCheck({
                checkboxClass: 'icheckbox_minimal-grey',
                increaseArea: '20%' // optional
            });
            $(this).val('');
        }
    });
    /* End Tasks */

});

