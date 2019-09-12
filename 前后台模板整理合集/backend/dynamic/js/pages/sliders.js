//------------- sliders.js -------------//
$(document).ready(function() {

	//------------- Sparklines in header stats -------------//
	$('#spark-visitors').sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11,6,13,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-templateviews').sparkline([12,11,6,13,8,5,8,10,12,11,6,13,8,5,8,10,12,11,6,13,8,5,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-sales').sparkline([19,18,20,17,20,18,22,24,23,19,18,20,17,20,18,22,24,23,19,18,20,17], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	//------------- Bootstrap slider -------------//
	//Basic sliders
	$("#slider").bootstrapSlider({
		min: 0,
		max: 200,
		value: 60
	});

	//Primary color slider
	$("#slider-primary").bootstrapSlider({
		id: 'slider-primary',
		min:0,
		max: 200,
		value: 70
	});

	//info color slider
	$("#slider-info").bootstrapSlider({
		id: 'slider-info',
		min:0,
		max: 200,
		value: 80
	});

	//success color slider
	$("#slider-success").bootstrapSlider({
		id: 'slider-success',
		min:0,
		max: 200,
		value: 90
	});

	//danger color slider
	$("#slider-danger").bootstrapSlider({
		id: 'slider-danger',
		min:0,
		max: 200,
		value: 100
	});

	//warning color slider
	$("#slider-warning").bootstrapSlider({
		id: 'slider-warning',
		min:0,
		max: 200,
		value: 110
	});

	//range sliders
	$("#slider-range").bootstrapSlider({
		range: true,
		min: 0,
		max: 200,
		value: [40,160]
	});	

	$("#slider-range-primary").bootstrapSlider({
		id: 'slider-primary',
		range: true,
		min: 0,
		max: 200,
		value: [50,150]
	});	

	$("#slider-range-info").bootstrapSlider({
		id: 'slider-info',
		range: true,
		min: 0,
		max: 200,
		value: [60,140]
	});

	$("#slider-range-danger").bootstrapSlider({
		id: 'slider-danger',
		range: true,
		min: 0,
		max: 200,
		value: [70,130]
	});

	$("#slider-range-success").bootstrapSlider({
		id: 'slider-success',
		range: true,
		min: 0,
		max: 200,
		value: [80,120]
	});

	$("#slider-range-warning").bootstrapSlider({
		id: 'slider-warning',
		range: true,
		min: 0,
		max: 200,
		value: [90,110]
	});

	//Min value sliders
	$("#slider-minval").bootstrapSlider({
		min: 100,
		max: 200,
		value: 150
	});

	//Max value 100
	$("#slider-maxval").bootstrapSlider({
		min: 0,
		max: 100,
		value: 60
	});

	//custom step
	$("#slider-step").bootstrapSlider({
		id: 'slider-success',
		step: 10,
		max: 200,
		value: 60
	});

	$("#slider-show-val").bootstrapSlider({
		id: 'slider-danger',
		max: 200,
		value: 10,
		step: 10
	});
	$("#slider-show-val").on("slide", function(slideEvt) {
		$("#sum").text('$ ' + slideEvt.value);
	});

	//Vertical slider
	$("#vertical-slider").bootstrapSlider({
		orientation: 'vertical',
		reversed : true,
		min: 0,
		max: 200,
		value: 60
	});
	$("#vertical-slider1").bootstrapSlider({
		id: 'slider-primary',
		orientation: 'vertical',
		reversed : true,
		min: 0,
		max: 200,
		value: 70
	});
	$("#vertical-slider2").bootstrapSlider({
		id: 'slider-info',
		orientation: 'vertical',
		reversed : true,
		min: 0,
		max: 200,
		value: 80
	});
	$("#vertical-slider3").bootstrapSlider({
		id: 'slider-danger',
		orientation: 'vertical',
		reversed : true,
		min: 0,
		max: 200,
		value: 90
	});
	$("#vertical-slider4").bootstrapSlider({
		id: 'slider-success',
		orientation: 'vertical',
		reversed : true,
		min: 0,
		max: 200,
		value: 100
	});
	$("#vertical-slider5").bootstrapSlider({
		id: 'slider-warning',
		orientation: 'vertical',
		reversed : true,
		min: 0,
		max: 200,
		value: 110
	});

	//Vertical range slider
	$("#vertical-range-slider").bootstrapSlider({
		orientation: 'vertical',
		range: true,
		min: 0,
		max: 200,
		value: [40,160]
	});

	$("#vertical-range-slider1").bootstrapSlider({
		id: 'slider-primary',
		orientation: 'vertical',
		range: true,
		min: 0,
		max: 200,
		value: [50,150]
	});

	$("#vertical-range-slider2").bootstrapSlider({
		id: 'slider-info',
		orientation: 'vertical',
		range: true,
		min: 0,
		max: 200,
		value: [60,140]
	});

	$("#vertical-range-slider3").bootstrapSlider({
		id: 'slider-danger',
		orientation: 'vertical',
		range: true,
		min: 0,
		max: 200,
		value: [70,130]
	});

	$("#vertical-range-slider4").bootstrapSlider({
		id: 'slider-success',
		orientation: 'vertical',
		range: true,
		min: 0,
		max: 200,
		value: [80,120]
	});

	$("#vertical-range-slider5").bootstrapSlider({
		id: 'slider-warning',
		orientation: 'vertical',
		range: true,
		min: 0,
		max: 200,
		value: [90,110]
	});

});