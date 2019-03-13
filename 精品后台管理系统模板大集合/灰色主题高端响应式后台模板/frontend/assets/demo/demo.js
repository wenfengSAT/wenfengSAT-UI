// -------------------------------
// Demos
// -------------------------------

$(document).ready(function() {


    //Create an expression that excludes execution if parent matches certain class
    jQuery.expr[':'].noparents = function(a,i,m){
    	return jQuery(a).parents(m[3]).length < 1;
    };

    //Exclude tab-right and tab-left from having tabdrop option,
    //But include in all others.
   $('.nav-tabs').filter(':noparents(.tab-right, .tab-left)').tabdrop();

	prettyPrint(); //Apply Code Prettifier

	$('.popovers').popover({container: 'body', trigger: 'hover', placement: 'top'}); //bootstrap's popover
	$('.tooltips').tooltip(); //bootstrap's tooltip
	//$(".bootstrap-switch").bootstrapSwitch();

});
