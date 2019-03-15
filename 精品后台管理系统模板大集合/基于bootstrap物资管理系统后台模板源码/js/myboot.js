$('[data-toggle="dropdown"]').on('click',function(event){
  event.preventDefault();
  $(this).siblings('.dropdown-menu').toggle();
})