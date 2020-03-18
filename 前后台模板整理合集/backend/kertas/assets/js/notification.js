/*
 * Template name: Kertas - Responsive Bootstrap 3 Admin Template
 * Version: 1.0.0
 * Author: VergoLabs
 */

/* GRITTER NOTIFICATIONS */
function initNotification() {
	/* BASIC NOTIFICATION */
	$('#gritter-basic').click(function() {
		$.gritter.add({
			title: 'Regular Notification',
			text: 'This will fade out after a certain amount of time.',
			image: 'assets/img/user/avatar01.png',
			time: ''
		});
		return false;
	});
	
	/* STICKY NOTIFICATION */
	$('#gritter-sticky').click(function() {
		$.gritter.add({
			title: 'Sticky Notification',
			text: 'Just sits there until the user manually removes it by clicking on the (X).',
			image: 'assets/img/user/avatar01.png',
			sticky: true,
			time: ''
		});
		return false;
	});
	
	/* TEXT ONLY NOTIFICATION */
	$('#gritter-text').click(function() {
		$.gritter.add({
			title: 'Text Only Notifications',
			text: 'This will fade out after a certain amount of time.',
			time: ''
		});
		return false;
	});
	
	/* MAX NOTIFICATION */
	$('#gritter-add-max').click(function() {
		$.gritter.add({
			title: 'Add Max Notification',
			text: ' If there are 3 messages already on screen, it won\'t show another one.',
			time: '',
			before_open: function(){
				if($('.gritter-item-wrapper').length == 3){
					return false;
				}
			}
		});
		return false;
	});
	
	/* DEFAULT COLOR NOTIFICATION */
	$('#gritter-default').click(function() {
		$.gritter.add({
			title: 'Default Notification',
			text: 'This will fade out after a certain amount of time.',
			class_name: 'default',
			time: ''
		});
		return false;
	});
	
	/* PRIMARY COLOR NOTIFICATION */
	$('#gritter-primary').click(function() {
		$.gritter.add({
			title: 'Primary Notification',
			text: 'This will fade out after a certain amount of time.',
			class_name: 'primary',
			time: ''
		});
		return false;
	});

	/* SUCCESS COLOR NOTIFICATION */
	$('#gritter-success').click(function() {
		$.gritter.add({
			title: 'Success Notification',
			text: 'This will fade out after a certain amount of time.',
			class_name: 'success',
			time: ''
		});
		return false;
	});
	
	/* INFO COLOR NOTIFICATION */
	$('#gritter-info').click(function() {
		$.gritter.add({
			title: 'Info Notification',
			text: 'This will fade out after a certain amount of time.',
			class_name: 'info',
			time: ''
		});
		return false;
	});
	
	/* WARNING COLOR NOTIFICATION */
	$('#gritter-warning').click(function() {
		$.gritter.add({
			title: 'Warning Notification',
			text: 'This will fade out after a certain amount of time.',
			class_name: 'warning',
			time: ''
		});
		return false;
	});
	
	/* DANGER COLOR NOTIFICATION */
	$('#gritter-danger').click(function() {
		$.gritter.add({
			title: 'Danger Notification',
			text: 'This will fade out after a certain amount of time.',
			class_name: 'danger',
			time: ''
		});
		return false;
	});
	
	/* TOP RIGHT NOTIFICATION */
	$('#gritter-top-right').click(function() {
		$.gritter.removeAll({
			after_close: function(){
				$.gritter.add({
					title: 'Top Right Notification',
					text: 'This will fade out after a certain amount of time.',
					position: 'top-right',
					time: ''
				});
			}
		});
		return false;
	});
	
	/* TOP LEFT NOTIFICATION */
	$('#gritter-top-left').click(function() {
		$.gritter.removeAll({
			after_close: function(){
				$.gritter.add({
					title: 'Top Left Notification',
					text: 'This will fade out after a certain amount of time.',
					position: 'top-left',
					time: ''
				});
			}
		});
		return false;
	});
	
	/* BOTTOM RIGHT NOTIFICATION */
	$('#gritter-bottom-right').click(function() {
		$.gritter.removeAll({
			after_close: function(){
				$.gritter.add({
					title: 'Bottom Right Notification',
					text: 'This will fade out after a certain amount of time.',
					position: 'bottom-right',
					time: ''
				});
			}
		});
		return false;
	});
	
	/* BOTTOM LEFT NOTIFICATION */
	$('#gritter-bottom-left').click(function() {
		$.gritter.removeAll({
			after_close: function(){
				$.gritter.add({
					title: 'Bottom Left Notification',
					text: 'This will fade out after a certain amount of time.',
					position: 'bottom-left',
					time: ''
				});
			}
		});
		return false;
	});
}

$(function() {
	"use strict";
	
	initNotification();
});