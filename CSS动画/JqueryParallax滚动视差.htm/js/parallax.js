$(document).ready(function() {
	redrawDotNav()
	$(window).scroll(function() {
		parallaxScroll()
		redrawDotNav()
	})

	// 点击事件
	$('.jump_to').click(function () {
		var toArticle = '#article' + $(this).attr('rel')
		$('html, body').animate({scrollTop:$(toArticle).offset().top}, 1000, function() {
			parallaxScroll()
		})
		return false
	})
	function parallaxScroll () {
		var scrolled = $(this).scrollTop()
		$('#parallax_area1').css('top', (0 - scrolled * 0.75) + 'px') 
        $('#parallax_area2').css('top', (0 - scrolled * 0.5) + 'px')
        $('#parallax_area3').css('top', (0 - scrolled * 0.25) + 'px')
	}
	function redrawDotNav () {
		var article1 = 0;
		var article2 = $('#article2').offset().top
		var article3 = $('#article3').offset().top
		var article4 = $('#article4').offset().top
		var st = $(document).scrollTop()
		$('#primary a').removeClass('active')
		if (st < article2) {
			$('#primary a.n1').addClass('active')
		} else if (st >= article2 && st < article3) {
			$('#primary a.n2').addClass('active')
		} else if (st >= article3 && st < article4) {
			$('#primary a.n3').addClass('active')
		} else if (st >= article4) {
			$('#primary a.n4').addClass('active')
		}
	}	
})