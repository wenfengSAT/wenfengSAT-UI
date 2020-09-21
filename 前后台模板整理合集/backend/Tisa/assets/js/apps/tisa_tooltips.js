	
	$(function() {
		// power tooltips
		tisa_tooltips.power_ttip();
	})
	
	// tooltips
	tisa_tooltips = {
		power_ttip: function() {
			
			$.fn.powerTip.defaults.smartPlacement = true;
			
			$('.pTip_top').powerTip({ placement: 'n' });
			$('.pTip_bottom').powerTip({ placement: 's' });
			$('.pTip_left').powerTip({ placement: 'w' });
			$('.pTip_right').powerTip({ placement: 'e' });
			$('.pTip_top_left').powerTip({ placement: 'nw' });
			$('.pTip_top_right').powerTip({ placement: 'ne' });
			$('.pTip_bottom_left').powerTip({ placement: 'sw' });
			$('.pTip_bottom_right').powerTip({ placement: 'se' });
			
			$('.pTip_follow_mouse').powerTip({ followMouse: true, offset: 14 });
			
			$('.pTip_mouse_on').data('powertipjq', $([
				'<p><b>Here is some content</b></p>',
				'<p><a href="#">Maybe a link</a></p>',
				'<p>{ placement: \'w\', mouseOnToPopup: true }</p>'
			].join('\n')));
			$('.pTip_mouse_on').powerTip({
				placement: 'w',
				mouseOnToPopup: true
			});
		}
	}