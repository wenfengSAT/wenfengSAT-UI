
	$(function() {
		// datepicker
		tisa_datepicker.init();
		// daterange picker
		tisa_daterangepicker.init();
		// timepicker
		tisa_timepicker.init();
		// ion slider
		tisa_slider.init();
		// button switches
		tisa_switches.init();
		// 2col multiselect
		tisa_2col_multiselect.init();
		// enhanced select
		tisa_enhanced_select.init();
		// textarea autosize
		tisa_autosize.init();
		// masked inputs
		tisa_maskedInputs.init();
	})
	
	// datepicker
	tisa_datepicker = {
		init: function() {
			if($('.ts_datepicker').length) {
				$('.ts_datepicker').datepicker({
					todayHighlight: true
				})
			}
			if( ($('#dpStart').length) && ($('#dpEnd').length) ) {
				$('#dpStart').datepicker({
					todayHighlight: true
				}).on('changeDate', function(e){
					$('#dpEnd').datepicker('setStartDate', e.date);
				});
				$('#dpEnd').datepicker({
					todayHighlight: true
				}).on('changeDate', function(e){
					$('#dpStart').datepicker('setEndDate', e.date)
				});
			}
		}
	}
	
	// daterangepicker
	tisa_daterangepicker = {
		init: function() {
			if($('#reservation').length) {
				$('#reservation').daterangepicker({
					buttonClasses: ['btn','btn-sm']
				});
			}
			if($('#reportrange').length) {
				$('#reportrange').daterangepicker(
					{
					  ranges: {
						 'Today': [moment(), moment()],
						 'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
						 'Last 7 Days': [moment().subtract('days', 6), moment()],
						 'Last 30 Days': [moment().subtract('days', 29), moment()],
						 'This Month': [moment().startOf('month'), moment().endOf('month')],
						 'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
					  },
					  startDate: moment().subtract('days', 29),
					  endDate: moment(),
					  buttonClasses: ['btn','btn-sm']
					},
					function(start, end) {
						$('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
					}
				);
			}
		}
	};
	
	// timepicker
	tisa_timepicker = {
		init: function() {
			if($('#tp-default').length) {
				$('#tp-default').timepicker()
			}
			if($('#tp-24h').length) {
				$('#tp-24h').timepicker({
					minuteStep: 1,
					template: 'modal',
					showSeconds: true,
					showMeridian: false
				})
			}
			if($('#tp-modal').length) {
				$('#tp-modal').timepicker({
					minuteStep: 1,
					secondStep: 5,
					showInputs: false,
					modalBackdrop: true,
					showSeconds: true,
					showMeridian: false
				})
			}
		}
	}
	
	//* ion Range Sliders
	tisa_slider = {
		init: function() {
			if($('#range_slider_a').length) {
				$("#range_slider_a").ionRangeSlider({
				   type: "single",
				   step: 10,
				   postfix: " pounds",
				   from: 200,
				   hasGrid: true
				});
			}
			if($('#range_slider_b').length) {
				$("#range_slider_b").ionRangeSlider();
			}
			if($('#range_slider_c').length) {
				$("#range_slider_c").ionRangeSlider({
					type: "single",
					step: 1000,
					postfix: " light years",
					from: 55000,
					hideMinMax: true,
					hideFromTo: false
				});
			}
			if($('#range_slider_d').length) {
				$("#range_slider_d").ionRangeSlider({
					type: "double",
					postfix: " miles",
					step: 1000,
					from: 25000,
					to: 35000
				});
			}
		}
	}
	
	// button switches
	tisa_switches = {
		init: function() {
			if ($('.bs_switch').length) {
				$(".bs_switch").bootstrapSwitch();
				$('.bs_switch_radio').on('switch-change', function () {
					$(this).closest('.bs_switch_wrapper').each(function() {
						$(this).bootstrapSwitch('toggleRadioStateAllowUncheck', true);
					})
				});
			}
		}
	}
	
	//* 2col multiselect
	tisa_2col_multiselect = {
		init: function() {
			if($('#2col_preselected').length) {
				$('#2col_preselected').multiSelect();
			}
			if($('#2col_callbacks').length) {
				$('#2col_callbacks').multiSelect({
					afterSelect: function(values){
						alert("Select value: "+values);
					},
					 afterDeselect: function(values){
						alert("Deselect value: "+values);
					}
				});
			}
			if($('#2col_optgroup').length) {
				$('#2col_optgroup').multiSelect({ selectableOptgroup: true });
			}
			if($('#2col_public_method').length) {
				$('#2col_public_method').multiSelect();
				$('#select-all').click(function(){
					$('#2col_public_method').multiSelect('select_all');
					return false;
				});
				$('#deselect-all').click(function(){
					$('#2col_public_method').multiSelect('deselect_all');
					return false;
				});
				$('#select-20').click(function(){
					$('#2col_public_method').multiSelect('select', ['elem_1','elem_2','elem_3','elem_4','elem_5','elem_6','elem_7','elem_8','elem_9','elem_10','elem_11','elem_12','elem_13','elem_14','elem_15','elem_16','elem_17','elem_18','elem_19','elem_20']);
					return false;
				});
				$('#deselect-20').click(function(){
					$('#2col_public_method').multiSelect('deselect', ['elem_1','elem_2','elem_3','elem_4','elem_5','elem_6','elem_7','elem_8','elem_9','elem_10','elem_11','elem_12','elem_13','elem_14','elem_15','elem_16','elem_17','elem_18','elem_19','elem_20']);
					return false;
				});
			}
			if($('#2col_custom').length) {
				$('#2col_custom').multiSelect({
					selectableHeader: "<div class='custom-header'>Selectable items</div>",
					selectionHeader: "<div class='custom-header'>Selection items</div>",
					selectableFooter: "<div class='custom-footer'>Selectable footer</div>",
					selectionFooter: "<div class='custom-footer'>Selection footer</div>"
				});
			}
			if($('#2col_searchable').length) {
				$('#2col_searchable').multiSelect({
					selectableHeader: '<div class="custom-header-search"><input type="text" class="search-input input-sm form-control" autocomplete="off" placeholder="Selectable..."></div>',
					selectionHeader: '<div class="custom-header-search"><input type="text" class="search-input input-sm form-control" autocomplete="off" placeholder="Selection..."></div>',
					afterInit: function(ms){
						var that = this,
						$selectableSearch = that.$selectableUl.prev('div').children('input'),
						$selectionSearch = that.$selectionUl.prev('div').children('input'),
						selectableSearchString = '#'+that.$container.attr('id')+' .ms-elem-selectable:not(.ms-selected)',
						selectionSearchString = '#'+that.$container.attr('id')+' .ms-elem-selection.ms-selected';
						
						that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
						.on('keydown', function(e){
							if (e.which === 40){
								that.$selectableUl.focus();
								return false;
							}
						});
						
						that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
						.on('keydown', function(e){
							if (e.which == 40){
								that.$selectionUl.focus();
								return false;
							}
						});
					},
					afterSelect: function(){
						this.qs1.cache();
						this.qs2.cache();
					},
					afterDeselect: function(){
						this.qs1.cache();
						this.qs2.cache();
					}
				});
			}
		}
	}
	
	//* Enhanced select box, tag handler
	tisa_enhanced_select = {
		init: function() {
			if($('#s2_basic').length) {
				$('#s2_basic').select2({
					allowClear: true,
					placeholder: "Select..."
				});
			}
			if($('#s2_multi_value').length) {
				$('#s2_multi_value').select2({
					placeholder: "Select..."
				});
			}
			if($('#s2_tokenization').length) {
				$('#s2_tokenization').select2({
					placeholder: "Select...",
					tags:["red", "green", "blue", "black", "orange", "white"],
					tokenSeparators: [",", " "]
				});
			}
			if($('#s2_ext_value').length) {
				
				function format(state) {
					if (!state.id) return state.text;
					return '<i class="flag-' + state.id + '"></i>' + state.text;
				}
				
				$('#s2_ext_value').select2({
					placeholder: "Select Country",
					formatResult: format,
					formatSelection: format,
					escapeMarkup: function(markup) { return markup; }
				}).val("AU").trigger("change");
				
				$("#s2_ext_us").click(function(e) { e.preventDefault(); $("#s2_ext_value").val("US").trigger("change"); });
				$("#s2_ext_br_gb").click(function(e) { e.preventDefault(); $("#s2_ext_value").val(["BR","GB"]).trigger("change"); });
			}
		}
	}
	
	// textarea autosize
	tisa_autosize = {
		init: function() {
			if($('#exmpl_textarea_autosize').length) {
				$('#exmpl_textarea_autosize').autosize({append: "\n"});
			}
		}
	}
	
	//* masked inputs
	tisa_maskedInputs = {
		init: function() {
			if($('#mask_date').length) {
				$("#mask_date").inputmask("dd/mm/yyyy",{ "placeholder": "dd/mm/yyyy", showMaskOnHover: false });
			}
			if($('#mask_phone').length) {
				$("#mask_phone").inputmask("mask", {"mask": "(999) 999-9999"});
			}
			if($('#mask_plate').length) {
				$("#mask_plate").inputmask({"mask": "[9-]AAA-999"});
			}
			if($('#mask_numeric').length) {
				$("#mask_numeric").inputmask('$999.999,99', { numericInput: false });
			}
			if($('#mask_mac').length) {
				$("#mask_mac").inputmask({"mask": "**:**:**:**:**:**"});
			}
			if($('#mask_callback').length) {
				$("#mask_callback").inputmask("mm/dd/yyyy",{ "placeholder": "mm/dd/yyyy", "oncomplete": function(){ alert('Date entered: '+$(this).val()); } });
			}
			if($('[data-inputmask]').length) {
				$('[data-inputmask]').inputmask();
			}
		}
	}