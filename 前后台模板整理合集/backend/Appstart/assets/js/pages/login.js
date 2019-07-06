//------------- blank.js -------------//
$(document).ready(function() {
	//activate tabs
	$('#myTab a:first').tab('show'); // Select first tab
	
 	//for custom checkboxes
	$('input').not('.noStyle').iCheck({
        checkboxClass: 'icheckbox_minimal-teal'
    });

	//validate login form 
	$("#login-form").validate({
		ignore: null,
		ignore: 'input[type="hidden"]',
		errorPlacement: function(error, element) {
			wrap = element.parent();
			wrap1 = wrap.parent();
			if (wrap1.hasClass('checkbox')) {
				error.insertAfter(wrap1);
			} else {
				if (element.attr('type')=='file') {
					error.insertAfter(element.next());
				} else {
					error.insertAfter(element);
				}
			}
		}, 
		errorClass: 'help-block',
		rules: {
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 5
			}
		},
		messages: {
			password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long"
			},
			email: "Please type your email",
		},
		highlight: function(element) {
			if ($(element).offsetParent().parent().hasClass('form-group')) {
				$(element).offsetParent().parent().removeClass('has-success').addClass('has-error');
			} else {
				if ($(element).attr('type')=='file') {
					$(element).parent().parent().removeClass('has-success').addClass('has-error');
				}
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
	    	} else if ($(element).next().hasClass('bootstrap-filestyle')) {
	    		$(element).parent().parent().removeClass('has-error').addClass('has-success');
	    	}
	    	else {
	    		$(element).offsetParent().parent().parent().removeClass('has-error').addClass('has-success');
	    	}
		}
	});

});