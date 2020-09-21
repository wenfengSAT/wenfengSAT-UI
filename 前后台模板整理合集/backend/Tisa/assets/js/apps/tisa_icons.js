	
	$(function() {
		// quicksearch
		if($('input#icon_find').length) {
			$('input#icon_find').val('').quicksearch('ul#glyphicons_list li,ul#fontawesome_list li,ul#ionicons_list li,#flags_list li');
		}
	})