/*
 *  Document   : appEmail.js
 *  Author     : pixelcave
 */
var AppEmail=function(){return{init:function(){var a="warning";$("tbody input:checkbox").click(function(){var n=$(this).prop("checked"),i=$(this).closest("tr");n?i.addClass(a):i.removeClass(a)});var n=$("#message-list"),i=$("#message-view");n.find("h4 > a").on("click",function(){n.removeClass("animation-fadeInQuick2Inv").addClass("display-none"),i.removeClass("display-none").addClass("animation-fadeInQuick2")}),i.find("#message-view-back").on("click",function(){i.removeClass("animation-fadeInQuick2").addClass("display-none"),n.removeClass("display-none").addClass("animation-fadeInQuick2Inv")})}}}();