///////////////////
// Pages Mailbox //
///////////////////

"use strict";

$(document).ready(function(){

	/**
	 * circloidMailboxInbox handles the inbox features
	 */
	function circloidMailboxInbox(){

		/* Select All Feature */
		$(".mailbox-controls .email-select-all input").iCheck({
			checkboxClass: 'icheckbox_square-blue checkbox-actual'
		});

		// First clear checkbox when page is refreshed
		$(".mailbox-controls .email-select-all input").iCheck("uncheck");
		
		$(".mailbox-controls .email-select-all input").on("ifChecked", function(){
			$(".mailbox-email-list tr .email-item-checkbox").iCheck("check");
		});
		$(".mailbox-controls .email-select-all input").on("ifUnchecked", function(){
			$(".mailbox-email-list tr .email-item-checkbox").iCheck("uncheck");
		});

		/* Email Controls */
		// Enable/Disable Controls
		$(".mailbox-email-list tr").find(".email-checkbox").on("ifChecked", function(e){
			$(".email-mark-read, .email-mark-junk, .email-delete").removeAttr("disabled", false);
		});
		$(".mailbox-email-list tr").find(".email-checkbox").on("ifUnchecked", function(e){
			var totalChecked = $(this).closest("tr").siblings().find(".checkbox-actual.checked").length;

			if(totalChecked <= 0){
				$(".email-mark-read, .email-mark-junk, .email-delete").attr("disabled", "disabled");
			}
		});

		/* Control Actions - You will have to connect your Server and Database to these code chunks - Start */

		// Refresh Email
		$(".email-refresh").on("click", function(e){
			// ADD YOUR AJAX CODE HERE. On success, call the code below or write a one that suits your needs
			location.reload();
			e.preventDefault();
		});

		// Mark Read
		$(".email-mark-read").on("click", function(e){
			// ADD YOUR AJAX CODE HERE. On success, call the code below or write a one that suits your needs
			$(".mailbox-email-list tr.email-status-unread").each(function(){
				$(this).find(".checkbox-actual.checked").closest("tr").removeClass("email-status-unread");
			});
			e.preventDefault();
		});

		// Delete Email
		$(".email-delete").on("click", function(e){
			// ADD YOUR AJAX CODE HERE. On success, call the code below or write a one that suits your needs
			$(".mailbox-email-list tr .checkbox-actual.checked").each(function(){
				$(this).closest("tr").fadeOut(300, function(){
					$(this).remove();
				});
			});

			$(".alert").remove();

			var messageDelete = '<div class="alert alert-success alert-dismissable" style="opacity:0;"><button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button><strong>Deleted!</strong> Email(s) deleted.</div>';

			$(".mailbox-controls").after(messageDelete);
			$(".alert").animate({"opacity":1}, 300);
			$(".email-mark-read, .email-mark-junk, .email-delete").attr("disabled", "disabled");

			e.preventDefault();
		});

		// Mark as Junk
		$(".email-mark-junk").on("click", function(e){
			// ADD YOUR AJAX CODE HERE. On success, call the code below or write a one that suits your needs
			$(".mailbox-email-list tr .checkbox-actual.checked").each(function(){
				$(this).closest("tr").fadeOut(300, function(){
					$(this).remove();
				});
			});

			$(".alert").remove();
			
			var messageDelete = '<div class="alert alert-success alert-dismissable" style="opacity:0;"><button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button><strong>Moved!</strong> Email(s) have been moved to the Junk Folder.</div>';

			$(".mailbox-controls").after(messageDelete);
			$(".alert").animate({"opacity":1}, 300);
			$(".email-mark-read, .email-mark-junk, .email-delete").attr("disabled", "disabled");

			e.preventDefault();
		});

		/* Control Actions - You will have to connect your Server and Database to these code chunks - End */

		/* Individual Email Features */
		$(".mailbox-email-list tr").each(function(){

			/* Star Email Feature */
			$(this).find(".email-star").on("click", function(){
				$(this).find(".email-star-status").toggleClass("checked");
			});

			/* Checkboxes - Individual */
			$(this).find(".email-checkbox").iCheck({
				checkboxClass: 'icheckbox_square-blue checkbox-actual'
			});

			$(this).find(".email-checkbox").on("click", function(){
				$(this).find(".email-item-checkbox").iCheck("toggle");
			});

			// First clear all checkboxes when page is refreshed
			$(this).find(".checkbox-actual.checked .email-item-checkbox").iCheck("uncheck");

			// Highlight Row when checkbox is clicked
			$(this).find(".email-checkbox").on('ifChecked', function(e){
				$(this).closest("tr").addClass("highlighted");
			});
			$(this).find(".email-checkbox").on('ifUnchecked', function(e){
				$(this).closest("tr").removeClass("highlighted");
			});
			

			/* Get and Set Email URL */
			var emailURL = $(this).data("email-url");

			$(this).find(".email-sender, .email-subject, .email-datetime").on("click", function(){
				window.location.href = emailURL;
			});
		});
	}

	/**
	 * circloidMailboxMessageView handles features on the message view of each email
	 */
	function circloidMailboxMessageView(){
		$("#show-others").on("click", function(e){
			$(".message-recepient-others").slideToggle(300);
			e.preventDefault();
		});
	}
	
	/**
	 * circloidMessageCompose handles the compose message feature
	 */
	function circloidMessageCompose(){

		var placeholder = $('.email-recepient');

		/* Handles Email Input */
		placeholder.each(function(e){

			var placeholderObj = $(this);
			var itemExists = false;

			var emails = {};

			emails["email" + e] = new Bloodhound({
				datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				prefetch: {
					url: 'test-data/pages-mailbox-message-compose/json/emails.json'
				}
			});

			emails["email" + e].initialize();

			placeholderObj.tagsinput({
				// NOT TO SELF: BEcause itemValue and itemText are set, you cannot add "free texts" that don't exist is the json...
				// Need solution
				tagClass: function(item) {

					if(placeholderObj.hasClass("email-recepient-main")){
						return 'badge highlight-color-green';
					}else if(placeholderObj.hasClass("email-recepient-cc")){
						return 'badge highlight-color-blue';
					}else if(placeholderObj.hasClass("email-recepient-bcc")){
						return 'badge highlight-color-purple';
					}else{
						return 'label label-info';
					}
				},
				itemValue: function(item){
					return item.value;
				},
				itemText: function(item){
					if(item.text == item.email){
						return item.email;
					}else{
						return item.text + " (" + item.email + ")";
					}
				},
				typeaheadjs: {
					name: 'emails',
					displayKey: 'text',
					source: emails["email" + e].ttAdapter()
				}
			});

			placeholderObj.on('itemAdded', function(event){
				itemExists = 1;
			});

			if(!itemExists){
				placeholderObj.siblings(".bootstrap-tagsinput").find('input.tt-input').bind("enterKey",function(e){

					var newEmail = $(this).val();
					var isValidEmail = circloidValidateForm(newEmail, "email");

					if($(this).val().trim() != ""){
						if(isValidEmail == true){
							// dynamicID is for DEMO PURPOSES ONLY. You will have to use the ID generated by your Database or Server,
							// so you don't wipe out othe email addresses.
							var dynamicID = placeholderObj.siblings(".bootstrap-tagsinput").find(".tag").length + 1000;

							placeholderObj.tagsinput('add', {"value": dynamicID, "text": newEmail, "email": newEmail});
							$(this).val('');

							placeholderObj.siblings(".bootstrap-tagsinput").find(".tag").last().removeAttr("class").addClass("tag label label-default");

							placeholderObj.parent().find(".help-block.text-danger").fadeOut(300, function(){
								$(this).remove();
							});
						}else{
							// display error message
							placeholderObj.parent().find(".help-block.text-danger").remove();

							var errorMessage = '<div class="help-block text-danger" style="display:none;">' + isValidEmail + '</div>';

							placeholderObj.parent().append(errorMessage);
							placeholderObj.parent().find(".help-block.text-danger").fadeIn(300);
						}
					}
				});
				placeholderObj.siblings(".bootstrap-tagsinput").find('input.tt-input').keydown(function(e){
					if(e.keyCode == 13){
						$(this).trigger("enterKey");
						e.preventDefault();
					}
				});
			}
		});

		// Bug fix: Removes duplicate email from Tags Input's input field when field is no longer in focus
		$("input.tt-input, input.tt-hint").on("blur", function(){
			$("input.tt-input, input.tt-hint").val("");
		});

		// DEMO ONLY: Delete on production site - Start
		$("#email-recepient-main").tagsinput('add', {"value": 5, "text": "Teal'c Jafar", "email": "tealc@example.com"});
		$("#email-recepient-cc").tagsinput('add', {"value": 2, "text": "Samantha Carter", "email": "samantha@example.com"});
		$("#email-recepient-cc").tagsinput('add', {"value": 4, "text": "Danielle Jackson", "email": "danielle@example.com"});
		$("#email-recepient-bcc").tagsinput('add', {"value": 6, "text": "George Hammond", "email": "george@example.com"});
		$("#email-recepient-bcc").tagsinput('add', {"value": 3, "text": "Jack O'Neill", "email": "jack@example.com"});
		// DEMO ONLY: Delete on production site - End

		// Fix width on Tags Input field
		$("input.tt-input, input.tt-hint").css({"width":"auto"});

		/* Handles Show/Hide Cc/Bcc */
		$("#add-cc").on("click", function(e){
			$(".email-recepient-cc-container").slideToggle(300);
			$(this).fadeToggle(300);
			e.preventDefault();
		});
		$("#remove-cc").on("click", function(e){
			$(".email-recepient-cc-container").slideToggle(300);
			$(".email-recepient-cc").tagsinput('removeAll');
			$("#add-cc").fadeToggle(300);
			e.preventDefault();
		});

		$("#add-bcc").on("click", function(e){
			$(".email-recepient-bcc-container").slideToggle(300);
			$(this).fadeToggle(300);
			e.preventDefault();
		});
		$("#remove-bcc").on("click", function(e){
			$(".email-recepient-bcc-container").slideToggle(300);
			$(".email-recepient-bcc").tagsinput('removeAll');
			$("#add-bcc").fadeToggle(300);
			e.preventDefault();
		});

		/* Handles Email Body */
		// CKEditor
		$("#email-body").ckeditor();

		/* Handles Email Sending */
		
		$("#send-email").on("click", function(){

			// IMPORTANT: Please read the documentation concerning Bootstrap Tags Input in order to get the data in the way you need it
			var emailsMainObj = $("#email-recepient-main").tagsinput('items');
			var emailsCcObj = $("#email-recepient-cc").tagsinput('items');
			var emailsBccObj = $("#email-recepient-bcc").tagsinput('items');
			var emailsMain = [];
			var emailsCc = [];
			var emailsBcc = [];
			var emailSubject = $("#email-subject").val().trim();

			if(emailsMainObj == ""){
				$(".alert").remove();

				var errorMessage = '<div class="alert alert-danger alert-dismissable text-left" style="display:none;"><button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button><strong>ERROR (DEMO ONLY)</strong><br /><br />The "To" field cannot be empty</div>';

				$(".message-compose-controls").before(errorMessage);
				$(".message-compose-controls").prev().fadeIn(300);
			}else if(emailSubject == ""){
				$(".alert").remove();

				var errorMessage = '<div class="alert alert-danger alert-dismissable text-left" style="display:none;"><button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button><strong>ERROR (DEMO ONLY)</strong><br /><br />The "Subject" field cannot be empty</div>';

				$(".message-compose-controls").before(errorMessage);
				$(".message-compose-controls").prev().fadeIn(300);
			}else{
				$(".alert").remove();
				
				// DEMO ONLY: The code below only collects the data from the email form and displays it for demo purposes only. You will have to alter it and connect your Database and Server in order to store the data.
				
				for(var i = 0; i < emailsMainObj.length; i++){
					emailsMain.push(emailsMainObj[i].email);
				};
				var emailsMainText = "<strong>To:</strong> " + emailsMain.toString() + "<br />";


				for(var i = 0; i < emailsCcObj.length; i++){
					emailsCc.push(emailsCcObj[i].email);
				};
				var emailsCcText = "<strong>Cc:</strong> " + emailsCc.toString() + "<br />";


				for(var i = 0; i < emailsBccObj.length; i++){
					emailsBcc.push(emailsBccObj[i].email);
				};
				var emailsBccText = "<strong>Bcc:</strong> " + emailsBcc.toString() + "<br />";


				var successMessage = '<div class="alert alert-success alert-dismissable text-left" style="display:none;"><button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button><strong>MESSAGE SENT (DEMO ONLY)</strong><br /><br />' + emailsMainText + emailsCcText + emailsBccText + '</div>';

				$(".message-compose-controls").before(successMessage);
				$(".message-compose-controls").prev().fadeIn(300);
			}
		});
	}
	
	/* Call Functions */
	circloidMailboxInbox();

	circloidMailboxMessageView();
	
	circloidMessageCompose();
});