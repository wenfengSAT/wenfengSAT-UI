/*
	SuperBox v1.0.0
	by Todd Motto: http://www.toddmotto.com
	Latest version: https://github.com/toddmotto/superbox
	
	Copyright 2013 Todd Motto
	Licensed under the MIT license
	http://www.opensource.org/licenses/mit-license.php

	SuperBox, the lightbox reimagined. Fully responsive HTML5 image galleries.
*/
;(function($) {
		
	$.fn.SuperBox = function(options) {
		
		var superbox      = $('<div class="superbox-show"></div>');
		var superboximg   = $('<img src="" class="superbox-current-img">');
		var superboxclose = $('<div class="superbox-close"></div>');
		
		superbox.append(superboximg).append(superboxclose);
		
		return this.each(function() {
			
			$('.superbox-list').click(function() {
		
				var currentimg = $(this).find('.superbox-img');
				var imgData = currentimg.data('img');
				var offset = $('.superbox').attr('data-offset');
				    offset = (offset) ? offset : 0;
				    
				superboximg.attr('src', imgData);
				$('.superbox-list').removeClass('active');
				
				if($('.superbox-current-img').css('opacity') == 0) {
					$('.superbox-current-img').animate({opacity: 1});
				}
				
				if ($(this).next().hasClass('superbox-show')) {
					superbox.toggle();
				} else {
					superbox.insertAfter(this).css('display', 'block');
					$(this).addClass('active');
				}
				
				$('html, body').animate({
					scrollTop:superbox.position().top - currentimg.width() - offset
				}, 'medium');
			
			});
						
			$('.superbox').on('click', '.superbox-close', function() {
				$('.superbox-current-img').animate({opacity: 0}, 200, function() {
				    $(this).closest('.superbox').find('.superbox-list').removeClass('active');
					$('.superbox-show').slideUp();
				});
			});
			
		});
	};
})(jQuery);