/*
 *  Document   : base_comp_maps_full.js
 *  Author     : pixelcave
 */
var BaseCompMapsFull=function(){var e=function(){var e,n=jQuery("#main-container"),t=37.7577,o=-122.4376;n.css("position","relative"),jQuery("#js-map-full").css({position:"absolute",top:n.css("padding-top"),right:"0",bottom:"0",left:"0"});var i=new GMaps({div:"#js-map-full",lat:t,lng:o,zoom:11});i.setMapTypeId(google.maps.MapTypeId.TERRAIN),jQuery(window).on("resize orientationchange",function(){clearTimeout(e),e=setTimeout(function(){i.refresh(),i.setCenter(t,o)},150)})};return{init:function(){e()}}}();jQuery(function(){BaseCompMapsFull.init()});