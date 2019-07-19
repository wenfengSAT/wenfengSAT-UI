$(document).ready(function(){

	//  main button click function
	$('button.create-task').on('click', function(){

		// remove nothing message
		if ('.nothing-message') {
			$('.nothing-message').hide('slide',{direction:'left'},300)
		};

		// create the new li from the form input
		var task = $('input[name=task-insert]').val();
		var newTask = '<li class="col-md-6">' + '<p>'+task+'</p>' + '</li>'
		$('#task-list').append(newTask);

		// clear form when button is pressed
		$('input').val('');

		// Alert if the form in submitted empty
		if (task.length == 0) {
			alert('please enter a task');
		};

		// makes other controls fade in when first task is created
		$('#controls').fadeIn();
		$('.task-headline').fadeIn();
	});

	// mark as complete
	$(document).on('click','li',function(){
		$(this).toggleClass('complete');
	});
	
	// double click to remove
	$(document).on('dblclick','li',function(){
		$(this).remove();
	});

	// Clear all tasks button
	$('button#clear-all-tasks').on('click', function(){
		$('#task-list li').remove();
		$('.task-headline').fadeOut();
		$('#controls').fadeOut();
		$('.nothing-message').show('fast');
	});
});