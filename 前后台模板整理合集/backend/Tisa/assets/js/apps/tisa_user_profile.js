
    $(function() {
		// button switches
		if ($('.bs_switch').length) {
			$(".bs_switch").bootstrapSwitch();
		}
		// language select
		if ($('#user_languages').length) {
			$('#user_languages').select2({
				placeholder: "Select language...",
				tags:["English", "Chinese", "Dutch", "French", "German", "Hungarian", "Italian", "Lithuanian", "Russian", "Spanish", "Swedish", "Ukrainian"],
				tokenSeparators: [",", " "]
			});
		}
	})