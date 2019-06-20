/*
 * bootstrap-session-timeout
 * www.orangehilldev.com
 *
 * Copyright (c) 2014 Vedran Opacic
 * Licensed under the MIT license.
 */
/*jshint multistr: true */
'use strict';

(function($) {
    jQuery.sessionTimeout = function(options) {
        var defaults = {
            title: 'Your Session is About to Expire!',
            message: 'Your session is about to expire.',
            logoutButton: 'Logout',
            keepAliveButton: 'Stay Connected',
            keepAliveUrl: '/keep-alive',
            ajaxType: 'POST',
            ajaxData: '',
            redirUrl: '/timed-out',
            logoutUrl: '/log-out',
            warnAfter: 900000, // 15 minutes
            redirAfter: 1200000, // 20 minutes
            keepAliveInterval: 5000,
            keepAlive: true,
            ignoreUserActivity: false,
            onStart: false,
            onWarn: false,
            onRedir: false,
            countdownMessage: false,
            countdownBar: false
        };

        var opt = defaults,
            timer,
            countdown = {};

        // Extend user-set options over defaults
        if (options) {
            opt = $.extend(defaults, options);
        }

        // Some error handling if options are miss-configured
        if (opt.warnAfter >= opt.redirAfter) {
            console.error('Bootstrap-session-timeout plugin is miss-configured. Option "redirAfter" must be equal or greater than "warnAfter".');
            return false;
        }

        // Unless user set his own callback function, prepare bootstrap modal elements and events
        if (typeof opt.onWarn !== 'function') {
            // If opt.countdownMessage is defined add a coundown timer message to the modal dialog
            var countdownMessage = opt.countdownMessage ?
            '<p>' + opt.countdownMessage.replace(/{timer}/g, '<span class="countdown-holder"></span>') + '</p>' : '';
            var coundownBarHtml = opt.countdownBar ?
                '<div class="progress"> \
                  <div class="progress-bar progress-bar-striped countdown-bar active" role="progressbar" style="min-width: 15px; width: 100%;"> \
                    <span class="countdown-holder"></span><span>s</span> \
                  </div> \
                </div>' : '';

            // Create timeout warning dialog
            $('body').append('<div class="modal fade" id="session-timeout-dialog"> \
              <div class="modal-dialog"> \
                <div class="modal-content"> \
                  <div class="modal-header"> \
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> \
                    <h4 class="modal-title">' + opt.title + '</h4> \
                  </div> \
                  <div class="modal-body"> \
                    <p>' + opt.message + '</p> \
                    ' + countdownMessage + ' \
                    ' + coundownBarHtml + ' \
                  </div> \
                  <div class="modal-footer"> \
                    <button id="session-timeout-dialog-logout" type="button" class="btn btn-default">' + opt.logoutButton + '</button> \
                    <button id="session-timeout-dialog-keepalive" type="button" class="btn btn-primary" data-dismiss="modal">' + opt.keepAliveButton + '</button> \
                  </div> \
                </div> \
              </div> \
             </div>');

            // "Logout" button click
            $('#session-timeout-dialog-logout').on('click', function() {
                window.location = opt.logoutUrl;
            });
            // "Stay Connected" button click
            $('#session-timeout-dialog').on('hide.bs.modal', function() {
                // Restart session timer
                startSessionTimer();
            });
        }

        // Reset timer on any of these events
        if (!opt.ignoreUserActivity) {
            $(document).on('keyup mouseup mousemove touchend touchmove', function() {
                startSessionTimer();
            });
        }

        // Keeps the server side connection live, by pingin url set in keepAliveUrl option.
        // KeepAlivePinged is a helper var to ensure the functionality of the keepAliveInterval option
        var keepAlivePinged = false;

        function keepAlive() {
            if (!keepAlivePinged) {
                // Ping keepalive URL using (if provided) data and type from options
                $.ajax({
                    type: opt.ajaxType,
                    url: opt.keepAliveUrl,
                    data: opt.ajaxData
                });
                keepAlivePinged = true;
                setTimeout(function() {
                    keepAlivePinged = false;
                }, opt.keepAliveInterval);
            }
        }

        function startSessionTimer() {
            // Clear session timer
            clearTimeout(timer);
            if (opt.countdownMessage || opt.countdownBar) {
                startCountdownTimer('session', true);
            }

            if (typeof opt.onStart === 'function') {
                opt.onStart(opt);
            }

            // If keepAlive option is set to "true", ping the "keepAliveUrl" url
            if (opt.keepAlive) {
                keepAlive();
            }

            // Set session timer
            timer = setTimeout(function() {
                // Check for onWarn callback function and if there is none, launch dialog
                if (typeof opt.onWarn !== 'function') {
                    $('#session-timeout-dialog').modal('show');
                } else {
                    opt.onWarn(opt);
                }
                // Start dialog timer
                startDialogTimer();
            }, opt.warnAfter);
        }

        function startDialogTimer() {
            // Clear session timer
            clearTimeout(timer);
            if (!$('#session-timeout-dialog').hasClass('in') && (opt.countdownMessage || opt.countdownBar)) {
                // If warning dialog is not already open and either opt.countdownMessage
                // or opt.countdownBar are set start countdown
                startCountdownTimer('dialog', true);
            }
            // Set dialog timer
            timer = setTimeout(function() {
                // Check for onRedir callback function and if there is none, launch redirect
                if (typeof opt.onRedir !== 'function') {
                    window.location = opt.redirUrl;
                } else {
                    opt.onRedir(opt);
                }
            }, (opt.redirAfter - opt.warnAfter));
        }

        function startCountdownTimer(type, reset) {
            // Clear countdown timer
            clearTimeout(countdown.timer);

            if (type === 'dialog' && reset) {
                // If triggered by startDialogTimer start warning countdown
                countdown.timeLeft = Math.floor((opt.redirAfter - opt.warnAfter) / 1000);
            } else if (type === 'session' && reset) {
                // If triggered by startSessionTimer start full countdown
                // (this is needed if user doesn't close the warning dialog)
                countdown.timeLeft = Math.floor(opt.redirAfter / 1000);
            }
            // If opt.countdownBar is true, calculate remaining time percentage
            if (opt.countdownBar && type === 'dialog') {
                countdown.percentLeft = Math.floor(countdown.timeLeft / ((opt.redirAfter - opt.warnAfter) / 1000) * 100);
            } else if (opt.countdownBar && type === 'session') {
                countdown.percentLeft = Math.floor(countdown.timeLeft / (opt.redirAfter / 1000) * 100);
            }
            // Set countdown message time value
            $('.countdown-holder').text(countdown.timeLeft);

            // Set countdown message time value
            if (opt.countdownBar) {
                $('.countdown-bar').css('width', countdown.percentLeft + '%');
            }

            // Countdown by one second
            countdown.timeLeft = countdown.timeLeft - 1;
            countdown.timer = setTimeout(function() {
                // Call self after one second
                startCountdownTimer(type);
            }, 1000);
        }

        // Start session timer
        startSessionTimer();

    };
})(jQuery);
