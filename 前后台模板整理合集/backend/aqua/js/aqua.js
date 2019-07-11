$(function(){
	// Fade in Content
	setTimeout(function() {
	    $("#content").addClass("fadeInDown");
	}, 200);

	/* Full screen */
	$('.fullscreen').click(function(){
		toggleFullScreen();
	});

	/* Navbar */
	$('.side-nav .dropdown').on('show.bs.dropdown', function () {
		$('.dropdown-menu').slideUp();
		$(this).find('.dropdown-menu').slideDown('fast');
	});
	$('.side-nav .dropdown').on('hide.bs.dropdown', function () {
		$(this).find('.dropdown-menu').slideUp('fast');
	});

});

function toggleFullScreen() {
	if (!document.fullscreenElement &&    // alternative standard method
	    !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
	  if (document.documentElement.requestFullscreen) {
	    document.documentElement.requestFullscreen();
	  } else if (document.documentElement.mozRequestFullScreen) {
	    document.documentElement.mozRequestFullScreen();
	  } else if (document.documentElement.webkitRequestFullscreen) {
	    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
	  }
	} else {
	  if (document.cancelFullScreen) {
	    document.cancelFullScreen();
	  } else if (document.mozCancelFullScreen) {
	    document.mozCancelFullScreen();
	  } else if (document.webkitCancelFullScreen) {
	    document.webkitCancelFullScreen();
	  }
	}
}