///////////////////////////
// Form Wizard Functions //
///////////////////////////

"use strict";

$(document).ready(function() {
	/**
	 * DEMO CODE
	 * These lines of code below are merely demo purposes. Build upon them and create your own
	 * Check documentation for usage
	 */

	/* Form Wizard */
	$('#rootwizard-1').bootstrapWizard({onNext: function(tab, navigation, index) {
		if(index == 1) {

			// Get Username Value
			var usernameValue = $("#wizard-stage-1 .wizard-stage-1-username");
			var userNameValidate = circloidValidateForm(usernameValue.val(), "alphanumeric", "required");

			if(userNameValidate != true){
				usernameValue.parent().addClass("has-error");
				usernameValue.parent(".has-error").find("span.help-block").remove();
				usernameValue.after("<span class='help-block'>" + userNameValidate + "</span>");
				return false;
			}

			// Get Email Value
			var emailValue = $("#wizard-stage-1 .wizard-stage-1-email");
			var emailValidate = circloidValidateForm(emailValue.val(), "email", "required");

			if(circloidValidateForm(emailValue.val(), "email", "required") != true){
				emailValue.parent().addClass("has-error");
				emailValue.parent(".has-error").find("span.help-block").remove();
				emailValue.after("<span class='help-block'>" + emailValidate + "</span>");
				return false;
			}

			// Get Password
			var passwordValue = $("#wizard-stage-1 .wizard-stage-1-password");
			var passwordValidate = circloidValidateForm(passwordValue.val(), "password", "required");

			if(circloidValidateForm(passwordValue.val(), "password", "required") != true){
				passwordValue.parent().addClass("has-error");
				passwordValue.parent(".has-error").find("span.help-block").remove();
				passwordValue.after("<span class='help-block'>" + passwordValidate + "</span>");
				return false;
			}
		}

		if(index == 2){
			$(".form-wizard-review-block").append("<p><strong>Username:</strong> " + $(".wizard-stage-1-username").val() + "</p>");
			$(".form-wizard-review-block").append("<p><strong>Email:</strong> " + $(".wizard-stage-1-email").val() + "</p>");
			$(".form-wizard-review-block").append("<p><strong>password:</strong> *******</p>");
			$(".form-wizard-review-block").append("<p><strong>Telephone:</strong> " + $(".wizard-stage-2-optional-1").val() + "</p>");
			$(".form-wizard-review-block").append("<p><strong>Your Address:</strong> " + $(".wizard-stage-2-optional-2").val() + "</p>");
			$(".form-wizard-review-block").append("<p><strong>Write something about yourself:</strong> " + $(".wizard-stage-2-optional-3").val() + "</p>");
		}
	}, onTabShow: function(tab, navigation, index) {
		var $total = navigation.find('li').length;
		var $current = index+1;
		var $percent = ($current/$total) * 100;
		var progressBar = $('#rootwizard-1').find('.progress-bar');

		progressBar.css({width:$percent+'%'});

		// Progress Bar Color Change - Optional
		// First, remove the previous highilight-color-*
		var regex = new RegExp('\\b' + 'progress-bar-' + '.+?\\b', 'g');
		$('#rootwizard-1').find('.progress-bar')[0].className = progressBar[0].className.replace(regex, '');

		// Progress Bar Color Change - Optional
		if($percent < 20){
			progressBar.addClass("progress-bar-danger");
		}else if(($percent >= 20) && ($percent < 50)){
			progressBar.addClass("progress-bar-warning");
		}else if(($percent >= 50) && ($percent < 75)){
			progressBar.addClass("progress-bar-info");
		}else if(($percent >= 75) && ($percent < 100)){
			// Keep default progress bar color
		}else{
			progressBar.addClass("progress-bar-success");
		}
	}, onTabClick: function(tab, navigation, index){
		return false;
	}});
});