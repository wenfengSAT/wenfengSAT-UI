  $(function() {
    
  "use strict";
$(document).ready(function()
{
     
	 
	  $('.select2_olive').select2({
                placeholder: "Select",
                allowClear: true
            });
 
 
    $('#select2_sample1').select2({
            placeholder: "Select an option",
            allowClear: true
        });

        $('#select2_sample2').select2({
            placeholder: "Select a State",
            allowClear: true
        });

        

        function format(state) {
            if (!state.id) return state.text; // optgroup
            return "<img class='flag' src='images/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
        }
        $("#select2_sample4").select2({
            placeholder: "Select a Country",
            allowClear: true,
            formatResult: format,
            formatSelection: format,
            escapeMarkup: function (m) {
                return m;
            }
        });

        $("#select2_sample5").select2({
            tags: ["red", "green", "blue", "yellow", "pink"]
        });

		/*bootstrap select box*/
		
		$('.bs-select').selectpicker({
            iconBase: 'fa',
            tickIcon: 'fa-check'
        });
		
		/*bootstrap Multiple Select*/
		
		 $('#my_multi_select1').multiSelect();
        $('#my_multi_select2').multiSelect({
            selectableOptgroup: true
        });
		
		/*custom scroll bar to multiple select box*/
		
		$('.ms-list').slimscroll({
			height: '200px',
			color: '#DBDFE0',
			railVisible: true,
			railColor: '#a4a5a5'
	});
		
		
	});	 
  
  
});