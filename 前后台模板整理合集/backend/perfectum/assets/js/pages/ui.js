$(document).ready(function(){
	
	/* ---------- Circle Progess Bars ---------- */
	var divElement = $('div'); //log all div elements
	
	if ($.browser.msie  && parseInt($.browser.version, 10) === 8) {
		
	} else {
		
		$(".greenCircle").knob({
	        'min':0,
	        'max':100,
	        'readOnly': true,
	        'width': 120,
	        'height': 120,
	        'fgColor': '#b9e672',
	        'dynamicDraw': true,
	        'thickness': 0.2,
	        'tickColorizeValues': true,
			'skin':'tron'
	    });

	    $(".orangeCircle").knob({
	        'min':0,
	        'max':100,
	        'readOnly': true,
	        'width': 120,
	        'height': 120,
	        'fgColor': '#FA5833',
	        'dynamicDraw': true,
	        'thickness': 0.2,
	        'tickColorizeValues': true,
			'skin':'tron'
	    });

		$(".lightOrangeCircle").knob({
	        'min':0,
	        'max':100,
	        'readOnly': true,
	        'width': 120,
	        'height': 120,
	        'fgColor': '#f4a70c',
	        'dynamicDraw': true,
	        'thickness': 0.2,
	        'tickColorizeValues': true,
			'skin':'tron'
	    });

	    $(".blueCircle").knob({
	        'min':0,
	        'max':100,
	        'readOnly': true,
	        'width': 120,
	        'height': 120,
	        'fgColor': '#2FABE9',
	        'dynamicDraw': true,
	        'thickness': 0.2,
	        'tickColorizeValues': true,
			'skin':'tron'
	    });

		$(".yellowCircle").knob({
	        'min':0,
	        'max':100,
	        'readOnly': true,
	        'width': 120,
	        'height': 120,
	        'fgColor': '#e7e572',
	        'dynamicDraw': true,
	        'thickness': 0.2,
	        'tickColorizeValues': true,
			'skin':'tron'
	    });

		$(".pinkCircle").knob({
	        'min':0,
	        'max':100,
	        'readOnly': true,
	        'width': 120,
	        'height': 120,
	        'fgColor': '#e42b75',
	        'dynamicDraw': true,
	        'thickness': 0.2,
	        'tickColorizeValues': true,
			'skin':'tron'
	    });
	}
	
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

	$( "#sliderVertical-1" ).slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 60,
	});

	$( "#sliderVertical-2" ).slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 40,
	});

	$( "#sliderVertical-3" ).slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 30,
	});

	$( "#sliderVertical-4" ).slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 15,
	});

	$( "#sliderVertical-5" ).slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 40,
	});

	$( "#sliderVertical-6" ).slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 80,
	});
	
	$( "#sliderVertical-7" ).slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 60,
	});

	$( "#sliderVertical-8" ).slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 40,
	});

	$( "#sliderVertical-9" ).slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 30,
	});

	$( "#sliderVertical-10" ).slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 15,
	});

	$( "#sliderVertical-11" ).slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 40,
	});

	$( "#sliderVertical-12" ).slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 80,
	});
	
	/* ---------- Skill Bars ---------- */	
	$(".meter > span").each(function() {
		$(this)
		.data("origWidth", $(this).width())
		.width(0)
		.animate({
			width: $(this).data("origWidth")
		}, 3000);
	});
	
	/* ---------- Notifications ---------- */
	$('.noty').click(function(e){
		e.preventDefault();
		var options = $.parseJSON($(this).attr('data-noty-options'));
		noty(options);
	});
	
	/* ---------- Growl Like Notifications ---------- */
	$('#add-sticky').click(function(){

		var unique_id = $.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is a sticky notice!',
			// (string | mandatory) the text inside the notification
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
			// (string | optional) the image to display on the left
			image: 'assets/img/avatar.jpg',
			// (bool | optional) if you want it to fade out on its own or just sit there
			sticky: true,
			// (int | optional) the time you want it to be alive for before fading out
			time: '',
			// (string | optional) the class name you want to apply to that specific message
			class_name: 'my-sticky-class'
		});

		return false;

	});

	$('#add-regular').click(function(){

		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is a regular notice!',
			// (string | mandatory) the text inside the notification
			text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
			// (string | optional) the image to display on the left
			image: 'assets/img/avatar.jpg',
			// (bool | optional) if you want it to fade out on its own or just sit there
			sticky: false,
			// (int | optional) the time you want it to be alive for before fading out
			time: ''
		});

		return false;

	});

    $('#add-max').click(function(){

        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a notice with a max of 3 on screen at one time!',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            // (string | optional) the image to display on the left
            image: 'assets/img/avatar.jpg',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: false,
            // (function) before the gritter notice is opened
            before_open: function(){
                if($('.gritter-item-wrapper').length == 3)
                {
                    // Returning false prevents a new gritter from opening
                    return false;
                }
            }
        });

        return false;

    });

	$('#add-without-image').click(function(){

		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is a notice without an image!',
			// (string | mandatory) the text inside the notification
			text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.'
		});

		return false;
	});

    $('#add-gritter-light').click(function(){

        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a light notification',
            // (string | mandatory) the text inside the notification
            text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
            class_name: 'gritter-light'
        });

        return false;
    });

	$('#add-with-callbacks').click(function(){

		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is a notice with callbacks!',
			// (string | mandatory) the text inside the notification
			text: 'The callback is...',
			// (function | optional) function called before it opens
			before_open: function(){
				alert('I am called before it opens');
			},
			// (function | optional) function called after it opens
			after_open: function(e){
				alert("I am called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
			},
			// (function | optional) function called before it closes
			before_close: function(e, manual_close){
                var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
				alert("I am called before it closes: I am passed the jQuery object for the Gritter element... \n" + manually);
			},
			// (function | optional) function called after it closes
			after_close: function(e, manual_close){
                var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
				alert('I am called after it closes. ' + manually);
			}
		});

		return false;
	});

	$('#add-sticky-with-callbacks').click(function(){

		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is a sticky notice with callbacks!',
			// (string | mandatory) the text inside the notification
			text: 'Sticky sticky notice.. sticky sticky notice...',
			// Stickeh!
			sticky: true,
			// (function | optional) function called before it opens
			before_open: function(){
				alert('I am a sticky called before it opens');
			},
			// (function | optional) function called after it opens
			after_open: function(e){
				alert("I am a sticky called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
			},
			// (function | optional) function called before it closes
			before_close: function(e){
				alert("I am a sticky called before it closes: I am passed the jQuery object for the Gritter element... \n" + e);
			},
			// (function | optional) function called after it closes
			after_close: function(){
				alert('I am a sticky called after it closes');
			}
		});

		return false;

	});

	$("#remove-all").click(function(){

		$.gritter.removeAll();
		return false;

	});

	$("#remove-all-with-callbacks").click(function(){

		$.gritter.removeAll({
			before_close: function(e){
				alert("I am called before all notifications are closed.  I am passed the jQuery object containing all  of Gritter notifications.\n" + e);
			},
			after_close: function(){
				alert('I am called after everything has been closed.');
			}
		});
		return false;

	});
	
	/* ---------- Tabs ---------- */
	$('#myTab a:first').tab('show');
	$('#myTab a').click(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	});			
});