	
	$(function() {
		// multiselect
		tisa_multiselect.init();
		// datepicker
		tisa_datepicker.init();
		// wysiwg editor
		tisa_wysiwg.init();
	})
	
	
	// multiselect
	tisa_multiselect = {
		init: function() {
			if($('#s2_validate').length) {
				$('#s2_validate').select2({
					allowClear: true,
					placeholder: "Select..."
				});
			}
		}
	}
	
	// datepicker
	tisa_datepicker = {
		init: function() {
			if($('.ts_datepicker').length) {
				$('.ts_datepicker').datepicker({
					todayHighlight: true
				});
			}
		}
	}
	
	// wysiwg editor
	tisa_wysiwg = {
		init: function() {
			if ($('#ckeditor_validate').length) {
				var editor_validate = $('textarea#ckeditor_validate').ckeditor();
				CKEDITOR.instances.ckeditor_validate.on('blur', function( e ){
					editor_validate.parsley().validate();
				});
			}
		}
	}