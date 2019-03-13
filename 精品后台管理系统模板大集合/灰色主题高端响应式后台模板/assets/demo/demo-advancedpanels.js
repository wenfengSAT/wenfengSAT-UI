$(document).ready(function($){
	/// Options

	 $('#panel-advancedoptions').panels({				
	 	grid: '.bs-grid',
	 	deleteSettingsKey: '#deletesettingskey-options',
	 	deletePositionKey: '#deletepositionkey-options',
	 	localStorage: true,
	 	customButton: true,
	 	toggleColors: true,
	 	customClass: 'fa fa-cog | fa fa-cog',
	 	customEnd: function(){ alert('This is a custom button. You can add any function you like to the panels.') }
	 });

	/**
	 * Empty all local storage. (demo not needed)
	 **/
	 $('.empty-local-storage').click(function(){
	 	var cls = confirm("Clear all localStorage?");
	 	if(cls && localStorage){
	 		localStorage.clear();
	 		alert('Local storage has been cleared! Refreshing page...');
	 		location.reload();
	 	}
	 });



	 /* NEW 2.7 */

	/**
	 * Custom way to delete widgets.
	 **/
	 $('#trigger-deletewidget').click(function(e){

		// delete widget
		$('.deletethiswidget').remove();
		
		// close the modal
		$('#delete-widget').modal('hide');
	});
	 $('#trigger-deletewidget-reset').click(function(e){

		// cancel so remove indicator class
		$('body').find('.deletethiswidget').removeClass('deletethiswidget');
	});



		 $("#clearLS").click(function () {
		 	bootbox.confirm("Are you sure you want to clear Local Storage? This will remove <strong>ALL</strong> localstorage settings, including: <br> <ul><li>Panel Settings</li><li>Panel Positions</li><li>Sidebar and Header Colors</li><li>Text in Notes App</li></ul>", function (result) {
		 		if (result) {
			 		localStorage.clear();

			 		bootbox.alert("Local Storage cleared! Refresh the page to revert back to original configurations.");
		 		}
		 	})
		 });

});
