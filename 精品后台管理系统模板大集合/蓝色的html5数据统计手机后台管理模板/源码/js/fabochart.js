(function ($) {


    var point = $("<div>").addClass("fabo-point");
    var point_inner = $("<div>").addClass("fabo-point-inner");
    var value = $("<div>").addClass("fabo-value").addClass("hide-border").addClass("hide");
    var value_text = $("<div class='fabo-value-text'></div>");
    var label_text = $("<div class='fabo-value-label'></div>");

    $.fn.faBoChart = function (options) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            data: {

            },
            animate : true,
            time : 2000,
            instantAnimate : true,
            straight : false,
            valueColor : "#002561",
            backgroundColor :"#ccc",
            valueTextColor : "#00C6D7",
            labelTextColor : "#00C6D7",
            gutter : "2px"
        }, options);


        point_inner.css("background-color", settings.backgroundColor);
        point.css("padding-left", settings.gutter);
        value.css({
            "border-right-color" : settings.valueColor,
            "border-left-color" : settings.valueColor
        });

        value_text.css("color", settings.valueTextColor);
        label_text.css("color", settings.labelTextColor);

        var straight = settings.straight;
        var instantAnimate = settings.instantAnimate;
        var data = settings.data;
        var count = objSize(data);
        var animate = settings.animate;
        var animation_time = settings.time;


        container = $(this);

        container.addClass("fabo-chart");
        container.data("straight", straight);

        //Set width of each point
        point.css("width", 100 / count + "%");

        var highest = 0;
        var keys = [];
        $.each(data, function (index, v) {
            keys.push(index);

            if (v > highest)
                highest = v;

        });

        $.each(keys, function (index, v) {
            var pi = point_inner.clone();
            var p = point.clone();

            var val = data[v];
            var next = data[keys[index + 1]];
            pi = $(pi).appendTo(p);
            p = $(p).appendTo(container);

            addValue(pi, val, next, v, highest, straight);
        });

        $( window ).resize(function(){
            reloadSizes();
        });

        //If animate
        if(animate)
            animateValues(container,animation_time, instantAnimate);
        else
            $(container).find(".fabo-value").removeClass("hide");

        return this;

    };


    function reloadSizes(){

        $(".fabo-chart").each(function(){
            var container = $(this);

            var pi = $(this).find(".fabo-point-inner:first");

            var width = Math.ceil(pi[0].getBoundingClientRect().width);

            console.log(width);

            if(!container.data("straight")) {
                $(container).find(".fabo-point-inner:not(.bigger-than) .fabo-value").css("border-left-width", width + "px");
                $(container).find(".fabo-point-inner.bigger-than .fabo-value").css("border-right-width", width + "px");
            }
            else{
                $(this).find(".fabo-value").css("border-right-width", width + "px");
            }


        })

    }

    function addValue(pi, val, next, label, highest, straight) {

        var v = value.clone();
        var width = Math.ceil(pi[0].getBoundingClientRect().width);

        label_text.clone().text(label).appendTo(pi);
        value_text.clone().text(val).appendTo(pi);


        if(!straight) {

            next = (typeof next == "undefined") ? val : next;
            var biggerThan = (next > val);

            var different = 0;
            if (!biggerThan)
                different = val - next;
            else
                different = next - val;

            var different = (different / highest);


            var innerHeight = Math.ceil(pi[0].getBoundingClientRect().height);

            //Set height
            if (biggerThan) {
                v.css("border-right-width", width + "px");
                var height = val * 100 / highest;
                var niveau = innerHeight * different;
                niveau = Math.ceil(niveau);
            }
            else {
                v.css("border-left-width", width + "px");
                var height = next * 100 / highest;
                var niveau = innerHeight * different;
                niveau = Math.ceil(niveau);
            }

            pi.data("biggerThan", biggerThan);
            if(biggerThan)
            pi.addClass("bigger-than");
            v.css("border-top-width", niveau + "px");
        }
        else{
            v.css("border-right-width", width + "px");
            var height = val * 100 / highest;
        }
        v.css("height", height + "%");

        v.appendTo(pi);

        return pi;
    }


    function animateValues(container,time, instantAnimate){
        var elm = $(container).find(".fabo-value");

        var timer = (time / elm.length);
        var origin_time = timer;

        if(!instantAnimate) {
            setTimeout(function () {
                elm.removeClass("hide-border");
            }, time + 200);
        }
        else{
            elm.removeClass("hide-border");
        }

        elm.each(function(){
            var v = $(this);

            setTimeout(function(){
                v.removeClass("hide");
            }, timer);

            timer += origin_time;
        });
    }
}(jQuery));


var objSize = function (obj) {
    var count = 0;

    if (typeof obj == "object") {

        if (Object.keys) {
            count = Object.keys(obj).length;
        } else if (window._) {
            count = _.keys(obj).length;
        } else if (window.$) {
            count = $.map(obj, function () {
                return 1;
            }).length;
        } else {
            for (var key in obj) if (obj.hasOwnProperty(key)) count++;
        }

    }

    return count;
};