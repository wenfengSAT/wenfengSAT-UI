/*
 *  Document   : compAnimations.js
 *  Author     : pixelcave
 */
var CompAnimations=function(){return{init:function(){var a=$(".animation-buttons .btn"),n="";a.click(function(){a.removeClass("active"),$(this).addClass("active"),n=$(this).data("animation"),$("#animation-element").removeClass().addClass(n),$("#animation-class").text(n)})}}}();