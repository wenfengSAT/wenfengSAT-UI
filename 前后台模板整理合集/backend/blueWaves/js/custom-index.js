var $grid_color = "#eee";

var $dark_blue = "#005387";
var $info = "#87CEEB";
var $danger = "#F56B6B";
var $warning = "#F38733";
var $success = "#2ecc71";
var $yellow = "#fdd922";
var $facebook = "#3b5999";
var $twitter = "#00acee";
var $linkedin = "#1a85bd";
var $gplus = "#dc4937";

// Just Gage
var gg1 = new JustGage({
  id: "gg1",
  value : 4960,
  min: 100,
  max: 9999,
  gaugeWidthScale: 1,
  counter: true,
  formatNumber: true,
  gaugeColor: $grid_color,
  levelColors: [$warning],
  label: "30 seconds"
});
setInterval(function() {
  gg1.refresh(getRandomInt(10, 9999));
}, 2000);
