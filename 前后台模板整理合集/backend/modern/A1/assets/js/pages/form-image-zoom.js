$(document).ready(function() {
    $("#zoom_01").elevateZoom();
    $("#zoom_02").elevateZoom({ zoomType	: "inner", cursor: "crosshair" });
    $("#zoom_03").elevateZoom({ zoomType	: "lens", lensShape : "round", lensSize : 200 });
    $("#zoom_04").elevateZoom({scrollZoom : true, zoomWindowPosition: 11});
});