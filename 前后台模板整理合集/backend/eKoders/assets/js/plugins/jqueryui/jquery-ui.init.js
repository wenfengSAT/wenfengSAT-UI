jQuery(function($) {
	$( "#datepicker" ).datepicker({
		showOtherMonths: true,
		selectOtherMonths: false,
	});

	//spinner
	var spinner = $( "#jQspinner" ).spinner({
		create: function( event, ui ) {
			//add custom classes and icons
			$(this)
			.next().addClass('btn btn-primary').html('<i class="fa fa-plus"></i>')
			.next().addClass('btn btn-primary').html('<i class="fa fa-minus"></i>')
						
		}
	});				
			
	//dialog's title function to allow for HTML titles
	$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
		_title: function(title) {
			var $title = this.options.title || '&nbsp;'
			if( ("title_html" in this.options) && this.options.title_html == true )
				title.html($title);
			else title.text($title);
		}
	}));
			
	$( "#id-btn-dialog1" ).on('click', function(e) {
		e.preventDefault();
			
		var dialog = $( "#dialog-message" ).removeClass('hide').dialog({
			modal: true,
			title: "<i class='fa fa-check'></i> jQuery UI Dialog",
			title_html: true,
			buttons: [ 
				{
					text: "Cancel",
					"class" : "btn btn-danger btn-sm",
					click: function() {
						$( this ).dialog( "close" ); 
					} 
				},
				{
					text: "OK",
					"class" : "btn btn-success btn-sm",
					click: function() {
						$( this ).dialog( "close" ); 
					} 
				}
			]
		});
	});
			
			
	$( "#id-btn-dialog2" ).on('click', function(e) {
		e.preventDefault();
				
		$( "#dialog-confirm" ).removeClass('hide').dialog({
			resizable: false,
			modal: true,
			title: "<i class='fa fa-warning text-danger'></i> Empty the recycle bin?",
			title_html: true,
			buttons: [
				{
					html: "<i class='fa fa-trash-o'></i> Delete all itmes",
					"class" : "btn btn-danger btn-sm",
					click: function() {
						$( this ).dialog( "close" );
					}
				}
				,
				{
					html: "<i class='fa fa-times'></i> No",
					"class" : "btn btn-sm",
					click: function() {
						$( this ).dialog( "close" );
					}
				}
			]
		});
	});
				
	//jquery tabs
	$( "#jQtabs" ).tabs();
				
	//tooltips
	$( "#show-option" ).tooltip({
		show: {
			effect: "slideDown",
			delay: 250
		}
	});
			
	$( "#hide-option" ).tooltip({
		hide: {
			effect: "explode",
			delay: 250
		}
	});
			
	$( "#open-event" ).tooltip({
		show: null,
		position: {
			my: "left top",
			at: "left bottom"
		},
		open: function( event, ui ) {
			ui.tooltip.animate({ top: ui.tooltip.position().top + 10 }, "fast" );
		}
	});
			
			
	//slider examples			
	$( "#slider-range" ).css('height','200px').slider({
		orientation: "vertical",
		range: true,
		min: 0,
		max: 100,
		values: [ 17, 67 ],
		slide: function( event, ui ) {
			var val = ui.values[$(ui.handle).index()-1]+"";
			
			if(! ui.handle.firstChild ) {
				$(ui.handle).append("<div class='tooltip right in' style='display:none;left:16px;top:-10px;'><div class='tooltip-arrow'></div><div class='tooltip-inner'></div></div>");
			}
			$(ui.handle.firstChild).show().children().eq(1).text(val);
		}
		}).find('a').on('blur', function(){
			$(this.firstChild).hide();
	});
	
	$( "#slider-range-2" ).css({width:'90%', margin:'10px'}).slider({
		range: true,
		min: 1,
		max: 100,
		values:[10, 47],
		slide: function( event, ui ) {
			var val = ui.values[$(ui.handle).index()-1]+"";
			
			if(! ui.handle.firstChild ) {
				$(ui.handle).append("<div class='tooltip top in' style='display:none;left:-10px;top:-35px;'><div class='tooltip-arrow'></div><div class='tooltip-inner'></div></div>");
			}
			$(ui.handle.firstChild).show().children().eq(1).text(val);
		}
		}).find('a').on('blur', function(){
			$(this.firstChild).hide();
	});
				
	$( "#sliders > span" ).css({width:'90%', 'float':'left', margin:'10px'}).each(function() {
		// read initial values from markup and remove that
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			animate: true						
		});
	});
			
	//jquery accordion
	$( "#jQaccordion" ).accordion({
		collapsible: true ,
		heightStyle: "content",
		animate: 250,
		header: ".accordion-header"
	}).sortable({
		axis: "y",
		handle: ".accordion-header",
		stop: function( event, ui ) {
			// IE doesn't register the blur when sorting
			// so trigger focusout handlers to remove .ui-state-focus
			ui.item.children( ".accordion-header" ).triggerHandler( "focusout" );
		}
	});	
				
	//progressbar
	$( "#progressbar" ).progressbar({
		value: 37,
		create: function( event, ui ) {
			$(this).addClass('progress progress-striped active')
				.children(0).addClass('progress-bar progress-bar-success');
		}
	});
				
	//Menu
	$( "#jQmenu" ).menu();
				
	//Autocomplete
	$(function() {
		var availableTags = [
			"ActionScript",
			"AppleScript",
			"Asp",
			"BASIC",
			"C",
			"C++",
			"Clojure",
			"COBOL",
			"ColdFusion",
			"Erlang",
			"Fortran",
			"Groovy",
			"Haskell",
			"Java",
			"JavaScript",
			"Lisp",
			"Perl",
			"PHP",
			"Python",
			"Ruby",
			"Scala",
			"Scheme"
		];
		$( "#jQtags" ).autocomplete({
			source: availableTags
		});
	});	
	//custom autocomplete (category selection)
	$.widget( "custom.catcomplete", $.ui.autocomplete, {
		_renderMenu: function( ul, items ) {
			var that = this,
			currentCategory = "";
			$.each( items, function( index, item ) {
				if ( item.category != currentCategory ) {
					ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
					currentCategory = item.category;
				}
				that._renderItemData( ul, item );
			});
		}
	});
				
		var data = [
		{ label: "anders", category: "" },
		{ label: "andreas", category: "" },
		{ label: "antal", category: "" },
		{ label: "annhhx10", category: "Products" },
		{ label: "annk K12", category: "Products" },
		{ label: "annttop C13", category: "Products" },
		{ label: "anders andersson", category: "People" },
		{ label: "andreas andersson", category: "People" },
		{ label: "andreas johnson", category: "People" }
	];
	$( "#jQsearch" ).catcomplete({
		delay: 0,
		source: data
	});
				
});