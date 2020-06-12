/* 
 * File:   colvis.extras.js  
 * Version: 	1.1.2
 * Created: 	12/01/2013
 * Modified:	25/07/2013
 * Authors:	Drew Taylor 
 * 		(search this file for "Drew"), 
 * 		STWI 
 * 		(search this file for "STWI") 
 *		Thanks to STWI for the base iMaxRows integration! 
 * 		If anyone knows how to contact STWI or what the acronym stands email me. 
 *              Code was found in forums but can no longer find the thread.
 * 				
 * Language: 	Javascript
 * Contact:	tay.drew@hotmail.ca 
 * Description: ColVis extension which allows for toggling button types and different menu layout integrations.
 * 		Button extensions for Twitter Bootstrap buttons; i.e.  <button class="btn">
 * 		For use with non-Bootstrap integrations add these button classes to your CSS: 
 * 		"btn" (basic buttons), "btn-group" (groups of buttons), "btn-primary" (ColVis menu button, sShowAll, bRestore), 
 * 		"btn-danger" (bClose).
 *
 * Extensions:	1) grid layout of colvis dropdown menu:
 * 		@property iMaxRows
 * 		@type     int
 * 		@default  -1
 * 				
 * 		If you have a table with a lot of columns the user could get a scroll bar on the main ColVis 
 * 		dropdown menu, so it can be useful to get a grid layout the for menu items:
 * 				
 * 		@example
 * 		$(document).ready(function(){
 *			$("#example").dataTable({
 *				"sDom": "C<'clear'>lfrtip",
 * 				"oColVis": { "iMaxRows": 3 } // Maximum of 3 buttons per column in menu items array. 
 *			});
 *		});
 * 
 * 		2) ColVis to "sDom":s text label insertion:
 * 		@property bLabel
 *		@type     Array
 *		@default  []
 *		@property bLabelPost
 *		@type     Array
 *		@default  []
 * 		@property sLabel
 *		@type     String
 *		@default  Viewing options:
 * 
 * 		If colvis has it's own row in the sdom it can be nice to add a text label just outside of the <button>...</button> 
 * 		code. The label can get inserted before or after the ColVis menu button.  
 * 
 * 		@example
 * 		$(document).ready(function(){
 *			$("#example").dataTable({
 *				"sDom": "C<'clear'>lfrtip",
 * 				"oColVis": { "buttonText": "<span class='caret' />","sLabel": "Customize your view: ","bLabel": true } 
 *			}); 
 *		});	// "sLabel": define the text label 
 * 			// "bLabel": true, displays sLabel before ColVis menu button, to display it after the menu button 
 * 			// instead "bLabel" use "bLabelPost": true
 * 
 * 		3) Button to close the ColVis dropdown menu:
 * 		@property bClose
 *		@type     Array
 *		@default  []
 * 		@property sClose
 *		@type     String
 *		@default  "x"
 * 
 * 		To close the ColVis dropdown menu you click outside of the menu region, or by clicking the main button, or, 
 * 		to get nasty, by settting _fnCollectionHide() after the firing every menu action. This init param adds a button 
 * 		to close the dropdown menu, and it's always added as the last menu item.
 * 				
 * 		@example
 * 		// This option is turned on by default, to turn it off set bClose to false in your DataTables init:
 * 				
 * 		$(document).ready(function(){
 *			$("#example").dataTable({
 *				"sDom": "C<'clear'>lfrtip",
 * 				"oColVis": { "bClose": false } 
 *			});
 *		});
 * 
 * 		// Or, to change the text of the close button (default button text is "x"):
 * 
 * 		$(document).ready(function(){
 *			$("#example").dataTable({
 *				"sDom": "C<'clear'>lfrtip",
 * 					"oColVis": { "bClose": true, "sClose": "Close Menu" }	// Sets menu text to "Close Menu"
 *			});														  	// Alternatively, we could have injected html:
 *		});																// "sClose": "<i class="icon-search"></i>"
 * 				
 * 		4) Add extra buttons section:
 * 		@property bExtras
 *		@type     Array
 *		@default  []
 * 
 * 		ColVis is a handy dropdown menu, so it can be useful to add extra buttons there to perform different operations 
 * 		than just showing and hiding columns in your DataTables. bExtras option allows you to create your own button 
 * 		sections. You'll need to do a little work defining the buttons and how many buttons you want inside bExtras, 
 * 		and you'll probably want to attach their sweet onclick functions.
 * 				
 * 		@example
 * 		//To get started you'll need to search colvis.extras.js for this string: "var arr = [ "button1", "button2", "button3"];"
 * 		// Now if we change it  to: 
 * 		var arr = [ "Public", "Hidden" ];
 * 		// We set the button text for and declare how many buttons get added the menu section.
 * 				
 * 		//Then in our DataTables init:
 * 		$(document).ready(function(){
 *			$("#example").dataTable({
 *				"sDom": "C<'clear'>lfrtip",
 * 				"oColVis": { "bExtras": true } // Turns on new section
 *			});
 * 					
 * 			// Our "Public" and "Hidden" buttons get id attributes like this:
 * 			$("#extrasbtn-1").click(function() {
 * 				window.location.href = "start.php?page=inventory&filter=public";
 *			}); // example redirect 
 *					
 *			$("#extrasbtn-2").click(function() {
 * 				window.location.href = "start.php?page=inventory&filter=hidden";
 *			}); // example redirect
 *		});		
 * 
 * 		5) Separator elements for the different button categories:
 * 		@param {object} 
 * 		@type function _fnColSeparate()
 * 
 * 		Html <hr> are automatically inserted between different button categories, i.e. bExtras, 
 * 		bClose, bShowAll, bRestore etc. as a visual aid to organizing the button types into categories.
 * 				
 * 		To turn off <hr> separators comment out the lines like:
 * 		// nSpanHR = this._fnColSeparate();
 * 		// this.dom.collection.appendChild( nSpanHR );
 * 						 
 *
 * Original File:	ColVis.js
 * Version:     	1.0.8
 * CVS:         	$Id$
 * Description: 	Controls for column visiblity in DataTables
 * Author:      	Allan Jardine (www.sprymedia.co.uk)
 * Created:     	Wed Sep 15 18:23:29 BST 2010
 * Modified:    	$Date$ by $Author$
 * Language:    	Javascript
 * License:     	GPL v2 or BSD 3 point style
 * Project:     	Just a little bit of fun :-)
 * Contact:     	www.sprymedia.co.uk/contact
 * 
 * Copyright 2010-2011 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD style license, available at:
 *   http://datatables.net/license_gpl2
 *   http://datatables.net/license_bsd
 *
 */

