
/*
 * Set the default display controller to be our bootstrap control 
 */
$.fn.dataTable.Editor.defaults.display = "bootstrap";


/*
 * Alter the buttons that Editor adds to TableTools so they are suitable for bootstrap
 */
var i18nDefaults = $.fn.dataTable.Editor.defaults.i18n;
i18nDefaults.create.title = "<h3>"+i18nDefaults.create.title+"</h3>";
i18nDefaults.edit.title = "<h3>"+i18nDefaults.edit.title+"</h3>";
i18nDefaults.remove.title = "<h3>"+i18nDefaults.remove.title+"</h3>";

if ( window.TableTools ) {
	TableTools.BUTTONS.editor_create.formButtons[0].className = "btn btn-primary";
	TableTools.BUTTONS.editor_edit.formButtons[0].className = "btn btn-primary";
	TableTools.BUTTONS.editor_remove.formButtons[0].className = "btn btn-danger";
}


/*
 * Change the default classes from Editor to be classes for Bootstrap
 */
$.extend( true, $.fn.dataTable.Editor.classes, {
	"wrapper": "DTE modal-dialog",
	"header": {
		"wrapper": "modal-header"
	},
	"body": {
		"wrapper": "modal-body"
	},
	"footer": {
		"wrapper": "modal-footer"
	},
	"form": {
		"tag": "form-horizontal"
	},
	"field": {
		"wrapper": "form-group",
		"label":   "col-sm-4 control-label",
		"input":   "col-sm-8",
		"error":   "error",
		"msg-labelInfo": "help-block",
		"msg-info":      "help-block",
		"msg-message":   "help-block",
		"msg-error":     "help-block"
	}
} );


/*
 * Bootstrap display controller - this is effectively a proxy to the Bootstrap
 * modal control.
 */
(function(window, document, $, DataTable) {

var self;

DataTable.Editor.display.bootstrap = $.extend( true, {}, DataTable.Editor.models.displayController, {
	/*
	 * API methods
	 */
	"init": function ( dte ) {
		self._dom.content = $('<div class="modal fade">')[0];
		self._dom.close = $('<button class="close">&times;</div>')[0];

		// Bootstrap 3 needs an extra element in the modal
		$('<div class="modal-content"></div>')
			.append( $(dte.dom.wrapper).children() )
			.appendTo( dte.dom.wrapper );

		$(self._dom.close).click( function () {
			self._dte.close('icon');
		} );

		$(document).on('click', 'div.modal-backdrop', function () {
			self._dte.close('background');
		} );

		return self;
	},

	"open": function ( dte, append, callback ) {
		if ( self._shown ) {
			if ( callback ) {
				callback();
			}
			return;
		}

		self._dte = dte;
		self._shown = true;

		$(self._dom.content).children().detach();
		self._dom.content.appendChild( append );
		$('div.modal-header', append).prepend( self._dom.close );

		$(self._dom.content)
			.one('shown', function () {
				if ( callback ) {
					callback();
				}
			})
			.one('hidden', function () {
				self._shown = false;
			})
			.modal( {
				"backdrop": "static"
			}
		);

		$('input[type=text], select', self._dom.content).addClass( 'form-control' );
	},

	"close": function ( dte, callback ) {
		if ( !self._shown ) {
			if ( callback ) {
				callback();
			}
			return;
		}

		$(self._dom.content).modal('hide');

		self._dte = dte;
		self._shown = false;

		if ( callback ) {
			callback();
		}
	},


	/*
	 * Private properties
	 */
	 "_shown": false,
	"_dte": null,
	"_dom": {}
} );

self = DataTable.Editor.display.bootstrap;


}(window, document, jQuery, jQuery.fn.dataTable));

