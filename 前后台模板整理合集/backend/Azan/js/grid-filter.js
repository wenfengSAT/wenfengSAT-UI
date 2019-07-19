$(document).ready(function(){
  //Sort by first name
  $(function() {
      $.fn.sortList = function() {
      var mylist = $(this);
      var listitems = $('li', mylist).get();
      listitems.sort(function(a, b) {
          var compA = $(a).text().toUpperCase();
          var compB = $(b).text().toUpperCase();
          return (compA < compB) ? -1 : 1;
      });
      $.each(listitems, function(i, itm) {
          mylist.append(itm);
      });
     }
  });

  //Sort by last name
  $(function() {
      $.fn.sortListLast = function() {
      var mylist = $(this);
      var listitems = $('li', mylist).get();
      listitems.sort(function(a, b) {
          var compA = $('.last-name', a).text().toUpperCase();
          var compB = $('.last-name', b).text().toUpperCase();
          return (compA < compB) ? -1 : 1;
      });
      $.each(listitems, function(i, itm) {
          mylist.append(itm);
      });
     }
  });

  //Search filter
  (function ($) {
    // custom css expression for a case-insensitive contains()
    jQuery.expr[':'].Contains = function(a,i,m){
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
    };


    function listFilter(searchDir, list) { 
      var form = $("<form>").attr({"class":"filterform","action":"#"}),
          input = $("<input>").attr({"class":"filterinput","type":"text","placeholder":"Live Search Mails"});
      $(form).append(input).appendTo(searchDir);

      $(input)
        .change( function () {
          var filter = $(this).val();
          if(filter) {
            $(list).find("li:not(:Contains(" + filter + "))").slideUp();
            $(list).find("li:Contains(" + filter + ")").slideDown();
          } else {
            $(list).find("li").slideDown();
          }
          return false;
        })
      .keyup( function () {
          $(this).change();
      });
    }


    //Slide Panel Search Email
    $(function () {
      listFilter($("#searchMail"), $("#mail-list"));
    });
	
	//Inbox Email Search
    $(function () {
      listFilter($("#inboxMail"), $("#inbox-mail-list"));
    });
	
  }(jQuery));

});