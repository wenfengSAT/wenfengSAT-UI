	
	$(function() {
		// todo filters
		tisa_filters.init();
		// todo check inputs
		tisa_icheck.init();
		// todo stared tasks
		tisa_stared_tasks.init();
		// todo calendar
		tisa_calendar.miniCal();
		// todo charts
		tisa_chart.todo_tasks();
		tisa_chart.todo_last_week();
		// todo modal
		tisa_todo_modal.init();
	})
	
	
	// todo check inputs
	tisa_icheck = {
		init: function() {
			if($('.todo_section input:checkbox').length) {
				$('.todo_section input:checkbox').iCheck({
					checkboxClass: 'icheckbox_minimal-green',
					radioClass: 'iradio_minimal-green'
				});
				
				tisa_icheck.on_change();
				
				$('.todo_section input:checkbox').each(function() {
					if ($(this).is(':checked')) {
						$(this).closest('li').addClass('todo_checked');
					}
					tisa_icheck.check_state($(this));
				});
			}
		},
		on_change: function() {
			if($('.todo_section input:checkbox').length) {
				$('.todo_section input:checkbox').on('ifChecked', function(event){
					$(this).closest('li').addClass('todo_checked');
					tisa_icheck.check_state($(this));
				})
				.on('ifUnchecked', function(event){
					$(this).closest('li').removeClass('todo_checked');
					tisa_icheck.check_state($(this));
				})
			}
		},
		check_state: function(elem) {
			var checkedCount = $(elem).closest('.todo_section').find('.todo_checked').length;
			$(elem).closest('.todo_section').find('.td_resolved_tasks').text(checkedCount);
		}
	}
	
	// todo stared tasks
	tisa_stared_tasks = {
		init: function() {
			if ($('.todo_star').length) {
				$('.todo_section').on('click','.todo_star',function() {
					if(!$(this).closest('li').hasClass('todo_stared')) {
						$(this).children('span').addClass('fa-star').removeClass('fa-star-o').closest('li').addClass('todo_stared');
					} else {
						$(this).children('span').removeClass('fa-star').addClass('fa-star-o').closest('li').removeClass('todo_stared');
					}
				})
				$('.todo_star').each(function() {
					if($(this).closest('li').hasClass('todo_stared')) {
						$(this).children('span').addClass('fa fa-star').removeClass('fa-star-o');
					}
				});
			}
		}
	}
	
	// todo calendar
	tisa_calendar = {
		miniCal: function() {
			if ($('#mini-clndr').length) {
				var tisa_daysOfTheWeek = [];
				for(var i = 0; i < 7; i++) {
					tisa_daysOfTheWeek.push( moment().weekday(i).format('ddd') );
				}
				
				$('#mini-clndr').clndr({
					template: $('#mini-clndr-template').html(),
					events: todo_events,
					clickEvents: {
						click: function(target) {
							if(target.events.length) {
								var daysContainer = $('#mini-clndr').find('.days-container');
								daysContainer.toggleClass('show-events', true);
								$('#mini-clndr').find('.x-button').click( function() {
									daysContainer.toggleClass('show-events', false);
								});
							}
						}
					},
					adjacentDaysChangeMonth: true,
					weekOffset: 1,
					daysOfTheWeek: tisa_daysOfTheWeek
				});
			}
		}
	}
	
	// todo chart
	tisa_chart = {
		todo_tasks: function() {
			if ($('#todo_tasks_chart').length) {	
				function labelFormatter(label, series) {
					return "<div class=\"chart_label\">" + label + "<br/>" + Math.round(series.percent) + "%</div>";
				}
				$.plot('#todo_tasks_chart', chart_task_labels, {
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
						show: false
					}
				});
			}
		},
		todo_last_week: function() {
			if($('#todo_tasks_week').length) {

				var chart_placeholder = $('#todo_tasks_week');

				// add 2h to match utc+2
				for (var i = 0; i < chart_task_work.length; ++i) {chart_task_work[i][0] += 60 * 120 * 1000};
				for (var i = 0; i < chart_task_business.length; ++i) {chart_task_business[i][0] += 60 * 120 * 1000};
				for (var i = 0; i < chart_task_family.length; ++i) {chart_task_family[i][0] += 60 * 120 * 1000};
				for (var i = 0; i < chart_task_envato.length; ++i) {chart_task_envato[i][0] += 60 * 120 * 1000};
			   
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
							lineWidth: 2,
							steps: false,
							fill: false
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
						content: function(label, xval, yval) {
							var content = '%y <small class="text-muted">(' + moment(xval).format("MMM Do") + ')</small>';
							return content;
						},
						shifts: {
							x: 20,
							y: 0
						},
						defaultTheme: false
					},
					xaxis: {
						mode: "time",
						minTickSize: [1, "day"],
						timeformat: "%d/%m",
						labelWidth: "40"
					},
					yaxis: { min: 0 },
					legend: {
						noColumns: 0,
						position: "ne"
					},
					colors: ["#1f77b4","#d62728","#2ca02c","#ff7f0e"],
					shadowSize: 0
				};

				$.plot(chart_placeholder,[{
					label: "Work",
					data:chart_task_work,
					points: {fillColor: '#fff'}
				}, {	
					label: "Business",
					data:chart_task_business,
					points: {fillColor: '#fff'}
				}, {	
					label: "Family",
					data:chart_task_family,
					points: {fillColor: '#fff'}
				}, {	
					label: "Envato",
					data:chart_task_envato,
					points: {fillColor: '#fff'}
				}],options);
			}
		}	
	}
	
	// todo modal
	tisa_todo_modal = {
		init: function() {
			// clear fields
			$('#todo_form_title,#todo_form_date,#todo_form_label').val('')
			
			// title textarea autosize
			$('#todo_form_title').autosize({append: "\n"});
			
			// initialize datepicker on modal shown
			$('#todo_task_modal').on('shown.bs.modal',function() {
				var $this_input = $('#todo_form_date'),
					this_date = $this_input.val();
				if (!$this_input.hasClass('datepicker_initialized')) {
					$this_input.datepicker({
						weekStart: 1,
						autoclose: true,
						format: "dd.mm.yyyy",
						todayHighlight: true
					}).addClass('datepicker_initialized');
				} else {
					$this_input.datepicker('update');
				}
				// update title textarea height
				$('#todo_form_title').trigger('autosize.resize')
			})
			
			// trigger modal
			$('.todo_section').on('click','.todo_title > a',function(e) {
				e.preventDefault();
				$this = $(this);
				$thisWrapper = $this.closest('li');
				$this_title = $thisWrapper.data('taskTitle');
				$this_date = $thisWrapper.data('taskDate');
				$this_label = $thisWrapper.data('taskLabel');
				
				$this_title != '' ? $('#todo_form_title').val($this_title) : $('#todo_form_title').val('');
				$this_date != '' ? $('#todo_form_date').val($this_date) : $('#todo_form_date').val('');
				$this_label != '' ? $('#todo_form_label').val($this_label) : $('#todo_form_label').val('');
				
				$($(this).attr('href')).modal();
			})
		}
	}
	
	// todo filters
	tisa_filters = {
		init: function() {
			if ($('.todo_mix_list').length) {	
				$('.todo_mix_list').mixitup({
					layoutMode: 'list',
					onMixStart: function() {
						$('.todo_section input:checkbox').iCheck('destroy');
					},
					onMixEnd: function() {
						tisa_icheck.init();
					}
				});
				$('#tasks_labels_filter')[0].selectedIndex = 0;
				$('#tasks_date_sort')[0].selectedIndex = 0;
				$('#tasks_labels_filter').on('change',function() {
					var this_label = $(this).val();
					$('.todo_mix_list').mixitup('filter',this_label);
				});
				$('#tasks_date_sort').on('change',function() {
					var this_date_sort = $(this).val();
					
					if (this_date_sort == "task_date_asc") {
						var this_sort = "data-task-timestamp",
							this_sort_order = "desc";
					} else if (this_date_sort == "task_date_desc") {
						var this_sort = "data-task-timestamp",
							this_sort_order = "asc";
					} else {
						var this_sort = "default",
							this_sort_order = "desc";
					}
					$('.todo_mix_list').mixitup('sort',[this_sort,this_sort_order]);
				});
			}
		}
	}