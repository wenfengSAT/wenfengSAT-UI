$(document).ready(function(){
	
	if($('.messages-list').length) {
		
		/* ---------- Check / Uncheck Checkbox ---------- */
		$('.messages-list').on('click', '.fa-square-o', function(event){
			event.preventDefault();
			
			$(this).removeClass('fa-square-o').addClass('fa-check-square-o');
			
		});
		
		$('.messages-list').on('click', '.fa-check-square-o', function(event){
			event.preventDefault();
			
			$(this).removeClass('fa-check-square-o').addClass('fa-square-o');
			
		});
		
		/* ---------- Check / Uncheck Stars ---------- */
		$('.messages-list').on('click', '.fa-star-o', function(event){
			event.preventDefault();
			
			$(this).removeClass('fa-star-o').addClass('fa-star');
			
		});
		
		$('.messages-list').on('click', '.fa-star', function(event){
			event.preventDefault();
			
			$(this).removeClass('fa-star').addClass('fa-star-o');
			
		});	
		
		/* ---------- White icons in active li---------- */
		$('.action').find('i.fa-square-o').replaceWith('<i class="fa fa-square-o"></i><i class="fa fa-square"></i>');
		$('.action').find('i.fa-star-o').replaceWith('<i class="fa fa-star-o"></i><i class="fa fa-star bg"></i>');
			
	}
	
	/* ---------- Placeholder Fix for IE ---------- */
	$('input, textarea').placeholder();

	/* ---------- Auto Height texarea ---------- */
	$('textarea').autosize();   
	
});