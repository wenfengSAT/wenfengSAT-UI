/////////////////////////////////
// Optional Circloid Functions //
/////////////////////////////////

"use strict";

/**
 * circloidTaskListWidget handles the Task List Widget
 */
function circloidTaskListWidget(){

	var taskList = $(".block .task-list");
	taskList.each(function(){
		var taskListObj = $(this);
		var addCount;
		var taskListHeightInitial = taskListObj.closest(".block-content-inner").height();
		var taskListHeightSiblings = taskListObj.prevAll().height();

		var taskListHeight = taskListHeightInitial - taskListHeightSiblings - 10;

		if((taskListHeightSiblings == 0) || (taskListHeightSiblings == null)){
			taskListHeight = taskListHeightInitial;
		}
		taskListObj.height(taskListHeight);

		// Destroy parent's scrollbar
		$(taskListObj).closest(".block-content-inner").mCustomScrollbar("destroy").removeAttr("style");

		// Create new scrollbar
		$(taskListObj).mCustomScrollbar({
			autoHideScrollbar:true,
			scrollbarPosition: "outside",
			theme:"dark"
		});

		// Count Completed & Total Tasks
		function taskCount(addCount){
			var tasksCompleted = taskListObj.find("label > div.checked").length + addCount;
			var tasksTotal = taskListObj.find(".task-list-item").length;

			taskListObj.siblings(".task-list-stats").find(".task-list-completed").text(tasksCompleted);
			taskListObj.siblings(".task-list-stats").find(".task-list-total").text(tasksTotal);

			// Update Progress Bar
			var completionPercentage = (tasksCompleted / tasksTotal) * 100;

			var progressBar = taskListObj.siblings(".task-list-stats").find(".progress-bar");

			progressBar.css({"width": completionPercentage + "%"}).attr("aria-valuenow", completionPercentage);

			// Progress Bar Color Change - Optional
			// First, remove the previous highilight-color-*
			var regex = new RegExp('\\b' + 'progress-bar-' + '.+?\\b', 'g');
			progressBar[0].className = progressBar[0].className.replace(regex, '');

			if(completionPercentage < 20){
				// Add progress-bar-danger
				progressBar.addClass("progress-bar-danger");
			}else if((completionPercentage >= 20) && (completionPercentage < 50)){
				// Add progress-bar-warning
				progressBar.addClass("progress-bar-warning");
			}else if((completionPercentage >= 50) && (completionPercentage < 75)){
				// Add progress-bar-info
				progressBar.addClass("progress-bar-info");
			}else if((completionPercentage >= 75) && (completionPercentage < 100)){
				// Keep default progress bar color
			}else{
				// Add progress-bar-success
				progressBar.addClass("progress-bar-success");
			}
		}

		// Add iCheck to Radio and Checkbox	
		taskListObj.iCheck({
			checkboxClass: 'icheckbox_square-blue checkbox-actual',
			radioClass: 'iradio_square-blue radio-actual'
		});

		// Strike-Out If Checked/Unchecked
		taskListObj.find(".checkbox-actual").each(function(){
			if($(this).hasClass("checked")){
				$(this).closest("label").addClass("strike-out");
				$(this).closest(".task-list-item").find(".task-item-details").addClass("text-muted");
				$(this).closest(".task-list-item").find(".task-item-users").css({"opacity":0.5});
			}
			$(this).on('ifChecked', function(event){
				$(this).closest("label").addClass("strike-out");
				$(this).closest(".task-list-item").find(".task-item-details").addClass("text-muted");
				$(this).closest(".task-list-item").find(".task-item-users").css({"opacity":0.5});
				// Update Count
				taskCount(1);
			});
			$(this).on('ifUnchecked', function(event){
				$(this).closest("label").removeClass("strike-out");
				$(this).closest(".task-list-item").find(".task-item-details").removeClass("text-muted");
				$(this).closest(".task-list-item").find(".task-item-users").css({"opacity":1});
				// Update Count
				taskCount(-1);
			});
		});
		
		// Update Count
		taskCount(0);

		/* If task item has further details set */
		taskListObj.find(".task-list-item").each(function(){
			$(this).find(".task-item-controls .show-task").on("click", function(e){
				$(this).closest(".task-list-item").find(".task-item-details").slideToggle(300);
				e.preventDefault();
			});
		});
	});
}

/**
 * circloidWidgets handles the general widget features
 */
function circloidWidgets(){
	// Make Widgets Linkable (where applicable)
	$(".c-widget").each(function(){
		var widgetURL = $(this).data("url");
		if(widgetURL === undefined){
			widgetURL = "#";
		}else{
			$(this).css({"cursor":"pointer"});
			$(this).on("click", function(){
				window.location.href = widgetURL;
			});
		}
	});

	$(".c-widget-custom .c-wdiget-content-block").mCustomScrollbar({
		autoHideScrollbar:true,
		scrollbarPosition: "outside",
		theme:"dark"
	});
}

