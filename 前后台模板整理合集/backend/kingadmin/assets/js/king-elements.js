$(document).ready(function(){

	// if form elements page
	if( $('body').hasClass('forms-elements') ) {

		//*******************************************
		/*	MASKED  INPUT
		/********************************************/

		$('#phone').mask('(999) 999-9999');
		$('#phone-ex').mask('(999) 999-9999? x99999');
		$('#tax-id').mask('99-9999999');
		$('#ssn').mask('999-99-9999');
		$('#product-key').mask('a*-999-a999');


		//*******************************************
		/*	SWITCH INIT
		/********************************************/

		$('.switch-demo, .switch-radio-demo').bootstrapSwitch();

		$('.switch-radio-demo').on('switch-change', function () {
			$('.switch-radio-demo').bootstrapSwitch('toggleRadioState');
		});


		//*******************************************
		/*	MULTISELECT
		/********************************************/

		$('#multiselect1, #multiselect2, #multiselect5, #multiselect6').multiselect({
			maxHeight: 300
		});

		$('#multiselect3-all').multiselect({
			includeSelectAllOption: true,
			buttonClass: 'btn btn-primary'
		});

		$('#multiselect4-filter').multiselect({
			enableFiltering: true,
			enableCaseInsensitiveFiltering: true,
			maxHeight: 200
		});

		$('#multiselect7-addon').multiselect({
			buttonContainer: '<div class="btn-group" />'
		});

		$('#multiselect-color').multiselect({
			buttonClass: 'btn btn-primary'
		});

		$('#multiselect-size').multiselect({
			buttonClass: 'btn btn-default btn-sm'
		});

		$('#multiselect-link').multiselect({
			buttonClass: 'btn btn-link'
		});


		//*******************************************
		/*	INPUT APPEND
		/********************************************/

		$( "form.input-append" ).keypress(function(e) {
			if ( e.which == 13 ) {
				e.preventDefault();
			}
		});

		$('.input-group-appendable .add-more').click(function(){
			$wrapper = $(this).parents('.input-appendable-wrapper');
			$lastItem = $wrapper.find('.input-group-appendable').last(); 

			$newInput = $lastItem.clone(true);

			// change attribute for new item
			$count = $wrapper.find('#count').val();
			$count++;

			// change text input and the button
			$newInput.attr('id', 'input-group-appendable' + $count);
			$newInput.find('input[type="text"]').attr({
				id: "field" + $count,
				name: "field" + $count
			});

			$newInput.find('.btn').attr('id', 'btn' + $count);
			$newInput.appendTo($wrapper);

			//change the previous button to remove
			$lastItem.find('.btn')
			.removeClass('add-more btn-primary')
			.addClass('btn-danger')
			.text('-')
			.off()
			.on('click', function(){
				$(this).parents('.input-group-appendable').remove();
			});

			$wrapper.find('#count').val($count);

		});


		//*******************************************
		/*	RANGE SLIDER INPUT
		/********************************************/

		$('.basic-slider').rangeSlider({
			arrows: false
		});

		$('.basic-slider').on('valuesChanging', 
			function(e, data) {
				$('#slider-output')
				.text('Value min: ' + data.values.min + ', ' + 'max: ' + data.values.max)
				.slideDown(300);
			}
		);

		$('.date-slider').dateRangeSlider({
			arrows: false
		});
		
		$('.editable-slider').editRangeSlider({
			arrows: false,
			bounds: {min: 5, max: 50},
			defaultValues: {min: 12, max: 40}
		});

		$('.basic-step-slider').rangeSlider({
			arrows: false,
			step: 10
		});

		$('.basic-label-slider').rangeSlider({
			valueLabels: "change"
		});


		//*******************************************
		/*	COLOR PICKER
		/********************************************/

		$('#demo1').colorpicker();
		$('#demo2').colorpicker({
			format: 'rgba'
		});
		$('#demo3').colorpicker();

		$('select[name="colorpicker-picker-longlist"]').simplecolorpicker({
			picker: true, 
			theme: 'fontawesome'
		});


		//*******************************************
		/*	SPINNER INPUT
		/********************************************/

		$("#touchspin1").TouchSpin();
		$("#touchspin2").TouchSpin({
			min: 0,
			max: 100,
			step: 0.1,
			decimals: 2,
			boostat: 5,
			maxboostedstep: 10,
			postfix: '%'
		});

		$("#touchspin3").TouchSpin({
			min: -1000000000,
			max: 1000000000,
			stepinterval: 50,
			maxboostedstep: 10000000,
			prefix: '$',
			prefix_extraclass: '' // dont make it as: btn btn default
		});

		$("#touchspin4").TouchSpin({
			postfix: "Submit",
			postfix_extraclass: "btn btn-custom-secondary"
		});


		//*******************************************
		/*	TEXTAREA
		/********************************************/

		var textMax = 99;
		$('.js-textarea-help span').html(textMax + ' characters remaining');

		$('#textarea').keyup(function() {
			var textLength = $('#textarea').val().length;
			var textRemaining = textMax - textLength;

			$('.js-textarea-help span').html(textRemaining + ' characters remaining');
		});


		//*******************************************
		/*	DATE PICKER
		/********************************************/

		var dtp = $('#datepicker').datepicker()
		.on('changeDate', function(e) {
			dtp.datepicker('hide');
		});

		$('#daterange-default').daterangepicker({
			timePicker: true,
			timePickerIncrement: 10,
			format: 'MM/DD/YYYY h:mm A'
		});

		$('#reportrange').daterangepicker({
			startDate: moment().subtract('days', 29),
			endDate: moment(),
			minDate: '01/01/1970',
			maxDate: '12/31/2024',
			dateLimit: { days: 60 },
			showDropdowns: true,
			showWeekNumbers: true,
			timePicker: false,
			timePickerIncrement: 1,
			timePicker12Hour: true,
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
				'Last 7 Days': [moment().subtract('days', 6), moment()],
				'Last 30 Days': [moment().subtract('days', 29), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
				},
			opens: 'left',
			buttonClasses: ['btn btn-default'],
			applyClass: 'btn-small btn-primary',
			cancelClass: 'btn-small',
			format: 'MM/DD/YYYY',
			separator: ' to ',
			locale: {
					applyLabel: 'Submit',
					fromLabel: 'From',
					toLabel: 'To',
					customRangeLabel: 'Custom Range',
					daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
					monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					firstDay: 1
				}
			},

			function(start, end) {
				console.log("Callback has been called!");
				$('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
			}
		);

		// set the initial state of the picker label
		$('#reportrange span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));


		//*******************************************
		/*	SLIDER INPUT
		/********************************************/

		var sliderChanged = function() {
			$('.label-slider').text( theSlider.getValue() );
		}

		var theSlider = $('.bootstrap-slider')
			.slider({
				min: 0,
				max: 500,
				value: 120,
				tooltip: 'hide',
				handle: 'square'
			}).on('slide', sliderChanged).data('slider');

		$('.label-slider').text( theSlider.getValue() );

		var theStepSlider = $('.bootstrap-slider-step')
			.slider({
				min: 0,
				max: 500,
				value: 150,
				step: 50,
				handle: 'square'
			});

		$('.bootstrap-slider-vertical').each( function() {
			$(this).slider({
				min: 0,
				max: 100,
				value: Math.floor((Math.random() * 100) + 1),
				orientation: 'vertical',
				selection: 'after',
				tooltip: 'hide',
				handle: 'square'
			});
		});

	} // end if form elements page


	//*******************************************
	/*	FLASH MESSAGE/GRITTER
	/********************************************/

	// if flash alert/message page
	if( $('body').hasClass('flash-alert') ) {
		
		// global setting override
		$.extend( $.gritter.options, {
			// you can use these params to set global variable that affect all the notications behaviour
			//class_name: 'gritter-light',
			//fade_in_speed: 100,
			//fade_out_speed: 100,
			//position: 'bottom-right' // possibilities: bottom-left, bottom-right, top-left, top-right
			time: 1500,
		});

		$('#gritter-regular').click( function() {
			$.gritter.add({
				title: 'Regular Alert!',
				text: 'Fades out automatically in amount of time.',
			});
		});

		$('#gritter-sticky').click( function() {
			$.gritter.add({
				title: 'Sticky Alert!',
				text: 'You have <a href="#">new support message</a>. Click (x) on the top right to close this message.',
				sticky: true
			});
		});

		var flashMsgSound = new Audio();
		var offlineSound = new Audio();

		if ( navigator.userAgent.match("Firefox/") ) {
			flashMsgSound.src = "assets/audio/flash-message.ogg";
			offlineSound.src = "assets/audio/offline.ogg";
		}else {
			flashMsgSound.src = "assets/audio/flash-message.mp3";
			offlineSound.src = "assets/audio/offline.mp3";
		}

		$('#gritter-image').click( function() {
			$.gritter.add({
				title: 'Jane Doe',
				text: 'Online',
				image: 'assets/img/user3.png',
				time: 2000,
				after_close: function() {
					$.gritter.add({
						title: 'Jordan Smith',
						text: 'Offline',
						image: 'assets/img/user5.png',
						time: 2000
					});

					if( $('#gritter-sound-switch').is(':checked') ) {
						offlineSound.play();
					}
				}
			});
		});

		$('.btn-gritter').click( function(){
			// sound setting saved on localStorage as 0 or 1, by default sound on (null value on localStorage)
			$globalVolume = localStorage.getItem('global-volume');

			if( ($globalVolume == null || $globalVolume == '1' ) && $('#gritter-sound-switch').is(':checked') ) {
				flashMsgSound.play();
			}
		})

		$('#gritter-callback').click( function() {
			$.gritter.add({
				title: 'Callback',
				text: 'Provide several callback features',
				time: 1000,
				before_open: function() {
					alert('before_open callback');
				},
				after_open: function() {
					alert('after_open callback');
				},
				before_close: function() {
					alert('before_close callback');
				},
				after_close: function() {
					alert('after_close callback');
				},
			});
		});

		$('#gritter-max').click( function() {
			$.gritter.add({
				title: 'Limit Notifications',
				text: 'This is a notice with a max of 3 on screen at one time!',
				before_open: function() {
					if( $('.gritter-item-wrapper').length == 3 ) {
						// Returning false prevents a new gritter from opening
						return false;
					}
				}
			});

			return false;
		});

		$('#gritter-light').click( function() {
			$.gritter.add({
				title: 'Light Theme!',
				text: 'If you want the light version, you got it. Just add option class_name: \'gritter-light\' :)',
				class_name: 'gritter-light',
			});
		});

		$('.btn-gritter-position').click( function() {

			// clean the wrapper position class
			$('#gritter-notice-wrapper').attr('class', '');

			// global setting override
			$.extend( $.gritter.options, {
				position: '' + $(this).attr('id') + '' // possibilities: bottom-left, bottom-right, top-left, top-right
			});

			$.gritter.add({
				title: $(this).find('span.title').text(), // could be simpler, just for demo purposes
				text: 'Hi, I\'m on the  ' + $.gritter.options.position + ''
			});
		});
		 
	} // end if flash alert page


	//*******************************************
	/*	GENERAL UI ELEMENTS
	/********************************************/

	// if general ui elements page
	if( $('body').hasClass('general-ui-elements') ) {

		//*******************************************
		/*	BOOTSTRAP PROGRESS BAR BY @MINDDUST
		/********************************************/

		if( $('.progress .progress-bar').length > 0 ) {
			$('.progress.demo-only .progress-bar').progressbar({
				display_text: 'fill'
			});
			
			$('.progress.no-percentage .progress-bar').progressbar({
				display_text: 'fill',
				use_percentage: false
			});

			$('.progress.custom-format .progress-bar').progressbar({
				display_text: 'fill',
				use_percentage: false,
				amount_format: function(p, t) {return p + ' of ' + t;}
			});

			$('.progress.vertical .progress-bar').progressbar();
			$('.progress.vertical.demo-only .progress-bar').progressbar({
				display_text: 'fill'
			});
		}
		
	} // end if general ui elements


	//*******************************************
	/*	DROPZONE FILE UPLOAD
	/********************************************/

	// if dropzone exist
	if( $('.dropzone').length > 0 ) {
		Dropzone.autoDiscover = false;
		
		$(".dropzone").dropzone({
			url: "php/dropzone-upload.php",
			addRemoveLinks : true,
			maxFilesize: 0.5,
			maxFiles: 5,
			acceptedFiles: 'image/*, application/pdf, .txt',
			dictResponseError: 'File Upload Error.'
		});
	} // end if dropzone exist


	//*******************************************
	/*	MULTISELECT VALIDATION
	/********************************************/

	if( $('body').hasClass('form-val') ) {
		
		// validation needs name of the element
		$('.multiselect-validation').multiselect({
			checkboxName: 'food'
		});
	}
	

	//*******************************************
	/*	X-EDITABLE IN-PLACE EDITING
	/********************************************/

	if( $('body').hasClass('forms-inplace-editing') ) {
		
		//defaults
		$.fn.editable.defaults.url = '/post';

		// editable fields
		$('#username').editable();
		$('#lastname').editable({
			validate: function(value) {
				if($.trim(value) == '') return 'This field is required';
			}
		});

		$('#sex').editable({
			prepend: "not selected",
			source: [
				{value: 1, text: 'Male'},
				{value: 2, text: 'Female'}
			],
			display: function(value, sourceData) {
				 var colors = {"": "gray", 1: "green", 2: "red"},
					 elem = $.grep(sourceData, function(o){return o.value == value;});
					 
				 if(elem.length) {
					 $(this).text(elem[0].text).css("color", colors[value]);
				 } else {
					 $(this).empty();
				 }
			}
		});

		$('#group').editable({
			showbuttons: false
		});

		$('#status').editable();
		
		$('#dob').editable({
			format: 'yyyy-mm-dd',
				viewformat: 'dd/mm/yyyy',
				datepicker: {
					weekStart: 1
				}
		});

		$('#combodate').editable();

		$('#event').editable({
			placement: 'right',
			combodate: {
				firstItem: 'name'
			}
		});

		$('#comments').editable({
			showbuttons: 'bottom'
		});

		$('#state2').editable({
			value: 'California',
			typeahead: {
				name: 'state',
				local: ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
			}
		});

		$('#fruits').editable({
			pk: 1,
			limit: 3,
			source: [
				{value: 1, text: 'banana'},
				{value: 2, text: 'peach'},
				{value: 3, text: 'apple'},
				{value: 4, text: 'watermelon'},
				{value: 5, text: 'orange'}
			]
		});

		$('#tags').editable({
			inputclass: 'input-large',
			select2: {
			tags: ['html', 'javascript', 'css', 'ajax'],
				tokenSeparators: [",", " "]
			}
		});

		var countries = [];
		$.each({"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Bartelemey", "BM": "Bermuda", "BN": "Brunei Darussalam", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "O1": "Other Country", "LV": "Latvia", "RW": "Rwanda", "RS": "Serbia", "TL": "Timor-Leste", "RE": "Reunion", "LU": "Luxembourg", "TJ": "Tajikistan", "RO": "Romania", "PG": "Papua New Guinea", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "BZ": "Belize", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "TM": "Turkmenistan", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "RU": "Russian Federation", "EE": "Estonia", "EG": "Egypt", "TK": "Tokelau", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "EU": "Europe", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova, Republic of", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania, United Republic of", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "FX": "France, Metropolitan", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands (Malvinas)", "FM": "Micronesia, Federated States of", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "CI": "Cote d'Ivoire", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos (Keeling) Islands", "CA": "Canada", "CG": "Congo", "CF": "Central African Republic", "CD": "Congo, The Democratic Republic of the", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syrian Arab Republic", "KG": "Kyrgyzstan", "KE": "Kenya", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "Korea, Republic of", "SI": "Slovenia", "KP": "Korea, Democratic People's Republic of", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "Virgin Islands, British", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Lao People's Democratic Republic", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "A1": "Anonymous Proxy", "TO": "Tonga", "LT": "Lithuania", "A2": "Satellite Provider", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libyan Arab Jamahiriya", "VA": "Holy See (Vatican City State)", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "Virgin Islands, U.S.", "IS": "Iceland", "IR": "Iran, Islamic Republic of", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AN": "Netherlands Antilles", "AQ": "Antarctica", "AP": "Asia/Pacific Region", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"}, function(k, v) {
			countries.push({id: k, text: v});
		}); 
		$('#country').editable({
				source: countries,
				select2: {
				width: 200,
				placeholder: 'Select country',
				allowClear: true
			} 
		});

		/* please refer to address.custom.js for the address template */
		$('#address').editable({
			url: '/post',
			value: {
				city: "Moscow", 
				street: "Lenina", 
				building: "12"
			},
			validate: function(value) {
				if(value.city == '') return 'city is required!'; 
			},
			display: function(value) {
				if(!value) {
					$(this).empty();
					return; 
				}
				var html = '<b>' + $('<div>').text(value.city).html() + '</b>, ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
				$(this).html(html); 
			}
		});

		/* demo controls */
		//enable / disable in-place editing
		$('#enable').click(function() {
			$('#user .editable').editable('toggleDisabled');
		});

		// x-editable inline/popup input mode
		if( localStorage.getItem('xmode') == 'inline' ) {
			$('#user .editable').editable('option', 'mode', 'inline');
			$('#switch-inline-input').prop('checked', true);
		}else {
			$('#user .editable').editable('option', 'mode', 'popup');
			$('#switch-inline-input').prop('checked', false);
		}

		$('#switch-inline-input').on('change', function() {
			if( $(this).prop('checked') == true) {
				localStorage.setItem('xmode', 'inline');
				window.location.href="?mode=inline";
			}else {
				localStorage.setItem('xmode', 'popup');
				window.location.href="?mode=popup";
			}
		});
	}

	/* button with loading state */
	if( $('#loading-example-btn').length > 0 ) {
		$('#loading-example-btn').click( function() {
			var btn = $(this);

			$.ajax({
				url: 'php/widget-ajax.php',
				type: 'POST',
				dataType: 'json',
				cache: false,
				beforeSend: function(){
					btn.button('loading');
				},
				success: function(  data, textStatus, XMLHttpRequest  ) {
					// dummy delay for demo purpose only
					setTimeout( function() {
						$('#server-message').text(data['msg']).addClass('green-font');
						btn.button('reset');
					}, 1000 );


				},
				error: function( XMLHttpRequest, textStatus, errorThrown ) {
					console.log("AJAX ERROR: \n" + errorThrown);
				}
			});
		});
	}


	//*******************************************
	/*	SUMMERNOTE AND MARKDOWN TEXT EDITOR
	/********************************************/

	// if text editor page
	if( $('body').hasClass('text-editor') ) {
		/* summernote */
		$('.summernote').summernote({
			height: 300,
			focus: true,
			onpaste: function() {
				alert('You have pasted something to the editor');
			}
		});

		/* markdown */
		var initContent = '<h4>Hello there</h4> ' +
			'<p>How are you? I have below task for you :</p> ' + 
				'<p>Select from this text... Click the bold on THIS WORD and make THESE ONE italic, ' +
				'link GOOGLE to google.com, ' +
				'test to insert image (and try to tab after write the image description)</p>' + 
				'<p>Test Preview And ending here...</p> ' + 
				'<p>Click "List"</p> Enjoy!';

		$('#markdown-editor').text(toMarkdown(initContent));
		
	}

}); // end ready function

