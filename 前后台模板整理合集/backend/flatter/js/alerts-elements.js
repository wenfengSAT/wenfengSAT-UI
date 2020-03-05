 $("#alert").on( 'click', function () {
			alertify.alert("This is an alert dialog");
			return false;
		});

		$("#confirm").on( 'click', function () {
			alertify.confirm("This is a confirm dialog", function (e) {
				if (e) {
					alertify.success("You've clicked OK");
				} else {
					alertify.error("You've clicked Cancel");
				}
			});
			return false;
		});

		$("#prompt").on( 'click', function () {
			alertify.prompt("This is a prompt dialog", function (e, str) {
				if (e) {
					alertify.success("You've clicked OK and typed: " + str);
				} else {
					alertify.error("You've clicked Cancel");
				}
			}, "Default Value");
			return false;
		});

		$("#custom").on( 'click', function () {
			alertify.set({ labels: { ok: "Yes", cancel: "No" } });
			alertify.confirm("Do you like this theme?", function (e) {
				if (e) {
					alertify.success("You are awesome!");
				} else {
					alertify.error("I am sorry, if you didn't.");
				}
			});
			return false;
		});


		//Messenger
		/*
			This should be used as default outside.

			Messenger.options = {
				extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
			    theme: 'flat'
			}

		*/

		$('#simpleMessenger').on('click',function(){
			//Note this is used for theme and can be used globally.
			Messenger.options = {
				extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
			    theme: 'flat'
			}
			Messenger().post("This is just a notification.");
		});
		$('#closebuttonMessenger').on('click',function(){

			//Note this is used for theme and can be used globally.
			Messenger.options = {
				extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
			    theme: 'flat'
			}

			Messenger().post({
			  message: 'There was an explosion while processing your request.',
			  type: 'error',
			  showCloseButton: true,
			});
		});

		$('#TopMessenger').on('click',function(){
			//Note this is used for theme and can be used globally.
			Messenger.options = {
				extraClasses: 'messenger-fixed messenger-on-top',
			    theme: 'flat'
			}
			Messenger().post("This is just a notification.");
		});

		$('#TopleftMessenger').on('click',function(){
			//Note this is used for theme and can be used globally.
			Messenger.options = {
				extraClasses: 'messenger-fixed messenger-on-top messenger-on-left',
			    theme: 'flat'
			}
			Messenger().post("This is just a notification.");
		});

		$('#ToprightMessenger').on('click',function(){
			//Note this is used for theme and can be used globally.
			Messenger.options = {
				extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
			    theme: 'flat'
			}
			Messenger().post("This is just a notification.");
		});

		$('#BottomMessenger').on('click',function(){
			//Note this is used for theme and can be used globally.
			Messenger.options = {
				extraClasses: 'messenger-fixed messenger-on-bottom',
			    theme: 'flat'
			}
			Messenger().post("This is just a notification.");
		});

		$('#BottomleftMessenger').on('click',function(){
			//Note this is used for theme and can be used globally.
			Messenger.options = {
				extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-left',
			    theme: 'flat'
			}
			Messenger().post("This is just a notification.");
		});