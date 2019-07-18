$(document).ready(function(){
  $(".menu-switch").on("click", function(e){
    e.preventDefault();
      var distance = $('#main').css('left');
      var elm_class = $(".menu-switch").attr("class");
      if(elm_class=='menu-switch') {
		$(this).addClass("open");
        $('#main').animate({ "left": "100px" }, "fast");
      } else {
		 $(".menu-switch").removeClass("open");
         $('#main').animate({ "left": "0" }, "fast");
      }
  });
});