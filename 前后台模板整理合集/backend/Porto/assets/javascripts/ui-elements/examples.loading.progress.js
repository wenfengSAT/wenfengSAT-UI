/*
Name: 			UI Elements / Loading Progress - Examples
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version: 	1.4.1
*/

(function( $ ) {

	'use strict';

	// PLUGIN DOCUMENTATION: https://github.com/rstacruz/nprogress

	$(function() {
		$('#NPStart').on( 'click', function() {
			NProgress.start();
		});

		$('#NPStop').on( 'click', function() {
			NProgress.done();
		});

		$('#NPInc').on( 'click', function() {
			NProgress.inc();
		});

		$('#NPStartStop').on( 'click', function() {
			NProgress.done(true);
		});

		$('[data-np-set]').on( 'click', function() {
			var $this = $(this);

			NProgress.set( $this.data('np-set') / 100 );
		});

		$('#NPCallbacks').on( 'click', function() {
			NProgress.set( 0.5, {
				onInit: function() {
					alert('initializing');
				},
				onFinish: function() {
					alert('finished');
				}
			})
		});
	});

}).apply( this, [ jQuery ]);