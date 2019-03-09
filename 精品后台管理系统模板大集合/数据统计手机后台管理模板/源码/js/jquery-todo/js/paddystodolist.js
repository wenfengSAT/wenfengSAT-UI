$(document).ready(function() {
	
	// Making the two main lists sortable. 
	// These functions are part of jQuery UI. 
	$('#toDoList, #completeList').sortable({
                helper: 'clone',
                opacity: '.1'
    });
    $('#toDoList, #completeList').disableSelection(function(e) {
	    e.stopPropagation();
    });
    
    // Click the "DO IT" button to add a new item to the list. 
    $('#addItem').click(function(e) {
        e.preventDefault();
        
        // Create a variable that stores the value of the input field #newItem 
        // when the button is clicked.
        var $newItemText = $('#newItem').val();
        
        // Validation: if the variable $newItemText doesn’t contain any text, 
        // add a class with a red outline, but don’t create a new to-do yet.
        // First check if the field is empty. 
        if ( $newItemText === '' ) {
        	// Then add the class to show a red outline.
            $('#newItem').addClass('emptyBox'); 
        }
        
        // If $newItemText does contain text, create a new to-do with that text.
        // Then empty the input field ready for the next input.
        else {
            $('<li class="toDo">' + $newItemText + '</li>').prependTo('#toDoList').hide().slideDown('fast');
            $('#newItem').removeClass('emptyBox');
            $('#newItem').val('');
        }
    });

    
    // Click on an active to-do to mark it as completed.
    $('#toDoList').on('click', '.toDo', function() {
		$(this)
			// First, swap its class to turn it green
			.switchClass("toDo", "notEasy", 50, function() {
				$(this)
					// Then, after a brief pause, slide it up out of sight.
					.delay(200)
					.slideUp(200, function() {
					$(this)
						// Append it to the bottom of the list of completed items.
						.appendTo('#completeList')
						// Swap the class to the completed state.
						.switchClass("notEasy", "youCompleteMe")
						// And finally, slide it back into view.
						.slideDown(200);
				});
			});
	});

	// Click on a completed to-do to make it active again.
	$('#completeList').on('click', '.youCompleteMe', function() {
		$(this)
			// Slide it up out of sight.
			.slideUp(200, function() {
				$(this)
					// Then swap the class back to the active state.
					.switchClass("youCompleteMe", "toDo")
					// Prepend it to the top of the list of active items.
					.prependTo('#toDoList')
					// And slide it back into view.
					.slideDown(200);
			});
		/* $(this).children('.johnKruger').remove(); */
	});

});






