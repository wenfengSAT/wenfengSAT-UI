$(document).ready(function() {
  /* TO DO LIST */
  $(".tdl-new").bind('keypress', function(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) {
      var v = $(this).val();
      var s = v.replace(/ +?/g, '');
      if (s == ""){
        return false;
      }else{
        $(".tdl-content ul").append("<li><label><input type='checkbox'><i></i><span>"+ v +"</span><a href='#'>–</a></label></li>");
        $(this).val("");
      }
    }
  });


  $(".tdl-content a").bind("click", function(){
    var _li = $(this).parent().parent("li");
        _li.addClass("remove").stop().delay(100).slideUp("fast", function(){
          _li.remove();
        });
    return false;
  });

  // for dynamically created a tags
  $(".tdl-content").on('click', "a", function(){
    var _li = $(this).parent().parent("li");
        _li.addClass("remove").stop().delay(100).slideUp("fast", function(){
          _li.remove();
        });
    return false;
  });
  
  
  });