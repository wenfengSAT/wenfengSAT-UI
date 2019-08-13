$(function() {
	$('#navbar').affix({
		offset: {
			top: 200
		}
	});

	$("pre.html").snippet("html", {style:'matlab'});
	$("pre.css").snippet("css", {style:'matlab'});
	$("pre.javascript").snippet("javascript", {style:'matlab'});

	$('#myWizard').easyWizard({
		buttonsClass: 'btn btn-info',
		submitButtonClass: 'btn btn-success'
	});

	$('#myWizard2').easyWizard({
		buttonsClass: 'btn btn-info',
		submitButtonClass: 'btn btn-success',
		before: function(wizardObj, currentStepObj, nextStepObj) {
			alert('Hello, I\'am the before callback');
		},
		after: function(wizardObj, prevStepObj, currentStepObj) {
			alert('Hello, I\'am the after callback');
		},
		beforeSubmit: function(wizardObj) {
			alert('Hello, I\'am the beforeSubmit callback');
		}
	});

	$('#myWizard3').easyWizard({
		showSteps: false,
		showButtons: false,
		submitButton: false
	});
	$('#myWizard3Pager .previous a').bind('click', function(e) {
		e.preventDefault();
		$('#myWizard3').easyWizard('prevStep');
	});
	$('#myWizard3Pager .page a').bind('click', function(e) {
		e.preventDefault();
		$('#myWizard3').easyWizard('goToStep', $(this).attr('rel'));
	});
	$('#myWizard3Pager .next a').bind('click', function(e) {
		e.preventDefault();
		$('#myWizard3').easyWizard('nextStep');
	});
});