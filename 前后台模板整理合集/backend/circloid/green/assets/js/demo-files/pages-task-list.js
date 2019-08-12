/////////////////////
// Pages Task List //
/////////////////////

"use strict";

$(document).ready(function(){

	/* Task Manager */
	/**
	 * circloidTaskManager handles the Task Manager features
	 */
	function circloidTaskManager(){

		var placeholder = ".create-task-block";

		/* Get Predefined User List. This function contains SAMPLE DATA. Please go through it and add your own data. */
		var users = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			prefetch: 'test-data/pages-task-list/json/users.json' // SAMPLE DATA: You will have to pass data from your database instead
		});
		users.initialize();

		var elt = $(placeholder).find(".input-task-users");
		elt.tagsinput({
			itemValue: 'value',
			itemText: 'text',
			typeaheadjs: {
				name: 'users',
				displayKey: 'text',
				source: users.ttAdapter()
			}
		});


		/* Disable "Optional" checkbox when task is set to High or Critical */
		// Critical = 4, High = 3
		
		var taskPriority = $(placeholder).find(".input-task-priority");
		if((taskPriority.val() == 4) || (taskPriority.val() == 3)){
			$(placeholder).find(".input-task-optional").attr("disabled", true);
				$(placeholder).find(".input-task-optional").removeAttr("checked");
		}else{
			$(placeholder).find(".input-task-optional").removeAttr("disabled");
		}

		taskPriority.on("change", function(){
			if((taskPriority.val() == 4) || (taskPriority.val() == 3)){
				$(placeholder).find(".input-task-optional").attr("disabled", true);
				$(placeholder).find(".input-task-optional").removeAttr("checked");
			}else{
				$(placeholder).find(".input-task-optional").removeAttr("disabled");
			}
		});

		/* Create Task */
		$(".assign-task").on("click", function(){
			var taskTitle = $(this).closest(".create-task-block").find(".input-task-title").val().trim();
			var taskDetails = $(this).closest(".create-task-block").find(".input-task-details").val().replace(/\n/g, '<br \\>').trim();
			var taskUsers = $(this).closest(".create-task-block").find(".input-task-users").val().trim();
			var taskUsersObj = $(this).closest(".create-task-block").find(".input-task-users").tagsinput('items');
			var taskOptional = $(this).closest(".create-task-block").find(".input-task-optional").is(":checked");
			var taskPriority = $(this).closest(".create-task-block").find(".input-task-priority").val();

			/* USE AJAX TO CALL YOUR DATABASE/SERVER HERE - START */
			// On success, run the code below
			/* --- RUN THIS CODE - START ---*/
			var taskUsersContent = [];

			for(var n = 0; n < taskUsersObj.length; n++){

				var tempUserName = taskUsersObj[n].text;
				var tempUserImage = taskUsersObj[n].image;

				var tempString = '<a href="#" class="assigned-user"><img class="list-thumbnail" src="' + tempUserImage + '" title="' + tempUserName + '" width="25" height="25" /></a> ';

				taskUsersContent.push(tempString);
			};

			taskUsersContent = taskUsersContent.join("");

			if(taskTitle == ""){
				$(this).closest(".create-task-block").find(".input-task-title").focus();
			}else if(taskUsers == ""){
				elt.tagsinput('add', { "value": 1, "text": "Ken Adams (Auto)", "image": "http://placehold.it/25x25"});
			}else{
				var taskManagerContainer = $(this).closest(".task-manager");
				var taskManagerTaskList = $(this).closest(".task-manager").find(".task-list");

				var priorityBadge = "";
				var optionalBadge = "";

				if(taskOptional){
					optionalBadge = '<span class="badge highlight-color-blue">Optional</span>';
				}

				// Critical = 4, High Prority = 3, Normal = 2, Low Priority = 1
				// If priority is either High or Critical, the optional badge will not be displayed
				if((taskPriority === undefined) || (taskPriority === null) || (taskPriority === 2)){
					priorityBadge = "";
				}else if(taskPriority == 1){
					priorityBadge = '<span class="badge highlight-color-purple">Low Priority</span> ';
				}else if(taskPriority == 3){
					priorityBadge = '<span class="badge highlight-color-yellow">High Priority</span> ';
					optionalBadge = "";
				}else if(taskPriority == 4){
					priorityBadge = '<span class="badge highlight-color-red">Critical</span> ';
					optionalBadge = "";
				}else{
					priorityBadge = "";
				}

				var newTaskContent = '<li class="task-list-item" style="opacity:0;"><div class="checkbox"><label><input type="checkbox" class="task-list-item-checkbox">' + priorityBadge + optionalBadge + " " + taskTitle + '</label></div><div class="task-item-details">' + taskDetails + '</div><div class="task-item-controls"><a role="button" class="btn btn-info btn-sm show-task" href="#"><span class="glyphicon glyphicon-chevron-down"></span></a></div><div class="task-item-users">' + taskUsersContent + '</div></li>';

				taskManagerContainer.find(".task-list .attach-here").after(newTaskContent);

				taskManagerTaskList.find(".task-list-item").first().delay(200).animate({"opacity":"1"}, 300, function(){

					$(this).find(".task-item-users").attr("data-assigned-users",taskUsers);

					$(this).find(".task-item-controls .show-task").on("click", function(e){
						$(this).closest(".task-list-item").find(".task-item-details").slideToggle(300);
						e.preventDefault();
					});
				});

				// Add iCheck to Radio and Checkbox	
				taskManagerTaskList.iCheck({
					checkboxClass: 'icheckbox_square-blue checkbox-actual'
				});

				// Strike-Out If Checked/Unchecked
				taskManagerTaskList.find(".checkbox-actual").each(function(){
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

				// Finally, clear form and prep for next task
				$(this).closest(".create-task-block").find(".input-task-title").val("");
				$(this).closest(".create-task-block").find(".input-task-details").val("");
			}

			// Count Completed & Total Tasks
			function taskCount(addCount){
				var tasksCompleted = taskManagerTaskList.find("label > div.checked").length + addCount;
				var tasksTotal = taskManagerTaskList.find(".task-list-item").length;

				taskManagerTaskList.siblings(".task-list-stats").find(".task-list-completed").text(tasksCompleted);
				taskManagerTaskList.siblings(".task-list-stats").find(".task-list-total").text(tasksTotal);

				// Update Progress Bar
				var completionPercentage = (tasksCompleted / tasksTotal) * 100;

				var progressBar = taskManagerTaskList.siblings(".task-list-stats").find('.progress-bar');

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
			/* --- RUN THIS CODE - END ---*/
			/* USE AJAX TO CALL YOUR DATABASE/SERVER HERE - END */
		});
	}

	/* Call Functions */
	// BUG FIX: You will also need to call circloidTaskListWidget() in order for circloidTaskManager() to work properly
	circloidTaskManager();
	
	circloidTaskListWidget();

});