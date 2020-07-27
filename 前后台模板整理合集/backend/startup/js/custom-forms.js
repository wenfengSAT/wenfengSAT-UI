//Tooltip
$('a').tooltip('hide');

//Popover
$('.popover-pop').popover('hide');

//Collapse
$('#myCollapsible').collapse({
  toggle: false
})

//Tabs
$('.myTabBeauty a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

//Dropdown
$('.dropdown-toggle').dropdown();

//wysihtml5
$('#wysiwyg').wysihtml5();


$('#timepicker1').timepicker({
  minuteStep: 1,
  secondStep: 5,
  showInputs: false,
  template: 'modal',
  modalBackdrop: true,
  showSeconds: true,
  showMeridian: false
});

$('#timepicker2').timepicker({
  minuteStep: 5,
  secondStep: 30,
  showInputs: false,
  showSeconds: true,
  showMeridian: false
});

//Date picker
$('.date_picker').daterangepicker({
  opens: 'left'
});

//Date Picker
$('.report_range').daterangepicker({
  ranges: {
    'Today': ['today', 'today'],
    'Yesterday': ['yesterday', 'yesterday'],
    'Last 7 Days': [Date.today().add({
      days: -6
    }), 'today'],
    'Last 30 Days': [Date.today().add({
      days: -29
    }), 'today'],
    'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
    'Last Month': [Date.today().moveToFirstDayOfMonth().add({
      months: -1
    }), Date.today().moveToFirstDayOfMonth().add({
      days: -1
    })]
  },
  opens: 'left',
  format: 'MM/dd/yyyy',
  separator: ' to ',
  startDate: Date.today().add({
    days: -29
  }),
  endDate: Date.today(),
  minDate: '01/01/2012',
  maxDate: '12/31/2013',
  locale: {
    applyLabel: 'Submit',
    fromLabel: 'From',
    toLabel: 'To',
    customRangeLabel: 'Custom Range',
    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    firstDay: 1
  },
  showWeekNumbers: true,
  buttonClasses: ['btn-danger']
},

function (start, end) {
  $('.report_range span').html(start.toString('MMMM d, yyyy') + ' - ' + end.toString('MMMM d, yyyy'));
});

//Set the initial state of the picker label
$('.report_range span').html(Date.today().add({
  days: -29
}).toString('MMMM d, yyyy') + ' - ' + Date.today().toString('MMMM d, yyyy'));



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