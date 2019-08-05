/**
 * Table Checkable
 * Version: 0.1
 * URL: URL
 * Description: DESCRIPTION
 * Requires: jQuery 1.9, Likely a version way earlier, 
 *           but I haven't testted
 * Author: Rod Howard (http://rod.me)
 * Copyright: Copyright 2013 Rod Howard
 * License: LICENSE_INFO
 */

;(function($, document, window, undefined) {

    "use strict";

    var pluginName = 'tableCheckable';

    var defaults = {
        checkedRowClass: 'checked',
        masterSelector: 'thead .checkbox-column :checkbox',
        slaveSelector: 'tbody .checkbox-column :checkbox'
    };

    function Plugin(element, options) {
        this.element = element;

        this.options = $.extend({}, defaults, options)

        this.$el      = $(element);
        this.$el.data(name, this);

        this._defaults = defaults;

        var meta      = this.$el.data(name + '-opts');
        this.opts     = $.extend(this._defaults, options, meta);

        this.init();
    }

    Plugin.prototype = {

        init: function() {

            var that = this,
                $table = $(this.element),
                options = this.options,
                current = this.getCheckboxes ();


            if (current.checks > 0 && current.total !== current.checks) {
                $table.find (options.masterSelector).prop ('indeterminate', true);
            } else {
                $table.find (options.masterSelector).prop ('indeterminate', false);
            }

            $table.find (options.slaveSelector).filter (':checked')
                .closest ('tr')
                    .addClass (options.checkedRowClass);

            $table.find (options.masterSelector).on ('change', function () {
                var $this = $(this),
                    $checkboxes = $this.closest('table').find (options.slaveSelector);

                $checkboxes.prop ('checked', $this.prop ('checked'));
                $checkboxes.closest ('tr').toggleClass (options.checkedRowClass, $this.prop ('checked'));

                $table.trigger ('masterChecked', [this, $checkboxes]);
            });

            $table.find (options.slaveSelector).on ('change', function () {
                var $this = $(this);

                $this.closest('tr').toggleClass (options.checkedRowClass, $this.prop ('checked'));

                var current = that.getCheckboxes (),
                    $masterCheckbox = $table.find (options.masterSelector);

                     if (current.checks === 0) {
                        $masterCheckbox
                            .prop ('indeterminate', false)
                            .prop ('checked', false);
                    } else if (current.total !== current.checks) {
                        $masterCheckbox
                            .prop ('indeterminate', true)
                            .prop ('checked', false);
                    }else if (current.total === current.checks) {
                        $masterCheckbox
                            .prop ('indeterminate', false)
                            .prop ('checked', true);
                    }

                $table.trigger ('slaveChecked', [$masterCheckbox, this]);
            });
        },

        getCheckboxes: function () {
            var opts = this.options,
                $el = $(this.element).find (opts.slaveSelector);
            return {
                total: $el.length,
                checks: $el.filter (':checked').length
            };
        }
    };

    $.fn[pluginName] = function(options) {
        // Iterate through each DOM element and return it
        return this.each(function() {
            // prevent multiple instantiations
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

    // Private function that is only called by the plugin
    var privateFunction = function() {
        // ...
    }

})(jQuery, document, window);