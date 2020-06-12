/*
 *  Document   : base_ui_activity.js
 *  Author     : pixelcave
 */var BaseUIActivity=function(){var i=function(){jQuery(".js-bar-randomize").on("click",function(){jQuery(this).parents(".block").find(".progress-bar").each(function(){var i=jQuery(this),n=Math.floor(91*Math.random()+10)+"%";i.css("width",n),i.parent().hasClass("progress-mini")||i.html(n)})})};return{init:function(){i()}}}();jQuery(function(){BaseUIActivity.init()});