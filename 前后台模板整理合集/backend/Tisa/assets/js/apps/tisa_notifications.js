	
	$(function() {
		// noty notifications
		tisa_notifications.noty();
		// iOS-style overlays/notifications
		tisa_notifications.ios_style();
	})
	
	
	// notifications
	tisa_notifications = {
		noty: function() {
			if($('.noty_btn').length) {
				$('.noty_btn').click(function() {
					
					var self = $(this);
					
					noty({
						text: self.data('notyMessage'),
						type: self.data('notyType'),
						theme: 'tisa_theme',
						layout: self.data('notyLayout'),
						closeWith: ['button'],
						maxVisible: 10
					});
					
				})
			}
			if($('.noty_btn_pos').length) {
				$('.noty_btn_pos').click(function() {
					
					var self = $(this);
					
					noty({
						text: self.data('notyMessage'),
						type: self.data('notyType'),
						theme: 'tisa_theme',
						layout: self.data('notyLayout'),
						closeWith: ['button'],
						killer: true
					});
					
				})
			}
			if($('.noty_btn_inline').length) {
				$('.noty_btn_inline').click(function() {
					
					var self = $(this);
					
					$('#inline_container').noty({
						text: 'Inline notification',
						type: self.data('notyType'),
						theme: 'tisa_theme',
						layout: 'inline',
						closeWith: ['button']
					});
					
				})
			}
			if($('.noty_confirm').length) {
				$('.noty_confirm').click(function() {
					
					var self = $(this);
					
					noty({
						text: self.data('notyMessage'),
						type: self.data('notyType'),
						theme: 'tisa_theme',
						layout: self.data('notyLayout'),
						killer: true,
						buttons: [{
							addClass: 'btn btn-sm btn-primary', text: 'Ok', onClick: function ($noty) {
								$noty.close();
								noty({ force: true, text: 'You clicked "Ok" button', type: 'success', layout: 'topCenter', theme: 'tisa_theme'});
							}
						}, {
							addClass: 'btn btn-sm btn-danger', text: 'Cancel', onClick: function ($noty) {
								$noty.close();
								noty({ force: true, text: 'You clicked "Cancel" button', type: 'error', layout: 'topCenter', theme: 'tisa_theme'});
							}
						}]
					});
					
				})
			}
		},
		ios_style: function() {
			if($('.ios_btn_spinner').length) {
				$('.ios_btn_spinner').click(function() {
					iosOverlay({
						text: "Loading",
						duration: 2000,
						icon: "fa fa-spinner fa-spin"
					});
				})
				$('.ios_btn_success').click(function() {
					iosOverlay({
						text: "Success!",
						duration: 2000,
						icon: "fa fa-check"
					});
				})
				$('.ios_btn_error').click(function() {
					iosOverlay({
						text: "Error!",
						duration: 2000,
						icon: "fa fa-times"
					});
				})
				$('.ios_btn_loading').click(function() {
					var loading_overlay = iosOverlay({
						text: "Loading",
						icon: "fa fa-spinner fa-spin"
					});
					window.setTimeout(function() {
						loading_overlay.update({
							icon: "fa fa-check",
							text: "Success!"
						});
						window.setTimeout(function() {
							loading_overlay.hide();
						}, 2000);
					}, 2000);
					
				})
			}
		}
	}