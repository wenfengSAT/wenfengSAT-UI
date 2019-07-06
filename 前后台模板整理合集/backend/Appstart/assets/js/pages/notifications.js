//------------- blank.js -------------//
$(document).ready(function() {

	//get object with colros from plugin and store it.
	var objColors = $('body').data('appStart').getColors();
	var colours = {
		white: objColors.white,
		dark: objColors.dark,
		red : objColors.red,
		blue: objColors.blue,
		green : objColors.green,
		yellow: objColors.yellow,
		brown: objColors.brown,
		orange : objColors.orange,
		purple : objColors.purple,
		pink : objColors.pink,
		lime : objColors.lime,
		magenta: objColors.magenta,
		teal: objColors.teal,
		textcolor: '#5a5e63',
		gray: objColors.gray
	}

	//get settings object
    var jumpObject = $('body').data('appStart');
    var settings = jumpObject.settings;

	//------------- Gritter notices -------------//

	//info notice
	$('#regular-notice').click(function() {
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Eric Hofman',
			// (string | mandatory) the text inside the notification
			text: 'User is just logged into system.',
			// (string | optional) the image to display on the left
			image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg',
			// (string) specify font-face icon  class for close message
			close_icon: 'im-close2',
		});		
	});

	//info notice
	$('#info-notice').click(function() {
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Email send',
			// (string | mandatory) the text inside the notification
			text: 'Just let you know, you send last email without problems',
			// (int | optional) the time you want it to be alive for before fading out
			time: '',
			// (string) specify font-face icon  class for close message
			close_icon: 'im-close2',
			// (string) specify font-face icon class for big icon in left. if are specify image this will not show up.
			icon: 'im-envelop',
			// (string | optional) the class name you want to apply to that specific message
			class_name: 'info-notice'
		});		
	});

	//success notice
	$('#success-notice').click(function() {
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Done !!!',
			// (string | mandatory) the text inside the notification
			text: 'You successfull delete 13 files.<br> <a href="#" class="btn btn-xs btn-default mt10">Roll back</a>',
			// (int | optional) the time you want it to be alive for before fading out
			time: '',
			// (string) specify font-face icon  class for close message
			close_icon: 'im-close2',
			// (string) specify font-face icon class for big icon in left. if are specify image this will not show up.
			icon: 'fa fa-trash-o',
			// (string | optional) the class name you want to apply to that specific message
			class_name: 'success-notice'
		});		
	});

	//error notice
	$('#error-notice').click(function() {
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Warrning !!!',
			// (string | mandatory) the text inside the notification
			text: '22 users closed their accounts, due to spam issues on server.',
			// (int | optional) the time you want it to be alive for before fading out
			time: '',
			// (string) specify font-face icon  class for close message
			close_icon: 'im-close2',
			// (string) specify font-face icon class for big icon in left. if are specify image this will not show up.
			icon: 'im-users3',
			// (string | optional) the class name you want to apply to that specific message
			class_name: 'error-notice'
		});
	});

	//sticky notice
	$('#sticky-notice').click(function() {
		var unique_id = $.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Eric Hofman',
			// (string | mandatory) the text inside the notification
			text: 'I just send you email, please check it out and tell me what you think',
			// (string | optional) the image to display on the left
			image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg',
			// (bool | optional) if you want it to fade out on its own or just sit there
			sticky: true,
			// (int | optional) the time you want it to be alive for before fading out
			time: '',
			// (string) specify font-face icon  class for close message
			close_icon: 'im-close2',
			// (string) specify font-face icon class for big icon in left. if are specify image this will not show up.
		});
	});

	$('#topleft-notice').click(function() {
		$.extend($.gritter.options, { 
		    position: 'top-left',
		});
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Eric Hofman',
			// (string | mandatory) the text inside the notification
			text: 'User is just logged into system.',
			// (string | optional) the image to display on the left
			image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg',
			// (string) specify font-face icon  class for close message
			close_icon: 'im-close2',
			sticky: true,
		});		
	});

	$('#bottomleft-notice').click(function() {
		$.extend($.gritter.options, { 
		    position: 'bottom-left',
		});
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Eric Hofman',
			// (string | mandatory) the text inside the notification
			text: 'User is just logged into system.',
			// (string | optional) the image to display on the left
			image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg',
			// (string) specify font-face icon  class for close message
			close_icon: 'im-close2',
		});		
	});

	$('#bottomright-notice').click(function() {
		$.extend($.gritter.options, { 
		    position: 'bottom-right',// possibilities: bottom-left, bottom-right, top-left, top-right
		});
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Eric Hofman',
			// (string | mandatory) the text inside the notification
			text: 'User is just logged into system.',
			// (string | optional) the image to display on the left
			image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg',
			// (string) specify font-face icon  class for close message
			close_icon: 'im-close2',
		});		
	});


	
	//------------- Title notifications -------------//
	$('#add-notification').click(function(){
		titlenotifier.add();
	});
	$('#subsctract-notification').click(function(){
		titlenotifier.sub();
	});
	$('#number-notification').click(function(){
		titlenotifier.set(5);
	});
	$('#reset-notification').click(function(){
		titlenotifier.reset();
	});
 	
});