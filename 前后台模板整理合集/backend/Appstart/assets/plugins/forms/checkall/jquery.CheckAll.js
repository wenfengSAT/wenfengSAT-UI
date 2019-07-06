// jQuery Plugin CheckAll checkboxes
// Depencies: icheck plugin
// version 1.0, Jan 10th, 2013
// by SuggeElson

;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = "checkAll",
        defaults = {
            masterCheckbox: '.checkAll',
			otherCheckboxes : '.check'
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // jQuery has an extend method
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            // Place initialization logic here
            // call them like so: this.yourOtherFunction(this.element, this.options).
            var obj = $(this.element);
            var chbox = 'input'+this.options.masterCheckbox;
            var checkAll = obj.find(chbox);
			var checkboxes = obj.find('input'+this.options.otherCheckboxes);
			
			checkAll.on('ifChecked ifUnchecked', function(event) {        
			    if (event.type == 'ifChecked') {
			        checkboxes.iCheck('check');
			    } else {
			        checkboxes.iCheck('uncheck');
			    }
			});

			checkboxes.on('ifChanged', function(event){
			    if(checkboxes.filter(':checked').length == checkboxes.length) {
			        checkAll.prop('checked', 'checked');
			    } else {
			        checkAll.removeProp('checked');
			    }
			    checkAll.iCheck('update');
			});	
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn.checkAll = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );