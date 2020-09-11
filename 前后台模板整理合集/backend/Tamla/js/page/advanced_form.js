$(function() {
    "use strict";
	
	/***************  Switchery switch function ***************/
		
    

      // if-else statement used only for fixing <IE9 issues
      if (Array.prototype.forEach) {
        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

        elems.forEach(function(html) {
          var switchery = new Switchery(html);
        });
      } else {
        var elems = document.querySelectorAll('.js-switch');

        for (var i = 0; i < elems.length; i++) {
          var switchery = new Switchery(elems[i]);
        }
      }

      // Disabled switch
      var disabled = document.querySelector('.js-switch-disabled');
      var switchery = new Switchery(disabled, { disabled: true });

      // Colored switches
      var blue = document.querySelector('.js-switch-blue');
      var switchery = new Switchery(blue, { color: '#41b7f1' });

      var pink = document.querySelector('.js-switch-pink');
      var switchery = new Switchery(pink, { color: '#ff7791' });

      var teal = document.querySelector('.js-switch-teal');
      var switchery = new Switchery(teal, { color: '#3cc8ad' });

      var red = document.querySelector('.js-switch-red');
      var switchery = new Switchery(red, { color: '#db5554' });

      var secondary = document.querySelector('.js-switch-secondary');
      var switchery = new Switchery(secondary, { color: '#fec200', secondaryColor: '#ff8787' });
	
	
	
	/**************** Bootstrap Switch ****************/
	
	/*Switch*/
      $('.switch').bootstrapSwitch(); 
 
	
	
	
	/******************  spinner    ********************************/
	
	  $('#spinner1').spinner();
        $('#spinner2').spinner({disabled: true});
        $('#spinner3').spinner({value:0, min: 0, max: 10});
        $('#spinner4').spinner({value:0, step: 5, min: 0, max: 200});
	
	
	/********************* Tags Input    *************************************/
	
	
	$.extend($.inputmask.defaults, {
            'autounmask': true
        });

        $("#mask_date").inputmask("d/m/y", {
            autoUnmask: true
        }); //direct mask        
        $("#mask_date1").inputmask("d/m/y", {
            "placeholder": "*"
        }); //change the placeholder
        $("#mask_date2").inputmask("d/m/y", {
            "placeholder": "dd/mm/yyyy"
        }); //multi-char placeholder
        $("#mask_phone").inputmask("mask", {
            "mask": "(999) 999-9999"
        }); //specifying fn & options
        $("#mask_tin").inputmask({
            "mask": "99-9999999",
            placeholder: "" // remove underscores from the input mask
        }); //specifying options only
        $("#mask_number").inputmask({
            "mask": "9",
            "repeat": 10,
            "greedy": false
        }); // ~ mask "9" or mask "99" or ... mask "9999999999"
        $("#mask_decimal").inputmask('decimal', {
            rightAlignNumerics: false
        }); //disables the right alignment of the decimal input
        $("#mask_currency").inputmask('â‚¬ 999.999.999,99', {
            numericInput: true
        }); //123456  =>  â‚¬ ___.__1.234,56

        $("#mask_currency2").inputmask('â‚¬ 999,999,999.99', {
            numericInput: true,
            rightAlignNumerics: false,
            greedy: false
        }); //123456  =>  â‚¬ ___.__1.234,56
        $("#mask_ssn").inputmask("999-99-9999", {
            placeholder: " ",
            clearMaskOnLostFocus: true
        }); //default
	
	
	
	
	   $('#input_ipv4').ipAddress();
        $('#input_ipv6').ipAddress({
            v: 6
        });
		
		/************* Bootstrap tags input *********************/
		
		
		$('.color').tagsinput({
tagClass: function(item) {
switch (item.continent) {
case 'Europe' : return 'label label-info';
case 'America' : return 'label label-primary';
case 'Australia': return 'label label-success';
case 'Africa' : return 'label label-inverse';
case 'india' : return 'label label-danger';
case 'Asia' : return 'label label-warning';
case 'Gujarat' : return 'label label-default';
}
},
itemValue: 'value',
itemText: 'text',
typeahead: {
source: function(query) {
return $.getJSON('cities.json');
}
}
});
 
$('.color').tagsinput('add', { "value": 1 , "text": "Amsterdam" , "continent": "Europe" });
$('.color').tagsinput('add', { "value": 4 , "text": "Washington" , "continent": "America" });
$('.color').tagsinput('add', { "value": 7 , "text": "Sydney" , "continent": "Australia" });
$('.color').tagsinput('add', { "value": 10, "text": "Beijing" , "continent": "Asia" });
$('.color').tagsinput('add', { "value": 13, "text": "Cairo" , "continent": "Africa" });
$('.color').tagsinput('add', { "value": 14, "text": "India" , "continent": "india" });
		
	
 });  