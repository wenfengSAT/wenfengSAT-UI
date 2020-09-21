	
	$(function() {
		// wizard
		tisa_wizard.init();
		// select country
		tisa_select.country();
		// select languages
		tisa_select.languages();
		// form validation
		tisa_validate.listen_event();
	})
	
	
	// wizard
	tisa_wizard = {
		init: function() {
			if ($("#wizard_101").length) {
				// initialize wizard
				$("#wizard_101").steps({
					headerTag: 'h3',
					bodyTag: "section",
					titleTemplate: "<span class=\"number\">#index#.</span><span class=\"title\">#title#</span>",
					enableAllSteps: true,
					enableFinishButton: false,
					transitionEffect: "fade",
					labels: {
						next: "Next <i class=\"fa fa-angle-right\"></i>",
						previous: "<i class=\"fa fa-angle-left\"></i> Previous",
						current: "",
						finish: "Agree"
					},
					onStepChanged: function (event, currentIndex, priorIndex) {
						// adjust wizard height
						tisa_wizard.setContentHeight('#wizard_101')
					} 
				});
				// set initial wizard height
				tisa_wizard.setContentHeight('#wizard_101');
			}
			if ($("#wizard_form").length) {
				var wizard_form = $('#wizard_form');
				// initialize wizard
				wizard_form.steps({
					headerTag: 'h3',
					bodyTag: "section",
					enableAllSteps: true,
					titleTemplate: "<span class=\"number\">#index#.</span><span class=\"title\">#title#</span>",
					transitionEffect: "slideLeft",
					labels: {
						next: "Next Step <i class=\"fa fa-angle-right\"></i>",
						previous: "<i class=\"fa fa-angle-left\"></i> Previous Step",
						current: "",
						finish: "<i class=\"fa fa-check\"></i> Register"
					},
					onStepChanging: function (event, currentIndex, newIndex) {
						var cursentStep = wizard_form.find('.content > .body').eq(currentIndex);
						// check input fields for errors
						cursentStep.find('[data-parsley-id]').each(function() {
							$(this).parsley().validate();
						});
						
						// adjust wizard height
						tisa_wizard.setContentHeight('#wizard_form');
						
						if(cursentStep.find('.parsley-error').length) {
							return false;
						} else {
							return true;
						}
					},
					onStepChanged: function (event, currentIndex, priorIndex) {
						thisIndex = currentIndex;
						// adjust wizard height
						tisa_wizard.setContentHeight('#wizard_form');
					},
					onFinishing: function (event, currentIndex) {
						var cursentStep = wizard_form.find('.content > .body').eq(currentIndex);
						// check input fields for errors
						cursentStep.find('[data-parsley-id]').each(function() {
							$(this).parsley().validate();
						});
						
						// adjust wizard height
						tisa_wizard.setContentHeight('#wizard_form');
						
						if(cursentStep.find('.parsley-error').length) {
							return false;
						} else {
							return true;
						}
					},
					onFinished: function(event, currentIndex) {
						alert("Submitted!");
                        //* uncomment the following line to submit form
                        //wizard_form.submit();
					}
				});
				// set initial wizard height
				tisa_wizard.setContentHeight('#wizard_form');
			}
		},
		setContentHeight: function($wizard) {
			setTimeout(function() {
				var cur_height = $($wizard).children('.content').children('.body.current').outerHeight();
				$($wizard).find('.content').height(cur_height);
			},0);
		}
	}
	
	// form validation
	tisa_validate = {
		listen_event: function() {
			var thisIndex = 0;
			$.listen('parsley:field:validate', function(e) {
				tisa_wizard.setContentHeight('#'+e.$element.closest('div.wizard').attr('id'));
			});
		}
	}

	// select country
	tisa_select = {
		country: function() {
			if($('#s2_country').length) {
				function format(state) {
					if (!state.id) return state.text;
					return '<i class="flag-' + state.id + '"></i>' + state.text;
				}
				$('#s2_country').select2({
					placeholder: "Select Country",
					formatResult: format,
					formatSelection: format,
					escapeMarkup: function(markup) { return markup; }
				});
			}
		},
		languages: function() {
			if($('#s2_languages').length) {
				$('#s2_languages').select2({
					placeholder: "Select language",
					tags:["Mandarin", "Spanish", "English", "Hindi", "Arabic", "Portuguese"],
					tokenSeparators: [",", " "]
				});
			}
		}
	}