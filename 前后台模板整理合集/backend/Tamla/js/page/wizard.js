
 
 
 $(document).ready(function() {
			$("#wizard").bwizard();
		});

/*=====STEPY WIZARD====*/
         $(function() {
             $('.wizard').stepy({
                 backLabel: 'Previous',
                 block: true,
                 nextLabel: 'Next',
                 titleClick: true,
                 titleTarget: '.stepy-tab'
             });
         });
         /*=====STEPY WIZARD WITH VALIDATION====*/
         $(function() {
             $('#stepy_form').stepy({
                 backLabel: 'Back',
                 nextLabel: 'Next',
                 errorImage: true,
                 block: true,
                 description: true,
                 legend: false,
                 titleClick: true,
                 titleTarget: '#top_tabby',
                 validate: true
             });
             $('#stepy_form').validate({
                 errorPlacement: function(error, element) {
                     $('#stepy_form div.stepy-error').append(error);
                 },
                 rules: {
                     'name': 'required',
                     'email': 'required'
                 },
                 messages: {
                     'name': {
                         required: 'Name field is required!'
                     },
                     'email': {
                         required: 'Email field is requerid!'
                     }
                 }
             });
         });