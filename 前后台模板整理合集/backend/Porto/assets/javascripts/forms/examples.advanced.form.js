/*
Name: 			Forms / Advanced - Examples
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version: 	1.4.1
*/

(function($) {


	/*
	Multi Select: Toggle All Button
	*/
	function multiselect_selected($el) {
		var ret = true;
		$('option', $el).each(function(element) {
			if (!!!$(this).prop('selected')) {
				ret = false;
			}
		});
		return ret;
	}

	function multiselect_selectAll($el) {
		$('option', $el).each(function(element) {
			$el.multiselect('select', $(this).val());
		});
	}

	function multiselect_deselectAll($el) {
		$('option', $el).each(function(element) {
			$el.multiselect('deselect', $(this).val());
		});
	}

	function multiselect_toggle($el, $btn) {
		if (multiselect_selected($el)) {
			multiselect_deselectAll($el);
			$btn.text("Select All");
		}
		else {
			multiselect_selectAll($el);
			$btn.text("Deselect All");
		}
	}

	$("#ms_example7-toggle").click(function(e) {
		e.preventDefault();
		multiselect_toggle($("#ms_example7"), $(this));
	});

	/*
	Slider Range: Output Values
	*/
	$('#listenSlider').change(function() {
		$('.output b').text( this.value );
	});

	$('#listenSlider2').change(function() {
		var min = parseInt(this.value.split('/')[0], 10);
		var max = parseInt(this.value.split('/')[1], 10);

		$('.output2 b.min').text( min );
		$('.output2 b.max').text( max );
	});

	/*
	Bootstrap Confirmation - BASIC
	*/
	$('[data-toggle="confirmation"]').confirmation();

	/*
	Bootstrap Confirmation - CALLBACK
	*/
	$('.confirmation-callback').confirmation({
		onConfirm: function() {
			alert('You clicked: confirm' );
		},
		onCancel: function() {
			alert('You clicked: cancel' );
		}
	});

}(jQuery));