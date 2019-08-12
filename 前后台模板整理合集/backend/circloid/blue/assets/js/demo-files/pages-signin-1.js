/////////////////////////
// Pages Signin Type 1 //
/////////////////////////

"use strict";

$(document).ready(function(){

	/* Form Validation */
	/**
	 * DEMO CODE
	 * These lines of code below are merely demo purposes. Build upon them and create your own
	 * Check documentation for usage
	 */
	$('.login-form')
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
			},
			password: {
				validators: {
					notEmpty: {
						message: 'The password is required and cannot be empty'
					},
					different: {
						field: 'email',
						message: 'The password cannot be the same as your email'
					},
					stringLength: {
						min: 8,
						max: 30,
						message: 'The password must be between 8 and 30 characters long'
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