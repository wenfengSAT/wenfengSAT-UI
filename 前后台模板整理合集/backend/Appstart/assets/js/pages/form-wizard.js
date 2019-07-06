//------------- blank.js -------------//
$(document).ready(function() {

	//get object with colros from plugin and store it.
	var objColors = $('body').data('appStart').getColors();
	var colours = {
		white: objColors.white,
		dark: objColors.dark,
		red : objColors.red,
		blue: objColors.blue,
		green : objColors.green,
		yellow: objColors.yellow,
		brown: objColors.brown,
		orange : objColors.orange,
		purple : objColors.purple,
		pink : objColors.pink,
		lime : objColors.lime,
		magenta: objColors.magenta,
		teal: objColors.teal,
		textcolor: '#5a5e63',
		gray: objColors.gray
	}

	//------------- Create success msg if form is submit -------------//
 	function createSuccessMsg (loc, msg) {
		loc.append(
			'<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button><strong><i class="im-checkmark3 s24"></i> Well done!</strong> '+ msg + ' </div>'
		);
	}
	//------------- Form wizard with steps-------------//
 	$("#wizard").formwizard({ 
	 	formPluginEnabled: true,
	 	validationEnabled: false,
	 	focusFirstInput : true,
	 	formOptions :{
			success: function(data){
				//produce success message
				createSuccessMsg($("#wizard .msg"), "You successfully submit this form");
			},
			resetForm: true
	 	},
	 	disableUIStyles: true,
	 	showSteps: true //show the step
	});

	//------------- Form wizard without steps -------------//
 	$("#wizard1").formwizard({ 
	 	formPluginEnabled: true,
	 	validationEnabled: false,
	 	focusFirstInput : true,
	 	formOptions :{
			success: function(data){
				//produce success message
				createSuccessMsg($("#wizard1 .msg"), "You successfully submit this form");
			},
			resetForm: true
	 	},
	 	disableUIStyles: true,
	 	showSteps: false //show the step
	});

	//------------- Vertical Form wizard with steps-------------//
 	$("#wizard2").formwizard({ 
	 	formPluginEnabled: true,
	 	validationEnabled: false,
	 	focusFirstInput : true,
	 	formOptions :{
			success: function(data){
				//produce success message
				createSuccessMsg($("#wizard2 .msg"), "You successfully submit this form");
			},
			resetForm: false
	 	},
	 	disableUIStyles: true,
	 	showSteps: true, //show the step
	 	vertical: true //activate vertical wizard
	});

	//------------- Wizard with validation -------------//
 	$("#wizard3").formwizard({ 
	 	formPluginEnabled: true,
	 	validationEnabled: true,
	 	validationOptions: {
	 		errorPlacement: function(error, element) {
				wrap = element.parent();
				wrap1 = wrap.parent();
				if (wrap1.hasClass('checkbox')) {
					error.insertAfter(wrap1);
				} else {
					error.insertAfter(element);
				}
			}, 
			errorClass: 'help-block',
	 		rules: {
	 			firstname: {
	 				required: true
	 			},
	 			email: {
	 				required: true,
	 				email: true
	 			},
	 			username: {
	 				required: true
	 			},
	 			password: {
	 				required: true,
	 				minlength: 5
	 			},
	 			password_2: {
	 				required: true,
					minlength: 5,
					equalTo: "#password"
	 			}

	 		}, 
	 		messages: {
	 			firstname: {
	 				required: "I need to know your first name Sir"
	 			},
	 			email: {
	 				required: "You email is required Sir"
	 			}
	 		},
			highlight: function(element) {
				if ($(element).offsetParent().parent().hasClass('form-group')) {
					$(element).offsetParent().parent().removeClass('has-success').addClass('has-error');
				} else {
					$(element).offsetParent().parent().parent().parent().removeClass('has-success').addClass('has-error');
				}
		    },
		    unhighlight: function(element,errorClass) {
		    	if ($(element).offsetParent().parent().hasClass('form-group')) {
		    		$(element).offsetParent().parent().removeClass('has-error').addClass('has-success');
			    	$(element.form).find("label[for=" + element.id + "]").removeClass(errorClass);
		    	} else if ($(element).offsetParent().parent().hasClass('checkbox')) {
		    		$(element).offsetParent().parent().parent().parent().removeClass('has-error').addClass('has-success');
		    		$(element.form).find("label[for=" + element.id + "]").removeClass(errorClass);
		    	} else {
		    		$(element).offsetParent().parent().parent().removeClass('has-error').addClass('has-success');
		    	}
			}
	 	},
	 	focusFirstInput : true,
	 	formOptions :{
			success: function(data){
				//produce success message
				createSuccessMsg($("#wizard2 .msg"), "You successfully submit this form");
			},
			resetForm: false
	 	},
	 	disableUIStyles: true,
	 	showSteps: true //show the step
	});	
 	
});