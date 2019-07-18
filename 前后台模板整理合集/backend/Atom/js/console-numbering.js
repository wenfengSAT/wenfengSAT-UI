$('#console-pad').keyup(function(e) {
	if ($(this).val().lastIndexOf('\n')!=-1)
		x = $(this).val().split('\n');
	if(e.keyCode == "13")
	{
		$('.console-numbers').append('<li>'+x.length+'</li>'); // This will be the line number
	}
	else if(e.keyCode == "8")
	{
		if($(".console-numbers li").size() > x.length)
			$('.console-numbers li:last-child').remove();
	}
});
