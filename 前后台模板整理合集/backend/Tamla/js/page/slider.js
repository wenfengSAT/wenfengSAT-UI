$(function() {
    "use strict";
	
	/************ POWER RANGE SLIDER FUNCTION ***********/
	
	
	  // Basic customization.
    var cust = document.querySelector('.js-customized');
    var initCust = new Powerange(cust, { hideRange: true, klass: 'power-ranger', start: 60 });

   // Min, max, start.
    var vals = document.querySelector('.js-min-max-start');
    var initVals = new Powerange(vals, { min: 16, max: 256, start: 128 });
	
	// Decimal.
    var dec = document.querySelector('.js-decimal');
    var initDec = new Powerange(dec, { decimal: true, callback: displayDecimalValue, max: 50, start: 19.12 });

    function displayDecimalValue() {
      document.getElementById('js-display-decimal').innerHTML = dec.value;
    }

    // Step.
    var stp = document.querySelector('.js-step');
    var initStp = new Powerange(stp, { start: 50, step: 10 });

    // Hide range.
    var hide = document.querySelector('.js-hiderange');
    var initHideRange = new Powerange(hide, { hideRange: true, start: 70 });

    // Disabled.
    var disabled = document.querySelector('.js-disabled');
    var initDisabled = new Powerange(disabled, { disable: true, disabledOpacity: 0.75, start: 30 });

    // Vertical.
    var vert = document.querySelector('.js-vertical');
    var initVert = new Powerange(vert, { start: 80, vertical: true });

    // Checking state.
    // On click.
    var clickInput = document.querySelector('.js-check-click')
      , clickButton = document.querySelector('.js-check-click-button')
      , initClickInput = new Powerange(clickInput, { start: 20 });

    clickButton.addEventListener('click', function() {
      alert(clickInput.value);
    });

    // On change.
    var changeInput = document.querySelector('.js-check-change')
      , initChangeInput = new Powerange(changeInput, { start: 70 });

    changeInput.onchange = function() {
      document.getElementById('js-display-change').innerHTML = changeInput.value;
    };

    // Callback.
    var clbk = document.querySelector('.js-callback');
    var initClbk = new Powerange(clbk, { callback: displayValue, start: 88 });

    function displayValue() {
      document.getElementById('js-display-callback').innerHTML = clbk.value;
    }

    // Interacting with elements.
    var opct = document.querySelector('.js-opacity');
    var initOpct = new Powerange(opct, { callback: setOpacity, decimal: true, min: 0, max: 1, start: 1 });

    function setOpacity() {
      document.querySelector('.js-change-opacity').style.opacity = opct.value;
    }
	
	
	/******************* ION Range slider function*****************************/
	
	$(document).ready(function(){

        $("#range_1").ionRangeSlider({
            min: 0,
            max: 5000,
            from: 1000,
            to: 4000,
            type: 'double',
            step: 1,
            prefix: "Rs",
			maxPostfix: "+",
            prettify: true,
            hasGrid: true
        });
		
		
		$("#range_2").ionRangeSlider({
				min: 1000,
				max: 100000,
				from: 30000,
				to: 90000,
				type: 'double',
				step: 500,
				postfix: " €",
				hasGrid: true
			});
			
			$("#range_3").ionRangeSlider({
				min: 0,
				max: 10,
				type: 'single',
				step: 0.1,
				postfix: " carats",
				prettify: false,
				hasGrid: true
			});
			
			$("#range_4").ionRangeSlider({
					min: -50,
					max: 50,
					from: 0,
					postfix: "°",
					prettify: false,
					hasGrid: true
				});
			$("#range_5").ionRangeSlider({
				values: [
					"January", "February",
					"March", "April",
					"May", "June",
					"July", "August",
					"September", "October",
					"November", "December"
				],
				type: 'single',
				hasGrid: true
			});
			$("#range_6").ionRangeSlider({
				min: 10000,
				max: 100000,
				step: 1000,
				postfix: " miles",
				from: 55000,
				hideMinMax: false,
				hideFromTo: true
			});
			$("#range_7").ionRangeSlider({
				min: 10000,
				max: 100000,
				step: 100,
				postfix: " km",
				from: 55000,
				hideMinMax: true,
				hideFromTo: false
			});
			
			$("#range_8").ionRangeSlider({
				min: 1000000,
				max: 100000000,
				type: "double",
				postfix: " pounds",
				step: 10000,
				from: 25000000,
				to: 35000000,
				onChange: function(obj) {
					console.log(obj);
				},
				onLoad: function(obj) {
					console.log(obj);
				}
			});
		

    });
	
	
	
});