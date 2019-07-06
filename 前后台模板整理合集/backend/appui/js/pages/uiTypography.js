/*
 *  Document   : uiTypography.js
 *  Author     : pixelcave
 */
var UiTypography=function(){return{init:function(){var e=$("h1, h2, h3, h4, h5, h6",".headings-container");$(".toggle-headings-page").click(function(){e.removeClass("sub-header").toggleClass("page-header")}),$(".toggle-headings-sub").click(function(){e.removeClass("page-header").toggleClass("sub-header")})}}}();