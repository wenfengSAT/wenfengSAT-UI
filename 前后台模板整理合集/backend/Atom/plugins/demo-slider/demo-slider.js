$(function() {

	$(".dial").knob(); // knob


	//jQuery UI Sliders 
	//------------------------
	$('#demoskylo').on('click',function(){
        $(document).skylo('start');

        setTimeout(function(){
            $(document).skylo('set',50);
        },1000);

        setTimeout(function(){
            $(document).skylo('end');
        },1500);
    });
    
    $('#setskylo').on('click',function(){
        $(document).skylo('show',function(){
            $(document).skylo('set',50);
        });
    });
    
    $('#getskylo').on('click',function(){
        alert($(document).skylo('get')+'%');
    });
    
    $('#inchskylo').on('click',function(){
        $(document).skylo('show',function(){
            $(document).skylo('inch',10);
        });
    });

    //jQuery UI Sliders 
    //------------------------

    $(".slider-basic").slider(); // basic sliders

    // snap inc
    $("#slider-snap-inc").slider({
        value: 100,
        min: 0,
        max: 1000,
        step: 100,
        slide: function (event, ui) {
            $("#slider-snap-inc-amount").text("$" + ui.value);
        }
    });

    $("#slider-snap-inc-amount").text("$" + $("#slider-snap-inc").slider("value"));

    // range slider
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#slider-range-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    $("#slider-range-amount").text("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

    //range max

    $("#slider-range-max").slider({
        range: "max",
        min: 1,
        max: 10,
        value: 2,
        slide: function (event, ui) {
            $("#slider-range-max-amount").text(ui.value);
        }
    });

    $("#slider-range-max-amount").text($("#slider-range-max").slider("value"));

    // range min
    $("#slider-range-min").slider({
        range: "min",
        value: 37,
        min: 1,
        max: 700,
        slide: function (event, ui) {
            $("#slider-range-min-amount").text("$" + ui.value);
        }
    });

    $("#slider-range-min-amount").text("$" + $("#slider-range-min").slider("value"));

    // setup graphic EQ
    $("#slider-eq > span").each(function () {
        // read initial values from markup and remove that
        var value = parseInt($(this).text(), 10);
        $(this).empty().slider({
            range: "min",
            min: 0,
            max: 100,
            value: value,
            orientation: "vertical"
        });
    });




    // vertical slider
    $("#slider-vertical").slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        value: 60,
        slide: function (event, ui) {
            $("#slider-vertical-amount").text(ui.value);
        }
    });
    $("#slider-vertical-amount").text($("#slider-vertical").slider("value"));

    // vertical range sliders
    $("#slider-range-vertical").slider({
        orientation: "vertical",
        range: true,
        values: [17, 67],
        slide: function (event, ui) {
            $("#slider-range-vertical-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    $("#slider-range-vertical-amount").text("$" + $("#slider-range-vertical").slider("values", 0) + " - $" + $("#slider-range-vertical").slider("values", 1));

    //Easy Pie Chart
    //------------------------

    try {
    //Easy Pie Chart
    $('.easypiechart#newvisits').easyPieChart({
        barColor: "#16a085",
        trackColor: '#edeef0',
        scaleColor: 'transparent',
        scaleLength: 5,
        lineCap: 'square',
        lineWidth: 2,
        size: 90,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.easypiechart#bouncerate').easyPieChart({
        barColor: "#7ccc2e",
        trackColor: '#edeef0',
        scaleColor: 'transparent',
        scaleLength: 5,
        lineCap: 'square',
        lineWidth: 2,
        size: 90,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.easypiechart#clickrate').easyPieChart({
        barColor: "#e84747",
        trackColor: '#edeef0',
        scaleColor: 'transparent',
        scaleLength: 5,
        lineCap: 'square',
        lineWidth: 2,
        size: 90,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    $('.easypiechart#covertionrate').easyPieChart({
        barColor: "#8e44ad",
        trackColor: '#edeef0',
        scaleColor: 'transparent',
        scaleLength: 5,
        lineCap: 'square',
        lineWidth: 2,
        size: 90,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });


    $('#updatePieCharts').on('click', function() {
        $('.easypiechart#newvisits').data('easyPieChart').update(Math.random()*100);
        $('.easypiechart#bouncerate').data('easyPieChart').update(Math.random()*100);
        $('.easypiechart#clickrate').data('easyPieChart').update(Math.random()*100);
        $('.easypiechart#covertionrate').data('easyPieChart').update(Math.random()*100);
        return false;
    });
    }
    catch(error) {}

});