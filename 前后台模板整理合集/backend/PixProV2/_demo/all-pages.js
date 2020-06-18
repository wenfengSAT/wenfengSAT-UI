jQuery(document).ready(function($){

  // Top Bar Notification Box
  $('a', '.top-bar .icon-list li').on('click',function(){
    var li = $(this).parent();
    var box = $('.notification-box', li);
    if ($(box).length) {
      if ($(box).hasClass('visible')) {
        $(box).removeClass('visible');
      } else {
        $(box).addClass('visible');
      }
    }
    return false;
  });

	// Sidebar Collapse
	$('.sidebar-collapse').on('click', function(){
		$('.sidebar-left').toggleClass('collapsed');
		$('.main-container').toggleClass('collapsed');
		$('.submenu').attr('style','');
	});


	// Calendar Widget
	if ($('.calendar-widget').length) {
		$('.calendar-widget').datepicker();
	}

	/*** ToolTips ***/
	if ($('[data-toggle="tooltip"]').length) {
	$('[data-toggle="tooltip"]').each(function(i, item) {
		$(item).tooltip();
	});
	}

	/*** PopOvers ***/
	if ($('[data-toggle="popover"]').length) {
	$('[data-toggle="popover"]').each(function(i, item) {
		$(item).popover();
	});
	}

	/*** Vertical Tabs ***/
	if ($('.vertical-tabs').length) {
	$( ".vertical-tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
	$( ".vertical-tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
	}

	/*** Accordions ***/
	if ($('.collapsible-accordion').length) {
	$('.collapsible-accordion').accordion({collapsible: true});
	}

	/*** Main Menu Animation ***/
	$('li.has-submenu>a', 'ul.main-menu').click(function(){
			var link = $(this);
			var obj = $(this).parent();
			var child = $('ul.submenu', obj);

			$('li.active', 'ul.main-menu').each(function(i, item) {
				$(item).removeClass('active');
				$('ul.submenu', item).slideUp(400);
			});

			if ($(child).is(':visible')) {
				$(child).slideUp(400);
				$(link).removeClass('close-child').parent().removeClass('active');
			} else {
				$(child).slideDown(400);
				$(link).addClass('close-child').parent().addClass('active');
			}

		return false;
	});

	/*** Sidebar Collapse ***/
	$('.sidebar-collapse').on('click', function(){
		$('body').toggleClass('sidebar-collapsed');
	});

	/*** Remove Box ***/
	$('a>i.fa-times', '.box-title').on('click', function(){
		var box = $(this).parent().parent().parent();
		$(box).slideUp(600);
		return false;
	});

	/*** Responsive Menu ***/
	$('.logo-container').append('<a href="#" class="responsive-menu-trigger"></a>');

	var responsive = '<ul class="responsive-menu">';
	$('.main-menu>li').each(function(i, item) {
		responsive += '<li><a href="' + $('a', item).attr('href') + '">' + $('a', item).html() + '</a></li>';

		if ($('ul.submenu', item).length) {
			var sub = $('ul.submenu', item);
			$('li', sub).each(function(is, sub_item){
				responsive += '<li class="child"><a href="' + $('a', sub_item).attr('href') + '">' + $('a', sub_item).html() + '</a></li>';
			});
		}

	});
	responsive += '</ul>';

	$(responsive).insertAfter('.logo-container');

	$('.responsive-menu-trigger').on('click', function(){
		$('.responsive-menu').toggle(500);
		return false;
	});


});