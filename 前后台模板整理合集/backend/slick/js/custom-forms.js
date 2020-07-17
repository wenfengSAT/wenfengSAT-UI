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


//Wizard
$("#wizard").bwizard();

//wysihtml5
$('#wysiwyg').wysihtml5();
