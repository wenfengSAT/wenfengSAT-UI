var FormElements = function() {"use strict";
	//function to initiate jquery.inputlimiter
	var runInputLimiter = function() {
		$('.limited').inputlimiter({
			remText: 'You only have %n character%s remaining...',
			remFullText: 'Stop typing! You\'re not allowed any more characters!',
			limitText: 'You\'re allowed to input %n character%s into this field.'
		});
	};
	//function to initiate query.autosize
	var runAutosize = function() {
		$("textarea.autosize").autosize();
	};
	//function to initiate Select2
	var runSelect2 = function() {
		$(".search-select").select2({
			placeholder: "Select a State",
			allowClear: false
		});
	};
	//function to initiate Callback on Checkbox and RadioButton
	var runCalbackIcheck = function() {
		$('input.checkbox-callback').on('ifChecked', function(event) {
			alert('Checked');
		});
		$('input.checkbox-callback').on('ifUnchecked', function(event) {
			alert('Unchecked');
		});
		$('input.radio-callback').on('ifChecked', function(event) {
			alert('checked ' + $(this).val() + ' radio button');
		});
	};
	//function to initiate jquery.maskedinput
	var runMaskInput = function() {
		$.mask.definitions['~'] = '[+-]';
		$('.input-mask-date').mask('99/99/9999');
		$('.input-mask-phone').mask('(999) 999-9999');
		$('.input-mask-eyescript').mask('~9.99 ~9.99 999');
		$(".input-mask-product").mask("a*-999-a999", {
			placeholder: " ",
			completed: function() {
				alert("You typed the following: " + this.val());
			}
		});
	};
	//function to initiate bootstrap-touchspin
	var runTouchSpin = function() {
		$("input[name='demo1']").TouchSpin({
			min: 0,
			max: 100,
			step: 0.1,
			decimals: 2,
			boostat: 5,
			maxboostedstep: 10,
			postfix: '%'
		});
		$("input[name='demo2']").TouchSpin({
			min: -1000000000,
			max: 1000000000,
			stepinterval: 50,
			maxboostedstep: 10000000,
			prefix: '$'
		});
		$("input[name='demo3']").TouchSpin({
			verticalbuttons: true
		});
		$("input[name='demo4']").TouchSpin({
			verticalbuttons: true,
			verticalupclass: 'fa fa-plus',
			verticaldownclass: 'fa fa-minus'
		});
		$("input[name='demo5']").TouchSpin({
			postfix: "a button",
			postfix_extraclass: "btn btn-default"
		});
		$("input[name='demo6']").TouchSpin({
			postfix: "a button",
			postfix_extraclass: "btn btn-default"
		});
		$("input[name='demo7']").TouchSpin({
			prefix: "pre",
			postfix: "post"
		});
	};
	//function to initiate Mask Money
	var runMaskMoney = function() {
		$(".currency").maskMoney();
	};
	//function to initiate bootstrap-datepicker
	var runDatePicker = function() {
		$('.date-picker').datepicker({
			autoclose: true
		});
	};
	//function to initiate bootstrap-timepicker
	var runTimePicker = function() {
		$('.time-picker').timepicker();
	};
	//function to initiate daterangepicker
	var runDateRangePicker = function() {
		$('.date-range').daterangepicker();
		$('.date-time-range').daterangepicker({
			timePicker: true,
			timePickerIncrement: 15,
			format: 'MM/DD/YYYY h:mm A'
		});
	};
	//function to initiate bootstrap-colorpicker
	var runColorPicker = function() {
		$('.color-picker').colorpicker({
			format: 'hex'
		});
		$('.color-picker-rgba').colorpicker({
			format: 'rgba'
		});
		$('.colorpicker-component').colorpicker();
	};
	//function to initiate bootstrap-colorpalette
	var runColorPalette = function() {
		$('.color-palette').colorPalette().on('selectColor', function(e) {
			$('#selected-color1').val(e.color);
		});
	};
	//function to initiate jquery.tagsinput
	var runTagsInput = function() {
		$('#tags_1').tagsInput({
			width: 'auto'
		});
	};
	//function to initiate summernote
	var runSummerNote = function() {
		$('.summernote').each(function() {
			var _thisNote = $(this);
			$(this).summernote({
				height: 300,
				tabsize: 2,
				oninit: function() {
					if(_thisNote.code() == "" || _thisNote.code().replace(/(<([^>]+)>)/ig, "") == "") {
						_thisNote.code(_thisNote.attr("placeholder"));
					}
				},
				onfocus: function(e) {
					if(_thisNote.code() == _thisNote.attr("placeholder")) {
						_thisNote.code("");
					}
				},
				onblur: function(e) {
					if(_thisNote.code() == "" || _thisNote.code().replace(/(<([^>]+)>)/ig, "") == "") {
						_thisNote.code(_thisNote.attr("placeholder"));
					}
				}
			});
		});
	};
	//function to initiate ckeditor
	var runCKEditor = function() {
		CKEDITOR.disableAutoInline = true;
		$('textarea.ckeditor').ckeditor();
	};
	return {
		//main function to initiate template pages
		init: function() {
			runInputLimiter();
			runAutosize();
			runSelect2();
			runMaskInput();
			runTouchSpin();
			runMaskMoney();
			runDatePicker();
			runTimePicker();
			runDateRangePicker();
			runCalbackIcheck();
			runColorPicker();
			runColorPalette();
			runTagsInput();
			runSummerNote();
			runCKEditor();
		}
	};
}();
