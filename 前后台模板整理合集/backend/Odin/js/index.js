$(function () {

    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')

    //BEGIN JQUERY NEWS TICKER
    $('#sample').ticker({
        controls: false,
        titleText: ''
    });
    //END JQUERY NEWS TICKERS

    //BEGIN TODOS LIST
    $("#todos-list-sort").sortable();
    $("#todos-list-sort").disableSelection();


    $('#todos-list-add').click(function () {
        var index = $('#todos-list-sort > li').length;
        $('ul#todos-list-sort').append('<li><input type="checkbox" id="task-item-' + index + '" /><label for="task-item-' + index + '" >' + $("#todos-list-input").val() + '</label><a class="delete" href="javascript:;" data-hover="tooltip" data-original-title="remove"><span class="fa fa-trash-o"></span></a></li>');
        $("[data-hover='tooltip']").tooltip();
    });
    $('#todos-list-sort li a.delete').live('click', function () {
        $(this).parent().remove();
    });
    //END TODOS LIST

    //BEGIN JQUERY JVECTORMAP
    $('.widget-weather').css('height', '322px');
    $('#world-map').css('width', $('.col-lg-6').width());
    $('#world-map').css('height', '342px');
    $('#world-map').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        series: {
            regions: [
                {
                    values: gdpData,
                    scale: ['#B8312F', '#fc6e51'],
                    normalizeFunction: 'polynomial'
                }
            ]
        },
        hoverOpacity: 0.7,
        hoverColor: false
    });
    $(window).resize(function () {
        $('#world-map').css('width', $('.col-lg-6').width());
        $('#world-map').css('height', '342px');
    });
    //END JQUERY JVECTORMAP

    //BEGIN JQUERY ANIMATE NUMBER
    $({value: 0}).animate({value: $('.tp-chart input').attr("rel")}, {
        duration: 5000,
        easing: 'swing',
        step: function () {
            $('.tp-chart input').val(Math.ceil(this.value)).trigger('change');
        }
    });
    $({value: 0}).animate({value: $('.is-chart input').attr("rel")}, {
        duration: 5000,
        easing: 'swing',
        step: function () {
            $('.is-chart input').val(Math.ceil(this.value)).trigger('change');
        }
    });
    $('#tp-number').animateNumber({
        number: 55,
        numberStep: comma_separator_number_step
    }, 5000);
    $({value: 0}).animate({value: $('.tp-chart input').attr("rel")}, {
        duration: 5000,
        easing: 'swing',
        step: function () {
            $('.tp-chart input').val(Math.ceil(this.value)).trigger('change');
        }
    })

    $(".dial").knob({
        'draw': function () {
            $(this.i).val(this.cv + '%')
        },
        'fgColor': '#B8BEC8'
    });
    $({value: 0}).animate({value: $('.stats-chart.visits-stats input').attr("rel")}, {
        duration: 5000,
        easing: 'swing',
        step: function () {
            $('.stats-chart.visits-stats input').val(Math.ceil(this.value)).trigger('change');
        }
    })
    $({value: 0}).animate({value: $('.stats-chart.pageviews-stats input').attr("rel")}, {
        duration: 5000,
        easing: 'swing',
        step: function () {
            $('.stats-chart.pageviews-stats input').val(Math.ceil(this.value)).trigger('change');
        }
    })
    $('#bg-number').animateNumber({
        number: 13287,
        numberStep: comma_separator_number_step
    }, 5000);
    $('#at-number').animateNumber({
        number: 8636,
        numberStep: comma_separator_number_step
    }, 5000);
    $('#tm-number').animateNumber({
        number: 853,
        numberStep: comma_separator_number_step
    }, 5000);
    $('#gr-number').animateNumber({
        number: 15,
        numberStep: comma_separator_number_step
    }, 5000);
    $('#is-number').animateNumber({
        number: 1305,
        numberStep: comma_separator_number_step
    }, 5000);
    $({value: 0}).animate({value: $('.is-chart input').attr("rel")}, {
        duration: 5000,
        easing: 'swing',
        step: function () {
            $('.is-chart input').val(Math.ceil(this.value)).trigger('change');
        }
    })
    $('#visits-number').animateNumber({
        number: 16107,
        numberStep: comma_separator_number_step
    }, 5000);
    $('#pageviews-number').animateNumber({
        number: 62142,
        numberStep: comma_separator_number_step
    }, 5000);
    $('#earning-number').animateNumber({
        number: 50645,
        numberStep: comma_separator_number_step
    }, 5000);
    $('#new-customer-number').animateNumber({
        number: 3420,
        numberStep: comma_separator_number_step
    }, 5000);
    $('#users-number').animateNumber({
        number: 15,
        numberStep: comma_separator_number_step
    }, 5000);
    $('#app-number').animateNumber({
        number: 32890,
        numberStep: comma_separator_number_step
    }, 5000);
    //END JQUERY ANIMATE NUMBER

    //BEGIN SKYCON
    var icons = new Skycons({"color": "white"});

    icons.set("clear-day", Skycons.CLEAR_DAY);
    icons.set("clear-night", Skycons.CLEAR_NIGHT);
    icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
    icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
    icons.set("cloudy", Skycons.CLOUDY);
    icons.set("rain", Skycons.RAIN);
    icons.set("sleet", Skycons.SLEET);
    icons.set("snow", Skycons.SNOW);
    icons.set("wind", Skycons.WIND);
    icons.set("fog", Skycons.FOG);

    icons.play();
    //END SKYCON

    //BEGIN CHART COUNTER
    var d5_1 = [
        ["Jan", 35],
        ["Feb", 60],
        ["Mar", 85],
        ["Apr", 46],
        ["May", 99],
        ["Jun", 82],
        ["Jul", 96]
    ];
    var d5_2 = [
        ["Jan", 47],
        ["Feb", 74],
        ["Mar", 36],
        ["Apr", 83],
        ["May", 39],
        ["Jun", 10],
        ["Jul", 51]
    ];
    $.plot("#counter-chart", [
        {
            data: d5_1,
            label: "New Visitor",
            color: "#ffce54"
        },
        {
            data: d5_2,
            label: "Returning Visitor",
            color: "#87318c"
        }
    ], {
        series: {
            lines: {
                show: !0,
                fill: .8
            },
            points: {
                show: !0,
                radius: 4
            }
        },
        grid: {
            borderColor: "#fafafa",
            borderWidth: 1,
            hoverable: !0
        },
        tooltip: !0,
        tooltipOpts: {
            content: "%x : %y",
            defaultTheme: false
        },
        xaxis: {
            tickColor: "#fafafa",
            mode: "categories"
        },
        yaxis: {
            tickColor: "#fafafa"
        },
        shadowSize: 0
    });
    //END CHART COUNTER

    //BEGIN CHART EARNING
    var d2 = [
        ["Jan", 200],
        ["Feb", 80],
        ["Mar", 199],
        ["Apr", 147],
        ["May", 293],
        ["Jun", 192]
    ];
    $.plot("#earning-chart", [
        {
            data: d2,
            color: "#ffce54"
        }
    ], {
        series: {
            lines: {
                show: !0,
                fill: .01
            },
            points: {
                show: !0,
                radius: 4
            }
        },
        grid: {
            borderColor: "#fafafa",
            borderWidth: 1,
            hoverable: !0
        },
        tooltip: !0,
        tooltipOpts: {
            content: "%x : %y",
            defaultTheme: false
        },
        xaxis: {
            tickColor: "#fafafa",
            mode: "categories"
        },
        yaxis: {
            tickColor: "#fafafa"
        },
        shadowSize: 0
    });
    //END CHART EARNING

    //BEGIN CHART TRAFFIC SOURCES
    var d6_1 = [47];
    var d6_2 = [33];
    var d6_3 = [20];
    $.plot('#traffice-sources-chart', [
        {
            data: d6_1,
            label: "Search Engines",
            color: "#3DB9D3"
        },
        {
            data: d6_2,
            label: "Referrals",
            color: "#ffce54"
        },
        {
            data: d6_3,
            label: "Direct",
            color: "#fc6e51"
        }
    ], {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        }
    });
    //END CHART TRAFFIC SOURCES

    //BEGIN CHART NEW CUSTOMER
    var d7 = [
        ["Jan", 93],
        ["Feb", 78],
        ["Mar", 47],
        ["Apr", 35],
        ["May", 48],
        ["Jun", 26]
    ];
    $.plot("#new-customer-chart", [
        {
            data: d7,
            color: "#01b6ad"
        }
    ], {
        series: {
            bars: {
                align: "center",
                lineWidth: 0,
                show: !0,
                barWidth: .6,
                fill: .9
            }
        },
        grid: {
            borderColor: "#fafafa",
            borderWidth: 1,
            hoverable: !0
        },
        tooltip: !0,
        tooltipOpts: {
            content: "%x : %y",
            defaultTheme: false
        },
        xaxis: {
            tickColor: "#fafafa",
            mode: "categories"
        },
        yaxis: {
            tickColor: "#fafafa"
        },
        shadowSize: 0
    });
    //END CHART NEW CUSTOMER

    //BEGIN CHART DOWNLOAD UPLOAD
    var d8_1 = [
        ["Jan", 67],
        ["Feb", 91],
        ["Mar", 36],
        ["Apr", 150],
        ["May", 28],
        ["Jun", 123],
        ["Jul", 38]
    ];
    var d8_2 = [
        ["Jan", 59],
        ["Feb", 49],
        ["Mar", 45],
        ["Apr", 94],
        ["May", 76],
        ["Jun", 22],
        ["Jul", 31]
    ];
    $.plot("#internet-speed-chart", [
        {
            data: d8_1,
            label: "Download",
            color: "#a01518"
        },
        {
            data: d8_2,
            label: "Upload",
            color: "#c1ca01"
        }
    ], {
        series: {
            lines: {
                show: !1
            },
            splines: {
                show: !0,
                tension: .4,
                lineWidth: 2,
                fill: .8
            },
            points: {
                show: !0,
                radius: 4
            }
        },
        grid: {
            borderColor: "#fafafa",
            borderWidth: 1,
            hoverable: !0
        },
        tooltip: !0,
        tooltipOpts: {
            content: "%x : %y",
            defaultTheme: false
        },
        xaxis: {
            tickColor: "#fafafa",
            mode: "categories"
        },
        yaxis: {
            tickColor: "#fafafa"
        },
        shadowSize: 0
    });
    //END CHART DOWNLOAD UPLOAD


});

