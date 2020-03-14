/*! main.js - v0.1.1
* http://admindesigns.com/
* Copyright (c) 2013 Admin Designs;*/

/* Core theme functions required for
 * most of the themes vital functionality */
var Ajax = function () {	

	// Global Variable used to check what evoked the window history state change
	userClicked =  false;
			
    // Ajax Page Loading
    var runPageload = function () {
								
		// This controls the settings and injection of the ajax loading spinner			
		function loadSpinner() {	
			// Only inject the spinner if the plugin has been loaded/exist	
			if (window.Spinner) {	
				// Ensures only one spinner is active at a time
				if (!$('#spinner').length) {$('body').append('<div id="spinner"></div>');}
								
				// Spinner settings
				var opts = {
				  lines: 11, // The number of lines to draw
				  length: 9, // The length of each line
				  width: 5, // The line thickness
				  radius: 12, // The radius of the inner circle
				  corners: 0.4, // Corner roundness (0..1)
				  color: '#a87fc6', // #rgb or #rrggbb or array of colors
				  className: 'spinner', // The CSS class to assign to the spinner
				  top: '45%', // Top position relative to parent
				  left: '55%' // Left position relative to parent
				};
				var target = document.getElementById('spinner');
				var spinner = new Spinner(opts).spin(target);
			}
		};
		
		// Ajax loading can often involve loading the same plugin multiple times(different pages, etc).
		// However some plugins can't be reinitilized on existing DOM elements or they will error. 
		// This function list those plugins and detaches their handlers on load so that their elements 
		// are free to be reattached to at a later time. You will most likely need to add to this
		function pluginUnload() {
	
			// List of plugins that require detachment
			var pluginList = ['.datepicker', '.rangepicker', '.colorpicker', '.rgbapicker', '.timepicker', '#graph'];
			
			// Cycle through each plugin and detach its handler
			$.each(pluginList, function(i, e) {
				if ($(e).length) {
				  $(e).detach();
				};
			});
		};
		
		// We Ajax load the requested content and then prepare the main container for its arrival. 
		var loadcontent = function(obj) {		
		  $.ajax({
			    // Adds a new body class, preps the content container, and adds a css animation
				beforeSend: function() {
				  $('#content_wrapper').addClass('animated animated-shortest fadeOut');
				  $('#defaultModal, #formModal, #alertModal').remove();
				  loadSpinner();  
				  // Strip body tag of old page title and apply new one
				  $('body').removeClass(obj.Old.slice(0, -5) + '-page').addClass(obj.Title + '-page'); 
				},
				url: "ajax/" + obj.New,
				cache:true,
				// On Success detach various handlers from DOM to prevent plugin errors
				success: function(data) {
				   pluginUnload();
				   $('#content_wrapper').html(data);
				},
				// On Complete remove css animations, and reset the userclicked variable
				complete: function() {
				   userClicked =  false;
				   $('#content_wrapper').removeClass('fadeOut').addClass('fadeInUp');	
				   $('#spinner').empty();

				   setTimeout(function() {
				       $('#content_wrapper').removeClass('animated animated-shortest fadeInUp');	
				   },1000);
		
				// Instead of a timeout(above) you can also detect the css animations ending. However this isn't supported in all browers(but most)
				// $('#content_wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				//	  $('#content_wrapper').removeClass('animated animated-shortest fadeInUp fadeOut');
				// });
				}	  
		  });
		};
		
		jQuery.ajaxSetup({cache:true});

		var prepLoad = function(e, newURL, oldURL) {	
								
			// Check for scenarios where we might want to prevent an ajax load
			if ($(e.currentTarget).hasClass('accordion-toggle')) {return;} // We prevent load when user clicks a dropdown link
			if ($('#ajax-option').length && !$('#ajax-option').prop('checked')) {return;} // We prevent load if the ajax option checkbox is unchecked
			if ($(e.currentTarget).hasClass('ajax-disable')) {return;} // Manually disable links via html class. Used on large docs
		
			// Disable state change to prevent page refresh
			e.preventDefault();

			var urlObj = {};
			var oldURL;
			var pageTitle = newURL.slice(0, -5);

			// if oldURL equals newURL we prevent load. This prevents the
			// user from spam clicking and envoking duplicate page loads)
			if (newURL === oldURL && userClicked === true) { return; }

			// Push URL related data to urlObj, we send this to the ajax event
			urlObj['Old'] = oldURL;
			urlObj['New'] = newURL;
			urlObj['Title'] = pageTitle;
						
			// Use URL to find and remove the old active menu item
			$('a[href="'+oldURL+'"]').parent('li').removeClass('active');	
		
			// Apply the ".active" class to the clicked menu item
			$(e.currentTarget).parent('li').addClass('active')

		    loadcontent(urlObj); 
		};

		// Attach handler to intercept menu item events - Left Sidebar, Left User Menu, Right User Menu 
		$('.sidebar-menu li a, .user-menu a, .sidebar_right_menu a').on('click', function(e) {
			var oldURL = window.location.pathname.split('/').pop();
			var newURL = $(e.currentTarget).attr('href');
			window.history.pushState({path:newURL},'',newURL);
			userClicked =  true;
			prepLoad(e, newURL, oldURL);
		});		

		// We check on history change for user menu click. If none exists the change
		// was evoked via back/forward browser button. Feed existing url and replace state
		window.onpopstate = function(e) {
			if (userClicked === true) { return; }
			var newURL = window.location.pathname.split('/').pop();
			window.history.replaceState({path:newURL},'',newURL);
			prepLoad(e, newURL, newURL);
		};

    }
	return {
        init: function () {
            runPageload();
        }
	} 
}();


