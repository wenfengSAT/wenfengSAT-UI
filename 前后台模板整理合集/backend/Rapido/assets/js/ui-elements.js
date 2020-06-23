var UIElements = function() {
	"use strict";
	//function to initiate bootstrap-paginator
	var runPaginator = function() {
		if ($.fn.bootstrapPaginator) {
			$('#paginator-example-1').bootstrapPaginator({
				bootstrapMajorVersion : 3,
				currentPage : 3,
				totalPages : 10,
				onPageClicked : function(e, originalEvent, type, page) {
					$('#paginator-content-1').text("Page item clicked, type: " + type + " page: " + page);
				}
			});
			$('#paginator-example-2').bootstrapPaginator({
				bootstrapMajorVersion : 3,
				currentPage : 3,
				totalPages : 10,
				onPageChanged : function(e, oldPage, newPage) {
					$('#paginator-content-2').text("Current page changed, old: " + oldPage + " new: " + newPage);
				}
			});
			$('#paginator-changed-select').change(function() {
				var page = $(this).val();
				$('#paginator-example-2').bootstrapPaginator("show", page);
			});
		}
	};
	//function to initiate jQuery.pulsate
	var runPulsate = function() {
		if ($.fn.pulsate) {
			$('#pulsate-regular').pulsate({
				color : '#C43C35', // set the color of the pulse
				reach : 20, // how far the pulse goes in px
				speed : 1000, // how long one pulse takes in ms
				pause : 0, // how long the pause between pulses is in ms
				glow : true, // if the glow should be shown too
				repeat : true, // will repeat forever if true, if given a number will repeat for that many times
				onHover : false // if true only pulsate if user hovers over the element
			});
		}
	};
	//function to initiate jquery.gritter
	var runGritterNotification = function() {
		if ($.fn.gritter) {
			$.extend($.gritter.options, {
				class_name : 'gritter-light', // for light notifications (can be added directly to $.gritter.add too)
				position : 'top-right', // possibilities: bottom-left, bottom-right, top-left, top-right
				fade_in_speed : 100, // how fast notifications fade in (string or int)
				fade_out_speed : 100, // how fast the notices fade out
				time : 3000 // hang on the screen for...
			});
			$('#add-sticky').click(function() {
				var unique_id = $.gritter.add({
					// (string | mandatory) the heading of the notification
					title : 'This is a sticky notice!',
					// (string | mandatory) the text inside the notification
					text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
					// (string | optional) the image to display on the left
					image : 'assets/images/avatar-1.jpg',
					// (bool | optional) if you want it to fade out on its own or just sit there
					sticky : true,
					// (int | optional) the time you want it to be alive for before fading out
					time : '',
					// (string | optional) the class name you want to apply to that specific message
					class_name : 'my-sticky-class'
				});
				// You can have it return a unique id, this can be used to manually remove it later using
				/*
				 setTimeout(function(){
				 $.gritter.remove(unique_id, {
				 fade: true,
				 speed: 'slow'
				 });
				 }, 6000)
				 */
				return false;
			});
			$('#add-regular').click(function() {
				$.gritter.add({
					// (string | mandatory) the heading of the notification
					title : 'This is a regular notice!',
					// (string | mandatory) the text inside the notification
					text : 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
					// (string | optional) the image to display on the left
					image : 'assets/images/avatar-2.jpg',
					// (bool | optional) if you want it to fade out on its own or just sit there
					sticky : false,
					// (int | optional) the time you want it to be alive for before fading out
					time : ''
				});
				return false;
			});
			$('#add-max').click(function() {
				$.gritter.add({
					// (string | mandatory) the heading of the notification
					title : 'This is a notice with a max of 3 on screen at one time!',
					// (string | mandatory) the text inside the notification
					text : 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
					// (string | optional) the image to display on the left
					image : 'http://a0.twimg.com/profile_images/59268975/jquery_avatar_bigger.png',
					// (bool | optional) if you want it to fade out on its own or just sit there
					sticky : false,
					// (function) before the gritter notice is opened
					before_open : function() {
						if ($('.gritter-item-wrapper').length == 3) {
							// Returning false prevents a new gritter from opening
							return false;
						}
					}
				});
				return false;

			});
			$('#add-without-image').click(function() {
				$.gritter.add({
					// (string | mandatory) the heading of the notification
					title : 'This is a notice without an image!',
					// (string | mandatory) the text inside the notification
					text : 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.'
				});
				return false;
			});
			$('#add-gritter-light').click(function() {
				$.gritter.add({
					// (string | mandatory) the heading of the notification
					title : 'This is a light notification',
					// (string | mandatory) the text inside the notification
					text : 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
					class_name : 'gritter-light'
				});
				return false;
			});
			$('#add-with-callbacks').click(function() {
				$.gritter.add({
					// (string | mandatory) the heading of the notification
					title : 'This is a notice with callbacks!',
					// (string | mandatory) the text inside the notification
					text : 'The callback is...',
					// (function | optional) function called before it opens
					before_open : function() {
						alert('I am called before it opens');
					},
					// (function | optional) function called after it opens
					after_open : function(e) {
						alert("I am called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
					},
					// (function | optional) function called before it closes
					before_close : function(e, manual_close) {
						var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
						alert("I am called before it closes: I am passed the jQuery object for the Gritter element... \n" + manually);
					},
					// (function | optional) function called after it closes
					after_close : function(e, manual_close) {
						var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
						alert('I am called after it closes. ' + manually);
					}
				});
				return false;
			});
			$('#add-sticky-with-callbacks').click(function() {
				$.gritter.add({
					// (string | mandatory) the heading of the notification
					title : 'This is a sticky notice with callbacks!',
					// (string | mandatory) the text inside the notification
					text : 'Sticky sticky notice.. sticky sticky notice...',
					// Stickeh!
					sticky : true,
					// (function | optional) function called before it opens
					before_open : function() {
						alert('I am a sticky called before it opens');
					},
					// (function | optional) function called after it opens
					after_open : function(e) {
						alert("I am a sticky called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
					},
					// (function | optional) function called before it closes
					before_close : function(e) {
						alert("I am a sticky called before it closes: I am passed the jQuery object for the Gritter element... \n" + e);
					},
					// (function | optional) function called after it closes
					after_close : function() {
						alert('I am a sticky called after it closes');
					}
				});
				return false;
			});
			$("#remove-all").click(function() {
				$.gritter.removeAll();
				return false;
			});
			$("#remove-all-with-callbacks").click(function() {
				$.gritter.removeAll({
					before_close : function(e) {
						alert("I am called before all notifications are closed.  I am passed the jQuery object containing all  of Gritter notifications.\n" + e);
					},
					after_close : function() {
						alert('I am called after everything has been closed.');
					}
				});
				return false;
			});
		}
	};
	return {
		//main function to initiate template pages
		init : function() {
			runPaginator();
			runPulsate();
			runGritterNotification();
		}
	};
}(); 