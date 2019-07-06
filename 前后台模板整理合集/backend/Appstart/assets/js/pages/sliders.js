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

	//-------------Bootstrap Sliders -------------//
	//Basic slider
	$('#basic-slider').slider({
		min: 1,
		max: 100,
		step: 1,
		value: 50,
		formater: function(value) {
			return value;
		}
	});
	$("#basic-slider").on('slide', function(slideEvt) {
		$("#slider1val").text(slideEvt.value);
	});

	//custom step slider
	$('#step-slider').slider({
		min: 1,
		max: 100,
		step: 25,
		value: 25,
		formater: function(value) {
			return value;
		}
	});
	$("#step-slider").on('slide', function(slideEvt) {
		$("#slider2val").text(slideEvt.value);
	});

	//range slider
	$('#range-slider').slider({
		min: 1,
		max: 1000,
		step: 1,
		value: [100,500],
		formater: function(value) {
			return value;
		}
	});
	$("#range-slider").on('slide', function(slideEvt) {
		$("#slider3val").text(slideEvt.value);
	});

	//vertical slider
	$('#vertical-slider').slider({
		orientation: 'vertical',
		reversed: true,
		selection: 'after',
		min: 1,
		max: 10,
		step: 1,
		value: 5,
		formater: function(value) {
			return value;
		}
	});
	$("#vertical-slider").on('slide', function(slideEvt) {
		$("#slider4val").text(slideEvt.value);
	});

	//------------- Jquery slider -------------//
	//Basic sliders
	$("#slider").slider({
		range: 'min',
		max: 200,
		value: 60
	});

	//Primary color slider
	$("#slider-primary").slider({
		range: 'min',
		max: 200,
		value: 70
	});

	//Info color slider
	$("#slider-info").slider({
		range: 'min',
		max: 200,
		value: 80
	});

	//success color slider
	$("#slider-success").slider({
		range: 'min',
		max: 200,
		value: 90
	});

	//Danger color slider
	$("#slider-danger").slider({
		range: 'min',
		max: 200,
		value: 100
	});

	//Dark color slider
	$("#slider-dark").slider({
		range: 'min',
		max: 200,
		value: 110
	});

	//Purple color slider
	$("#slider-purple").slider({
		range: 'min',
		max: 200,
		value: 120
	});

	//Lime color slider
	$("#slider-lime").slider({
		range: 'min',
		max: 200,
		value: 130
	});

	//Yellow color slider
	$("#slider-yellow").slider({
		range: 'min',
		max: 200,
		value: 140
	});

	//Magenta color slider
	$("#slider-magenta").slider({
		range: 'min',
		max: 200,
		value: 150
	});

	//Pink color slider
	$("#slider-pink").slider({
		range: 'min',
		max: 200,
		value: 160
	});

	//Brown color slider
	$("#slider-brown").slider({
		range: 'min',
		max: 200,
		value: 170
	});

	//Range sliders
 	$("#slider-range").slider({
		range: true,
		max: 200,
		values: [40,160]
	});

	$("#slider-range-primary").slider({
		range: true,
		max: 200,
		values: [50,150]
	});

	$("#slider-range-info").slider({
		range: true,
		max: 200,
		values: [60,140]
	});

	$("#slider-range-danger").slider({
		range: true,
		max: 200,
		values: [70,130]
	});

	$("#slider-range-success").slider({
		range: true,
		max: 200,
		values: [80,140]
	});

	$("#slider-range-dark").slider({
		range: true,
		max: 200,
		values: [90,130]
	});

	$("#slider-range-purple").slider({
		range: true,
		max: 200,
		values: [100,120]
	});

	$("#slider-range-lime").slider({
		range: true,
		max: 200,
		values: [90,130]
	});

	$("#slider-range-yellow").slider({
		range: true,
		max: 200,
		values: [80,140]
	});

	$("#slider-range-magenta").slider({
		range: true,
		max: 200,
		values: [70,150]
	});

	$("#slider-range-pink").slider({
		range: true,
		max: 200,
		values: [60,160]
	});

	$("#slider-range-brown").slider({
		range: true,
		max: 200,
		values: [50,170]
	});

	//Min value sliders
	$("#slider-minval").slider({
		range: 'min',
		max: 200,
		value: 60
	});

	//Min value sliders
	$("#slider-maxval").slider({
		range: 'max',
		max: 200,
		value: 60
	});

	//Custom step slider
	$("#slider-step").slider({
		range: 'min',
		step: 10,
		max: 200,
		value: 60
	});

	//Show slider value
	$("#slider-show-val").slider({
		range: 'min',
		max: 200,
		value: 10,
		step: 10,
		slide: function( event, ui ) {
	        $("#sum").text( "$" + ui.value );
	    }
	});
	$("#sum").text( "$" + $("#slider-show-val").slider("value"));

	//Vertical slider
	$("#vertical-slider").slider({
		orientation: 'vertical',
		range: 'min',
		max: 200,
		value: 60
	});
	$("#vertical-slider1").slider({
		orientation: 'vertical',
		range: 'min',
		max: 200,
		value: 70
	});
	$("#vertical-slider2").slider({
		orientation: 'vertical',
		range: 'min',
		max: 200,
		value: 80
	});
	$("#vertical-slider3").slider({
		orientation: 'vertical',
		range: 'min',
		max: 200,
		value: 90
	});
	$("#vertical-slider4").slider({
		orientation: 'vertical',
		range: 'min',
		max: 200,
		value: 100
	});
	$("#vertical-slider5").slider({
		orientation: 'vertical',
		range: 'min',
		max: 200,
		value: 110
	});

	//Vertical range slider
	$("#vertical-range-slider").slider({
		orientation: 'vertical',
		range: true,
		max: 200,
		values: [1,200]
	});
	$("#vertical-range-slider1").slider({
		orientation: 'vertical',
		range: true,
		max: 200,
		values: [10,190]
	});
	$("#vertical-range-slider2").slider({
		orientation: 'vertical',
		range: true,
		max: 200,
		values: [20,180]
	});
	$("#vertical-range-slider3").slider({
		orientation: 'vertical',
		range: true,
		max: 200,
		values: [30,170]
	});
	$("#vertical-range-slider4").slider({
		orientation: 'vertical',
		range: true,
		max: 200,
		values: [40,160]
	});
	$("#vertical-range-slider5").slider({
		orientation: 'vertical',
		range: true,
		max: 200,
		values: [50,150]
	});
});