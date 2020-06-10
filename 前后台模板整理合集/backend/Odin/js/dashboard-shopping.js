$(function () {

    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')

    /***********************************/
    /********* TAB SHOPPING ************/

    //BEGIN JQUERY FLOT CHART
    var d1 = [
        ["Jan", 200],
        ["Feb", 120],
        ["Mar", 199],
        ["Apr", 157],
        ["May", 163],
        ["Jun", 192],
        ["Jul", 130],
        ["Aug", 126],
        ["Sep", 206]
    ];
    $.plot("#sp-chart-orders", [
        {
            data: d1,
            color: "#5cb85c"
        }
    ], {
        series: {
            lines: {
                show: !0,
                fill: true,
                fillColor: {
                    colors: [
                        {
                            opacity: 0.0
                        },
                        {
                            opacity: 0.2
                        }
                    ]
                }
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
    //END JQUERY FLOT CHART

    //BEGIN JQUERY KNOB
    $(".dial").knob({
        'draw': function () {
            $(this.i).val(this.cv + '%')
        },
        'fgColor': '#B8BEC8'
    });
    $({value: 0}).animate({value: $('.ls-chart input').attr("rel")}, {
        duration: 5000,
        easing: 'swing',
        step: function () {
            $('.ls-chart input').val(Math.ceil(this.value)).trigger('change');
        }
    })
    $({value: 0}).animate({value: $('.ao-chart input').attr("rel")}, {
        duration: 5000,
        easing: 'swing',
        step: function () {
            $('.ao-chart input').val(Math.ceil(this.value)).trigger('change');
        }
    })
    //END JQUERY KNOB

    //BEGIN JQUERY ANIMATE NUMBER
    $('#revenue-number').animateNumber({
        number: 3579.95,
        numberStep: comma_separator_number_step
    }, 5000);
    $('#tax-number').animateNumber({
        number: 295.35,
        numberStep: comma_separator_number_step
    }, 5000);
    $('#shipping-number').animateNumber({
        number: 30.00,
        numberStep: comma_separator_number_step
    }, 5000);
    $('#quantity-number').animateNumber({
        number: 14,
        numberStep: comma_separator_number_step
    }, 5000);
    $('#ls-number').animateNumber({
        number: 252983,
        numberStep: comma_separator_number_step
    }, 5000);
    $('#ao-number').animateNumber({
        number: 6320,
        numberStep: comma_separator_number_step
    }, 5000);
    //END JQUERY ANIMATE NUMBER

    /********* TAB SHOPPING ***********/
    /*********************************/

});

