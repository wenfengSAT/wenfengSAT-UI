/*
 *  Document   : base_comp_animations.js
 *  Author     : pixelcave
 */var BaseCompAnimations=function(){var n=function(){var n,i,a;jQuery(".js-animation-section button").on("click",function(){i=jQuery(this),n=i.data("animation-class"),a=i.parents(".js-animation-section"),jQuery(".js-animation-preview",a).html(n),jQuery(".js-animation-object",a).removeClass().addClass("js-animation-object animated "+n)})};return{init:function(){n()}}}();jQuery(function(){BaseCompAnimations.init()});