/*
 *  Document   : readyReminder.js
 *  Author     : pixelcave
 */
var ReadyReminder=function(){return{init:function(){$("#form-reminder").validate({errorClass:"help-block animation-slideUp",errorElement:"div",errorPlacement:function(e,r){r.parents(".form-group > div").append(e)},highlight:function(e){$(e).closest(".form-group").removeClass("has-success has-error").addClass("has-error"),$(e).closest(".help-block").remove()},success:function(e){e.closest(".form-group").removeClass("has-success has-error"),e.closest(".help-block").remove()},rules:{"reminder-email":{required:!0,email:!0}},messages:{"reminder-email":"Please enter your account's email"}})}}}();