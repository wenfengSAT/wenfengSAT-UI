//------------- blank.js -------------//
$(document).ready(function() {

	//get object with colros from plugin and store it.
	var objColors = $('body').data('appStart').getColors();
	var colours = {
		white: objColors.white,
		dark: objColors.dark,
		red : objColors.red,
		blue: objColors.blue,
		green : objColors.green,
		yellow: objColors.yellow,
		brown: objColors.brown,
		orange : objColors.orange,
		purple : objColors.purple,
		pink : objColors.pink,
		lime : objColors.lime,
		magenta: objColors.magenta,
		teal: objColors.teal,
		textcolor: '#5a5e63',
		gray: objColors.gray
	}

	//------------- Password metter -------------//
	$(function() {
		var $input = $('#password-metter');
	    var $output = $('#output-message');

	    $.passy.requirements.length.min = 4;

	    var feedback = [
	        { class: 'red-bg', text: 'password is poor' },
	        { class: 'teal-bg', text: 'might be okay' },
	        { class: 'blue-bg', text: 'password is good' },
	        { class: 'green-bg', text: 'good job fabulous password!' }
	    ];		
	    $input.passy(function(strength, valid) {
	        $output.text(feedback[strength].text);
	    });

		$('#generate-password').click(function() {
		    $input.passy( 'generate', 8 );
		});
		$('#show-password').click(function() {
		    $input.prop("type", "text");
		});
	});

	//------------- Max Lenght input filed -------------//
	$('.limitInput').maxlength({
		alwaysShow: true,
		threshold: 10,
		warningClass: "label label-success",
		limitReachedClass: "label label-danger",
		validate: true
    });

    //------------- Tags -------------//
	$('.tags').tagsInput({width: 'auto'});

	//------------- File input styling -------------//
    $(":file").not('.unstyled').filestyle();

    //------------- Masked input fields -------------//
	$("#mask-phone").mask("(999) 999-9999", {completed:function(){alert("Callback action after complete");}});
	$("#mask-phoneExt").mask("(999) 999-9999? x99999");
	$("#mask-phoneInt").mask("+40 999 999 999");
	$("#mask-date").mask("99/99/9999");
	$("#mask-ssn").mask("999-99-9999");
	$("#mask-productKey").mask("a*-999-a999", { placeholder: "*" });
	$("#mask-eyeScript").mask("~9.99 ~9.99 999");
	$("#mask-percent").mask("99%");

	//------------- Max Lenght Textarea -------------//
	$('.limitTextarea').maxlength({
		alwaysShow: true,
		threshold: 10,
		warningClass: "label label-success",
		limitReachedClass: "label label-danger",
		separator: ' of ',
		preText: 'You have ',
		postText: ' chars remaining.',
		validate: true
    });

    //------------- Autosize Text area -------------//
	$('.elastic').autosize();

	//------------- Select 2 -------------//
	$('.select2').select2({placeholder: 'Select state'});

	//------------- Dual list box -------------//
	$('.duallistbox').bootstrapDualListbox({
	    nonselectedlistlabel: 'Non-selected',
	    selectedlistlabel: 'Selected',
	    preserveselectiononmove: 'moved',
	    moveonselect: false,
	    iconMove: 'im-arrow-right2 s16',
	    iconMoveAll: 'im-arrow-right s16',
	    iconRemove: ' im-arrow-left s16',
	    iconRemoveAll: 'im-arrow-first s16'
	});

	//------------- Check all Checkboxes -------------//
	$('#checkAllExample').checkAll({
		masterCheckbox: '.check-all',
		otherCheckboxes: '.check'
	})

	//------------- Switches -------------//
	$('input.switch').onoff();
	//disabled switch
	$('input.switch:disabled').onoff('disable').closest('div.onoffswitch').addClass('onoffswitch-disabled');

	//------------- Spinner -------------//
	$('#spinner').spinner();

	$("#spinner-decimal").spinner({
		step: 0.01,
		numberFormat: "n"
	});
	$("#spinner-currency").spinner({
		min: 5,
		max: 2500,
		step: 25,
		start: 1000,
		numberFormat: "C"
    });

    $.widget("ui.timespinner", $.ui.spinner, {
	    options: {
	      // seconds
	      step: 60 * 1000,
	      // hours
	      page: 60
	    },
 
	    _parse: function( value ) {
	      if ( typeof value === "string" ) {
	        // already a timestamp
	        if ( Number( value ) == value ) {
	          return Number( value );
	        }
	        return +Globalize.parseDate( value );
	      }
	      return value;
	    },
 
	    _format: function( value ) {
	      return Globalize.format( new Date(value), "t" );
	    }
  	});
 
   $("#spinner-time").timespinner();

    //------------- Date time picker -------------//
	//basic usage
	$(".datepicker").datepicker();

	//month and year menu
	$( ".datepicker-year" ).datepicker({
    	changeMonth: true,
    	changeYear: true
    });

    //multiple months
    $( ".datepicker-multiple" ).datepicker({
      numberOfMonths: 2,
      showButtonPanel: true
    });

    //datetimepicker
    $('.datetimepicker').datetimepicker();

    //------------- Color picker -------------//
    $("#color-picker").spectrum({
	    color: "#f00",
	    showInput: true
	});

	$("#minimalPicker").spectrum({
	    showButtons:false
	});

	$("#showPaletteOnly").spectrum({
	    showPaletteOnly: true,
	    showPalette:true,
	    color: 'blanchedalmond',
	    palette: [
	        ['black', 'white', 'blanchedalmond',
	        'rgb(255, 128, 0);', 'hsv 100 70 50'],
	        ['red', 'yellow', 'green', 'blue', 'violet']
	    ]
	});

	$("#flat-color-picker").spectrum({
	    flat: true,
	    showInput: true
	});
 	
});