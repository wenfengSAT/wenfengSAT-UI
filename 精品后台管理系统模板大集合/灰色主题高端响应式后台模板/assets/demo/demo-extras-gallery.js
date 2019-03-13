$(document).ready(function() {
 
    /* initialize shuffle plugin */
    var $grid = $('.gallery');
 
    $grid.shuffle({
        itemSelector: '.item-wrapper' // the selector for the items in the grid
    });
 
	$('#galleryfilter button').click(function (e) {
	    e.preventDefault();
	 
	    // set active class
	    $('#galleryfilter button').removeClass('active');
	    $(this).addClass('active');
	 
	    // get group name from clicked item
	    var groupName = $(this).attr('data-group');
	 
	    // reshuffle grid
	    $grid.shuffle('shuffle', groupName );
	});

	$('#gallerysort button').click(function (e) {
	    e.preventDefault();

	    // set active class
	    $('#gallerysort button').removeClass('active');
	    $(this).addClass('active');
	 
		// set sorts
		var opts = {};

		if ($(this).attr('data-order')=="desc") {
			opts = {
				by: function($el) {
					return $el.data('name').toLowerCase();
				}
			}
		} else {
			opts = {
				reverse: true,
				by: function($el) {
					return $el.data('name').toLowerCase();
				}
			}
		}

		$grid.shuffle('sort', opts);

	});



	$(".gallery img").click(function(e) {
		e.preventDefault();
		var img = $(this).attr("src");
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

});