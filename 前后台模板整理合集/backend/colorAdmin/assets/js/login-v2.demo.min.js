/*   
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.1
Version: 1.5.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v1.5/admin/
*/var handleLoginPageChangeBackground=function(){$('[data-click="change-bg"]').live("click",function(){var e='[data-id="login-cover-image"]';var t=$(this).find("img").attr("src");var n='<img src="'+t+'" data-id="login-cover-image" />';$(".login-cover-image").prepend(n);$(e).not('[src="'+t+'"]').fadeOut("slow",function(){$(this).remove()});$('[data-click="change-bg"]').closest("li").removeClass("active");$(this).closest("li").addClass("active")})};var LoginV2=function(){"use strict";return{init:function(){handleLoginPageChangeBackground()}}}()