/**
 * circloidValidateForm handles form validation. It's a simple alternative to the Bootstrap Validator plugin
 * @param  {string} value:						[description]
 * @param  {string} type:						accepts: [email, numeric, alphanumeric, alphabet, password]
 * @param  {string} required:					(optional field) whether or not this feild is required
 * @param  {integer} lengthMin:					(optional field) the min length of the password
 * @param  {integer} lengthMax:					(optional field) the max length of the password
 * @return {string, integer or Boolean}			this will return an error message or boolean or integer
 */
function circloidValidateForm(value, type, required, lengthMin, lengthMax){
	/* Set defaults */
	if(required === undefined || !required || required == ""){
		required = 0;
	}else{
		required = 1;
	}
	if(lengthMin === undefined || !lengthMin || lengthMin == ""){
		lengthMin = 6;
	}

	if(lengthMax === undefined || !lengthMax || lengthMax == ""){
		lengthMax = 30;
	}

	/* Calls the appropriate function based on the "type" variable */
	switch(type){
		case "email":
			if((required) && (value.trim() == "")){
				var message = "This field is required.";
				return message;
			}

			if(circloidValidateEmail(value) == true){
				return true;
			}else{
				var message = "Please enter a valid email.";
				return message;
			}
		break;

		case "numeric":
			if((required) && (value.trim() == "")){
				var message = "This field is required.";
				return message;
			}

			if(circloidValidateNumeric(value) == true){
				return true;
			}else{
				var message = "Please enter numbers only";
				return message;
			}
		break;
		
		case "alphanumeric":
			if((required) && (value.trim() == "")){
				var message = "This field is required.";
				return message;
			}

			if(circloidValidateAlphaNumeric(value) == true){
				return true;
			}else{
				var message = "This field allows only letters numbers, commas and fullstops but NO spaces.";
				return message;
			}
			break;
		
		case "alphabet":
			if((required) && (value.trim() == "")){
				var message = "This field is required.";
				return message;
			}

			if(circloidValidateAlphabet(value) == true){
				return true;
			}else{
				var message = "This field allows letters only.";
				return message;
			}
		break;
		
		case "password":
			if((required) && (value.trim() == "")){
				var message = "This field is required.";
				return message;
			}

			if(circloidValidatePassword(value, lengthMin, lengthMax) == true){
				return true;
			}else{
				var message = circloidValidatePassword(value, lengthMin, lengthMax);
				return message;
			}
		break;

		default:
			if((required) && (value.trim() == "")){
				var message = "This field is required.";
				return message;
			}
			return true;
		break;
	}

	/**
	 * circloidValidateEmail handles email validation
	 * @param  {string} email:	enter valid email
	 * @return {boolean}
	 */
	function circloidValidateEmail(email){
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	
	/**
	 * circloidValidateNumeric handles numeric validation
	 * @param  {integer} numeric:	enter numbers only
	 * @return {boolean}
	 */
	function circloidValidateNumeric(numeric){
		var reg = new RegExp("^[0-9]+$");
		return reg.test(numeric);
	}
	
	/**
	 * circloidValidateAlphaNumeric handles text, numbers and space validation
	 * @param  {string} alphanumeric:	enter text, numbers and space only
	 * @return {boolean}
	 */
	function circloidValidateAlphaNumeric(alphanumeric){
		var reg = new RegExp("^[a-zA-Z 0-9,.]+$");
		return reg.test(alphanumeric);
	}
	
	/**
	 * circloidValidateAlphabet handles text and space
	 * @param  {string} alphabet:	enter text and space
	 * @return {boolean}
	 */
	function circloidValidateAlphabet(alphabet){
		var reg = new RegExp("^[a-zA-Z ]+$");
		return reg.test(alphabet);
	}

	/**
	 * circloidValidatePassword handles password validation
	 * @param  {string} password:		accepts alphanumeric characters
	 * @param  {integer} lengthMin:		the minimum length the password should be
	 * @param  {integer} lengthMax:		the maximum length the password should be
	 * @return {boolean or string}		returns an error message or the boolean response
	 */
	function circloidValidatePassword(password, lengthMin, lengthMax){
		var passwordLengthStatus = circloidValidateStringLength(password, lengthMin, lengthMax);
		if(passwordLengthStatus != true){
			return passwordLengthStatus;
		}else{
			var passwordStatus = circloidValidateAlphaNumeric(password);
			if(passwordStatus == true){
				return true;
			}else{
				var message = "Password field can only contain letters, numbers, commas and fullstops but NO spaces.";
				return message;
			}
		}
	}

	/**
	 * circloidValidateStringLength checks the string length
	 * @param  {string} str				accepts any string
	 * @param  {integer} lengthMin:		the minimum length the password should be
	 * @param  {integer} lengthMax:		the maximum length the password should be
	 * @return {boolean or string}		returns an error message or the boolean response
	 */
	function circloidValidateStringLength(str, lengthMin, lengthMax){
		var n = str.length;

		if(n < lengthMin){
			var message = "This field must be at least " + lengthMin + " characters long";
			return message;
		}else if(n > lengthMax){
			var message = "This field must not be more than " + lengthMax + " characters long";
			return message;
		}else{
			return true;
		}
	}
}