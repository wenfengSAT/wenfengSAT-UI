///////////////////////////
// Form Extras Functions //
///////////////////////////

"use strict";

$(document).ready(function(){
	/**
	 * DEMO CODE
	 * These lines of code below are merely demo purposes. Build upon them and create your own
	 * Check documentation for usage
	 */
	
	/* Field Masks */
	$('.date').mask('00/00/0000');
	$('.time').mask('00:00:00');
	$('.date_time').mask('00/00/0000 00:00:00');
	$('.cep').mask('00000-000');
	$('.phone').mask('0000-0000');
	$('.phone_with_ddd').mask('(00) 0000-0000');
	$('.phone_us').mask('(000) 000-0000');
	$('.mixed').mask('AAA 000-S0S');
	$('.cpf').mask('000.000.000-00', {reverse: true});
	$('.money').mask('000,000,000,000,000.00', {reverse: true});
	$('.money2').mask("#,##0.00", {reverse: true});
	$('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
		translation: {
			'Z': {
				pattern: /[0-9]/, optional: true
			}
		}
	});
	$('.ip_address').mask('099.099.099.099');
	$('.percent').mask('##0,00%', {reverse: true});
	$('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
	$('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
	$('.fallback').mask("00r00r0000", {
		translation: {
			'r': {
				pattern: /[\/]/, 
				fallback: '/'
			}, 
			placeholder: "__/__/____"
		}
	});

	$('.cep_with_callback').mask('00000-000', {onComplete: function(cep) {
		},
		onKeyPress: function(cep, event, currentField, options){
		},
		onInvalid: function(val, e, field, invalid, options){
			var error = invalid[0];
		}
	});
	$('.crazy_cep').mask('00000-000', {onKeyPress: function(cep){
		var masks = ['00000-000', '0-00-00-00'];
		mask = (cep.length>7) ? masks[1] : masks[0];
		$('.crazy_cep').mask(mask, this);
	}});
	$('.cpf').mask('000.000.000-00', {reverse: true});
	$('.money').mask('#.##0,00', {reverse: true});
	var SaoPauloCelphoneMask = function(phone, e, currentField, options){
		return phone.match(/^(\(?11\)? ?9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])[0-9]{1})/g) ? '(00) 00000-0000' : '(00) 0000-0000';
	};
	$(".sp_celphones").mask('(00) 00009-0000');
	$(".bt-mask-it").click(function(){
		$(".mask-on-div").mask("000.000.000-00");
		$(".mask-on-div").fadeOut(500).fadeIn(500)
	});


	/* iCheck - Radios, Checkboxes*/
	// Square
	$("#checkbox-form .icheck-square").iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-red',
		increaseArea: '20%' // optional
	});

	// Minimal
	$("#checkbox-form .icheck-minimal").iCheck({
		checkboxClass: 'icheckbox_minimal-yellow',
		radioClass: 'iradio_minimal-orange',
		increaseArea: '20%' // optional
	});

	// Flat
	$("#checkbox-form .icheck-flat").iCheck({
		checkboxClass: 'icheckbox_flat-purple',
		radioClass: 'iradio_flat-green',
		increaseArea: '20%' // optional
	});

	// Line
	$("#checkbox-form .icheck-line input").each(function(){
		var self = $(this),
		label = self.next(),
		label_text = label.text();

		label.remove();
		self.iCheck({
			checkboxClass: 'icheckbox_line-blue',
			radioClass: 'iradio_line-purple',
			insert: '<div class="icheck_line-icon"></div>' + label_text
		});
	});

	// Polaris
	$("#checkbox-form .icheck-polaris").iCheck({
		checkboxClass: 'icheckbox_polaris',
		radioClass: 'iradio_polaris'
	});

	// Futurico
	$("#checkbox-form .icheck-futurico").iCheck({
		checkboxClass: 'icheckbox_futurico',
		radioClass: 'iradio_futurico',
		increaseArea: '20%' // optional
	});


	/* Switchery */
	// Green
	var switcheryElemsGreen = Array.prototype.slice.call(document.querySelectorAll('.js-switch-green'));
	switcheryElemsGreen.forEach(function(html) {
		var initElemsGreen = new Switchery(html, {color: '#00a99d'});
	});

	// Orange
	var switcheryElemsOrange = Array.prototype.slice.call(document.querySelectorAll('.js-switch-orange'));
	switcheryElemsOrange.forEach(function(html) {
		var initElemsOrange = new Switchery(html, {color: '#e86219'});
	});

	// Yellow
	var switcheryElemsYellow = Array.prototype.slice.call(document.querySelectorAll('.js-switch-yellow'));
	switcheryElemsYellow.forEach(function(html) {
		var initElemsYellow = new Switchery(html, {color: '#ffc40d'});
	});

	// Blue
	var switcheryElemsBlue = Array.prototype.slice.call(document.querySelectorAll('.js-switch-blue'));
	switcheryElemsBlue.forEach(function(html) {
		var initElemsBlue = new Switchery(html, {color: '#4596f1'});
	});

	// Red
	var switcheryElemsRed = Array.prototype.slice.call(document.querySelectorAll('.js-switch-red'));
	switcheryElemsRed.forEach(function(html) {
		var initElemsRed = new Switchery(html, {color: '#ee1111'});
	});

	// Lime
	var switcheryElemsLime = Array.prototype.slice.call(document.querySelectorAll('.js-switch-lime'));
	switcheryElemsLime.forEach(function(html) {
		var initElemsLime = new Switchery(html, {color: '#99b433'});
	});

	// Pink
	var switcheryElemsPink = Array.prototype.slice.call(document.querySelectorAll('.js-switch-purple'));
	switcheryElemsPink.forEach(function(html) {
		var initElemsPink = new Switchery(html, {color: '#ff0097'});
	});


	/* Powerange Slider */
	// Horizontal
	var powerageElemsHorizontal = Array.prototype.slice.call(document.querySelectorAll('.powerange-horizontal'));
	var startValue = 12;
	powerageElemsHorizontal.forEach(function(html){
		var initPowerageElemsHorizontal = new Powerange(html, {start: startValue});
		startValue = startValue + 12;
	});

	// Vertical
	var powerageElemsVertical = Array.prototype.slice.call(document.querySelectorAll('.powerange-vertical'));
	var startValue = 88;
	powerageElemsVertical.forEach(function(html){
		var initPowerageElemsVertical = new Powerange(html, {vertical: true, start: startValue});
		startValue = startValue - 12;
	});


	/* TouchSpin Spinner */
	// Type 1
	$(".touchspin-type-1").TouchSpin({
		min: 0,
		max: 100,
		step: 0.1,
		decimals: 2,
		boostat: 5,
		maxboostedstep: 10,
		postfix: '%'
	});

	// Type 2
	$(".touchspin-type-2").TouchSpin({
		min: -1000000000,
		max: 1000000000,
		stepinterval: 50,
		maxboostedstep: 10000000,
		prefix: '$'
	});

	// Type 3
	$(".touchspin-type-3").TouchSpin({
		verticalbuttons: true
	});


	/* Input Tags - Color-Coded */
	var cities = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		prefetch: 'test-data/form-extras/json/cities.json'
	});
	cities.initialize();

	var elt = $('.input-tags-2');
	elt.tagsinput({
		tagClass: function(item) {
			switch (item.continent) {
				case 'Europe'   : return 'badge highlight-color-blue';
				case 'America'  : return 'badge highlight-color-red';
				case 'Australia': return 'badge highlight-color-green';
				case 'Africa'   : return 'label label-default';
				case 'Asia'     : return 'badge highlight-color-orange';
			}
		},
		itemValue: 'value',
		itemText: 'text',
		typeaheadjs: {
			name: 'cities',
			displayKey: 'text',
			source: cities.ttAdapter()
		}
	});
	elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
	elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
	elt.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
	elt.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
	elt.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });


	/* Date/Time Picker */
	// Basic
	$("#datetimepicker1").datetimepicker();

	// Time Only
	$('#datetimepicker2').datetimepicker({
		pickDate: false
	});
	
	// Date Only
	$('#datetimepicker3').datetimepicker({
		pickTime: false
	});
	
	// No Icon
	$('#datetimepicker4').datetimepicker();

	// Linked Event
	var eventStartDate = $('#datetimepicker5');
	var eventEndDate = $('#datetimepicker6');

	eventStartDate.datetimepicker();
	eventEndDate.datetimepicker();
	eventStartDate.on("dp.change",function(e) {
		eventEndDate.data("DateTimePicker").setMinDate(e.date);
	});
	eventEndDate.on("dp.change",function(e) {
		eventStartDate.data("DateTimePicker").setMaxDate(e.date);
	});


	/* Multi-Select */
	// Basic
	$('#multiselect-1').multiselect({
		buttonWidth: '100%'
	});

	// Multi-Select Group
	$('#multiselect-2').multiselect({
		enableClickableOptGroups: true,
		buttonWidth: '100%'
	});


	/* CKEditor */
	$("#demo-ckeditor").ckeditor();
});