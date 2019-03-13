$(document).ready(function() {
 
    /* initialize shuffle plugin - four */
    var $grid = $('.portfolio.fourcols');
 
    $grid.shuffle({
        itemSelector: '.item-wrapper' // the selector for the items in the grid
    });
 
	$('#galleryfilter-four button').click(function (e) {
	    e.preventDefault();
	 
	    // set active class
	    $('#galleryfilter-four button').removeClass('active');
	    $(this).addClass('active');
	 
	    // get group name from clicked item
	    var groupName = $(this).attr('data-group');
	 
	    // reshuffle grid
	    $grid.shuffle('shuffle', groupName );
	});


	$(".open-modal").click(function(e) {
		e.preventDefault();
		var img = $(this).closest(".item").find("img").attr("src");
		var imgname = $(this).closest(".item-wrapper").attr("data-name");

		bootbox.dialog({
			message: "<img src='" + img + "' class='img-responsive' />",
			title: imgname,
			buttons: {
				close: {
					label: "Close",
					className: "btn-default"
				}
			}
		});
	});


	$grid.shuffle('update');

});