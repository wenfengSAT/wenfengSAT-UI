/*
 *  Document   : base_ui_icons.js
 *  Author     : pixelcave
 */var BaseUIIcons=function(){var n=function(){var n=jQuery(".js-icon-list > div"),e="";jQuery(".js-icon-search").on("keyup",function(){e=jQuery(this).val().toLowerCase(),e.length>2?(n.hide(),jQuery("code",n).each(function(){jQuery(this).text().match(e)&&jQuery(this).parent("div").show()})):0===e.length&&n.show()})};return{init:function(){n()}}}();jQuery(function(){BaseUIIcons.init()});