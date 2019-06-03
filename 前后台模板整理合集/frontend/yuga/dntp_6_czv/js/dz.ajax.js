/*
Abstract : Ajax Page Js File
File : dz.ajax.js
#CSS attributes: 
	.dzForm : Form class for ajax submission. 
	.dzFormMsg  : Div Class| Show Form validation error/success message on ajax form submission

#Javascript Variable
.dzRes : ajax request result variable
.dzFormAction : Form action variable
.dzFormData : Form serialize data variable

*/

function contactForm()
{
	'use strict';
	var msgDiv;
	$(".dzForm").submit(function(e)
	{
		e.preventDefault();	//STOP default action
		$('.dzFormMsg').html('<div class="gen alert alert-success">Submiting..</div>');
		var dzFormAction = $(this).attr('action');
		var dzFormData = $(this).serialize();
		
		$.ajax({
			method: "POST",
			url: dzFormAction,
			data: dzFormData,
			dataType: 'json',
			success: function(dzRes){
				if(dzRes.status == 1){
					msgDiv = '<div class="gen alert alert-success">'+dzRes.msg+'</div>';
				}
				
				if(dzRes.status == 0){
					msgDiv = '<div class="err alert alert-danger">'+dzRes.msg+'</div>';
				}
				$('.dzFormMsg').html(msgDiv);
			}
		})
	});
	
	setInterval(function(){
		$('.dzFormMsg .alert').hide(1000);
	}, 10000);
	
}



/* google map function custom */
function init_map() {
	var myOptions = {
		zoom: 10,
		center: new google.maps.LatLng(51.5073509, -0.12775829999998223),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		// This is where you would paste any style found on Snazzy Maps.
		styles: [ 
		{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
		{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
		{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
		{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
		{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
		{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
		{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
		{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
		{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
		{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
		{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
		{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
		{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
		]
	};
	/* Let's also add a marker while we're at it */
	var map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
	marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(51.5073509, -0.12775829999998223)
	});
	
	/* marker on click show infowindow */
	infowindow = new google.maps.InfoWindow({
		content: '<strong>Title</strong><br>London, United Kingdom<br>'
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});
}


if($("#gmap_canvas").length > 1) {
	google.maps.event.addDomListener(window, 'load', init_map);
}



jQuery(document).ready(function() {
    'use strict';
	contactForm();
})	