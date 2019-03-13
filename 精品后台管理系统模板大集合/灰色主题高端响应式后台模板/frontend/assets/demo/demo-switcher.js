$(document).ready(function() {

	var topnavColors = "navbar-default navbar-inverse navbar-midnightblue navbar-green navbar-info navbar-primary navbar-grape navbar-orange navbar-violet navbar-alizarin navbar-indigo";
	var headerColors = "navbar-default navbar-inverse navbar-primary navbar-alizarin navbar-danger navbar-grape navbar-info navbar-green navbar-indigo navbar-orange navbar-violet navbar-info navbar-midnightblue";
	var footerColors = "footer-default footer-inverse footer-midnightblue footer-primary footer-orange footer-info footer-alizarin footer-grape footer-green footer-indigo footer-violet";

	//Show Switcher
		$(".demo-options-icon").click(function () {
			$('.demo-options').toggleClass("active");
		});

	//Switch: Fixed Header
		$('input[name="demo-fixedheader"]').on('switchChange.bootstrapSwitch', function(event, state) {
			$('#topnav').toggleClass("navbar-fixed-top navbar-static-top");
			rightbarTopPos();
			leftbarTopPos();
		});


	//Topnav Navbar Styles
		$('#demo-header-color span').click(function() {
			if ($(this).hasClass("demo-white")) {
				$('#topnav').removeClass(topnavColors).addClass('navbar-default');
				localStorage.setItem('navbar-color','navbar-default');
			}

			if ($(this).hasClass("demo-black")) {
				$('#topnav').removeClass(topnavColors).addClass('navbar-inverse');
				localStorage.setItem('navbar-color', 'navbar-inverse');
			}

			if ($(this).hasClass("demo-primary")) {
				$('#topnav').removeClass(topnavColors).addClass('navbar-primary');
				localStorage.setItem('navbar-color', 'navbar-primary');
			}

			if ($(this).hasClass("demo-orange")) {
				$('#topnav').removeClass(topnavColors).addClass('navbar-orange');
				localStorage.setItem('navbar-color', 'navbar-orange');
			}

			if ($(this).hasClass("demo-green")) {
				$('#topnav').removeClass(topnavColors).addClass('navbar-green');
				localStorage.setItem('navbar-color', 'navbar-green');
			}

			if ($(this).hasClass("demo-alizarin")) {
				$('#topnav').removeClass(topnavColors).addClass('navbar-alizarin');
				localStorage.setItem('navbar-color', 'navbar-alizarin');
			}

			if ($(this).hasClass("demo-danger")) {
				$('#topnav').removeClass(topnavColors).addClass('navbar-danger');
				localStorage.setItem('navbar-color', 'navbar-danger');
			}

			if ($(this).hasClass("demo-indigo")) {
				$('#topnav').removeClass(topnavColors).addClass('navbar-indigo');
				localStorage.setItem('navbar-color', 'navbar-indigo');
			}

			if ($(this).hasClass("demo-violet")) {
				$('#topnav').removeClass(topnavColors).addClass('navbar-violet');
				localStorage.setItem('navbar-color', 'navbar-violet');
			}

			if ($(this).hasClass("demo-info")) {
				$('#topnav').removeClass(topnavColors).addClass('navbar-info');
				localStorage.setItem('navbar-color', 'navbar-info');
			}

			if ($(this).hasClass("demo-grape")) {
				$('#topnav').removeClass(topnavColors).addClass('navbar-grape');
				localStorage.setItem('navbar-color', 'navbar-grape');
			}

			if ($(this).hasClass("demo-midnightblue")) {
				$('#topnav').removeClass(topnavColors).addClass('navbar-midnightblue');
				localStorage.setItem('navbar-color', 'navbar-midnightblue');
			}
		});

	//Headernav Styles
		$('#demo-headernav-color span').click(function() {
			if ($(this).hasClass("demo-white")) {
				$('#headernav').removeClass(headerColors).addClass('navbar-default');
				localStorage.setItem('headernav-color',"navbar-default");
			}

			if ($(this).hasClass("demo-black")) {
				$('#headernav').removeClass(headerColors).addClass('navbar-inverse');
				localStorage.setItem('headernav-color',"navbar-inverse");
			}

			if ($(this).hasClass("demo-midnightblue")) {
				$('#headernav').removeClass(headerColors).addClass('navbar-midnightblue');
				localStorage.setItem('headernav-color',"navbar-midnightblue");
			}

			if ($(this).hasClass("demo-green")) {
				$('#headernav').removeClass(headerColors).addClass('navbar-green');
				localStorage.setItem('headernav-color',"navbar-green");
			}

			if ($(this).hasClass("demo-primary")) {
				$('#headernav').removeClass(headerColors).addClass('navbar-primary');
				localStorage.setItem('headernav-color',"navbar-primary");
			}

			if ($(this).hasClass("demo-orange")) {
				$('#headernav').removeClass(headerColors).addClass('navbar-orange');
				localStorage.setItem('headernav-color',"navbar-orange");
			}

			if ($(this).hasClass("demo-grape")) {
				$('#headernav').removeClass(headerColors).addClass('navbar-grape');
				localStorage.setItem('headernav-color',"navbar-grape");
			}

			if ($(this).hasClass("demo-alizarin")) {
				$('#headernav').removeClass(headerColors).addClass('navbar-alizarin');
				localStorage.setItem('headernav-color',"navbar-alizarin");
			}

			if ($(this).hasClass("demo-indigo")) {
				$('#headernav').removeClass(headerColors).addClass('navbar-indigo');
				localStorage.setItem('headernav-color',"navbar-indigo");
			}

			if ($(this).hasClass("demo-violet")) {
				$('#headernav').removeClass(headerColors).addClass('navbar-violet');
				localStorage.setItem('headernav-color',"navbar-violet");
			}

			if ($(this).hasClass("demo-info")) {
				$('#headernav').removeClass(headerColors).addClass('navbar-info');
				localStorage.setItem('headernav-color',"navbar-info");
			}
		});

	//Footer Color
		$('#demo-footer-color span').click(function() {
			if ($(this).hasClass("demo-white")) {
				$('footer').removeClass(footerColors).addClass('footer-default');
				localStorage.setItem('footer-color',"footer-default");
			}

			if ($(this).hasClass("demo-black")) {
				$('footer').removeClass(footerColors).addClass('footer-inverse');
				localStorage.setItem('footer-color',"footer-inverse");
			}

			if ($(this).hasClass("demo-midnightblue")) {
				$('footer').removeClass(footerColors).addClass('footer-midnightblue');
				localStorage.setItem('footer-color',"footer-midnightblue");
			}

			if ($(this).hasClass("demo-green")) {
				$('footer').removeClass(footerColors).addClass('footer-green');
				localStorage.setItem('footer-color',"footer-green");
			}

			if ($(this).hasClass("demo-primary")) {
				$('footer').removeClass(footerColors).addClass('footer-primary');
				localStorage.setItem('footer-color',"footer-primary");
			}

			if ($(this).hasClass("demo-grape")) {
				$('footer').removeClass(footerColors).addClass('footer-grape');
				localStorage.setItem('footer-color',"footer-grape");
			}

			if ($(this).hasClass("demo-orange")) {
				$('footer').removeClass(footerColors).addClass('footer-orange');
				localStorage.setItem('footer-color',"footer-orange");
			}

			if ($(this).hasClass("demo-alizarin")) {
				$('footer').removeClass(footerColors).addClass('footer-alizarin');
				localStorage.setItem('footer-color',"footer-alizarin");
			}

			if ($(this).hasClass("demo-indigo")) {
				$('footer').removeClass(footerColors).addClass('footer-indigo');
				localStorage.setItem('footer-color',"footer-indigo");
			}

			if ($(this).hasClass("demo-violet")) {
				$('footer').removeClass(footerColors).addClass('footer-violet');
				localStorage.setItem('footer-color',"footer-violet");
			}

			if ($(this).hasClass("demo-info")) {
				$('footer').removeClass(footerColors).addClass('footer-info');
				localStorage.setItem('footer-color',"footer-info");
			}
		});

	
	//Set Color Changes

			var navTColor = localStorage.getItem('navbar-color');
			if (navTColor) {
				$('#topnav').removeClass(topnavColors).addClass(navTColor);
			}

			var headerNavColors = localStorage.getItem('headernav-color');
			if (headerNavColors) {
				$('#headernav').removeClass(headerColors).addClass(headerNavColors);
			}

			var footerNColors = localStorage.getItem('footer-color');
			if (footerNColors) {
				$('footer').removeClass(footerColors).addClass(footerNColors);
			}


});