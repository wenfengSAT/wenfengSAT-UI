
    $(function() {
		// listNav plugin
		tisa_users.letter_nav_list();
		// Quicksearch plugin
		tisa_users.search_list();
	})
	
	// user list
	tisa_users = {
		letter_nav_list: function() {
			if( $('#user_list_letter_nav').length ) {
				var $letter_nav_list = $('#user_list_letter_nav');
				$letter_nav_list.listnav({
					filterSelector: '.last-name',
					includeNums: false,
					removeDisabled: true,
					onClick: function() {
						$letter_nav_list.children('li').removeClass('fadeOutRight fadeInRight').addClass('fadeOutRight');
						//$('#user_list_basic .listNavHide');
						setTimeout(function() {
							$letter_nav_list.children('.listNavHide').hide();
							$letter_nav_list.children('.listNavShow').addClass('fadeInRight').show();
						},500);
						
					}
				});
			}
		},
		search_list: function() {
			if( $('#user_list_search').length ) {
				$('input#list_search').quicksearch('#user_list_search > li');
				
				$('.user_check_all input:checkbox,.user_check input:checkbox').iCheck({
					checkboxClass: 'icheckbox_minimal-green',
					radioClass: 'iradio_minimal-green'
				});
				
				$('.user_check_all input:checkbox').on('ifChecked', function(event){
					$('#user_list_search li:visible .user_check input:checkbox').iCheck('check'); 
				}).on('ifUnchecked', function(event){
					$('#user_list_search li:visible .user_check input:checkbox').iCheck('uncheck'); 
				});
				
			}
		}
	}