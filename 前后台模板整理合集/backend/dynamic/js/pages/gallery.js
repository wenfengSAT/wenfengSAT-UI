//------------- gallery.js -------------//
$(document).ready(function() {

	//------------- Sparklines in header stats -------------//
	$('#spark-visitors').sparkline([5,8,10,8,7,12,11,6,13,8,5,8,10,11,7,12,11,6,13,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-templateviews').sparkline([12,11,6,13,8,5,8,10,12,11,6,13,8,5,8,10,12,11,6,13,8,5,8], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	$('#spark-sales').sparkline([19,18,20,17,20,18,22,24,23,19,18,20,17,20,18,22,24,23,19,18,20,17], {
		type: 'bar',
		width: '100%',
		height: '20px',
		barColor: '#dfe2e7',
		zeroAxis: false,
	});

	//------------- Gallery example functions -------------//

	//check all checkboxes
	$('#checkAll-active').checkAll({
		masterCheckbox: '.check-all',
		otherCheckboxes: '.check',
		highlightElement: {
            active: true,
            elementClass: '.panel',
            highlightClass: 'highlight-panel'
        }
	})

	//update edit image modal
	$('#edit-image').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Button that triggered the modal
		var panel = button.closest('.panel');
		var imageName = panel.find('.panel-title').text();
		var image = panel.find('img').attr("src");
		var modal = $(this)
		modal.find('.modal-title').text(imageName);
		modal.find('img').attr("src", image);
		//center modal via method
        $('body').data('dynamic').centerModal();   
	});

	//delete image
	$('.delete-image').click(function(e) {
		var panel = $(this).closest('.panel');
        bootbox.confirm({
            message: "Delete image",
            title: "Are you sure ?",
            className: "modal-style2",
            callback: function(result) {
                if (result) {
                    panel.remove();
                }
            }
        }); 
        //center modal via method
        $('body').data('dynamic').centerModal();                  
    });

});

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 
