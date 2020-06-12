/*
 * Smart Demo Switcher v1.5
 * http://www.smartplugins.info/plugin/javascript/smart-demo-switcher//
 * 
 * Copyright 2008 - 2014 Milan Petrovic (email: milan@gdragon.info)
 *
 * http://www.dev4press.com
 * http://www.millan.rs
 *
 */

var smartDemoSwitcherObj;

;(function ($, window, document, undefined) {
    smartDemoSwitcher.Loader = smartDemoSwitcher.Load.extend({
		
		
		 display: {
     style: "light",
     location: "right",
	 initOpen: false,
     buttonContent: '<i class="fa fa-tint"></i>',
     formHeaderContent: '<h4>ORB</h4>'
   },
   
   
     stylesheets: {
     main: {
       columns: 2,
	   
       title: true,
	   boxShape: "circle",
       titleContent: "<h5>Styles</h5>",
       selector: "#demo-styles",
       default: 'css/styles.css',
       list: [
         {file: 'css/styles-brown.css', name: 'Brown', colors: ['#b66d4a']},
         {file: 'css/styles-green.css', name: 'Green', colors: ['#3c9474']},
         {file: 'css/styles-blue.css', name: 'Blue', colors: ['#00425c']},
         {file: 'css/styles-purple.css', name: 'Purple', colors: ['#684a76']},
		 {file: 'css/styles-cherry.css', name: 'Cherry', colors: ['#b54f8b']},
		 {file: 'css/styles-khaki.css', name: 'Khaki', colors: ['#bba439']}
       ]
     }
   },
   
   
        
    });

    $(document).ready(function() {
        smartDemoSwitcherObj = new smartDemoSwitcher.Core();
    });
})(jQuery, window, document);
