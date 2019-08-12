///////////////////////////////
// Form Validation Functions //
///////////////////////////////

"use strict";

$(document).ready(function() {
	/**
	 * DEMO CODE
	 * These lines of code below are merely demo purposes. Build upon them and create your own
	 * Check documentation for usage
	 */
	
	/* Registration Form */
	$('#registrationForm')
	.bootstrapValidator({
		feedbackIcons: {
			valid: 'icon icon-check',
			invalid: 'icon icon-cross',
			validating: 'icon icon-refresh'
		},
		fields: {
			username: {
				message: 'The username is not valid',
				validators: {
					notEmpty: {
						message: 'The username is required and cannot be empty'
					},
					stringLength: {
						min: 6,
						max: 30,
						message: 'The username must be more than 6 and less than 30 characters long'
					},
					regexp: {
						regexp: /^[a-zA-Z0-9]+$/,
						message: 'The username can only consist of alphabetical and number'
					},
					different: {
						field: 'password',
						message: 'The username and password cannot be the same as each other'
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
					different: {
						field: 'username',
						message: 'The password cannot be the same as username'
					},
					stringLength: {
						min: 8,
						message: 'The password must have at least 8 characters'
					}
				}
			},
			birthday: {
				validators: {
					notEmpty: {
						message: 'The date of birth is required'
					},
					date: {
						format: 'YYYY/MM/DD',
						message: 'The date of birth is not valid'
					}
				}
			},
			gender: {
				validators: {
					notEmpty: {
						message: 'The gender is required'
					}
				}
			}
		}
	});
	
	/* Hiding Success Messages */
	$('#hidingSuccessForm')
	.bootstrapValidator({
		feedbackIcons: {
			valid: 'icon icon-check',
			invalid: 'icon icon-cross',
			validating: 'icon icon-refresh'
		},
		fields: {
			title: {
				validators: {
					notEmpty: {
						message: 'The title is required'
					}
				}
			},
			abstract: {
				validators: {
					notEmpty: {
						message: 'The abstract is required'
					},
					stringLength: {
						max: 400,
						message: 'The abstract must be less than 400 characters'
					}
				}
			},
			'topics[]': {
				validators: {
					notEmpty: {
						message: 'The topic is required'
					},
					choice: {
						min: 2,
						max: 3,
						message: 'Please choose 2 - 3 topics'
					}
				}
			},
			sessionType: {
				validators: {
					notEmpty: {
						message: 'The session type is required'
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

	/* More Validation Types */
	$('#reportForm')
	.bootstrapValidator({
		excluded: ':disabled',
		feedbackIcons: {
			valid: 'icon icon-check',
			invalid: 'icon icon-cross',
			validating: 'icon icon-refresh'
		},
		fields: {
			title: {
				validators: {
					notEmpty: {
						message: 'The title is required'
					}
				}
			},
			description: {
				validators: {
					notEmpty: {
						message: 'The abstract is required'
					}
				}
			},
			os: {
				validators: {
					notEmpty: {
						message: 'The operating system is required'
					}
				}
			},
			'browser[]': {
				validators: {
					notEmpty: {
						message: 'Choose at least one browser'
					}
				}
			},
			priority: {
				validators: {
					notEmpty: {
						message: 'The priority is required'
					}
				}
			}
		}
	})
	.on('error.field.bv', function(e, data) {
		// $(e.target)  --> The field element
		// data.bv      --> The BootstrapValidator instance
		// data.field   --> The field name
		// data.element --> The field element

		// Hide the messages
		data.element
		.data('bv.messages')
		.find('.help-block[data-bv-for="' + data.field + '"]').hide();
	});

	/* Advamced Validation */
	$('#advancedForm')
	// IMPORTANT: You must declare .on('init.field.bv')
	// before calling .bootstrapValidator(options)
	.on('init.field.bv', function(e, data) {
		// data.bv      --> The BootstrapValidator instance
		// data.field   --> The field name
		// data.element --> The field element

		var $parent    = data.element.parents('.form-group'),
		$icon      = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]'),
		options    = data.bv.getOptions(),                      // Entire options
		validators = data.bv.getOptions(data.field).validators; // The field validators

		if (validators.notEmpty && options.feedbackIcons && options.feedbackIcons.required) {
			// The field uses notEmpty validator
			// Add required icon
			$icon.addClass(options.feedbackIcons.required).show();
		}
	})
	.bootstrapValidator({
		excluded: ':disabled',
		feedbackIcons: {
			required: 'glyphicon glyphicon-asterisk',
			valid: 'icon icon-check',
			invalid: 'icon icon-cross',
			validating: 'icon icon-refresh'
		},
		fields: {
			name: {
				validators: {
					notEmpty: {
						message: 'The name field is required'
					},
					stringLength: {
						min: 6,
						max: 30,
						message: 'The name field must be more than 6 and less than 30 characters long'
					},
					regexp: {
						regexp: /^[a-zA-Z ]+$/,
						message: 'The name field can only consist of letters and spaces only'
					}
				}
			},
			price: {
				validators: {
					notEmpty: {
						message: 'The price is required'
					},
					regexp: {
						regexp: /^[0-9,.]+$/,
						message: 'The price field can only consist of numbers, commas, and fullstops (dots) only'
					}
				}
			},
			quantity: {
				validators: {
					notEmpty: {
						message: 'The quantity is required'
					},
					numeric: {
						message: 'The quantity must be a number'
					}
				}
			},
			trailer: {
				validators: {
					notEmpty: {
						message: 'The Youtube trailer link is required'
					},
					uri: {
						message: 'The Youtube trailer link is not valid'
					}
				}
			},
			ckeditor1: {
				validators: {
					notEmpty: {
						message: 'The CKEditor field is required and cannot be empty'
					},
					callback: {
						message: 'The CKEditor field must be less than 200 characters long',
						callback: function(value, validator, $field) {
							// Get the plain text without HTML
							var div  = $('<div/>').html(value).get(0),
							text = div.textContent || div.innerText;

							return text.length <= 200;
						}
					}
				}
			}
		}
	})
	.find('[name="ckeditor1"]')
	.ckeditor()
	.editor
	// To use the 'change' event, use CKEditor 4.2 or later
	.on('change', function() {
		// Revalidate the ckeditor1 field
		$('#advancedForm').bootstrapValidator('revalidateField', 'ckeditor1');
	});
	
	$('#resetButton').on('click', function(e) {
		// Reset the form
		$('#advancedForm').data('bootstrapValidator').resetForm(true);
	});
});