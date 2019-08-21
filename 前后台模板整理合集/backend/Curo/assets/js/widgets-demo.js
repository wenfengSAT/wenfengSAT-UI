/*global $, Skycons */
$(document).ready(function () {
    "use strict";

    //Todo List 
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
    //End Todo List

    //Fitvids Responsive Video
    $(".post-video").fitVids();
    //End Fitvids Responsive Video

    //Skyicons
    var skycons = new Skycons({
        "color": "white"
    });

    // you can add a canvas by it's ID...
    skycons.add("weatherSlide1", Skycons.PARTLY_CLOUDY_DAY);
    skycons.add("weatherSlide2", Skycons.RAIN);
    skycons.add("weatherSlide3", Skycons.PARTLY_CLOUDY_NIGHT);
    skycons.add("weatherSlide4", Skycons.PARTLY_CLOUDY_DAY);
    skycons.add("weatherSlide5", Skycons.RAIN);
    skycons.add("weatherSlide6", Skycons.PARTLY_CLOUDY_NIGHT);
    skycons.add("weatherToday", Skycons.PARTLY_CLOUDY_DAY);
    skycons.add("weatherToday2", Skycons.PARTLY_CLOUDY_DAY);
    skycons.add("weatherDay1", Skycons.RAIN);
    skycons.add("weatherDay2", Skycons.PARTLY_CLOUDY_NIGHT);
    skycons.add("weatherDay3", Skycons.SNOW);
    skycons.add("weatherDay4", Skycons.RAIN);
    skycons.add("weatherDay5", Skycons.PARTLY_CLOUDY_NIGHT);
    skycons.add("weatherDay6", Skycons.SNOW);
    // if you're using the Forecast API, you can also supply
    // strings: "partly-cloudy-day" or "rain".

    skycons.play();
    //End Skycons

    //Weather Slider Owl Carousel
    $(".weather-carousel").owlCarousel({
        items: 1,
        autoPlay: true,
        pagination: true
    });
    //ENd Weather Slider Owl Carousel
});