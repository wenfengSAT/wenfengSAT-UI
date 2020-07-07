jQuery(document).ready(function($){

  /*** CheckBox ***/
  $('input[type="checkbox"]', '.task-list').on('ifClicked', function(event){
    var checkbox = $(this);
    var li = $(checkbox).parent().parent();
    var span = $('span', li);

    if ($(span).hasClass('checked')) {
      $('span', li).removeClass('checked');
    } else {
      $('span', li).addClass('checked');
    }
  });

  /*** Check All Tasks ***/
  $('a.check-all', '.task-list').click(function(){
    var list = $(this).parents('.task-list');
    var lis = $('li', list);
    var clicked = $(this).hasClass('all-checked');

    $(lis).each(function(i, item) {
      var span = $('span', item);

      if ($(span).hasClass('checked') & clicked) {
        $('input[type="checkbox"]', item).iCheck('uncheck');
        $('span', item).removeClass('checked');
      } else {
        $('input[type="checkbox"]', item).iCheck('check');
        $('span', item).addClass('checked');
      }
    });

    $(this).addClass('all-checked');
    return false;
  });

  /*** Delete Tasks ***/
  $('a.delete', '.actions').click(function(){
    var obj = $(this);
    var li = $(obj).parents('li');

    if ($(li).length) {
      $(li).slideUp(350);
    }

    return false;
  });

});