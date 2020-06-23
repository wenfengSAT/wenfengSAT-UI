var UIModals = function() {
	"use strict";
	//function to initiate bootstrap extended modals
	var initModals = function() {
		$.fn.modalmanager.defaults.resize = true;
		$.fn.modal.defaults.spinner = $.fn.modalmanager.defaults.spinner = '<div class="loading-spinner" style="width: 200px; margin-left: -100px;">' + '<div class="progress progress-striped active">' + '<div class="progress-bar" style="width: 100%;"></div>' + '</div>' + '</div>';
		var $modal = $('#ajax-modal');
		$('.ajax .demo').on('click', function() {
			// create the backdrop and wait for next modal to be triggered
			$('body').modalmanager('loading');
			setTimeout(function() {
				$modal.load('modal_ajax_test.html', '', function() {
					$modal.modal();
				});
			}, 1000);
		});
		$modal.on('click', '.update', function() {
			$modal.modal('loading');
			setTimeout(function() {
				$modal.modal('loading').find('.modal-body').prepend('<div class="alert alert-info fade in">' + 'Updated!<button type="button" class="close" data-dismiss="alert">&times;</button>' + '</div>');
			}, 1000);
		});
	};
	//function to initiate programmatic dialog boxes
	var initDialogBoxes = function() {
		var demos = {};

		$(document).on("click", "button[data-bb]", function(e) {
			e.preventDefault();
			var type = $(this).data("bb");

			if ( typeof demos[type] === 'function') {
				demos[type]();
			}
		});

		// let's namespace the demo methods; it makes them easier
		// to invoke

		demos.alert_callback = function() {
			bootbox.alert("Hello world!", function() {
				toastr.success('Hello world callback');
			});
		};

		demos.confirm = function() {
			bootbox.confirm("Are you sure?", function(result) {
				toastr.success('Confirm result: ' + result);
			});
		};

		demos.prompt = function() {
			bootbox.prompt("What is your name?", function(result) {
				if (result === null) {
					toastr.warning("Prompt dismissed");
				} else {
					toastr.success("Hi <b>" + result + "</b>");
				}
			});
		};

		demos.dialog = function() {
			bootbox.dialog({
				message : "I am a custom dialog",
				title : "Custom title",
				buttons : {
					success : {
						label : "Success!",
						className : "btn-success",
						callback : function() {
							toastr.success("great success");
						}
					},
					danger : {
						label : "Danger!",
						className : "btn-danger",
						callback : function() {
							toastr.warning("uh oh, look out!");
						}
					},
					main : {
						label : "Click ME!",
						className : "btn-primary",
						callback : function() {
							toastr.info("Primary button");
						}
					}
				}
			});
		};

		demos.custom_html = function() {
			var some_html = '<img src="assets/images/logo.png"/><br />';
			some_html += '<h2>You can use custom HTML too!</h2><br />';
			some_html += '<h4>Just be sure to mind your quote marks</h4>';
			bootbox.alert(some_html);
		};
	};
	return {
		init : function() {
			initModals();
			initDialogBoxes();
		}
	};
}(); 