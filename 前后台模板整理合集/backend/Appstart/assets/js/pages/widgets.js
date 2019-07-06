//------------- blank.js -------------//
$(document).ready(function() {

	//get object with colros from plugin and store it.
	var objColors = $('body').data('appStart').getColors();
	var colours = {
		white: objColors.white,
		dark: objColors.dark,
		red : objColors.red,
		blue: objColors.blue,
		green : objColors.green,
		yellow: objColors.yellow,
		brown: objColors.brown,
		orange : objColors.orange,
		purple : objColors.purple,
		pink : objColors.pink,
		lime : objColors.lime,
		magenta: objColors.magenta,
		teal: objColors.teal,
		textcolor: '#5a5e63',
		gray: objColors.gray
	}

	//------------- Weather icons -------------//
	var today = new Skycons({
		"color": colours.teal,
		"resizeClear": true
	});
	today.set("weather-now", "rain");
	today.play();
   	//set forecast icons too
   	var forecast = new Skycons({
		"color": colours.white,
		"resizeClear": true
	});
   	forecast.set("forecast-now", "rain");
   	forecast.set("forecast-day1", "partly-cloudy-day");
   	forecast.set("forecast-day2", "clear-day");
   	forecast.set("forecast-day3", "wind");
   	forecast.play();

   	//------------- Instagram widget carousel -------------//
	$('#instagram-widget').carousel({
		interval:   4000
	});

	//------------- Recent user widget scroll bar -------------//
   	//get the settings from plugin
	var scrollSettings = $('body').data('appStart').settings.customScroll;
	//init the slim scroll
	$('.scroll').slimScroll({
        position: "right",
        distance: '0px',
        railVisible: false,
        size: scrollSettings.size,                    
        color: colours.dark,                    
        railOpacity: scrollSettings.opacity,
        railColor: scrollSettings.railColor,
        height: '317px'
    });

    //------------- Autosize text area in chat widget -------------//
   	$('.elastic').autosize();

   	//------------- Todo basic functions -------------//
	$(function() {
		var todos = $('.todo-widget');
        var items = todos.find('.todo-task-item');
        var chboxes = items.find('input[type="checkbox"]');
        var close = items.find('.close');

        $(chboxes).on('ifChecked', function(event){
            $(this).closest('.todo-task-item').addClass('task-done');
        });

        $(chboxes).on('ifUnchecked', function(event){
            $(this).closest('.todo-task-item').removeClass('task-done');
        });

        close.click(function() {
            $(this).closest('.todo-task-item').fadeOut('500');
        });
	});

   	//------------- Add sortable function to todo -------------//
	$(function() {
	    $( "#today, #tomorrow" ).sortable({
	    	connectWith: ".todo-list",
	    	placeholder: 'placeholder',  
        	forcePlaceholderSize: true, 
	    }).disableSelection();
	});
 	
});