/*
Name: 			Style Switcher Initializer
Written by: 	Okler Themes - (http://www.okler.net)
Version: 		2.0
*/

if (typeof localStorage !== "undefined") {
	if (localStorage.getItem('skin-admin.css') !== null && !document.querySelector('html').hasAttribute('data-style-switcher-options')) {

		var css = localStorage.getItem('skin-admin.css'),
		    head = document.head || document.getElementsByTagName('head')[0],
		    style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet) {
		    style.styleSheet.cssText = css;
		} else {
		    style.appendChild(document.createTextNode(css));
		}

		head.appendChild(style);

	}

	// Layout
	if (localStorage.getItem('layout') !== null && !document.querySelector('html').hasAttribute('data-style-switcher-options')) {

		if (localStorage.getItem('layout') == 'boxed') {
			var classes = document.querySelector('html').className.replace(/fixed/g, ''); 
			document.querySelector('html').className = classes + ' boxed';
		}

	}

	// Background Color
	if (localStorage.getItem('backgroundColor') !== null && !document.querySelector('html').hasAttribute('data-style-switcher-options')) {

		if (localStorage.getItem('backgroundColor') == 'dark') {
			document.querySelector('html').className += ' '+'dark';
		}

	}

	// Header Color
	if (localStorage.getItem('headerColor') !== null && !document.querySelector('html').hasAttribute('data-style-switcher-options')) {

		if (localStorage.getItem('headerColor') == 'dark') {
			document.querySelector('html').className += ' '+'header-dark';
		}

	}

	// Sidebar Color
	if (localStorage.getItem('sidebarColor') !== null && !document.querySelector('html').hasAttribute('data-style-switcher-options')) {

		if (localStorage.getItem('sidebarColor') == 'light') {
			document.querySelector('html').className += ' '+'sidebar-light';
		}

	}

	// Sidebar Size
	if (localStorage.getItem('sidebarSize') !== null && !document.querySelector('html').hasAttribute('data-style-switcher-options')) {

		var sidebarSizeClass = '';

		switch(localStorage.getItem('sidebarSize')) {

			case 'xs':
					sidebarSizeClass = 'sidebar-left-xs';
				break;

			case 'sm':
					sidebarSizeClass = 'sidebar-left-sm';
				break;

		}

		document.querySelector('html').className += ' '+sidebarSizeClass;

	}
}