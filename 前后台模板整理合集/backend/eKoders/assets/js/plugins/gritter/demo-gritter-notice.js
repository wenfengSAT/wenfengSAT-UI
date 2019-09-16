jQuery(function($) {
	jQuery('#gritter-default').click(function(){
		jQuery.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is a regular notice!',
			// (string | mandatory) the text inside the notification
			text: 'This will fade out after a certain amount of time.',
			// (bool | optional) if you want it to fade out on its own or just sit there
			sticky: false,
			// use style classes 
			class_name: '',
			// (int | optional) the time you want it to be alive for before fading out
			time: ''				
		});
		return false;
	});
	
	jQuery('#gritter-sticky').click(function(){
		jQuery.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is a sticky notice!',
			// (string | mandatory) the text inside the notification
			text: 'This will fade out after a certain amount of time.',
			// (bool | optional) if you want it to fade out on its own or just sit there
			sticky: true,
			// use style classes 
			class_name: 'bg-info',
			// (int | optional) the time you want it to be alive for before fading out
			time: ''				
		});
		return false;
	});
	
	jQuery('#gritter-with-image').click(function(){
		jQuery.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'A notice with an image!',
			// (string | mandatory) the text inside the notification
			text: 'This will fade out after a certain amount of time.',
			// (string | optional) the image to display on the left
			image: 'assets/images/user-profile-2.jpg',			
			// (bool | optional) if you want it to fade out on its own or just sit there
			sticky: false,
			// use style classes 
			class_name: 'bg-success',
			// (int | optional) the time you want it to be alive for before fading out
			time: ''				
		});
		return false;
	});
	
	jQuery('#gritter-centered').click(function(){
		jQuery.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is a centered notification!',
			// (string | mandatory) the text inside the notification
			text: 'Just add a "gritter-center" class_name to your $.gritter.add or globally to $.gritter.options.class_name.',
			// (bool | optional) if you want it to fade out on its own or just sit there
			sticky: false,
			// use style classes 
			class_name: 'bg-warning gritter-center',
			// (int | optional) the time you want it to be alive for before fading out
			time: ''				
		});
		return false;
	});
	
	jQuery('#gritter-light-color').click(function(){
		jQuery.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'This is in yellow color!',
			// (string | mandatory) the text inside the notification
			text: 'Just add a "gritter-light" class_name to your $.gritter.add.',
			// (bool | optional) if you want it to fade out on its own or just sit there
			sticky: false,
			// use style classes 
			class_name: 'gritter-light',
			// (int | optional) the time you want it to be alive for before fading out
			time: ''				
		});
		return false;
	});
	
	jQuery('#gritter-remove-all').click(function(){
		jQuery.gritter.removeAll();
		return false;
	});
});