// SparkLine Line Graphs
$(function () {
  $('#unique-visitors').sparkline('html', {
    type: 'line',
    fillColor: '#f9f9f9',
    lineColor: '#860e1c',
    height: 16,
  });
  $('#monthly-sales').sparkline('html', {
    type: 'line',
    fillColor: '#f9f9f9',
    lineColor: '#3eb157',
    height: 16,
  });
  $('#current-balance').sparkline('html', {
    type: 'line',
    fillColor: '#f9f9f9',
    lineColor: '#9564e2',
    height: 16,
  });
  $('#registrations').sparkline('html', {
    type: 'line',
    fillColor: '#f9f9f9',
    lineColor: '#3660aa',
    height: 16,
  });
  $('#site-visits').sparkline('html', {
    type: 'line',
    fillColor: '#f9f9f9',
    lineColor: '#333333',
    height: 20,
  });
});


//Data Tables
$(document).ready(function () {
  $('#data-table').dataTable({
    "sPaginationType": "full_numbers"
  });
});

jQuery('.delete-row').click(function () {
  var conf = confirm('Continue delete?');
  if (conf) jQuery(this).parents('tr').fadeOut(function () {
    jQuery(this).remove();
  });
    return false;
});

