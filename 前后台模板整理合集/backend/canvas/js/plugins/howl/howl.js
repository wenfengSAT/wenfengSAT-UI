(function ($) {
	$.howl = function(config) {			
		var defaults, options, container, 
			slot, message, title, 
			inner, close, icon;

		defaults = {
			type: ''
			, title: ''
			, content: ''
			, lifetime: 5000
			, sticky: false
			, closeTrigger: true
			, iconCls: ''
		};
		
		options = $.extend(defaults, config);
		
		container = $('.howl');
		
		if (!container.length) {
			container = $('<ul>', { 'class': 'howl' });
		}
		
		slot = $('<li>', { 'class': 'howl-slot' });			
		message = $('<div>', { 'class': 'howl-message howl-' + options.type });				
		inner = $('<div>', { 'class': 'howl-message-inner' });

		if (options.closeTrigger) {
			close = $('<button>', {
				'class': 'close howl-close',
				click: function () { 
					closeMsg ($(this).parents ('.howl-slot'));
				}
			});

			close.html ('&times;');
			close.appendTo (message);
		}		

		container.appendTo ('body');
		message.appendTo (slot);
		inner.html (options.content);
		inner.appendTo (message);

		if (options.title != '') {
			title = $('<h5>', { 'class': 'howl-title' });
			title.html (options.title);
			title.prependTo (inner);
		}
		
		if (options.lifetime > 0 && !options.sticky) {
			setTimeout (function () { closeMsg (slot); }, options.lifetime);			
		}		
		
		slot.appendTo (container).hide ().slideDown (750);	

		function closeMsg (slot) {
			slot.slideUp (750, function () { $(this).remove (); });
		}

		if (options.iconCls !== '') {
			icon = $('<i>', { 'class': 'howl-icon' });

			slot.addClass ('howl-has-icon');
			icon.addClass (options.iconCls);
			icon.appendTo (message);
		}
	}
})(jQuery);