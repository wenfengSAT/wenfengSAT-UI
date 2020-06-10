$(document).ready(function() {

 $('.switch').each(function() {

  if($(this).attr('switch-on') != '' && $(this).attr('switch-off') != ''){
   $(this).prepend('<span class="sw-e">'+$(this).attr('switch-on')+'</span><span class="sw-d">'+$(this).attr('switch-off')+'</span>');
  }else{
   $(this).prepend('<span class="sw-e">ON</span><span class="sw-d">OFF</span>');
  }
  
  var enb = $(this).children('.sw-e');
  var dsb = $(this).children('.sw-d');
  var inp = $(this).children('input');
  var inv = $(this).children('input').val();

  /* Check selected */
  if( 0 == inv ){
   dsb.addClass('selected');
  }else if( 1 == inv ){
   enb.addClass('selected');
  }

  enb.on('click', function(){
   $(dsb).removeClass('selected');
   $(this).addClass('selected');
   $(inp).val(1).trigger('change');
  });

  //Action on user's click(OFF)
  dsb.on('click', function(){
   $(enb).removeClass('selected');
   $(this).addClass('selected');
   $(inp).val(0).trigger('change');
  });

 });

});