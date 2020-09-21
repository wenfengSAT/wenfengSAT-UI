
	$(function() {
		// stared messages
		tisa_mail.stared_messages();
		// check all, check row
		tisa_icheck.init();
		// mailbox tables
		tisa_mail.inbox();
		tisa_mail.outbox();
		tisa_mail.spam();
		tisa_report.spam_per_day();
		// mini calendar
		tisa_calendar.miniCal();
		// wysiwg message
		tisa_wysiwg.message();
		// mail recipients
		tisa_recipients.init();
	})
	
	// mailbox
	tisa_mail = {
		count_rows: function(active_table) {
			return active_table.find('tbody tr').length
		},
		inbox: function() {
			if($('#mail_inbox').length) {
				
				var $inbox_table = $('#mail_inbox');
				
				$inbox_table.on({
					'footable_paging': function(e) {
						var allRows = tisa_mail.count_rows($inbox_table),
							page_size = e.size,
							act_page = e.page,
							pages = Math.ceil(allRows / page_size);
							first_visble = (page_size * act_page)+1;
						
						if(pages == act_page+1) {
							var last_visible = allRows;
						} else {
							var last_visible = (page_size * act_page) + page_size;
						};
						
						$('.page_start_row').text(first_visble);
						$('.page_end_row').text(last_visible);
					},
					'footable_initialized': function(e) {
						$('.all_rows').text(tisa_mail.count_rows($inbox_table));
						
					}
				}).on('footable_breakpoint', function() {
					$inbox_table.trigger('footable_expand_all');
				}).footable({
					breakpoints: {
						phone: 640,
						tablet: 778
					},
					addRowToggle: false,
					firstText: '<span class="fa fa-angle-double-left">',
					previousText: '<span class="fa fa-angle-left">',
					nextText: '<span class="fa fa-angle-right">',
					lastText: '<span class="fa fa-angle-double-right">'
				});
			}
		},
		outbox: function() {
			if($('#mail_outbox').length) {
				
				var $outbox_table = $('#mail_outbox');
				
				$outbox_table.on({
					'footable_paging': function(e) {
						var allRows = tisa_mail.count_rows($outbox_table),
							page_size = e.size,
							act_page = e.page,
							pages = Math.ceil(allRows / page_size);
							first_visble = (page_size * act_page)+1;
						
						if(pages == act_page+1) {
							var last_visible = allRows;
						} else {
							var last_visible = (page_size * act_page) + page_size;
						};
						
						$('.page_start_row').text(first_visble);
						$('.page_end_row').text(last_visible);
					},
					'footable_initialized': function(e) {
						$('.all_rows').text(tisa_mail.count_rows($outbox_table));
						
					}
				}).on('footable_breakpoint', function() {
					$outbox_table.trigger('footable_expand_all');
				}).footable({
					breakpoints: {
						phone: 640,
						tablet: 778
					},
					addRowToggle: false,
					firstText: '<span class="fa fa-angle-double-left">',
					previousText: '<span class="fa fa-angle-left">',
					nextText: '<span class="fa fa-angle-right">',
					lastText: '<span class="fa fa-angle-double-right">'
				});
			}
		},
		spam: function() {
			if($('#mail_spam').length) {
				
				var $spam_table = $('#mail_spam');
				
				$spam_table.on({
					'footable_paging': function(e) {
						var allRows = tisa_mail.count_rows($spam_table),
							page_size = e.size,
							act_page = e.page,
							pages = Math.ceil(allRows / page_size);
							first_visble = (page_size * act_page)+1;
						
						if(pages == act_page+1) {
							var last_visible = allRows;
						} else {
							var last_visible = (page_size * act_page) + page_size;
						};
						
						$('.page_start_row').text(first_visble);
						$('.page_end_row').text(last_visible);
					},
					'footable_initialized': function(e) {
						$('.all_rows').text(tisa_mail.count_rows($spam_table));
						
					}
				}).on('footable_breakpoint', function() {
					$spam_table.trigger('footable_expand_all');
				}).footable({
					breakpoints: {
						phone: 640,
						tablet: 778
					},
					addRowToggle: false,
					firstText: '<span class="fa fa-angle-double-left">',
					previousText: '<span class="fa fa-angle-left">',
					nextText: '<span class="fa fa-angle-right">',
					lastText: '<span class="fa fa-angle-double-right">'
				});
			}
		},
		stared_messages: function() {
			if ($('.mail_star').length) {
				$('.mail_table').on('click','.mail_star',function() {
					if(!$(this).closest('td').hasClass('mail_stared')) {
						$(this).addClass('fa-star').removeClass('fa-star-o').closest('td').addClass('mail_stared');
					} else {
						$(this).removeClass('fa-star').addClass('fa-star-o').closest('td').removeClass('mail_stared');
					}
				})
				$('.mail_star').each(function() {
					if($(this).closest('td').hasClass('mail_stared')) {
						$(this).addClass('fa fa-star').removeClass('fa-star-o');
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
	
	// check all, check row
	tisa_icheck = {
		init: function() {
			if ($('.check_all,.check_row').length) {
				$('.check_all,.check_row').prop('checked',false).iCheck({
					checkboxClass: 'icheckbox_minimal-green',
					radioClass: 'iradio_minimal-green'
				});
				
				$('.check_all').on('ifChecked', function(event){
					$('.check_row').iCheck('check'); 
				}).on('ifUnchecked', function(event){
					$('.check_row').iCheck('uncheck'); 
				});
				
				$('.check_row').on('ifChecked', function(event){
					$(this).closest('tr').addClass('active_row')
				}).on('ifUnchecked', function(event){
					$(this).closest('tr').removeClass('active_row')
				});
			}
		}
	}
	
	// report
	tisa_report = {
		spam_per_day: function() {
			if ($('#report_spam_per_day').length) {	
				
				var data = [
					{
						data: data_spam,
						color: '#c0392b',
						label:'Spam per day',
						bars: {
							show: true,
							align:'center',
							barWidth:0.3,
							fill: 1
						}
					}    
				];
				
				$.plot('#report_spam_per_day', data, {
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
						min: 0
					},
					xaxis: {
						ticks: [[0,'Mon'],[1,'Tue'],[2,'Wed'],[3,'Thu'],[4,'Fri'],[5,'Sat'],[6,'Sun']],
						autoscaleMargin: .10 // allow space left and right
					},
					tooltip: true,
					tooltipOpts: {
						content: function(label, xval, yval, flotItem) {
							var week_day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
							return yval+' emails <small class="text-muted">'+week_day[xval]+'</small>';
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
	
	// wysiwg editor
	tisa_wysiwg = {
		message: function() {
			if ($('#msg_content').length) {
				CKEDITOR.replace( 'msg_content', {
					toolbarGroups: [
						{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
						{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ] },
						{ name: 'forms' },
						{ name: 'links' },
						{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
						'/',
						{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
						{ name: 'styles' },
						{ name: 'insert' },
						{ name: 'colors' },
						{ name: 'tools' },
						{ name: 'others' },
					]
				});
			}
		}
	}
	
	// select recipients
	tisa_recipients = {
		init: function() {
			if ($('.msg_select').length) {
				$(".msg_select").select2({
					tags: [],
					tokenSeparators: [',', ' ']
				});
			}
		}
	}