
/* ========================================================
*
* Londinium - premium responsive admin template
*
* ========================================================
*
* File: application_blank.js;
* Description: Minimum of necessary js code for blank page.
* Version: 1.0
*
* ======================================================== */



$(function() {



/* # Bootstrap Plugins
================================================== */


	//===== Add fadeIn animation to dropdown =====//

	$('.dropdown, .btn-group').on('show.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).fadeIn(100);
	});


	//===== Add fadeOut animation to dropdown =====//

	$('.dropdown, .btn-group').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).fadeOut(100);
	});


	//===== Prevent dropdown from closing on click =====//

	$('.popup').click(function (e) {
		e.stopPropagation();
	});






/* # Interface Related Plugins
================================================== */


	//===== DateRangePicker plugin =====// 

	$('#reportrange').daterangepicker(
	{
		startDate: moment().subtract('days', 29),
		endDate: moment(),
		minDate: '01/01/2012',
		maxDate: '12/31/2014',
		dateLimit: { days: 60 },
		ranges: {
		'Today': [moment(), moment()],
		'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
		'Last 7 Days': [moment().subtract('days', 6), moment()],
		'This Month': [moment().startOf('month'), moment().endOf('month')],
		'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
	},
	opens: 'left',
	buttonClasses: ['btn'],
	applyClass: 'btn-small btn-info btn-block',
	cancelClass: 'btn-small btn-default btn-block',
	format: 'MM/DD/YYYY',
	separator: ' to ',
	locale: {
		applyLabel: 'Submit',
		fromLabel: 'From',
		toLabel: 'To',
		customRangeLabel: 'Custom Range',
		daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
		monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		firstDay: 1
		}
	},
	function(start, end) {
		$.jGrowl('A date range was changed', { header: 'Update', position: 'center', life: 1500 });
		$('#reportrange .date-range').html(start.format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>') + '<em> - </em>' + end.format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>'));
	}
	);
	
	/* Custom date display layout */
	$('#reportrange .date-range').html(moment().subtract('days', 29).format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>') + '<em> - </em>' + moment().format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>'));
	$('#reportrange').on('show', function(ev, picker) {
	  $('.range').addClass('range-shown');
	});

	$('#reportrange').on('hide', function(ev, picker) {
	  $('.range').removeClass('range-shown');
	});


	//===== jGrowl notifications defaults =====//

	$.jGrowl.defaults.closer = false;
	$.jGrowl.defaults.easing = 'easeInOutCirc';






/* # Default Layout Options
================================================== */

	//===== Wrapping content inside .page-content =====//

	$('.page-content').wrapInner('<div class="page-content-inner"></div>');



	//===== Applying offcanvas class =====//

	$(document).on('click', '.offcanvas', function () {
		$('body').toggleClass('offcanvas-active');
	});



	//===== Default navigation =====//

	$('.navigation').find('li.active').parents('li').addClass('active');
	$('.navigation').find('li').not('.active').has('ul').children('ul').addClass('hidden-ul');
	$('.navigation').find('li').has('ul').children('a').parent('li').addClass('has-ul');


	$(document).on('click', '.sidebar-toggle', function (e) {
	    e.preventDefault();

	    $('body').toggleClass('sidebar-narrow');

	    if ($('body').hasClass('sidebar-narrow')) {
	        $('.navigation').children('li').children('ul').css('display', '');

		    $('.sidebar-content').hide().delay().queue(function(){
		        $(this).show().addClass('animated fadeIn').clearQueue();
		    });
	    }

	    else {
	        $('.navigation').children('li').children('ul').css('display', 'none');
	        $('.navigation').children('li.active').children('ul').css('display', 'block');

		    $('.sidebar-content').hide().delay().queue(function(){
		        $(this).show().addClass('animated fadeIn').clearQueue();
		    });
	    }
	});


	$('.navigation').find('li').has('ul').children('a').on('click', function (e) {
	    e.preventDefault();

	    if ($('body').hasClass('sidebar-narrow')) {
			$(this).parent('li > ul li').not('.disabled').toggleClass('active').children('ul').slideToggle(250);
			$(this).parent('li > ul li').not('.disabled').siblings().removeClass('active').children('ul').slideUp(250);
	    }

	    else {
			$(this).parent('li').not('.disabled').toggleClass('active').children('ul').slideToggle(250);
			$(this).parent('li').not('.disabled').siblings().removeClass('active').children('ul').slideUp(250);
	    }
	}); 



	//===== Panel Options (collapsing, closing) =====//

	/* Collapsing */
	$('[data-panel=collapse]').click(function(e){
	e.preventDefault();
	var $target = $(this).parent().parent().next('div');
	if($target.is(':visible')) 
	{
	$(this).children('i').removeClass('icon-arrow-up9');
	$(this).children('i').addClass('icon-arrow-down9');
	}
	else 
	{
	$(this).children('i').removeClass('icon-arrow-down9');
	$(this).children('i').addClass('icon-arrow-up9');
	}            
	$target.slideToggle(200);
	});

	/* Closing */
	$('[data-panel=close]').click(function(e){
		e.preventDefault();
		var $panelContent = $(this).parent().parent().parent();
		$panelContent.slideUp(200).remove(200);
	});



	//===== Disabling main navigation links =====//

	$('.navigation .disabled a, .navbar-nav > .disabled > a').click(function (e){
		e.preventDefault();
	});


});