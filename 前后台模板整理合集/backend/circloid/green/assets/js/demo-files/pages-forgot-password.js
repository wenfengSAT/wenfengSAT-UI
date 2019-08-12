///////////////////////////
// Pages Forgot Password //
///////////////////////////

"use strict";

$(document).ready(function(){
	/* Handles the validation on the Forgot Password page */
	/* Form Validation */
	$('.forgot-password-form')
	.bootstrapValidator({
		feedbackIcons: {
			valid: 'icon icon-check',
			invalid: 'icon icon-cross',
			validating: 'icon icon-refresh'
		},
		fields: {
			email: {
				validators: {
					notEmpty: {
						message: 'The email address is required and cannot be empty'
					},
					emailAddress: {
						message: 'The email address is not a valid'
					}
				}
			}
		}
	})
	.on('success.field.bv', function(e, data) {
		// $(e.target)  --> The field element
		// data.bv      --> The BootstrapValidator instance
		// data.field   --> The field name
		// data.element --> The field element

		var $parent = data.element.parents('.form-group');

		// Remove the has-success class
		$parent.removeClass('has-success');

		// Hide the success icon
		$parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]').hide();
	});
});