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

	//------------- Bootbox modals -------------//
 	//Alert modal
	$('#alert-modal').click(function() {
		bootbox.dialog({
			message: "This is custom alert",
			title: "Alert!!!",
			buttons: {
				success: {
				  label: "Ok i got it",
				  className: "btn-primary btn-alt",
				  callback: function() {
				  	//callback result
				  }
				}
			}
		});
	});

	//Confirm modal
	$('#confirm-modal').click(function() {
		bootbox.confirm({
			message: "Confirm results:",
			title: "Are you sure ?",
			callback: function(result) {
		  		//callback result
		  		alert(result);
		    }
		});
	});

	//Prompt modal
	$('#prompt-modal').click(function() {
		bootbox.prompt({
			title: "What is your name ?",
			callback: function(result) {
		  		//callback result
		  		alert(result);
		    }
		});
	});

	//------------- Modals -------------//
	$('#remote-modal').click(function(){
		$('#ajax-modal').modal({
			show:true,
			remote: 'ajax/remoteModal.html'
		});
	});

	//------------- Autoplay video -------------//
	function autoPlayYouTubeModal(){
	  var trigger = $("body").find('[data-toggle="modal"]');
	  trigger.click(function() {
	    var theModal = $(this).data( "target" ),
	    videoSRC = $(this).attr( "data-theVideo" ), 
	    videoSRCauto = videoSRC+"?autoplay=1" ;
	    $(theModal+' iframe').attr('src', videoSRCauto);
	    $(theModal+' button.close').click(function () {
	        $(theModal+' iframe').attr('src', videoSRC);
	    });   
	  });
	}
	autoPlayYouTubeModal();
});