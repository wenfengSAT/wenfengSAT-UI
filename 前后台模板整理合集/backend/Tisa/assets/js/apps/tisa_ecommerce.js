	
	$(function() {
		// daterange picker
		tisa_date_range.report_picker();
		// datepicker
		tisa_datepicker.init();
		//charts
		tisa_report_chart.revenue_visits();
		tisa_report_chart.revenue_sources();
		tisa_report_chart.revenue_per_day();
		// small charts (sparklines)
		tisa_peity.init();
		// check all checkboxes
		tisa_check_all.init();
		// icheck
		tisa_icheck.init();
		// wysiwg editor
		tisa_wysiwg.init();
		// tagging
		tisa_tagging.init();
		// switches
		tisa_switches.init();
		// multiselect
		tisa_multiselect.init();
		// multiupload
		tisa_image_uplaod.init();
		// add table row
		tisa_table.row_add();
		// remove table row
		tisa_table.row_remove();
		// date range picker
		tisa_date_range.discount_picker();
		// img grid lightbox
		tisa_image_lightbox.init();
	})
	
	
	// daterange picker
	tisa_date_range = {
		report_picker: function() {
			if($('#reportrange').length) {
				if( $(window).width() < 974 ) {
					var dropdownPos = 'right';
				} else {
					var dropdownPos = 'left';
				}
				$('#reportrange').daterangepicker({
					opens: dropdownPos,
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
		},
		discount_picker: function() {
			if($('.discound_date_range').length) {
				$('.discound_date_range').daterangepicker({
					ranges: {
					   'Next 7 Days': [moment().add('days', 1), moment().add('days', 7)],
					   'Next 14 Days': [moment().add('days', 1), moment().add('days', 14)],
					   'Next Month': [moment().add('month', 1).startOf('month'), moment().add('month', 1).endOf('month')]
					},
					opens: 'left',
					format: 'DD MMM YYYY'
				});
			}
		}
	}
	
	// datepicker
	tisa_datepicker = {
		init: function() {
			if ($('#p_date_available').length) {
				$('#p_date_available').datepicker({
					weekStart: 1,
					autoclose: true,
					format: "dd.mm.yyyy",
					startDate: "0d",
					todayHighlight: true
				})
			}
		}
	}
	
	// charts
	tisa_report_chart = {
		revenue_visits : function() {
			if($('#report_revenue_visits').length) {
				
				function dolarFormatter(v, axis) {
					return "$"+v.toFixed(axis.tickDecimals) ;
				}
				
				var chart_placeholder = $('#report_revenue_visits');

				var options = {
					grid: {
						clickable: true, 
						hoverable: true,
						autoHighlight: true,
						backgroundColor: null,
						borderWidth: 0,
						color: "#666",
						labelMargin: 10,
						axisMargin: 0,
						mouseActiveRadius: 10,
						minBorderMargin: 5
					},
					series: {
						lines: {
							show: true,
							lineWidth: 3,
							steps: false
						},
						points: {
							show:true,
							radius: 4,
							symbol: "circle",
							fill: true
						}
					},
					tooltip: true,
					tooltipOpts: {
						content: "%y <small class=\"text-muted\">(%x)</small>",
						shifts: {
							x: 20,
							y: 0
						},
						defaultTheme: false
					},
					xaxis: {
						mode: "time"
					},
					yaxes: [
						{
							min:0,
						},
						{
							min:0,
							tickFormatter: dolarFormatter,
							position: "right"
						}
					],
					legend: {
						noColumns: 0,
						position: "ne"
					},
					colors: ["#d35400","#34495e"],
					shadowSize: 0
				};

				$.plot(chart_placeholder,[{	
					label: "Visits",
					data: data_visits,
					points: {fillColor: '#fff'}
				},{
					label: "Product Revenue",
					data: data_revenue,
					points: {fillColor: '#fff'},
					yaxis: 2
				}],options);
				
			}
		},
		revenue_sources: function() {
			if ($('#report_revenue_sources').length) {
				function labelFormatter(label, series) {
					return "<div class=\"chart_label\">" + Math.round(series.percent) + "%</div>";
				}
				$.plot('#report_revenue_sources', data_revenue_sources, {
					series: {
						pie: {
							show: true,
							radius: 3/4,
							label: {
								show: true,
								radius: 0.54,
								formatter: labelFormatter,
							},
							innerRadius: 0.35
						}
					},
					legend: {
						show: true,
						noColumns: 0,
						container:$("#report_revenue_sources_legend")
					}
				});
			}
		},
		revenue_per_day: function() {
			if ($('#report_revenue_per_day').length) {
				
				function dolarFormatter(v, axis) {
					return "$"+v.toFixed(axis.tickDecimals) ;
				}
				
				var data = [
					{
						data: data_revenue_day,
						color: '#16a085',
						label:'Revenue per day',
						bars: {
							show: true,
							align:'center',
							barWidth:0.3,
							fill: 1
						}
					}    
				];
				
				$.plot('#report_revenue_per_day', data, {
					grid: {
						clickable: true, 
						hoverable: true,
						autoHighlight: true,
						backgroundColor: null,
						borderWidth: 0,
						color: "#666",
						labelMargin: 10,
						axisMargin: 0,
						mouseActiveRadius: 10,
						minBorderMargin: 5
					},
					yaxis: {
						min: 0,
						tickFormatter: dolarFormatter
					},
					xaxis: {
						ticks: [[0,'Mon'],[1,'Tue'],[2,'Wed'],[3,'Thu'],[4,'Fri'],[5,'Sat'],[6,'Sun']],
						autoscaleMargin: .10 // allow space left and right
					},
					tooltip: true,
					tooltipOpts: {
						content: function(label, xval, yval, flotItem) {
							var week_day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
							return '$'+yval+'.00 <small class="text-muted">'+week_day[xval]+'</small>';
						},
						shifts: {
							x: 20,
							y: 0
						},
						defaultTheme: false
					},
					legend: {
						show: false
					}
				});
			}
		}
	}
	
	// small charts (sparklines)
	tisa_peity = {
		init: function() {
			if ($('.peity_line').length) {
				$.fn.peity.defaults.line = {
					delimiter: ",",
					fill: "#e7f2fa",
					height: 38,
					max: null,
					min: 0,
					stroke: "#3293d2",
					strokeWidth: 2,
					width: 64
				}
				$(".peity_line").peity("line");
			}
		}
	}
	
	// check all
	tisa_check_all = {
		init: function() {
			if ($('.check_all').length) {
				$(".check_all").each(function() {
					var thisData = $(this).data('targetEl');
					if (thisData != '') {
						$(this).click(function(){
							$('input.check_row:checkbox').not(this).prop('checked', this.checked);
						});
					}
				})
			}
		}
	}
	
	// icheck
	tisa_icheck = {
		init: function() {
			if ($('.check_all,.check_row').length) {
				$('.check_all,.check_row').iCheck({
					checkboxClass: 'icheckbox_minimal-green',
					radioClass: 'iradio_minimal-green'
				});
				
				$('.check_all').on('ifChecked', function(event){
					$('.check_row').iCheck('check'); 
				}).on('ifUnchecked', function(event){
					$('.check_row').iCheck('uncheck'); 
				});
			}
		}
	}
	
	// wysiwg editor
	tisa_wysiwg = {
		init: function() {
			if ($('#p_description').length) {
				$('textarea#p_description').ckeditor();
			}
		}
	}
	
	// tagging
	tisa_tagging = {
		init: function() {
			if ($('#p_keywords').length) {
				$("#p_keywords").select2({
					tags: ["red", "green", "blue", "black", "purple", "yellow"]
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
					$('.bs_switch_radio').bootstrapSwitch('toggleRadioStateAllowUncheck', true);
				});
			}
		}
	}
	
	// multiselect
	tisa_multiselect = {
		init: function() {
			if($('#p_category').length) {
				$('#p_category').multiSelect();
				$('#p_cat_select_all').click(function(e) {
					e.preventDefault();
					$('#p_category').multiSelect('select_all');
				});
				$('#p_cat_deselect_all').click(function(e) {
					e.preventDefault();
					$('#p_category').multiSelect('deselect_all');
				});
			}
			if($('#p_related_products').length) {
				$('#p_related_products').multiSelect();
				$('#p_related_select_5').click(function(e) {
					e.preventDefault();
					$('#p_related_products').multiSelect('select', ['prod_1', 'prod_2','prod_3','prod_4','prod_5']);
				});
				$('#p_related_deselect_5').click(function(e) {
					e.preventDefault();
					$('#p_related_products').multiSelect('deselect', ['prod_1', 'prod_2','prod_3','prod_4','prod_5']);
				});
			}
		}
	}
	
	// image upload
	tisa_image_uplaod = {
		init: function() {
			if ($('#image_upload').length) {
				var	uploadButton = $('<button/>')
						.addClass('btn btn-success btn-block')
						.prop('disabled', true)
						.text('Processing...')
						.on('click', function (e) {
							var $this = $(this),
								data = $this.data();
							$this
								.off('click')
								.text('Abort')
								.on('click', function () {
									$this.remove();
									data.abort();
								});
							data.submit().always(function () {
								$this.remove();
							});
							e.preventDefault();
						});
						
				$('#image_upload').fileupload({
					url: 'php_upload/',
					dataType: 'json',
					autoUpload: false,
					acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
					maxFileSize: 5000000, // 5 MB
					disableImageResize: /Android(?!.*Chrome)|Opera/
						.test(window.navigator.userAgent),
					previewMaxWidth: 220,
					previewMaxHeight: 220,
					previewCrop: true
				})
				.on('fileuploadsubmit', function (e, data) {
					var input = $('#image_upload');
					data.formData = {
						files: input.data(data)
					};
					if (!data.formData.files) {
						input.focus();
						return false;
					}
				})
				.on('fileuploadadd', function (e, data) {
					data.context = $('<li/>').appendTo('#img_grid_upload');
					if(!$('#upload_progress').length) {
						$('body').append('<div id="upload_progress"><i class="fa fa-spinner fa-spin"></i></div>');
					}
					$.each(data.files, function (index, file) {
						var upload_image_actions = $('<div class="upload_img_actions">').wrapInner('<span class="upload_img_name">'+ file.name +'</span>');
						var node = $('<div class="upload_img_single thumbnail" />').append(upload_image_actions);
						if (!index) {
							upload_image_actions.append(uploadButton.clone(true).data(data));
						}
						node.appendTo(data.context);
					});
				})
				.on('fileuploadprocessalways', function (e, data) {
					var index = data.index,
						file = data.files[index],
						node = $(data.context.children()[index]);
					if (file.preview) {
						node.prepend(file.preview);
					}
					if (file.error) {
						node.find('.upload_img_actions').append($('<div class="alert alert-danger"/>').text(file.error));
					}
					if (index + 1 === data.files.length) {
						data.context.find('button').text('Upload').prop('disabled', !!data.files.error);
					}
				})
				.on('fileuploadprogressall', function (e, data) {
					$('#upload_progress').addClass('show_progress');
					var progress = parseInt(data.loaded / data.total * 100, 10);
					if (progress == 100) {
						setTimeout("$('#upload_progress').removeClass('show_progress')",500);
					}
				})
				.on('fileuploaddone', function (e, data) {
					$.each(data.result.files, function (index, file) {
						if (file.url) {
							$(data.context.children()[index]).find('.upload_img_actions').append('<div class="alert alert-success">Upload success <br/><a class="alert-link" target="_blank" href=' + file.url + '>show  image</a></div>');
						} else if (file.error) {
							$(data.context.children()[index]).find('.upload_img_actions').append($('<div class="alert alert-danger"/>').text(file.error));
						}
					});
				})
				.on('fileuploadfail', function (e, data) {
					$('#upload_progress').addClass('show_progress');
					$.each(data.files, function (index, file) {
						$(data.context.children()[index]).find('.upload_img_actions').append($('<div class="alert alert-danger"/>').text('File upload failed.'));
					});
					setTimeout("$('#upload_progress').removeClass('show_progress')",500);
				}).prop('disabled', !$.support.fileInput)
					.parent().addClass($.support.fileInput ? undefined : 'disabled');
			}
		}
	}
	
	// add table row
	tisa_table = {
		row_add: function() {
			if($('#tr_add').length) {
				var $tr_id = 3;
				$('#tr_add_btn').on('click', function(e) {
					$tr_id = $tr_id+1;
					e.preventDefault();
					var $cloned_tr = $('#tr_clone').clone(true),
						random_id = Math.random().toString(36).substr(2, 9);
					
					$cloned_tr.attr({
						id: 'discount_row_' + $tr_id
					}).removeAttr('style').find('select').attr({
						id: "discount_group_" + random_id,
						name: "discount_group_" + random_id
					});
					$cloned_tr.insertBefore($('#tr_add'));
					tisa_date_range.discount_picker();
				})
			}
		},
		row_remove: function() {
			if($('.tr_remove').length) {
				$('.tr_remove').on('click', function(e) {
					e.preventDefault();
					$(this).closest('tr').remove();
				})
			}
		}
	}

	// image lightbox
	tisa_image_lightbox  = {
		init: function() {
			if ($('.img-grid li a').length) {
				$('.img-grid li a').magnificPopup({
					type: 'image',
					gallery:{
						enabled:true,
						arrowMarkup: '<i title="%title%" class="glyphicon glyphicon-chevron-%dir% mfp-nav mfp-nav"></i>'
					},
					removalDelay: 500, //delay removal by X to allow out-animation
					callbacks: {
						beforeOpen: function() {
						   // just a hack that adds mfp-anim class to markup 
						   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
						   this.st.mainClass = 'mfp-zoom-in';
						}
					},
					closeOnContentClick: true,
					midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
				});
			}
		}
	}