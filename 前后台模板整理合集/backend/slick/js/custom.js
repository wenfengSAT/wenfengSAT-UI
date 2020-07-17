//Tooltip
$('a').tooltip('hide');

//Popover
$('button').popover('hide');

//Collapse
$('#myCollapsible').collapse({
  toggle: false
})

$(".collapse").collapse(

);

$('.carousel').carousel({
	interval: 6000
})

//Dropdown
$('.dropdown-toggle').dropdown();

// Retina Mode
function retina(){
  retinaMode = (window.devicePixelRatio > 1);
  return retinaMode;
}

//Easy Pie Charts
$(document).ready(function () {
  profile_progress();
});

//Animated Pie Charts
function profile_progress() {
  //create instance
  $('.chart-progress').easyPieChart({
    animate: 2000,
    barColor: '#3eb157',
    trackColor: '#eeeeee',
    scaleColor: '#3eb157',
    lineWidth: 2,
    size: 64,
  });
}

//Resize animated charts on window resize
$(document).ready(function () {
  $(window).resize(function(){
    profile_progress();
  });
});
