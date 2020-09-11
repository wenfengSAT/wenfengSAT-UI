/**
 * @preserve
 * jQuery FullCalendar iPad plugin v1.0
 * http://coconutcalendar.com/
 *
 * Uses the fullCalendar script by Adam Shaw (http://arshaw.com/fullcalendar/)
 * to provide drag/drop support on the iPad.
 *
 * Copyright (c) 2011 Jordan Boesch
 * Dual licensed under the MIT and GPL licenses.
 *
 * Date: Wed Oct 19, 2011
 * @requires jQuery touch punch: https://github.com/furf/jquery-ui-touch-punch (modified slightly)
 */
(function($){

    // Detect touch devices
    window.isTouchDevice = isTouchDevice = (function(){
        var ua = navigator.userAgent;
        var isTouchDevice = (
            ua.match(/iPad/i) ||
            ua.match(/iPhone/i) ||
            ua.match(/iPod/i)
        );

        return isTouchDevice;
    })();

    // Don't do anything if we aren't on a touch device
    if(!isTouchDevice)
    {
        return;
    }

    // Fix and over-ride a bug in jquery ui touch punch
    var _old_mouseDown = $.ui.mouse.prototype._mouseDown;
    $.ui.mouse.prototype._mouseDown = function(event){
        this._mouseDownEvent = event;
        return _old_mouseDown.call(this, event);
    }

    // A handy function to setup our draggables
    $.fn.fullCalendarSetupTouchDraggable = function()
    {
        return this.each(function(){
            $(this).find('.fc-event-draggable').each(function(){
                var e = jQuery.Event("mouseover", {
                    target: this.firstChild,
                    _dummyCalledOnStartup: true
                });
                $(this).trigger(e);
            });
        });
    }

    // Keep a reference to the old one
    var _old_fc = $.fn.fullCalendar;

    $.fn.fullCalendar = function(options)
    {

        var $el = this;

        if(typeof(options) == 'object')
        {
            // If it's not an array, they're loading content in via
            // ajax/json. Hijack the loading callback.
            if(!$.isArray(options.loading))
            {
                var _old_loading = options.loading || function(){};
                options.loading = function(isLoading)
                {
                    if(!isLoading)
                    {
                        // Since the draggable events are lazy(bind)loaded, we need to
                        // trigger the mouseover event so they're all ready for us to
                        // drag/drop on the iPad.
                        $el.fullCalendarSetupTouchDraggable();
                    }
                    _old_loading.apply(this, arguments);
                }
            }
            
            // Hijack the eventMouseover/eventClick methods
            if(options.eventClick || options.eventMouseover)
            {

                var _old_eventClick = options.eventClick || function(){};
                var _old_eventMouseover = options.eventMouseover || function(){};

                // Here, we just combine the click and mouseover events that MAY have been
                // bound. That way, we aren't just ignoring the eventClick event entirely.
                options.eventMouseover = function(event, jsEvent, view)
                {
                    if(jsEvent._dummyCalledOnStartup)
                    {
                        return;
                    }
                    _old_eventClick.apply(this, arguments);
                    _old_eventMouseover.apply(this, arguments);
                }

                // Remove it because it's no good on a touch device, using mouseover
                delete options.eventClick;
            }

            // We need to re-bind our draggables if they switch views
            var _old_viewDisplay = options.viewDisplay || function(){};

            options.viewDisplay = function()
            {
                $el.fullCalendarSetupTouchDraggable();
                _old_viewDisplay.apply(this, arguments);
            }

            var fc = _old_fc.call($el, options);

            // If they loaded in static events, call our setup draggables
            // function. Then return the fullCalendar instance.
            if($.isArray(options.events))
            {
                $el.fullCalendarSetupTouchDraggable();
            }

            return fc;

        }

        return _old_fc.apply(this, arguments);

    }
})(jQuery);