/*
 * Template name: Kertas - Responsive Bootstrap 3 Admin Template
 * Version: 1.0.0
 * Author: VergoLabs
 */

/* ICHECK */
function initiCheck() {
	$('.icheck').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue',
		increaseArea: '20%' // optional
	});
}

/* SWITCHERY */
function initSwitchery() {
	// if-else statement used only for fixing <IE9 issues
	if (Array.prototype.forEach) {
		var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
		elems.forEach(function(html) {
			var switchery = new Switchery(html);
		});
	} else {
		var elems = document.querySelectorAll('.js-switch');
		for (var i = 0; i < elems.length; i++) {
			var switchery = new Switchery(elems[i]);
		}
	}
	
	/* DISABLED SWITCH */
	var disabled = document.querySelector('.js-switch-disabled');
	var switchery = new Switchery(disabled, { disabled: true });
	
	var disabledOpacity = document.querySelector('.js-switch-disabled-opacity');
	var switchery = new Switchery(disabledOpacity, { disabled: true, disabledOpacity: 0.75 });
	
	/* COLORED SWITCH */
	var blue = document.querySelector('.js-switch-blue');
	var switchery = new Switchery(blue, { color: '#41b7f1' });
	
	var pink = document.querySelector('.js-switch-pink');
	var switchery = new Switchery(pink, { color: '#ff7791' });
	
	var teal = document.querySelector('.js-switch-teal');
	var switchery = new Switchery(teal, { color: '#3cc8ad' });
	
	var red = document.querySelector('.js-switch-red');
	var switchery = new Switchery(red, { color: '#db5554' });
	
	var secondary = document.querySelector('.js-switch-secondary');
	var switchery = new Switchery(secondary, { color: '#fec200', secondaryColor: '#ff8787' });
}

/* DATETIME PICKER */
function initDatetime() {
	/* DEFAULT PICKER */
	$('.form_datetime').datetimepicker({
		weekStart: 1,
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
		showMeridian: 1
	});
	
	/* DATE PICKER  */
	$('.form_date').datetimepicker({
		weekStart: 1,
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
	});
	
	/* TIME PICKER */
	$('.form_time').datetimepicker({
		weekStart: 1,
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 1,
		minView: 0,
		maxView: 1,
		forceParse: 0
	});
	
	/* DECADE PICKER */
	$('.form_decade').datetimepicker({
		weekStart: 1,
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 0,
		startView: 4,
		forceParse: 0
	});
	
	/* YEAR PICKER */
	$('.form_year').datetimepicker({
		weekStart: 1,
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 0,
		startView: 3,
		forceParse: 0
	});
	
	/* MONTH PICKER */
	$('.form_month').datetimepicker({
		weekStart: 1,
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 0,
		startView: 3,
		forceParse: 0
	});
	
	/* DAY PICKER */
	$('.form_day').datetimepicker({
		weekStart: 1,
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 0,
		startView: 2,
		forceParse: 0
	});
	
	/* DAY MERIDIAN PICKER */
	$('.form_daymeridian').datetimepicker({
		weekStart: 1,
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 0,
		startView: 2,
		showMeridian: 1,
		forceParse: 0
	});
	
	/* HOUR PICKER */
	$('.form_hour').datetimepicker({
		weekStart: 1,
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 0,
		startView: 1,
		forceParse: 0
	});
	
	/* HOUR MERIDIAN PICKER */
	$('.form_hourmeridian').datetimepicker({
		weekStart: 1,
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 0,
		startView: 1,
		showMeridian: 1,
		forceParse: 0
	});
}

/* COLOR PICKER */
function initColorpicker() {
	$('.cp_input1').colorpicker();
	
	$('.cp_input2').colorpicker({
		format: 'rgba', // force this format
		horizontal: true
	});
	
	$('.cp_inline').colorpicker();
}
	
/* SELECT2 */
function initSelect2() {
	var opts=$("#source").html(), opts2="<option></option>"+opts;
	$("select.populate").each(function() { var e=$(this); e.html(e.hasClass("placeholder")?opts2:opts); });
	
	$("#e1").select2();
	$("#e2").select2();
	$("#e3").select2({tags:["red", "green", "blue"]});
	
	$(".slider").slider();
}

$(function() {
	"use strict";
	
	initiCheck();
	initSwitchery();
	initDatetime();
	initColorpicker();
	initSelect2();
});