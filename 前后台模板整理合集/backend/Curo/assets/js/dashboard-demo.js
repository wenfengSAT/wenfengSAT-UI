/*global $, d3, xChart, Skycons, toastr*/
//Dynamically Update CPU Dial
$(".dial-cpu").knob({
    'format': function (value) {
        "use strict";
        return value + '%';
    }
});
var values = [1, 3, 5, 22, 2, 30, 10, 10, 6, 77, 88, 88, 99, 44, 34, 22, 11, 0, 1];
var cnt = 0;
window.setInterval(function () {
    "use strict";
    if (cnt === 19) {
        cnt = 0;
    }
    $({
        value: values[cnt]
    }).animate({
        value: values[cnt + 1]
    }, {
        duration: 400,
        easing: 'swing',
        step: function () {
            $('.dial-cpu').val(this.value).trigger('change');
        }
    });
    cnt += 1;
}, 1400);
//End Dynamically Update CPU Dial

//Toastr Notification
toastr.success("Feel free to explore our template.", "Welcome to Curo");
//End Toastr Notification

//Dynamic Sales Chart
$('#dynamic-chart').css({
    'height': '240px',
    'width': '100%'
});
(function () {
    "use strict";
    var data = [{
        "xScale": "ordinal",
        "comp": [],
        "main": [{
            "className": ".main.l1",
            "data": [{
                "y": 15,
                "x": "2012-11-19T00:00:00"
            }, {
                "y": 11,
                "x": "2012-11-20T00:00:00"
            }, {
                "y": 8,
                "x": "2012-11-21T00:00:00"
            }, {
                "y": 10,
                "x": "2012-11-22T00:00:00"
            }, {
                "y": 1,
                "x": "2012-11-23T00:00:00"
            }, {
                "y": 6,
                "x": "2012-11-24T00:00:00"
            }, {
                "y": 8,
                "x": "2012-11-25T00:00:00"
            }]
        }, {
            "className": ".main.l2",
            "data": [{
                "y": 29,
                "x": "2012-11-19T00:00:00"
            }, {
                "y": 33,
                "x": "2012-11-20T00:00:00"
            }, {
                "y": 13,
                "x": "2012-11-21T00:00:00"
            }, {
                "y": 16,
                "x": "2012-11-22T00:00:00"
            }, {
                "y": 7,
                "x": "2012-11-23T00:00:00"
            }, {
                "y": 18,
                "x": "2012-11-24T00:00:00"
            }, {
                "y": 8,
                "x": "2012-11-25T00:00:00"
            }]
        }],
        "type": "line-dotted",
        "yScale": "linear"
    }, {
        "xScale": "ordinal",
        "comp": [],
        "main": [{
            "className": ".main.l1",
            "data": [{
                "y": 12,
                "x": "2012-11-19T00:00:00"
            }, {
                "y": 18,
                "x": "2012-11-20T00:00:00"
            }, {
                "y": 8,
                "x": "2012-11-21T00:00:00"
            }, {
                "y": 7,
                "x": "2012-11-22T00:00:00"
            }, {
                "y": 6,
                "x": "2012-11-23T00:00:00"
            }, {
                "y": 12,
                "x": "2012-11-24T00:00:00"
            }, {
                "y": 8,
                "x": "2012-11-25T00:00:00"
            }]
        }, {
            "className": ".main.l2",
            "data": [{
                "y": 29,
                "x": "2012-11-19T00:00:00"
            }, {
                "y": 33,
                "x": "2012-11-20T00:00:00"
            }, {
                "y": 13,
                "x": "2012-11-21T00:00:00"
            }, {
                "y": 16,
                "x": "2012-11-22T00:00:00"
            }, {
                "y": 7,
                "x": "2012-11-23T00:00:00"
            }, {
                "y": 18,
                "x": "2012-11-24T00:00:00"
            }, {
                "y": 8,
                "x": "2012-11-25T00:00:00"
            }]
        }],
        "type": "cumulative",
        "yScale": "linear"
    }, {
        "xScale": "ordinal",
        "comp": [],
        "main": [{
            "className": ".main.l1",
            "data": [{
                "y": 12,
                "x": "2012-11-19T00:00:00"
            }, {
                "y": 18,
                "x": "2012-11-20T00:00:00"
            }, {
                "y": 8,
                "x": "2012-11-21T00:00:00"
            }, {
                "y": 7,
                "x": "2012-11-22T00:00:00"
            }, {
                "y": 6,
                "x": "2012-11-23T00:00:00"
            }, {
                "y": 12,
                "x": "2012-11-24T00:00:00"
            }, {
                "y": 8,
                "x": "2012-11-25T00:00:00"
            }]
        }, {
            "className": ".main.l2",
            "data": [{
                "y": 29,
                "x": "2012-11-19T00:00:00"
            }, {
                "y": 33,
                "x": "2012-11-20T00:00:00"
            }, {
                "y": 13,
                "x": "2012-11-21T00:00:00"
            }, {
                "y": 16,
                "x": "2012-11-22T00:00:00"
            }, {
                "y": 7,
                "x": "2012-11-23T00:00:00"
            }, {
                "y": 18,
                "x": "2012-11-24T00:00:00"
            }, {
                "y": 8,
                "x": "2012-11-25T00:00:00"
            }]
        }],
        "type": "bar",
        "yScale": "linear"
    }],
        order = [0],
        i = 0,
        xFormat = d3.time.format('%A'),
        chart = new xChart('line-dotted', data[order[i]], '#dynamic-chart', {
            axisPaddingTop: 5,
            dataFormatX: function (x) {
                return new Date(x);
            },
            tickFormatX: function (x) {
                return xFormat(x);
            },
            timing: 1250
        }),
        rotateTimer,
        toggles = d3.selectAll('.sales-chart-toggles li'),
        t = 3500;

    function updateChart(i) {
        var d = data[i];
        chart.setData(d);
        toggles.classed('toggled', function () {
            if ($(this).child)
                return (d3.select($(this).child).attr('data-type') === d.type);
        });
        return d;
    }

    toggles.on('click', function (d, i) {
        clearTimeout(rotateTimer);
        $('.sales-chart-toggles li').removeClass('active');
        $(this).addClass('active');
        updateChart(i);
    });

    function rotateChart() {
        i += 1;
        i = (i >= order.length) ? 0 : i;
        var d = updateChart(order[i]);
        rotateTimer = setTimeout(rotateChart, t);
    }
    rotateTimer = setTimeout(rotateChart, t);
}());
//End Dynamic Sales Chart

