$(document).ready(function(){
	var $window = $(window);
	/*-----------------------------------------------------------------------------------*/
	/*	Parallax Effect
	/*-----------------------------------------------------------------------------------*/
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
             
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });	
	/*-----------------------------------------------------------------------------------*/
	/*	Header Responsive Images & Content
	/*-----------------------------------------------------------------------------------*/
	/* middleText(); */

	function middleText()
	{
		$('.hero-container').css({
			position:'absolute'
		});
		$('.hero-container').css({
			left: ($(window).width() - $('.hero-container').outerWidth())/2,
			top: ($(window).height() - $('.hero-container').outerHeight())/2,			
		});
	}
	/* On Resize show menu on desktop if hidden */
	jQuery(window).resize(function() {
		/* middleText(); */
	});
	/*-----------------------------------------------------------------------------------*/
	/*	Navigation
	/*-----------------------------------------------------------------------------------*/
	var animate='down';
	
	jQuery(window).bind('scroll', function () {
	
		/* Animation for Top Navigation */
		var scrollTop = jQuery(window).scrollTop();
		
		if (scrollTop > jQuery('#portfolio').offset().top-60 && animate == 'down') {
			animate='up';
			jQuery('#nav-bar').stop().animate({top:'0'}, 300);
		} else if(scrollTop < jQuery('#portfolio').offset().top-60 && animate == 'up'){
			animate='down';
			jQuery('#nav-bar').stop().animate({top:'-75px'}, 300);
		}
		
		/* Update Section on Top-Bar */
		jQuery('section').each(function(){
			if (scrollTop > jQuery(this).offset().top-60){
				var section = jQuery(this).attr('id');
				$("#top-navigation ul li").each(function(){
					if(section == jQuery(this).find('a').attr('href').replace("#","") && jQuery(this).not('.active')){
						$("#top-navigation ul li").removeClass('active');
						jQuery(this).addClass('active');
					}
				});
			}
		});
	});
	/*-----------------------------------------------------------------------------------*/
	/*	Features
	/*-----------------------------------------------------------------------------------*/
	$('.feature-1').waypoint(function(){
			$('.feature-1 .feature-img').addClass('animate');
			$('.feature-1 .feature-content').addClass('animate');
		}, {
			triggerOnce: true,
			offset: function(){
				return $(window).height() - $(this).outerHeight() + 200;
			}
		});
		
	$('.feature-2').waypoint(function(){
			$('.feature-2 .feature-img').addClass('animate');
			$('.feature-2 .feature-content').addClass('animate');
		}, {
			triggerOnce: true,
			offset: function(){
				return $(window).height() - $(this).outerHeight() + 200;
			}
		});
	/*-----------------------------------------------------------------------------------*/
	/*	Navmaster
	/*-----------------------------------------------------------------------------------*/	
	$('.heronav').onePageNav({
		filter: ':not(.external)',
		scrollOffset: 80
	});

	$('#fixed-top-navigation').onePageNav({
		filter: ':not(.external)',
		scrollOffset: 80
	});
	$('.showcase a[href*=#]:not([href=#])').click( function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 800);
			return false;
		  }
		}
	});
	/* $('#mobile-menu').onePageNav({
		filter: ':not(.external)',
		scrollOffset: 80
	}); */
	/*-----------------------------------------------------------------------------------*/
	/*	Isotope
	/*-----------------------------------------------------------------------------------*/	
	// cache container
	var $container = $('#filter-items');
	// initialize isotope after image loaded
	$container.imagesLoaded( function(){
		$container.isotope({
		  // options...
		});

		// filter items when filter link is clicked
		$('#filters a').click(function(){
		  var selector = $(this).attr('data-filter');
		  $container.isotope({ filter: selector });
		  $('#filters a').removeClass('active');
		  $(this).addClass('active');
		  return false;
		});
		// filter on smaller screens
		$("#e1").change(function(){
			var selector = $(this).find(":selected").val();
			 $container.isotope({ filter: selector });
			 return false;
		});
	});
	/*-----------------------------------------------------------------------------------*/
	/*	Handle Isotope Images 100%
	/*-----------------------------------------------------------------------------------*/
	function handleIsotopeStretch() {
		var width = $(window).width();
		if ( width < 768 ) {
			$('#filter-items .item').addClass('width-100');
		}
		else {
			$('#filter-items .item').removeClass('width-100');
		}
	}
	handleIsotopeStretch();
	/* On Resize show menu on desktop if hidden */
	jQuery(window).resize(function() {
		handleIsotopeStretch();
	});
	/*-----------------------------------------------------------------------------------*/
	/*	Handle Colorbox
	/*-----------------------------------------------------------------------------------*/
	function handleColorbox() {
		$('.colorbox-button').colorbox({rel:'colorbox-button',maxWidth:'95%', maxHeight:'95%'});
		/* Colorbox resize function */
		var resizeTimer;
		function resizeColorBox()
		{
			if (resizeTimer) clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
					var myWidth = 442, percentageWidth = .95;
					if (jQuery('#cboxOverlay').is(':visible')) {
						$.colorbox.resize({ width: ( $(window).width() > ( myWidth+20) )? myWidth : Math.round( $(window).width()*percentageWidth ) });
						$('.cboxPhoto').css( {
							width: $('#cboxLoadedContent').innerWidth(),
							height: 'auto'
						});
						$('#cboxLoadedContent').height( $('.cboxPhoto').height() );
						$.colorbox.resize();
					}
			}, 300)
		}

		// Resize Colorbox when resizing window or changing mobile device orientation
		jQuery(window).resize(resizeColorBox);
		window.addEventListener("orientationchange", resizeColorBox, false);
	}
	//call colorbox
	handleColorbox();
	/*-----------------------------------------------------------------------------------*/
	/*	Animate
	/*-----------------------------------------------------------------------------------*/	
	$('.projects').click(function(){
	  var id = $(this).attr('data-slide');
	  $('#project-slide-'+id).addClass('animated fadeInUpBig').show();
	  return false;
	});
	/*-----------------------------------------------------------------------------------*/
	/*	Mobile Menu
	/*-----------------------------------------------------------------------------------*/
	//Handle sidebar collapse on user interaction
	$('.sidebar-collapse > i').click(function () {
		$('#mobile-menu').slideToggle(200, 'linear').toggleClass('collapse');
	});
	
}); 