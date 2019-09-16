$(function()	{
	// Chosen 
	$(".chzn-select").chosen();
	
	// Datepicker
	$('.datepicker').datepicker();

	// Timepicker
	$('.timepicker').timepicker();
			
	// Slider		
	$('#sl1').slider();
	$('#sl2').slider();
	$('#sl3').slider();
	$('#sl4').slider();
	$('#sl5').slider();
			
	// Tags input
	$('.tag-demo1').tagsInput({
		'height':'auto',
		'width':'90%'
	});

	// Masked input
	$(".date").mask("99/99/9999");		
	$(".phone").mask("(999) 999-9999");
	$(".ssn").mask("999-99-9999");
	$(".eyescript").mask("~9.99 ~9.99 999");
	$(".product-key").mask("a*-999-a999");

	// Wysihtml5
	$('#wysihtml5-textarea').wysihtml5();

	// Toggle border of control group
	$('#toggleLine').click(function()	{			
		if($(this).is(':checked'))	{
			$('#formToggleLine').addClass('form-border');
		}
		else	{
			$('#formToggleLine').removeClass('form-border');
		}
	});

	// Draggable Multiselect
	$('#btnSelect').click(function()	{
				
		$('#selectedBox1 option:selected').appendTo('#selectedBox2');  
		return false;
	});

	$('#btnRemove').click(function()	{
		$('#selectedBox2 option:selected').appendTo('#selectedBox1'); 
		return false;
	});

	$('#btnSelectAll').click(function()	{
			
		$('#selectedBox1 option').each(function() {               
           $(this).appendTo('#selectedBox2');                   
        });

		return false;
	});

	$('#btnRemoveAll').click(function()	{
			
		$('#selectedBox2 option').each(function() {                  
			$(this).appendTo('#selectedBox1');            
        });

		return false;
	});
});