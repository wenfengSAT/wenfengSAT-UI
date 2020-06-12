/*
 *  Document   : base_pages_reminder.js
 *  Author     : pixelcave
 */
var BasePagesReminder=function(){var e=function(){jQuery(".js-validation-reminder").validate({errorClass:"help-block text-right animated fadeInDown",errorElement:"div",errorPlacement:function(e,r){jQuery(r).parents(".form-group > div").append(e)},highlight:function(e){jQuery(e).closest(".form-group").removeClass("has-error").addClass("has-error"),jQuery(e).closest(".help-block").remove()},success:function(e){jQuery(e).closest(".form-group").removeClass("has-error"),jQuery(e).closest(".help-block").remove()},rules:{"reminder-email":{required:!0,email:!0}},messages:{"reminder-email":{required:"Please enter a valid email address"}}})};return{init:function(){e()}}}();jQuery(function(){BasePagesReminder.init()});