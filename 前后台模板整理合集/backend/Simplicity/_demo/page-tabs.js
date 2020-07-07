jQuery(document).ready(function($){

  /*** Vertical Tabs ***/
  $( ".vertical-tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
  $( ".vertical-tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

  /*** Accordions ***/
  $('.collapsible-accordion').accordion({collapsible: true});

});