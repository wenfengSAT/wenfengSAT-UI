    $(function() {
		$( "#sortable-todo" ).sortable();
		$( "#sortable-todo" ).disableSelection();
	});
	
	$('#sortable-todo li input').on('click', function(e) {
		
		if($(this).is(":checked"))
		{
			$("#sortable-todo li.todo-list-active").removeClass('todo-list-active');
			$(this).closest('li').addClass('todo-list-active');
			$(this).closest('li').wrap("<strike>");
		}
		else
		{
			$(this).closest('li').removeClass('todo-list-active');
			$(this).closest('li').unwrap();
		}
		
	});
	$('.todo-remove').on('click', function(e) {
		$(this).closest('li').remove();
	});
	$(document).ready(function(){
		$('.todo-list-active').wrap("<strike>");
		$('.todo-list-active input[type="checkbox"]').prop("checked", true);
	});