//Todo List 
$(document).ready(function () {
    "use strict";

    function todoDelete() {
        $('#todo-list .todo-list li .tools .delete').on('click', function (e) {
            e.preventDefault();
            var item = $(this).parent().parent();
            item.addClass('slideOutRight').addClass('animated').delay(400).queue(function (next) {
                $(this).remove();
                next();
            });
        });
    }

    $('#todo-list .todo-list').slimScroll({
        height: 340
    });

    $('#todo-list .todo-list li input[type=checkbox]').each(function (num, ele) {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });

    $('#todo-list .todo-list li input[type=checkbox]').on('click', function (e) {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });

    todoDelete();

    $('#todo-list .todo-form').submit(function (e) {
        e.preventDefault();
        var input = $('#todo-list .todo-form input'),
            todoList = '';
        if (input.val() !== '') {
            todoList = $('#todo-list .todo-list');
            todoList.append('<li class="border-left-blue animated slideInLeft">' +
                            '<input type="checkbox">' +
                            '<label class="text">' + input.val() + '</label>' +
                            '<div class="tools">' +
                            '<i class="fa fa-trash-o delete"></i>' +
                            '</div>' +
                            '</li>');
        }
        input.val('');
        todoDelete();
        return false;
    });
});
//End Todo List

//CLNDR Calendar 
var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();
$('#mini-clndr').clndr({
    template: $('#mini-clndr-template').html(),
    events: [
        {
            date: new Date(y, m - 1, 3),
            title: 'Business Meeting',
            location: 'Conference Room A2'
        },
        {
            date: new Date(y, m - 1, 16),
            title: 'Client Meeting',
            location: 'Conference Room B3'
        },
        {
            date: new Date(y, m - 1, 18),
            title: 'Project X Photo Session',
            location: 'Linians Beach'
        },
        {
            date: new Date(y, m - 1, 22),
            title: 'Business Meeting',
            location: 'Conference Room B3'
        },
        {
            date: new Date(y, m - 1, 23),
            title: 'Team Meeting',
            location: 'Compnay Game Room'
        },
        {
            date: new Date(y, m, 2),
            title: 'Business Meeting',
            location: 'Conference Room A2'
        },
        {
            date: new Date(y, m, 5),
            title: 'Business Meeting',
            location: 'Room 23C'
        },
        {
            date: new Date(y, m, 8),
            title: 'Lunch Meeting',
            location: 'Jerrys BBQ Wings'
        },
        {
            date: new Date(y, m, 12),
            title: 'Client Meeting',
            location: 'Room 12B'
        },
        {
            date: new Date(y, m, 16),
            title: 'Business Meeting',
            location: 'Conference Room B3'
        },
        {
            date: new Date(y, m, 18),
            title: 'Executive Meeting',
            location: 'Conference Room A1'
        },
        {
            date: new Date(y, m, 27),
            title: 'Business Meeting',
            location: 'Conference Room A2'
        },
        {
            date: new Date(y, m + 1, 3),
            title: 'Sales Presentation',
            location: 'Conference Room B1'
        },
        {
            date: new Date(y, m + 1, 16),
            title: 'Client Meeting',
            location: 'Room 11B'
        },
        {
            date: new Date(y, m + 1, 18),
            title: 'Business Meeting',
            location: 'Room 22B'
        },
        {
            date: new Date(y, m + 1, 22),
            title: 'Investors Meeting',
            location: 'Conference Room A2'
        },
        {
            date: new Date(y, m + 1, 23),
            title: 'Client Meeting',
            location: 'LAB B12'
        }
    ],
    clickEvents: {
        click: function (target) {
            "use strict";

            function closeEvents() {
                $('#mini-clndr').find('.clndr').toggleClass('show-events', false);
            }
            
            if (target.events.length) {
                $('#mini-clndr .clndr').toggleClass('show-events', true);
            }
            $('#mini-clndr .x-button').click(function () {
                closeEvents();
            });
            $('#mini-clndr .clndr-previous-button').click(function () {
                closeEvents();
            });
            $('#mini-clndr .clndr-next-button').click(function () {
                closeEvents();
            });
        }
    },
    adjacentDaysChangeMonth: true
});
//End CLNDR Calendar