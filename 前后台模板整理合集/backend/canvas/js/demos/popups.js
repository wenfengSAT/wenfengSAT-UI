$(function () {

	$('.howler').click (function (e) {

		$.howl ({
			type: $(this).data ('type')
			, title: 'Howl Message'
			, content: 'Lorem ipsum dolor sit amet, consect adipisicing elit.'
			, sticky: $(this).data ('sticky')
			, lifetime: 7500
			, iconCls: $(this).data ('icon')
		});

	});
		
});