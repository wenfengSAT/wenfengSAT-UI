$(document).ready(function(){
	
	/* ---------- Progress  ---------- */
	$(".simpleProgress").progressbar({
		value: 89
	});

	$(".progressAnimate").progressbar({
		value: 1,
		create: function() {
			$(".progressAnimate .ui-progressbar-value").animate({"width":"100%"},{
				duration: 10000,
				step: function(now){
					$(".progressAnimateValue").html(parseInt(now)+"%");
				},
				easing: "linear"
			})
		}
	});

	$(".progressUploadAnimate").progressbar({
		value: 1,
		create: function() {
			$(".progressUploadAnimate .ui-progressbar-value").animate({"width":"100%"},{
				duration: 20000,
				easing: 'linear',
				step: function(now){
					$(".progressUploadAnimateValue").html(parseInt(now*40.96)+" Gb");
				},
				complete: function(){
					$(".progressUploadAnimate + .field_notice").html("<span class='must'>Upload Finished</span>");
				} 
			})
		}
	});

	if($(".progressBarValue")) {

		$(".progressBarValue").each(function(){

			var endValueHTML = $(this).find(".progressCustomValueVal").html();

			var endValue = parseInt(endValueHTML);

			$(this).find(".progressCustomValue").progressbar({

				value: 1,
				create: function() {
					$(this).find(".ui-progressbar-value").animate({"width": endValue + "%"},{
						duration: 5000,
						step: function(now){

							$(this).parent().parent().parent().find(".progressCustomValueVal").html(parseInt(now)+"%");
						},
						easing: "linear"
					})
				}
			});

		});

	}	

	/* ---------- Custom Slider ---------- */
	$(".sliderSimple").slider();

	$(".sliderMin").slider({
		range: "min",
		value: 180,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			$( ".sliderMinLabel" ).html( "$" + ui.value );
		}
	});

	$(".sliderMin-1").slider({
		range: "min",
		value: 50,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			$( ".sliderMin1Label" ).html( "$" + ui.value );
		}
	});

	$(".sliderMin-2").slider({
		range: "min",
		value: 100,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			$( ".sliderMin2Label" ).html( "$" + ui.value );
		}
	});

	$(".sliderMin-3").slider({
		range: "min",
		value: 150,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			$( ".sliderMin3Label" ).html( "$" + ui.value );
		}
	});

	$(".sliderMin-4").slider({
		range: "min",
		value: 250,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			$( ".sliderMin4Label" ).html( "$" + ui.value );
		}
	});

	$(".sliderMin-5").slider({
		range: "min",
		value: 350,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			$( ".sliderLabel" ).html( "$" + ui.value );
		}
	});

	$(".sliderMin-6").slider({
		range: "min",
		value: 450,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			$( ".sliderLabel" ).html( "$" + ui.value );
		}
	});

	$(".sliderMin-7").slider({
		range: "min",
		value: 550,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			$( ".sliderLabel" ).html( "$" + ui.value );
		}
	});

	$(".sliderMin-8").slider({
		range: "min",
		value: 650,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			$( ".sliderLabel" ).html( "$" + ui.value );
		}
	});


	$(".sliderMax").slider({
		range: "max",
		value: 280,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			$( ".sliderMaxLabel" ).html( "$" + ui.value );
		}
	});

	$( ".sliderRange" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 192, 470 ],
		slide: function( event, ui ) {
			$( ".sliderRangeLabel" ).html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});

	$("#sliderVertical-1, #sliderVertical-1s").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 60,
	});

	$("#sliderVertical-2, #sliderVertical-2s").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 40,
	});

	$("#sliderVertical-3, #sliderVertical-3s").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 30,
	});

	$("#sliderVertical-4, #sliderVertical-4s").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 15,
	});

	$("#sliderVertical-5, #sliderVertical-5s").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 40,
	});

	$("#sliderVertical-6, #sliderVertical-6s").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 80,
	});

	$("#sliderVertical-7, #sliderVertical-7s").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 60,
	});

	$("#sliderVertical-8, #sliderVertical-8s").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 40,
	});

	$("#sliderVertical-9, #sliderVertical-9s").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 30,
	});

	$("#sliderVertical-10, #sliderVertical-10s").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 15,
	});

	$("#sliderVertical-11, #sliderVertical-11s").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 40,
	});

	$("#sliderVertical-12, #sliderVertical-12s").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 80,
	});
});