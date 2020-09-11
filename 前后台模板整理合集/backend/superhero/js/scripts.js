$(function($) {
	setTimeout(function() {
		$('#content-wrapper > .row').css({
			opacity: 1, 
			'-webkit-transform': 'translateY(0px)', 
			'-moz-transform': 'translateY(0px)', 
			'-ms-transform': 'translateY(0px)', 
			'-o-transform': 'translateY(0px)', 
			transform: 'translateY(0px)'
		});
	}, 200);
	
	$('#sidebar-nav .dropdown-toggle').click(function (e) {
		e.preventDefault();
		
		var $item = $(this).parent();

		if (!$item.hasClass('open')) {
			$item.parent().find('.open .submenu').slideUp('fast');
			$item.parent().find('.open').toggleClass('open');
		}
		
		$item.toggleClass('open');
		
		if ($item.hasClass('open')) {
			$item.children('.submenu').slideDown('fast');
		} 
		else {
			$item.children('.submenu').slideUp('fast');
		}
	});
	
	$('.mobile-search').click(function(e) {
		e.preventDefault();
		
		$('.mobile-search').addClass('active');
		$('.mobile-search form input.form-control').focus();
	});
	$(document).mouseup(function (e) {
		var container = $('.mobile-search');

		if (!container.is(e.target) // if the target of the click isn't the container...
			&& container.has(e.target).length === 0) // ... nor a descendant of the container
		{
			container.removeClass('active');
		}
	});
	
});

(function($,sr){
	// debouncing function from John Hann
	// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	var debounce = function (func, threshold, execAsap) {
		var timeout;

		return function debounced () {
			var obj = this, args = arguments;
			function delayed () {
				if (!execAsap)
					func.apply(obj, args);
				timeout = null;
			};

			if (timeout)
				clearTimeout(timeout);
			else if (execAsap)
				func.apply(obj, args);

			timeout = setTimeout(delayed, threshold || 100);
		};
	}
	// smartresize 
	jQuery.fn[sr] = function(fn){	return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');