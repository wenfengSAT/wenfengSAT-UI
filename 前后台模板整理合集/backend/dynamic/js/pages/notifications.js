//------------- notifications.js -------------//
$(document).ready(function() {

	//------------- Sparklines in header stats -------------//
	$('#spark-visitors').sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11,6,13,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-templateviews').sparkline([12,11,6,13,8,5,8,10,12,11,6,13,8,5,8,10,12,11,6,13,8,5,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-sales').sparkline([19,18,20,17,20,18,22,24,23,19,18,20,17,20,18,22,24,23,19,18,20,17], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
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

	//------------- Gritter notices -------------//

	//info notice
	$('#regular-notice').click(function() {
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Jonh Doe',
			// (string | mandatory) the text inside the notification
			text: 'User is just logged into system.',
			// (string | optional) the image to display on the left
			image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg',
			// (string) specify font-face icon  class for close message
			close_icon: 'l-arrows-remove s16'
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
			close_icon: 'l-arrows-remove s16',
			// (string) specify font-face icon class for big icon in left. if are specify image this will not show up.
			icon: 'fa fa-envelope',
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
			text: 'You successfull delete 13 files.<br> <a href="#" class="btn btn-xs btn-primary mt10">Roll back</a>',
			// (int | optional) the time you want it to be alive for before fading out
			time: '',
			// (string) specify font-face icon  class for close message
			close_icon: 'l-arrows-remove s16',
			// (string) specify font-face icon class for big icon in left. if are specify image this will not show up.
			icon: 'glyphicon glyphicon-trash',
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
			close_icon: 'l-arrows-remove s16',
			// (string) specify font-face icon class for big icon in left. if are specify image this will not show up.
			icon: 'glyphicon glyphicon-user',
			// (string | optional) the class name you want to apply to that specific message
			class_name: 'error-notice'
		});
	});

	//sticky notice
	$('#sticky-notice').click(function() {
		var unique_id = $.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Jonh Doe',
			// (string | mandatory) the text inside the notification
			text: 'I just send you email, please check it out and tell me what you think',
			// (string | optional) the image to display on the left
			image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg',
			// (bool | optional) if you want it to fade out on its own or just sit there
			sticky: true,
			// (int | optional) the time you want it to be alive for before fading out
			time: '',
			// (string) specify font-face icon  class for close message
			close_icon: 'l-arrows-remove s16',
			// (string) specify font-face icon class for big icon in left. if are specify image this will not show up.
		});
	});

	$('#topleft-notice').click(function() {
		$.extend($.gritter.options, { 
		    position: 'top-left',
		});
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Jonh Doe',
			// (string | mandatory) the text inside the notification
			text: 'User is just logged into system.',
			// (string | optional) the image to display on the left
			image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg',
			// (string) specify font-face icon  class for close message
			close_icon: 'l-arrows-remove s16',
			sticky: true,
		});		
	});

	$('#bottomleft-notice').click(function() {
		$.extend($.gritter.options, { 
		    position: 'bottom-left',
		});
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Jonh Doe',
			// (string | mandatory) the text inside the notification
			text: 'User is just logged into system.',
			// (string | optional) the image to display on the left
			image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg',
			// (string) specify font-face icon  class for close message
			close_icon: 'l-arrows-remove s16',
		});		
	});

	$('#bottomright-notice').click(function() {
		$.extend($.gritter.options, { 
		    position: 'bottom-right',// possibilities: bottom-left, bottom-right, top-left, top-right
		});
		$.gritter.add({
			// (string | mandatory) the heading of the notification
			title: 'Jonh Doe',
			// (string | mandatory) the text inside the notification
			text: 'User is just logged into system.',
			// (string | optional) the image to display on the left
			image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg',
			// (string) specify font-face icon  class for close message
			close_icon: 'l-arrows-remove s16',
		});		
	});

	//------------- Sweet alerts -------------//
	document.querySelector('.sweet-1').onclick = function(){
        swal("Here's a message!");
    };

    document.querySelector('.sweet-2').onclick = function(){
        swal("Here's a message!", "It's pretty, isn't it?");
    };

    document.querySelector('.sweet-3').onclick = function(){
        swal("Good job!", "You clicked the button!", "success");
    };

    document.querySelector('.sweet-4').onclick = function(){
        swal({
          title: "Are you sure?",
          text: "You will not be able to recover this imaginary file!",
          type: "warning",
          showCancelButton: true,
          confirmButtonClass: 'btn-danger',
          confirmButtonText: 'Yes, delete it!',
          closeOnConfirm: false
        },
        function(){
          swal("Deleted!", "Your imaginary file has been deleted!", "success");
        });
    };

    document.querySelector('.sweet-5').onclick = function(){
        swal({
          title: "Are you sure?",
          text: "You will not be able to recover this imaginary file!",
          type: "warning",
          showCancelButton: true,
          confirmButtonClass: 'btn-danger',
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: "No, cancel plx!",
          closeOnConfirm: false,
          closeOnCancel: false
        },
        function(isConfirm){
          window.console.log('fuck', isConfirm);
          if (isConfirm){
            swal("Deleted!", "Your imaginary file has been deleted!", "success");
          } else {
            swal("Cancelled", "Your imaginary file is safe :)", "error");
          }
        });
    };

    document.querySelector('.sweet-6').onclick = function(){
        swal({
          title: "Sweet!",
          text: "Here's a custom image.",
          imageUrl: 'img/thumbs-up.jpg'
        });
    };
	
});