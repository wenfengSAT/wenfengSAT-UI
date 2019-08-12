//////////////////
// Pages Signup //
//////////////////

"use strict";

$(document).ready(function(){

	/* Form Validation */
	/**
	 * DEMO CODE
	 * These lines of code below are merely demo purposes. Build upon them and create your own
	 * Check documentation for usage
	 */
	$('.registration-form')
	.bootstrapValidator({
		feedbackIcons: {
			valid: 'icon icon-check',
			invalid: 'icon icon-cross',
			validating: 'icon icon-refresh'
		},
		fields: {
			username: {
				validators: {
					notEmpty: {
						message: 'Username is required and cannot be empty'
					},
					stringLength: {
						min: 3,
						max: 16,
						message: 'The Username must be between 3 and 16 characters long'
					},
					regexp: {
						regexp: /^[a-z\d\_\s]+$/i,
						message: 'The full name can consist of alphanumeric characters and spaces only'
					}
				}
			},
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
					stringLength: {
						min: 8,
						max: 30,
						message: 'The password must be between 8 and 30 characters long'
					}
				}
			},
			passwordConfirm: {
				validators: {
					identical: {
						field: 'password',
						message: 'The password and its confirm are not the same'
					}
				}
			}
		}
	})
	.on('success.field.bv', function(e, data) {
		// // $(e.target)  --> The field element
		// // data.bv      --> The BootstrapValidator instance
		// // data.field   --> The field name
		// // data.element --> The field element

		// var $parent = data.element.parents('.form-group');

		// // Remove the has-success class
		// $parent.removeClass('has-success');

		// // Hide the success icon
		// $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]').hide();
	});
});