(function($) {

/** 
 * ColVis provides column visiblity control for DataTables
 * @class ColVis
 * @constructor
 * @param {object} DataTables settings object
 */
ColVis = function( oDTSettings, oInit )
{
	/* Santiy check that we are a new instance */
	if ( !this.CLASS || this.CLASS != "ColVis" )
	{
		alert( "Warning: ColVis must be initialised with the keyword 'new'" );
	}
	
	if ( typeof oInit == 'undefined' )
	{
		oInit = {};
	}	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Public class variables
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	
	/**
	 * @namespace Settings object which contains customisable information for ColVis instance
	 */
	this.s = {
		/**
		 * DataTables settings object
		 *  @property dt
		 *  @type     Object
		 *  @default  null
		 */
		"dt": null,
		
		/**
		 * Customisation object
		 *  @property oInit
		 *  @type     Object
		 *  @default  passed in
		 */
		"oInit": oInit,
		
		/**
		 * Callback function to tell the user when the state has changed
		 *  @property fnStateChange
		 *  @type     function
		 *  @default  null
		 */
		"fnStateChange": null,
		
		/**
		 * Mode of activation. Can be 'click' or 'mouseover'
		 *  @property activate
		 *  @type     String
		 *  @default  click
		 */
		"activate": "click",
		
		/**
		 * Position of the collection menu when shown - align "left" or "right"
		 *  @property sAlign
		 *  @type     String
		 *  @default  right
		 */
		"sAlign": "left",
		
		/**
		 * Text used for the button
		 *  @property buttonText
		 *  @type     String
		 *  @default  Show / hide columns
		 */
		"buttonText": "Show / hide columns",
		
		/**
		 * Flag to say if the collection is hidden
		 *  @property hidden
		 *  @type     boolean
		 *  @default  true
		 */
		"hidden": true,
		
		/**
		 * List of columns (integers) which should be excluded from the list
		 *  @property aiExclude
		 *  @type     Array
		 *  @default  []
		 */
		"aiExclude": [],
		
		/**
		 * Store the original viisbility settings so they could be restored
		 *  @property abOriginal
		 *  @type     Array
		 *  @default  []
		 */
		"abOriginal": [],
		
		/**
		 * Show Show-All button
		 *  @property bShowAll
		 *  @type     Array
		 *  @default  []
		 */
		"bShowAll": true,
		
		/**
		 * Show All button text
		 *  @property sShowAll
		 *  @type     String
		 *  @default  Restore original
		 */
		"sShowAll": "Show All",
		
		/**
		 * Show restore button
		 *  @property bRestore
		 *  @type     Array
		 *  @default  []
		 */
		"bRestore": false,
		
		/**
		 * Restore button text
		 *  @property sRestore
		 *  @type     String
		 *  @default  Restore original
		 */
		// Drew - old default was "Restore Original" i.e. confusing
		"sRestore": "Last Saved",
		
		// Drew - Close defaults
		/**
		 * Show close button or don't
		 *  @property bClose
		 *  @type     Array
		 *  @default  []
		 */
		"bClose": true,
		
		// Drew
		/**
		 * Close button text
		 *  @property sClose
		 *  @type     String
		 *  @default  x
		 */
		"sClose": "x", // Drew - default close text or inject img html
		
		// Drew - Extras defaults
		/**
		 * Show view filter buttons
		 *  @property bExtras
		 *  @type     Array
		 *  @default  []
		 */
		"bExtras": false,
		
		//Drew - Default text labels
		/**
		 * Show a text label before ColVis menu button or don't
		 *  @property bLabel
		 *  @type     Array
		 *  @default  []
		 */
		"bLabel": false,
		
		//Drew - Default text labels
		/**
		 * Show a text label after the ColVis menu button or don't
		 *  @property bLabelPost
		 *  @type     Array
		 *  @default  []
		 */
		"bLabelPost": false,
		
		// Drew - Default text for bLabel and bLabelPost
		/**
		 * Default text of text label
		 *  @property sLabel
		 *  @type     String
		 *  @default  Viewing options:
		 */
		"sLabel": "Viewing options:",
		
		/**
		 * Overlay animation duration in mS
		 *  @property iOverlayFade
		 *  @type     Integer
		 *  @default  500
		 */
		"iOverlayFade": 500,
		
		/**
		 * Label callback for column names. Takes three parameters: 1. the column index, 2. the column
		 * title detected by DataTables and 3. the TH node for the column
		 *  @property fnLabel
		 *  @type     Function
		 *  @default  null
		 */
		"fnLabel": null,
		
		/**
		 * Indicate if ColVis should automatically calculate the size of buttons or not. The default
		 * is for it to do so. Set to "css" to disable the automatic sizing
		 *  @property sSize
		 *  @type     String
		 *  @default  auto
		 */
		"sSize": "auto",
		
		/**
		 * Indicate if the column list should be positioned by Javascript below the menu button
		 * or allow CSS to do the positioning
		 *  @property bCssPosition
		 *  @type     boolean
		 *  @default  false
		 */
		"bCssPosition": false,
		
		/**
		 * [STWI] Maximum number of lines to show in the dropdown list, when iMaxRows is reached
		 * the rows will wrap into an additional column
		 *  @property iMaxRows
		 *  @type     int
		 *  @default  -1
		 */
		"iMaxRows": -1
	};
		
	/**
	 * @namespace Common and useful DOM elements for the class instance
	 */
	this.dom = {
		/**
		 * Wrapper for the button - given back to DataTables as the node to insert
		 *  @property wrapper
		 *  @type     Node
		 *  @default  null
		 */
		"wrapper": null,
		
		/**
		 * Activation button
		 *  @property button
		 *  @type     Node
		 *  @default  null
		 */
		"button": null,
		
		/**
		 * Collection list node
		 *  @property collection
		 *  @type     Node
		 *  @default  null
		 */
		"collection": null,
		
		/**
		 * Background node used for shading the display and event capturing
		 *  @property background
		 *  @type     Node
		 *  @default  null
		 */
		"background": null,
		
		/**
		 * Element to position over the activation button to catch mouse events when using mouseover
		 *  @property catcher
		 *  @type     Node
		 *  @default  null
		 */
		"catcher": null,
		
		/**
		 * List of button elements
		 *  @property buttons
		 *  @type     Array
		 *  @default  []
		 */
		"buttons": [],
		
		/**
		 * Restore button
		 *  @property restore
		 *  @type     Node
		 *  @default  null
		 */
		"restore": null
	};
	
	/* Store global reference */
	ColVis.aInstances.push( this );
	
	/* Constructor logic */
	this.s.dt = oDTSettings;
	this._fnConstruct();
	return this;
};

ColVis.prototype = {
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Public methods
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	
	/**
	 * Rebuild the list of buttons for this instance (i.e. if there is a column header update)
	 *  @method  fnRebuild
	 *  @returns void
	 */
	"fnRebuild": function ()
	{
		/* Remove the old buttons */
		for ( var i=this.dom.buttons.length-1 ; i>=0 ; i-- )
		{
			if ( this.dom.buttons[i] !== null )
			{
				this.dom.collection.removeChild( this.dom.buttons[i] );
			}
		}
		this.dom.buttons.splice( 0, this.dom.buttons.length );
		
		this.dom.collection.removeChild( nSpanHR );
		
		if ( this.dom.restore )
		{
			this.dom.restore.parentNode( this.dom.restore );
		}
		
		/* Re-add them (this is not the optimal way of doing this, it is fast and effective) */
		this._fnAddButtons();
		
		/* Update the checkboxes */
		this._fnDrawCallback();
	},
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Private methods (they are of course public in JS, but recommended as private)
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	
	/**
	 * Constructor logic
	 *  @method  _fnConstruct
	 *  @returns void
	 *  @private 
	 */
	"_fnConstruct": function ()
	{
		this._fnApplyCustomisation();
		
		var that = this;
		var i, iLen;
		this.dom.wrapper = document.createElement('div');
		this.dom.wrapper.className = "ColVis TableTools";
		
		if ( this.s.bLabel )
		{
			nText = this._fnTextLabel();
			this.dom.wrapper.appendChild( nText );
		}
		
		this.dom.button = this._fnDomBaseButton( this.s.buttonText );
		this.dom.button.className += " ColVis_MasterButton";
		// Drew - Get bootstrap buttons
		this.dom.button.className += " btn";
		this.dom.button.className += " btn-primary";
		this.dom.wrapper.appendChild( this.dom.button );
		
		if ( this.s.bLabelPost )
		{
			nText = this._fnTextLabel();
			this.dom.wrapper.appendChild( nText );
		}
		
		this.dom.catcher = this._fnDomCatcher();
		this.dom.collection = this._fnDomCollection();
		this.dom.background = this._fnDomBackground();
		
		this._fnAddButtons();
		
		/* Store the original visbility information */
		for ( i=0, iLen=this.s.dt.aoColumns.length ; i<iLen ; i++ )
		{
			this.s.abOriginal.push( this.s.dt.aoColumns[i].bVisible );
		}
		
		/* Update on each draw */
		this.s.dt.aoDrawCallback.push( {
			"fn": function () {
				that._fnDrawCallback.call( that );
			},
			"sName": "ColVis"
		} );
		
		// Drew
		/* If we're using state saving let's save the state */
		this.s.dt.oInstance.oApi._fnSaveState( this.s.dt );
		
		// Drew
		/* If columns were reordered by ColReorder plugin let's update our column exclude list and
		 * rebuild the display list */
		 
		$(this.s.dt.oInstance).bind( 'column-reorder', function ( e, oSettings, oReorder ) {
			for ( i=0, iLen=that.s.aiExclude.length ; i<iLen ; i++ ) {
				that.s.aiExclude[i] = oReorder.aiInvertMapping[ that.s.aiExclude[i] ];
			}

			var mStore = that.s.abOriginal.splice( oReorder.iFrom, 1 )[0];
			that.s.abOriginal.splice( oReorder.iTo, 0, mStore );
			
			that.fnRebuild();
		} );
	},
	
	/**
	 * Apply any customisation to the settings from the DataTables initialisation
	 *  @method  _fnApplyCustomisation
	 *  @returns void
	 *  @private 
	 */
	"_fnApplyCustomisation": function ()
	{
		var oConfig = this.s.oInit;
		
		if ( typeof oConfig.activate != 'undefined' )
		{
			this.s.activate = oConfig.activate;
		}
		
		if ( typeof oConfig.buttonText != 'undefined' )
		{
			this.s.buttonText = oConfig.buttonText;
		}
		
		if ( typeof oConfig.aiExclude != 'undefined' )
		{
			this.s.aiExclude = oConfig.aiExclude;
		}
		
		if ( typeof oConfig.bRestore != 'undefined' )
		{
			this.s.bRestore = oConfig.bRestore;
		}
		
		if ( typeof oConfig.sRestore != 'undefined' )
		{
			this.s.sRestore = oConfig.sRestore;
		}
		
		if ( typeof oConfig.bShowAll != 'undefined' )
		{
			this.s.bShowAll = oConfig.bShowAll;
		}
		
		if ( typeof oConfig.sShowAll != 'undefined' )
		{
			this.s.sShowAll = oConfig.sShowAll;
		}
		// Drew
		if ( typeof oConfig.bClose != 'undefined' )
		{
			this.s.bClose = oConfig.bClose;
		}
		
		// Drew
		if ( typeof oConfig.bExtras != 'undefined' )
		{
			this.s.bExtras = oConfig.bExtras;
		}
		
		// Drew
		if ( typeof oConfig.bLabel != 'undefined' )
		{
			this.s.bLabel = oConfig.bLabel;
		}
		if ( typeof oConfig.bLabelPost != 'undefined' )
		{
			this.s.bLabelPost = oConfig.bLabelPost;
		}
		
		if ( typeof oConfig.sLabel != 'undefined' )
		{
			this.s.sLabel = oConfig.sLabel;
		}
		
		if ( typeof oConfig.sClose != 'undefined' )
		{
			this.s.sClose = oConfig.sClose;
		}
		
		if ( typeof oConfig.sAlign != 'undefined' )
		{
			this.s.sAlign = oConfig.sAlign;
		}
		
		if ( typeof oConfig.fnStateChange != 'undefined' )
		{
			this.s.fnStateChange = oConfig.fnStateChange;
		}
		
		if ( typeof oConfig.iOverlayFade != 'undefined' )
		{
			this.s.iOverlayFade = oConfig.iOverlayFade;
		}
		
		if ( typeof oConfig.fnLabel != 'undefined' )
		{
			this.s.fnLabel = oConfig.fnLabel;
		}
		
		if ( typeof oConfig.sSize != 'undefined' )
		{
			this.s.sSize = oConfig.sSize;
		}

		if ( typeof oConfig.bCssPosition != 'undefined' )
		{
			this.s.bCssPosition = oConfig.bCssPosition;
		}

		// [STWI] decode the new 'iMaxRows' property
		if ( typeof oConfig.iMaxRows != 'undefined' )
		{
			this.s.iMaxRows = oConfig.iMaxRows;
		}
	},
	
	/**
	 * On each table draw, check the visibility checkboxes as needed. This allows any process to
	 * update the table's column visibility and ColVis will still be accurate.
	 *  @method  _fnDrawCallback
	 *  @returns void
	 *  @private 
	 */
	"_fnDrawCallback": function ()
	{
		var aoColumns = this.s.dt.aoColumns;
		
		for ( var i=0, iLen=aoColumns.length ; i<iLen ; i++ )
		{
			if ( this.dom.buttons[i] !== null )
			{
				if ( aoColumns[i].bVisible )
				{
					$('input', this.dom.buttons[i]).attr('checked','checked');
				}
				else
				{
					$('input', this.dom.buttons[i]).removeAttr('checked');
				}
			}
		}
	},	
	
	/**
	 * Loop through the columns in the table and as a new button for each one.
	 *  @method  _fnAddButtons
	 *  @returns void
	 *  @private 
	 */
	"_fnAddButtons": function ()
	{
		// Drew - regular buttons
		var
			nButton,
			sExclude = ","+this.s.aiExclude.join(',')+",";
			nSpanHR = this._fnColSeparate();
		for ( var i=0, iLen=this.s.dt.aoColumns.length ; i<iLen ; i++ )
		{
			if ( sExclude.indexOf( ","+i+"," ) == -1 )
			{
				nButton = this._fnDomColumnButton( i );
				this.dom.buttons.push( nButton );
				this.dom.collection.appendChild( nButton );
			}
			else
			{
				this.dom.buttons.push( null );
			}
			this.dom.collection.appendChild( nSpanHR );
		}
		
		// Drew - buttons section
		// bExtras section
		if ( this.s.bExtras )
		{
			nSpanHR = this._fnColSeparate();
			var arr = []; // add buttons by putting them into this array ex: var arr = [ "button1", "button2", "button3"];
			
			for ( var i=0, iLen=arr.length ; i<iLen ; i++ )
			{
				nSpan = document.createElement('span');
				nButton = this._fnExtrasButtons();
				nButton.className += ' sState_'+i+'_View';
				nButton.setAttribute("id","extrasbtn-"+i);
				this.dom.buttons.push( nButton );
				this.dom.collection.appendChild( nButton );
				nButton.appendChild( nSpan );
				$(nSpan).html( '<span class="ColVis_title name-span">'+arr[i]+'</span>' );	
			}
			this.dom.collection.appendChild( nSpanHR );
		}
		
		// bRestore
		if ( this.s.bRestore )
		{
			nButton = this._fnDomRestoreButton();
			nButton.className += " ColVis_Restore btn-primary";
			this.dom.buttons.push( nButton );
			this.dom.collection.appendChild( nButton );
			
		}
		// bShowall
		if ( this.s.bShowAll )
		{
			nButton = this._fnDomShowAllButton();
			nButton.className += " ColVis_ShowAll btn-primary";
			this.dom.buttons.push( nButton );
			this.dom.collection.appendChild( nButton );
		}
		// bClose
		if ( this.s.bClose )
		{
			nButton = this._fnDomCloseButton();
			nButton.className += " ColVis_Close";
			this.dom.buttons.push( nButton );
			this.dom.collection.appendChild( nButton );
		}
	},
		
	/**
	 * Create a button which allows a "restore" action
	 *  @method  _fnDomRestoreButton
	 *  @returns {Node} Created button
	 *  @private 
	 */
	"_fnDomRestoreButton": function ()
	{
		var
			that = this,
			nButton = document.createElement('button'),
			nSpan = document.createElement('span');
		
		// Drew - get Bootstrap button style
		nButton.className = !this.s.dt.bJUI ? "ColVis_Button TableTools_Button btn" :
			"ColVis_Button TableTools_Button ui-button ui-state-default btn";
		nButton.appendChild( nSpan );
		$(nSpan).html( '<span class="ColVis_title">'+this.s.sRestore+'</span>' );
		
		$(nButton).click( function (e) {
			for ( var i=0, iLen=that.s.abOriginal.length ; i<iLen ; i++ )
			{
				that.s.dt.oInstance.fnSetColumnVis( i, that.s.abOriginal[i], false );
				$('table').css('width', '100%');
			}
			that._fnAdjustOpenRows();
			that.s.dt.oInstance.fnAdjustColumnSizing( false );
			that.s.dt.oInstance.fnDraw( false );
		} );
		
		return nButton;
	},
	
	/**
	 *  Create a button which allows a "show all" action
	 *  @method  _fnDomShowAllButton
	 *  @returns {Node} Created button
	 *  @private 
	 */
	"_fnDomShowAllButton": function ()
	{
		var
			that = this,
			nButton = document.createElement('button'),
			nSpan = document.createElement('span');
		
		// Drew - by default get Bootstrap button style
		nButton.className = !this.s.dt.bJUI ? "ColVis_Button TableTools_Button btn" :
			"ColVis_Button TableTools_Button ui-button ui-state-default btn";
		nButton.appendChild( nSpan );
		$(nSpan).html( '<span class="ColVis_title">'+this.s.sShowAll+'</span>' );
		
		$(nButton).click( function (e) {
			for ( var i=0, iLen=that.s.abOriginal.length ; i<iLen ; i++ )
			{
				if (that.s.aiExclude.indexOf(i) === -1)
				{
					that.s.dt.oInstance.fnSetColumnVis( i, true, false );
					$('table').css('width', '100%');
				}
			}
			that._fnAdjustOpenRows();
			that.s.dt.oInstance.fnAdjustColumnSizing( false );
			that.s.dt.oInstance.fnDraw( false );
		} );
		
		return nButton;
	},
	
	/**
	 *  Create customized view buttons
	 *  @method _fnDomShowAllButton
	 *  @returns {Node} Created button
	 *  @private 
	 */
	"_fnViewButtons": function ()
	{
		var
			that = this,
			nButton = document.createElement('button'),
			nSpan = document.createElement('span');
			
		// Drew - by default get Bootstrap button style
		nButton.className = !this.s.dt.bJUI ? "ColVis_Button TableTools_Button view-button btn" :
			"ColVis_Button TableTools_Button ui-button ui-state-default btn";
		//nButton.appendChild( nSpan );
		//$(nSpan).html( '<span class="ColVis_title name-span"></span>' );
		
		$(nButton).click( function (e) {
			/*
			that._fnAdjustOpenRows();
			that.s.dt.oInstance.fnAdjustColumnSizing( false );
			that.s.dt.oInstance.fnDraw( false );
			*/
		} );
		
		return nButton;
	},
	
	/**
	 *  Separator for menu sections
	 *  // Drew
	 *  @method  _fnColSeparate
	 *  @returns {Node} Created span
	 *  @private 
	 */
	"_fnColSeparate": function ()
	{
		var
			that = this,
			nSpanHR = document.createElement('span');
		// Drew - by default get Bootstrap button style
		nSpanHR.className = !this.s.dt.bJUI ? "separator" :
			"";
		$(nSpanHR).html( '<p class="p-hr"><hr /></p>');
		
		return nSpanHR;
	},
	
	/**
	 *  Create a close button for the menu
	 *  // Drew
	 *  @method  _fnDomCloseButton
	 *  @returns {Node} Created button
	 *  @private 
	 */
	"_fnDomCloseButton": function ()
	{
		var
			that = this,
			nButton = document.createElement('button');
		// Drew - by default get Bootstrap button style
		nButton.className = !this.s.dt.bJUI ? "btn btn-danger" :
			"btn";
		$(nButton).html( '<i class="icon-remove icon-white close-btn-align-right"></i>' );
		
		$(nButton).click( function (e) {
			that._fnCollectionHide.call(that, null, null); // drew
		} );
		
		return nButton;
	},
	
	/**
	 *  Create a text label
	 *  // Drew
	 *  @method  _fnTextLabel
	 *  @returns {Node} Created span
	 *  @private 
	 */
	"_fnTextLabel": function ()
	{
		var
			that = this,
			nSpanHR = document.createElement('span');
		nSpanHR.className = !this.s.dt.bJUI ? "text_label" :
			"";
		$(nSpanHR).text( this.s.sLabel+":" );
		
		return nSpanHR;
	},
	
	/**
	 * Create the DOM for a show / hide button
	 *  @method  _fnDomColumnButton
	 *  @param {int} i Column in question
	 *  @returns {Node} Created button
	 *  @private 
	 */
	"_fnDomColumnButton": function ( i )
	{
		var
			that = this,
			oColumn = this.s.dt.aoColumns[i],
			nButton = document.createElement('button'),
			nSpan = document.createElement('span'),
			dt = this.s.dt;
		
		// Drew - by default get Bootstrap button style
		nButton.className = !dt.bJUI ? "ColVis_Button TableTools_Button btn append" :
			"ColVis_Button TableTools_Button ui-button ui-state-default btn";
		
		var sTitle = this.s.fnLabel===null ? oColumn.sTitle : this.s.fnLabel( i, oColumn.sTitle, oColumn.nTh );
		
		nButton.id = sTitle;
		nButton.appendChild( nSpan );
		
		$(nSpan).html(
			// Drew - make sure we get buttons in &nbsp; format 
			'<span class="ColVis_title colvis_btn_text"><input class="ColVis_radio" type="checkbox">&nbsp;&nbsp;'+sTitle+'</span>' );
		
		$(nButton).click( function (e) {
			//that._fnCollectionHide.call(that, null, null); // drew
			var showHide = !$('input', this).is(":checked");
			if ( e.target.nodeName.toLowerCase() == "input" )
			{
				showHide = $('input', this).is(":checked");
			}
			
			/* Need to consider the case where the initialiser created more than one table - change the
			 * API index that DataTables is using
			 */
			
			var oldIndex = $.fn.dataTableExt.iApiIndex;
			$.fn.dataTableExt.iApiIndex = that._fnDataTablesApiIndex.call(that);

			// Optimisation for server-side processing when scrolling - don't do a full redraw
			if ( dt.oFeatures.bServerSide && (dt.oScroll.sX !== "" || dt.oScroll.sY !== "" ) )
			{
				that.s.dt.oInstance.fnSetColumnVis( i, showHide, false );
				that.s.dt.oInstance.fnAdjustColumnSizing( false );
				that.s.dt.oInstance.oApi._fnScrollDraw( that.s.dt );
				that._fnDrawCallback();
				$('table').css('width', '100%');
			}
			else
			{
				that.s.dt.oInstance.fnSetColumnVis( i, showHide );
				$('table').css('width', '100%');
			}

			$.fn.dataTableExt.iApiIndex = oldIndex; /* Restore */
			
			if ( that.s.fnStateChange !== null )
			{
				that.s.fnStateChange.call( that, i, showHide );
			}
		} );
		
		return nButton;
	},
		
	/**
	 * Get the position in the DataTables instance array of the table for this instance of ColVis
	 *  @method  _fnDataTablesApiIndex
	 *  @returns {int} Index
	 *  @private 
	 */
	"_fnDataTablesApiIndex": function ()
	{
		for ( var i=0, iLen=this.s.dt.oInstance.length ; i<iLen ; i++ )
		{
			if ( this.s.dt.oInstance[i] == this.s.dt.nTable )
			{
				return i;
			}
		}
		return 0;
	},
		
	/**
	 * Create the DOM needed for the button and apply some base properties. All buttons start here
	 *  @method  _fnDomBaseButton
	 *  @param   {String} text Button text
	 *  @returns {Node} DIV element for the button
	 *  @private 
	 */
	"_fnDomBaseButton": function ( text )
	{
		var
			that = this,
			nButton = document.createElement('button'),
			nSpan = document.createElement('span'),
			sEvent = this.s.activate=="mouseover" ? "mouseover" : "click";
		
		// Drew - By default get bootstrap button style
		nButton.className = !this.s.dt.bJUI ? "ColVis_Button TableTools_Button btn" :
			"ColVis_Button TableTools_Button ui-button ui-state-default btn";
		nButton.appendChild( nSpan );
		nSpan.innerHTML = text;
		
		$(nButton).bind( sEvent, function (e) {
			that._fnCollectionShow();
			e.preventDefault();
		} );
		
		return nButton;
	},

	/**
	 * Create the element used to contain list the columns (it is shown and hidden as needed)
	 *  @method  _fnDomCollection
	 *  @returns {Node} div container for the collection
	 *  @private 
	 */
	"_fnDomCollection": function ()
	{
		var that = this;
		var nHidden = document.createElement('div');
		nHidden.style.display = "none";
		nHidden.className = !this.s.dt.bJUI ? "ColVis_collection TableTools_collection" :
			"ColVis_collection TableTools_collection ui-buttonset ui-buttonset-multi";
		
		if ( !this.s.bCssPosition )
		{
			nHidden.style.position = "absolute";
		}
		$(nHidden).css('opacity', 0);
		
		return nHidden;
	},
	// Drew
	/**
	 * Because we change the indexes of columns in the table, relative to their starting point
	 * we need to reorder the state columns to what they are at the starting point so we can
	 * then rearrange them again on state load!
	 *  @method  _fnStateSave
	 *  @param   object oState DataTables state
	 *  @returns string JSON encoded cookie string for DataTables
	 *  @private
	 */	
	"_fnStateSave": function ( oState )
	{
		var i, iLen, aCopy, iOrigColumn;
		var oSettings = this.s.dt;

		/* Sorting */
		for ( i=0 ; i<oState.aaSorting.length ; i++ )
		{
			oState.aaSorting[i][0] = oSettings.aoColumns[ oState.aaSorting[i][0] ]._ColReorder_iOrigCol;
		}

		var aSearchCopy = $.extend( true, [], oState.aoSearchCols );
		oState.ColReorder = [];

		for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
		{
			iOrigColumn = oSettings.aoColumns[i]._ColReorder_iOrigCol;

			/* Column filter */
			oState.aoSearchCols[ iOrigColumn ] = aSearchCopy[i];

			/* Visibility */
			oState.abVisCols[ iOrigColumn ] = oSettings.aoColumns[i].bVisible;

			/* Column reordering */
			oState.ColReorder.push( iOrigColumn );
		}
	},
	
	/**
	 * An element to be placed on top of the activate button to catch events
	 *  @method  _fnDomCatcher
	 *  @returns {Node} div container for the collection
	 *  @private 
	 */
	"_fnDomCatcher": function ()
	{
		var 
			that = this,
			nCatcher = document.createElement('div');
		nCatcher.className = "ColVis_catcher TableTools_catcher";
		
		$(nCatcher).click( function () {
			that._fnCollectionHide.call( that, null, null );
		} );
		
		return nCatcher;
	},	
	
	/**
	 * Create the element used to shade the background, and capture hide events (it is shown and 
	 * hidden as needed)
	 *  @method  _fnDomBackground
	 *  @returns {Node} div container for the background
	 *  @private 
	 */
	"_fnDomBackground": function ()
	{
		var that = this;
		
		var nBackground = document.createElement('div');
		nBackground.style.position = "absolute";
		nBackground.style.left = "0px";
		nBackground.style.top = "0px";
		// Drew
		nBackground.className = "ColVis_collectionBackground TableTools_collectionBackground auto-resize";
		$(nBackground).css('opacity', 0);
		$(nBackground).click( function () {
			that._fnCollectionHide.call( that, null, null ); // Drew
		} );
		
		/* When considering a mouse over action for the activation, we also consider a mouse out
		 * which is the same as a mouse over the background - without all the messing around of
		 * bubbling events. Use the catcher element to avoid messing around with bubbling
		 */
		if ( this.s.activate == "mouseover" )
		{
			$(nBackground).mouseover( function () {
				that.s.overcollection = false;
				that._fnCollectionHide.call( that, null, null );
			} );
		}
		
		return nBackground;
	},
		
	/**
	 * Show the show / hide list and the background
	 *  @method  _fnCollectionShow
	 *  @returns void
	 *  @private 
	 */
	"_fnCollectionShow": function ()
	{
		var that = this, i, iLen;
		var oPos = $(this.dom.button).offset();
		var nHidden = this.dom.collection;
		var nBackground = this.dom.background;
		var iDivX = parseInt(oPos.left, 10);
		var iDivY = parseInt(oPos.top + $(this.dom.button).outerHeight(), 10);
		
		if ( !this.s.bCssPosition )
		{
			nHidden.style.top = iDivY+"px";
			nHidden.style.left = iDivX+"px";
		}
		nHidden.style.display = "block";
		$(nHidden).css('opacity',0);
		
		var iWinHeight = $(window).height(), iDocHeight = $(document).height(),
		 	iWinWidth = $(window).width(), iDocWidth = $(document).width();
		
		nBackground.style.height = ((iWinHeight>iDocHeight)? iWinHeight : iDocHeight) +"px";
		nBackground.style.width = ((iWinWidth<iDocWidth)? iWinWidth : iDocWidth) +"px";
		
		var oStyle = this.dom.catcher.style;
		oStyle.height = $(this.dom.button).outerHeight()+"px";
		oStyle.width = $(this.dom.button).outerWidth()+"px";
		oStyle.top = oPos.top+"px";
		oStyle.left = iDivX+"px";
		
		document.body.appendChild( nBackground );
		document.body.appendChild( nHidden );
		document.body.appendChild( this.dom.catcher );
		
		/* Resize the buttons */
		if ( this.s.sSize == "auto" )
		{
			var aiSizes = [];
			this.dom.collection.style.width = "auto";
			for ( i=0, iLen=this.dom.buttons.length ; i<iLen ; i++ )
			{
				if ( this.dom.buttons[i] !== null )
				{
					this.dom.buttons[i].style.width = "auto";
					aiSizes.push( $(this.dom.buttons[i]).outerWidth() );
				}
			}
			iMax = Math.max.apply(window, aiSizes);
			for ( i=0, iLen=this.dom.buttons.length ; i<iLen ; i++ )
			{
				if ( this.dom.buttons[i] !== null )
				{
					this.dom.buttons[i].style.width = iMax+"px";
				}
			}
			this.dom.collection.style.width = iMax+"px";

			// [STWI] if number of buttons > 'iMaxRows' show several columns with 'iMaxRows' rows
			if (this.s.iMaxRows > 0 && aiSizes.length > this.s.iMaxRows) {
				// calculate number of columns
				var iNumCols = Math.ceil(aiSizes.length / this.s.iMaxRows);
				// extend the dropdown container size to accomodate the additional columns
				this.dom.collection.style.width = ((iMax+3) * iNumCols) - 9 + "px" ; // Drew - this width calculated specically for page=vehicles
			}
		}
		
		/* Visual corrections to try and keep the collection visible */
		if ( !this.s.bCssPosition )
		{
			nHidden.style.left = this.s.sAlign=="left" ?
				iDivX+"px" : (iDivX-$(nHidden).outerWidth()+$(this.dom.button).outerWidth())+"px";

			var iDivWidth = $(nHidden).outerWidth();
			var iDivHeight = $(nHidden).outerHeight();
			
			if ( iDivX + iDivWidth > iDocWidth )
			{
				nHidden.style.left = (iDocWidth-iDivWidth)+"px";
			}
		}
		
		/* This results in a very small delay for the end user but it allows the animation to be
		 * much smoother. If you don't want the animation, then the setTimeout can be removed
		 */
		setTimeout( function () {
			$(nHidden).animate({"opacity": 1}, that.s.iOverlayFade);
			$(nBackground).animate({"opacity": 0.1}, that.s.iOverlayFade, 'linear', function () {
				/* In IE6 if you set the checked attribute of a hidden checkbox, then this is not visually
				 * reflected. As such, we need to do it here, once it is visible. Unbelievable.
				 */
				if ( jQuery.browser.msie && jQuery.browser.version == "6.0" )
				{
					that._fnDrawCallback();
				}
			});
		}, 10 );
		
		this.s.hidden = false;
	},	
	
	/**
	 * Hide the show / hide list and the background
	 *  @method  _fnCollectionHide
	 *  @returns void
	 *  @private 
	 */
	"_fnCollectionHide": function (  )
	{
		var that = this;
		
		if ( !this.s.hidden && this.dom.collection !== null )
		{
			this.s.hidden = true;
			
			$(this.dom.collection).animate({"opacity": 0}, that.s.iOverlayFade, function (e) {
				this.style.display = "none";
			} );
			
			$(this.dom.background).animate({"opacity": 0}, that.s.iOverlayFade, function (e) {
				document.body.removeChild( that.dom.background );
				document.body.removeChild( that.dom.catcher );
			} );
		}
	},
	
	
	/**
	 * Alter the colspan on any fnOpen rows
	 */
	"_fnAdjustOpenRows": function ()
	{
		var aoOpen = this.s.dt.aoOpenRows;
		var iVisible = this.s.dt.oApi._fnVisbleColumns( this.s.dt );
		
		for ( var i=0, iLen=aoOpen.length ; i<iLen ; i++ ) {
			aoOpen[i].nTr.getElementsByTagName('td')[0].colSpan = iVisible;
		}
	}
};





/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Static object methods
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Rebuild the collection for a given table, or all tables if no parameter given
 *  @method  ColVis.fnRebuild
 *  @static
 *  @param   object oTable DataTable instance to consider - optional
 *  @returns void
 */
ColVis.fnRebuild = function ( oTable )
{
	var nTable = null;
	if ( typeof oTable != 'undefined' )
	{
		nTable = oTable.fnSettings().nTable;
	}
	
	for ( var i=0, iLen=ColVis.aInstances.length ; i<iLen ; i++ )
	{
		if ( typeof oTable == 'undefined' || nTable == ColVis.aInstances[i].s.dt.nTable )
		{
			ColVis.aInstances[i].fnRebuild();
		}
	}
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Static object properties
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Collection of all ColVis instances
 *  @property ColVis.aInstances
 *  @static
 *  @type     Array
 *  @default  []
 */
ColVis.aInstances = [];

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Constants
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Name of this class
 *  @constant CLASS
 *  @type     String
 *  @default  ColVis
 */
ColVis.prototype.CLASS = "ColVis";

/**
 * ColVis version
 *  @constant  VERSION
 *  @type      String
 *  @default   See code
 */
ColVis.VERSION = "1.0.8";
ColVis.prototype.VERSION = ColVis.VERSION;

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Initialisation
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/*
 * Register a new feature with DataTables
 */
if ( typeof $.fn.dataTable == "function" &&
     typeof $.fn.dataTableExt.fnVersionCheck == "function" &&
     $.fn.dataTableExt.fnVersionCheck('1.7.0') )
{
	$.fn.dataTableExt.aoFeatures.push( {
		"fnInit": function( oDTSettings ) {
			var init = (typeof oDTSettings.oInit.oColVis == 'undefined') ?
				{} : oDTSettings.oInit.oColVis;
			var oColvis = new ColVis( oDTSettings, init );
			return oColvis.dom.wrapper;
		},
		"cFeature": "C",
		"sFeature": "ColVis"
	} );
}
else
{
	alert( "Warning: ColVis requires DataTables 1.7 or greater - www.datatables.net/download");
}

})(jQuery);
