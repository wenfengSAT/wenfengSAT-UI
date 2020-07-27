//Xeditable form fields
$(function () {

  //enable / disable
  $('#enable').click(function () {
    $('#user .editable').editable('toggleDisabled');
  });

  //editables 
  $('.inputText').editable({
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'Enter Name'
  });


  $('.inputTextArea').editable({
    showbuttons: true
  });

  $('#tags').editable({
    inputclass: 'input-large',
    select2: {
      tags: ['html5', 'javascript', 'Jquery', 'css3', 'ajax', 'Sass', 'Haml', 'Photoshop'],
      tokenSeparators: [",", " "]
    }
  });

  $('#user .editable').on('hidden', function (e, reason) {
    if (reason === 'save' || reason === 'nochange') {
      var $next = $(this).closest('tr').next().find('.editable');
      if ($('#autoopen').is(':checked')) {
        setTimeout(function () {
          $next.editable('show');
        }, 300);

      } else {
        $next.focus();
      }
    }
  });

});
//Xeditable form fields end