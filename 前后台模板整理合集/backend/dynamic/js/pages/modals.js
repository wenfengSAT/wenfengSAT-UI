//------------- modals.js -------------//
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