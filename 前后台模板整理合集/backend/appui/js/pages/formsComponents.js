/*
 *  Document   : formsComponents.js
 *  Author     : pixelcave
 */
var FormsComponents=function(){return{init:function(){$(".toggle-bordered").click(function(){$(this).parents(".block").find("form").toggleClass("form-bordered")})}}}();