/*------------------------------------------------------------------
 [Landing Trigger Js]

 Project     :	Fickle Responsive Admin Template
 Version     :	1.0
 Author      : 	AimMateTeam
 URL         :   http://aimmate.com
 Support     :   aimmateteam@gmail.com
 Primary use :	Layout
 -------------------------------------------------------------------*/

var $windowHeight = $(window).height();
jQuery(document).ready(function($) {
    'use strict';
 $('body').height($windowHeight);
 $('.landing-bg').height($windowHeight);
 $('.box-view').hover(function(){
     $(this).children('img').addClass('bounce');
 }, function(){
     $(this).children('img').removeClass('bounce');
 });
});