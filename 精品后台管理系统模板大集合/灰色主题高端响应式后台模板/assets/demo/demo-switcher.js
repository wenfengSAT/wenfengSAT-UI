$(document).ready(function() {

	var sidebarColors = "sidebar-default sidebar-inverse sidebar-midnightblue sidebar-grape sidebar-primary sidebar-alizarin sidebar-indigo navbar-default navbar-inverse navbar-midnightblue navbar-grape navbar-primary navbar-alizarin navbar-indigo";
	var headerColors = "navbar-default navbar-inverse navbar-primary navbar-alizarin navbar-danger navbar-green navbar-indigo navbar-info navbar-midnightblue";

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


	//Switch: Boxed Layout
		$('input[name="demo-boxedlayout"]').on('switchChange.bootstrapSwitch', function(event, state) {
			//close infobar
			if ($('body').hasClass('infobar-active')) $('body').removeClass('infobar-active');


			//change to layout-boxed
			$('body').toggleClass('layout-boxed');
			autocollapse();

			window.wasOffcanvas = ($('body').hasClass('infobar-offcanvas') || !$('body').hasClass('layout-boxed'));
			if (wasOffcanvas) {
				$('body').toggleClass('infobar-offcanvas infobar-overlay');
			}

			$('.infobar-offcanvas .infobar-wrapper').css('transform', '');

			$('.layout-boxed .infobar-wrapper').css('display', '');

			if (($('body').hasClass('infobar-active')) || ($('body').hasClass('infobar-offcanvas'))) {
				$('.infobar-wrapper').show();
			}

			rightbarRightPos();
			rightbarTopPos();

			//switcher option changes
			$('input[name="demo-collapserightbar"]').bootstrapSwitch('state', false, true);
			$('#demo-boxes').toggleClass('hide');

			//remove bodybg when closed
			$('body:not(.layout-boxed)').css('background','');


		});

	//Switch: Leftbar
		$('input[name="demo-collapseleftbar"]').on('switchChange.bootstrapSwitch', function(event, state) {
			toggle_leftbar();
		});

	//Switch: Rightbar
		$('input[name="demo-collapserightbar"]').on('switchChange.bootstrapSwitch', function(event, state) {
			toggle_rightbar();
		});


	//Switch Horizicons
		$('input[name="demo-horizicons"]').on('switchChange.bootstrapSwitch', function(event, state) {
				//if ($('#horizontal-navbar').hasClass('large-icons-nav')) {
					$('#horizontal-navbar').toggleClass('large-icons-nav');
				//}
		});


	//Detect Changes in main file


		function leftmenu_switchchange() {
			if ($('body').hasClass('sidebar-collapsed')) {
		    	$('input[name="demo-collapseleftbar"]').bootstrapSwitch('state', true, true);
		    } else {
		    	$('input[name="demo-collapseleftbar"]').bootstrapSwitch('state', false, true);
		    }
		}

		function rightmenu_switchchange() {
			if ($('body').hasClass('infobar-active')) {
		    	$('input[name="demo-collapserightbar"]').bootstrapSwitch('state', false, true);
		    } else {
		    	$('input[name="demo-collapserightbar"]').bootstrapSwitch('state', true, true);
		    }
		    	
		    try {
		    	if (vFSLayout.state.east.isClosed) {
		    		$('input[name="demo-collapserightbar"]').bootstrapSwitch('state', true, true);
		    	} else {
		    		$('input[name="demo-collapserightbar"]').bootstrapSwitch('state', false, true);
		    	}
		    } catch(e) {}
		}

		function boxedlayout_switchchange() {
			if ($('body').hasClass('layout-boxed')) {
		    	$('input[name="demo-boxedlayout"]').bootstrapSwitch('state', true, true);
		    	$('#demo-boxes').removeClass('hide');
		    } else {
		    	$('input[name="demo-boxedlayout"]').bootstrapSwitch('state', false, true);
		    }

		    if ($('#layout-fixed').hasClass('ui-layout-container')) {
		    	$('input[name="demo-boxedlayout"]').bootstrapSwitch('disabled', true);
		    	$('input[name="demo-fixedheader"]').bootstrapSwitch('disabled', true);

		    	//hacky but works - switches on the leftbar
				$('input[name="demo-collapseleftbar"]').bootstrapSwitch('state', true, true);		    	
		    }

		}


		function horizlayout_switchchange() {
			if ($('body').hasClass('horizontal-nav')) {
				$('#demo-horizicon').removeClass('hide');
				$('#demo-colleft').addClass('hide');

				if ($('#horizontal-navbar').hasClass('large-icons-nav')) {
					$('input[name="demo-horizicons"]').bootstrapSwitch('state',false, true)
				} else {
					$('input[name="demo-horizicons"]').bootstrapSwitch('state',true, true)
				}
			}
		}

		function fixedheader_switchchange() {
			if (($('.full-height-content'))==true) {
				$('input[name="demo-fixedheader"]').bootstrapSwitch('disabled', true)
			}
		}

		$('#leftmenu-trigger').click(function () {
			leftmenu_switchchange();
		});
		$('#rightmenu-trigger').click(function () {
		    rightmenu_switchchange();
		});

		$(document).ready(function () {
			leftmenu_switchchange();
			rightmenu_switchchange();
			boxedlayout_switchchange();
			horizlayout_switchchange();
			fixedheader_switchchange();




			//TODO: Check in Fixed Sidebar Mode

			var navColor = localStorage.getItem('navbar-color');
			if (navColor) {
				$('#topnav').removeClass('navbar-inverse navbar-default navbar-primary navbar-green navbar-alizarin').addClass(navColor);
			}

			var sideColor = localStorage.getItem('sidebar-color');
			if (sideColor) {
				$('.static-sidebar-wrapper, .fixed-sidebar-wrapper').removeClass(sidebarColors).addClass('sidebar-' + sideColor);
				$('#headernav').removeClass(sidebarColors).addClass('navbar-' + sideColor);
			}

		});






		//Header Navbar Styles
			$('#demo-header-color span').click(function() {
				if ($(this).hasClass("demo-white")) {
					$('header.navbar').removeClass(headerColors).addClass('navbar-default');
					localStorage.setItem('navbar-color','navbar-default');
				}

				if ($(this).hasClass("demo-black")) {
					$('header.navbar').removeClass(headerColors).addClass('navbar-inverse');
					localStorage.setItem('navbar-color', 'navbar-inverse');
				}

				if ($(this).hasClass("demo-primary")) {
					$('header.navbar').removeClass(headerColors).addClass('navbar-primary');
					localStorage.setItem('navbar-color', 'navbar-primary');
				}

				if ($(this).hasClass("demo-green")) {
					$('header.navbar').removeClass(headerColors).addClass('navbar-green');
					localStorage.setItem('navbar-color', 'navbar-green');
				}

				if ($(this).hasClass("demo-alizarin")) {
					$('header.navbar').removeClass(headerColors).addClass('navbar-alizarin');
					localStorage.setItem('navbar-color', 'navbar-alizarin');
				}

				if ($(this).hasClass("demo-danger")) {
					$('header.navbar').removeClass(headerColors).addClass('navbar-danger');
					localStorage.setItem('navbar-color', 'navbar-danger');
				}

				if ($(this).hasClass("demo-indigo")) {
					$('header.navbar').removeClass(headerColors).addClass('navbar-indigo');
					localStorage.setItem('navbar-color', 'navbar-indigo');
				}

				if ($(this).hasClass("demo-info")) {
					$('header.navbar').removeClass(headerColors).addClass('navbar-info');
					localStorage.setItem('navbar-color', 'navbar-info');
				}

				if ($(this).hasClass("demo-midnightblue")) {
					$('header.navbar').removeClass(headerColors).addClass('navbar-midnightblue');
					localStorage.setItem('navbar-color', 'navbar-midnightblue');
				}
			});

		//Sidebar Navbar Styles
			$('#demo-sidebar-color span').click(function() {
				if ($(this).hasClass("demo-white")) {
					$('.static-sidebar-wrapper, .fixed-sidebar-wrapper').removeClass(sidebarColors).addClass('sidebar-default');
					$('#wrapper>nav.navbar').removeClass(sidebarColors).addClass('navbar-default');

					localStorage.setItem('sidebar-color',"default");
				}

				if ($(this).hasClass("demo-black")) {
					$('.static-sidebar-wrapper, .fixed-sidebar-wrapper').removeClass(sidebarColors).addClass('sidebar-inverse');
					$('#wrapper>nav.navbar').removeClass(sidebarColors).addClass('navbar-inverse');

					localStorage.setItem('sidebar-color',"inverse");
				}

				if ($(this).hasClass("demo-midnightblue")) {
					$('.static-sidebar-wrapper, .fixed-sidebar-wrapper').removeClass(sidebarColors).addClass('sidebar-midnightblue');
					$('#wrapper>nav.navbar').removeClass(sidebarColors).addClass('navbar-midnightblue');

					localStorage.setItem('sidebar-color',"midnightblue");
				}

				if ($(this).hasClass("demo-grape")) {
					$('.static-sidebar-wrapper, .fixed-sidebar-wrapper').removeClass(sidebarColors).addClass('sidebar-grape');
					$('#wrapper>nav.navbar').removeClass(sidebarColors).addClass('navbar-grape');

					localStorage.setItem('sidebar-color',"grape");
				}

				if ($(this).hasClass("demo-primary")) {
					$('.static-sidebar-wrapper, .fixed-sidebar-wrapper').removeClass(sidebarColors).addClass('sidebar-primary');
					$('#wrapper>nav.navbar').removeClass(sidebarColors).addClass('navbar-primary');

					localStorage.setItem('sidebar-color',"primary");
				}

				if ($(this).hasClass("demo-alizarin")) {
					$('.static-sidebar-wrapper, .fixed-sidebar-wrapper').removeClass(sidebarColors).addClass('sidebar-alizarin');
					$('#wrapper>nav.navbar').removeClass(sidebarColors).addClass('navbar-alizarin');

					localStorage.setItem('sidebar-color',"alizarin");
				}

				if ($(this).hasClass("demo-indigo")) {
					$('.static-sidebar-wrapper, .fixed-sidebar-wrapper').removeClass(sidebarColors).addClass('sidebar-indigo');
					$('#wrapper>nav.navbar').removeClass(sidebarColors).addClass('navbar-indigo');

					localStorage.setItem('sidebar-color',"indigo");
				}
			});

		//Boxed Backgrounds
			$('#demo-boxed-bg span').click(function() {
				$('body.layout-boxed').css('background', $(this).css('background'));
			});



		//Fixed Header

			$('#demo-fixedheader').click(function () {
				$('body>header.navbar').toggleClass('navbar-fixed-top navbar-static-top')
			})


		//Reset to default style
			$('.demo-reset').click(function () {
				if (!($('header.navbar').hasClass('navbar-inverse'))) {
					$('header.navbar').addClass('navbar-inverse');
				}
			});

});