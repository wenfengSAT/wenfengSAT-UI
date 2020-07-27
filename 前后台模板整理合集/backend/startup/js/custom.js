//Tooltip
$('a').tooltip('hide');

//Popover
$('.popover-pop').popover('hide');

//Collapse
$('#myCollapsible').collapse({
  toggle: false
})

//Dropdown
$('.dropdown-toggle').dropdown();


// Retina Mode
function retina(){
  retinaMode = (window.devicePixelRatio > 1);
  return retinaMode;
}


$(document).ready(function () {
  pieCharts();
});


// Date Time
setInterval(function(){ 
  date = '<span class="big">' + moment().format('MMMM Do YYYY') + '</span><span>' + moment().format('ddd hh:mm:ss a') + '</span>'
  $("#date-time").html(date)
}, 1000);



function pieCharts() {
  $(function () {
    //create instance
    $('.pie_chart_1').easyPieChart({
      animate: 2000,
      barColor: '#74b749',
      trackColor: '#dddddd',
      scaleColor: '#74b749',
      size: 180,
      lineWidth: 8,
    });
    //update instance after 5 sec
    setTimeout(function () {
      $('.pie_chart_1').data('easyPieChart').update(69);
    }, 5000);
    setTimeout(function () {
      $('.pie_chart_1').data('easyPieChart').update(20);
    }, 15000);
    setTimeout(function () {
      $('.pie_chart_1').data('easyPieChart').update(78);
    }, 27000);
    setTimeout(function () {
      $('.pie_chart_1').data('easyPieChart').update(52);
    }, 39000);
    setTimeout(function () {
      $('.pie_chart_1').data('easyPieChart').update(89);
    }, 45000);
  });
}

//Resize charts and graphs on window resize
$(document).ready(function () {
  $(window).resize(function(){
    pieCharts();
  });
});

//Tiny Scrollbar
$('#scrollbar-three').tinyscrollbar();