/*
 *  Document   : uiProgress.js
 *  Author     : pixelcave
 */
var UiProgress=function(){var t=function(t,r){return Math.floor(Math.random()*(r-t+1))+t};return{init:function(){var r=0;$(".toggle-bars").click(function(){$(".progress-bar",".bars-container").each(function(){var o=$(this);r=t(10,100)+"%",o.css("width",r),o.parent().hasClass("progress-mini")||o.html(r)}),$(".progress-bar",".bars-stacked-container").each(function(){r=t(10,25)+"%",$(this).css("width",r).html(r)})}),$(".btn-growl").on("click",function(){var t=$(this).data("growl");$.bootstrapGrowl("<h4><strong>Notification</strong></h4> <p>Content..</p>",{type:t,delay:3e3,allow_dismiss:!0,offset:{from:"top",amount:20}}),$(this).prop("disabled",!0)})}}}();