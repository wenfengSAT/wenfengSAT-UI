var Login = function () {
	"use strict";
	
	return { init: init };

	function init () {
		$.support.placeholder = false;
		var test = document.createElement('input');
		if('placeholder' in test) $.support.placeholder = true;
		
		if (!$.support.placeholder) {
			$('#login-form').find ('label').show ();			
		}
	}
} ();

$(function () {

	Login.init ();
	
});