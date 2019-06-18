$(document).ready(function(){
	
	/* ---------- Check / Uncheck Stars ---------- */
	if($('.messagesList')) {
		
		$('.messagesList').on('click', '.star', function(){
			
			$(this).removeClass('star');
			
			$(this).addClass('dislikes');
			
			//here add your function
			
		});
		
		$('.messagesList').on('click', '.dislikes', function(){
			
			$(this).removeClass('dislikes');
			
			$(this).addClass('star');
			
			//here add your function
			
		});	
		
	}
	
	/* ---------- Placeholder Fix for IE ---------- */
	$('input, textarea').placeholder();

	/* ---------- Auto Height texarea ---------- */
	$('textarea').autosize();   
	
});