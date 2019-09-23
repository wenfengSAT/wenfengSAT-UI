var $grid_color = "#cccccc";
var $info = "#5B90BF";
var $danger = "#D66061";
var $warning = "#ffaa3a";
var $success = "#76BBAD";
var $fb = "#4c66a4";
var $twitter = "#00acee";
var $linkedin = "#1a85bd";
var $gplus = "#dc4937";
var $brown = "#ab7967";


//Dropdown Menu
$( document ).ready(function() {
	$('#menu > ul > li > a').click(function() {
		$('#menu li').removeClass('active');
		$(this).closest('li').addClass('active'); 
		var checkElement = $(this).next();
		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			$(this).closest('li').removeClass('active');
			checkElement.slideUp('normal');
		}
		if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
			$('#menu ul ul:visible').slideUp('normal');
			checkElement.slideDown('normal');
		}
		if($(this).closest('li').find('ul').children().length == 0) {
			return true;
		} else {
			return false; 
		}   
	});
});

//Sidebar
$(function() {
	var s = 0;
	$('.menu-toggle').click(function() {
		if (s == 0) {
			s = 1;
			$( "#sidebar" ).animate({left: "-210px"}, 100 );
			$('.dashboard-wrapper').animate({'margin-left': "0px"}, 100);
		} else {
			s = 0;
			$('#sidebar').animate({left: "0px"}, 100);
			$('.dashboard-wrapper').animate({'margin-left': "210px"}, 100);
		}
	});
});



//Right Sidebar
// $(function() {
// 	var r = 0;
// 	$('#right-bar').click(function() {
// 		if (r == 0) {
// 			r = 1;
// 			$( ".right-sidebar" ).css({"right": "0","display": "block","background":"#ffffff", "z-index":"100","border-left":"2px solid #e2e8f0"}, 100 );
// 		} else {
// 			r = 0;
// 			$('.right-sidebar').css({right: "-220px",display: "none" }, 100);
// 		}
// 		this.reset();
// 	});
// });

// Today income
var incrementJ = $('#today_income').text();

$({numberValue: incrementJ}).animate({
	numberValue: 1745
},{
	duration: 2000,
	easing: 'linear',
	step: function () { 
		$('#today_income').text(Math.ceil(this.numberValue)); 
	},
	 done: function () {
		$('#today_income').text(Math.ceil(this.numberValue));
	}
});

// Today expenses
var incrementK = $('#today_expenses').text();

$({numberValue: incrementK}).animate({
	numberValue: 829
},{
	duration: 3000,
	easing: 'linear',
	step: function () { 
		$('#today_expenses').text(Math.ceil(this.numberValue)); 
	},
	 done: function () {
		$('#today_expenses').text(Math.ceil(this.numberValue));
	}
});



// scrollUp full options
$(function () {
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		scrollDistance: 180, // Distance from top/bottom before showing element (px)
		scrollFrom: 'top', // 'top' or 'bottom'
		scrollSpeed: 300, // Speed back to top (ms)
		easingType: 'linear', // Scroll to top easing (see http://easings.net/)
		animation: 'fade', // Fade, slide, none
		animationSpeed: 200, // Animation in speed (ms)
		scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
		//scrollTarget: false, // Set a custom target element for scrolling to the top
		scrollText: '<i class="fa fa-chevron-up"></i>', // Text for element, can contain HTML // Text for element, can contain HTML
		scrollTitle: false, // Set a custom <a> title if required.
		scrollImg: false, // Set true to use image
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		zIndex: 2147483647 // Z-Index for the overlay
	});
});

// Mobile Nav
$('#mob-nav').click(function(){
	if($('aside.open').length > 0){
		$( "aside" ).animate({left: "-250px" }, 500 ).removeClass('open');
	} else {
		$( "aside" ).animate({left: "0px" }, 500 ).addClass('open');
	}
});

// Tooltips
$('a').tooltip('hide');

// $(function(){
// 	$('#sidebar').css({'height':($(document).height())+'px'});
// 	$('.dashboard-wrapper').css({'height':($(document).height())+'px'});
// 	$(window).resize(function(){
// 		$('#sidebar').css({'height':($(document).height())+'px'});
// 		$('.dashboard-wrapper').css({'height':($(document).height())+'px'});
// 	});
// });


// SparkLine Bar
$(function () {
	$('#downloads_graph').sparkline([3,4,5,6,3,4,3,4,5,3,3,2,1,1,1,1,1,1], {
    height: '24',
    type: 'bar',
    barSpacing: 3,
    barWidth: 6,
    barColor: $info,
    tooltipPrefix: 'Users: '
  });
  $('#downloads_graph').sparkline([3,3,4,5,5,5,4,4,4,3,2,1,1,1,1,1,1,2,1], {
    composite: true,
    height: '30',
    fillColor:false,
    lineColor: $warning,
    tooltipPrefix: 'Downloads: '
  });

  $('#users_online_graph').sparkline([2,3,4,5,7,5,4,3,3,2,1,1,2,3,1,1,1], {
    height: '24',
    type: 'bar',
    barSpacing: 3,
    barWidth: 6,
    barColor: $danger,
    tooltipPrefix: 'time: '
  });
  $('#users_online_graph').sparkline([1,1,2,3,4,9,9,11,11,13,13,13,10,7,3,3,1], {
    composite: true,
    height: '30',
    fillColor:false,
    lineColor: $info,
    tooltipPrefix: 'Users Online: '
  });
});