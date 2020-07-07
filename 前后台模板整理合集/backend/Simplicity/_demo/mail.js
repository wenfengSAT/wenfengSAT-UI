jQuery(document).ready(function($){

  /*** CheckBox ***/
  $('input[type="checkbox"]', 'table.mail').on('ifClicked', function(event){
    var checkbox = $(this);
    var tr = $(checkbox).parents('tr');

    if ($(tr).hasClass('checked')) {
      $(tr).removeClass('checked');
    } else {
      $(tr).addClass('checked');
    }

  });

});