	
	$(function() {
		// newsletter tablesorter
		tisa_tablesorter.init();
		// easy pie chart
		tisa_easy_pie_chart.init();
		// charts
		tisa_report_chart.overview();
		// ace editor
		tisa_ace_editor.init();
	})
	
	
	// newsletter tablesorter
	tisa_tablesorter = {
		init: function() {
			if ($('#campaign_table').length) {
			
				var $campaign_table = $("#campaign_table");
				
				// timestamp parser
				$.tablesorter.addParser({
					// set a unique id
					id: 'timestamp_sort',
					is: function (s) {
						// return false so this parser is not auto detected
						return false;
					},
					format: function (s, table, cell, cellIndex) {
						return $(cell).attr('data-timestamp-sent');
					},
					// set type, either numeric or text
					type: 'numeric'
				});
				
				// company name parser
				$.tablesorter.addParser({
					// set a unique id
					id: 'company_sort',
					is: function (s) {
						// return false so this parser is not auto detected
						return false;
					},
					format: function (s, table, cell, cellIndex) {
						return $(cell).find('h4').text();
					},
					// set type, either numeric or text
					type: 'text'
				});
				
				// subscribers parser
				$.tablesorter.addParser({
					// set a unique id
					id: 'subscribers_sort',
					is: function (s) {
						// return false so this parser is not auto detected
						return false;
					},
					format: function (s, table, cell, cellIndex) {
						return $(cell).attr('data-subscribers-sorter');
					},
					// set type, either numeric or text
					type: 'numeric'
				});
			 
				// opens parser
				$.tablesorter.addParser({
					// set a unique id
					id: 'opens_sort',
					is: function (s) {
						// return false so this parser is not auto detected
						return false;
					},
					format: function (s, table, cell, cellIndex) {
						return $(cell).attr('data-opens-sorter');
					},
					// set type, either numeric or text
					type: 'numeric'
				});
				
				// clicks parser
				$.tablesorter.addParser({
					// set a unique id
					id: 'clicks_sort',
					is: function (s) {
						// return false so this parser is not auto detected
						return false;
					},
					format: function (s, table, cell, cellIndex) {
						return $(cell).attr('data-clicks-sorter');
					},
					// set type, either numeric or text
					type: 'numeric'
				});
			 
				// init tablesorter with custom parsers (defined above)
				$campaign_table.tablesorter({
					headers: {
						0: { sorter: 'timestamp_sort' },
						1: { sorter: 'company_sort' },
						2: { sorter: 'subscribers_sort' },					
						3: { sorter: 'clicks_sort' },
						4: { sorter: 'opens_sort' }
					}
				});
				
				// disable clicks on table header
				$('.tablesorter-header').off('mousedown.tablesorter mouseup.tablesorter');
				
				// sort table on external button click
				$('.nlr_sort_buttons button').click(function(){
					$('.nlr_sort_buttons button').not('.nlr_sort_reset').removeClass('btn-info').addClass('btn-default');
	
					var $this = $(this);
					if ($this.hasClass('btn-default')) {
						$this.removeClass('btn-default').addClass('btn-info')
					}
					$campaign_table.trigger("sortReset");
					
					if ($this.hasClass('nlr_sort_timestamp')) {
						$campaign_table.find('th:eq(0)').trigger('sort');
					} else if ($this.hasClass('nlr_sort_company')) {
						$campaign_table.find('th:eq(1)').trigger('sort');
					} else if ($this.hasClass('nlr_sort_subscribers')) {
						$campaign_table.find('th:eq(2)').trigger('sort');
					} else if ($this.hasClass('nlr_sort_opens')) {
						$campaign_table.find('th:eq(3)').trigger('sort');
					} else if ($this.hasClass('nlr_sort_clicks')) {
						$campaign_table.find('th:eq(4)').trigger('sort');
					} 
					
					$this.blur();
					return false;
				});
			}
		}
	}
	
	// easy pie chart
	tisa_easy_pie_chart = {
		init: function() {
			if($('.easy_chart_opens').length) {
				$('.easy_chart_opens').easyPieChart({
					animate: 2000,
					size: 80,
					lineWidth: 6,
					scaleColor: false,
					barColor: '#27ae60',
					trackColor: '#eafaf1',
					lineCap: 'square'
				});
			}
			if($('.easy_chart_clicks').length) {
				$('.easy_chart_clicks').easyPieChart({
					animate: 2000,
					size: 80,
					lineWidth: 6,
					scaleColor: false,
					barColor: '#2980b9',
					trackColor: '#f5fafd',
					lineCap: 'square'
				});
			}
			if($('.easy_chart_bounces').length) {
				$('.easy_chart_bounces').easyPieChart({
					animate: 2000,
					size: 80,
					lineWidth: 6,
					scaleColor: false,
					barColor: '#c0392b',
					trackColor: '#fbf0ee',
					lineCap: 'square'
				});
			}
		}
	}

	// charts
	tisa_report_chart = {
		overview : function() {
			if($('#report_overview').length) {
				var chart_placeholder = $('#report_overview');

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
						mode: "time",
						minTickSize: [30, "minute"],
						//timeFormat: "%H:%M"
					},
					yaxis: { min: 0 },
					legend: {
						noColumns: 0,
						position: "ne"
					},
					colors: ["#27ae60","#2980b9"],
					shadowSize: 0
				};

				$.plot(chart_placeholder,[{
					label: "Opens",
					data:data_opens,
					points: {fillColor: '#fff'}
				}, {	
					label: "Clicks",
					data:data_clicks,
					points: {fillColor: '#fff'}
				}],options);
			}
		}
	}
	
	// ace editor
	tisa_ace_editor = {
		init: function() {
			if ($('#ace_editor').length) {
				
				// strip <script> tag from document
				var strip_tags_editor = function stripTags(s) {
					var div = document.createElement('div');
					div.innerHTML = s;
					var scripts = div.getElementsByTagName('script'), i = scripts.length;
					while (i--) {
					  scripts[i].parentNode.removeChild(scripts[i]);
					}
					return div.innerHTML;
				}

				// init ace editor
				var editor = ace.edit("templ_editor");
				$('#templ_editor').data('editor', editor);
				editor.setTheme("ace/theme/monokai");
				document.getElementById('templ_editor').style.fontSize='14px';
				editor.container.style.lineHeight = 1.3;
				editor.getSession().setMode("ace/mode/html");
				editor.setShowPrintMargin(false);
				editor.session.setUseWrapMode(true);
				editor.setOptions({maxLines: 40, minLines:15});
				
				
				// load content from file
				var readFromFile = function(url) {
					$.get(url)
					.error(function(jqXHR, textStatus, errorThrown) {
						if (textStatus == 'timeout')
							console.log('The server is not responding');
						if (textStatus == 'error')
							console.log(errorThrown);
						$('#template_name').val('');
						$('#templ_editor').data('editor').getSession().setValue("");
						$('.templ_editor_loader').addClass('loader_failed').html('<i class="fa fa-warning"></i> Error loading template.');
					}).success(function(result) {
						editor.session.setValue(result)
						setTimeout("$('.templ_editor_loader').fadeOut('normal',function() { $(this).remove() } )",500);
					});
				};
				
				// file list
				$('.file_name > a').on('click',function() {
					$('.file_list li').removeClass('active_file')
					$(this).closest('li').addClass('active_file');
					$('.templ_editor_loader').remove();
					$('.template_editor_panel').append('<div class="templ_editor_loader"><i class="fa fa-refresh fa-spin"></i></div>')
					$('#templ_code_tab').tab('show');
					var this_filename = $(this).data('fileName'),
						this_name = $(this).data('name');
					
					readFromFile('email_templates/' + this_filename + '.html');
					$('#template_name').val(this_name);
				})
				
				// new template
				$('#template_add').on('click',function(e) {
					$('.file_list li').removeClass('active_file');
					$('.templ_editor_loader').remove();
					$('.template_editor_panel').append('<div class="templ_editor_loader"><i class="fa fa-refresh fa-spin"></i></div>')
					$('#templ_code_tab').tab('show');
					$('#template_name').val('');
					$('#templ_editor').data('editor').getSession().setValue("");
					setTimeout("$('.templ_editor_loader').fadeOut('normal',function() { $(this).remove() } )",500);
					e.preventDefault();
				})
				
				// change theme
				$('#templ_editor_theme').on('change',function() {
					$('#templ_editor').data('editor').setTheme("ace/theme/"+$(this).val());
				})
				// change font size
				$('#templ_editor_font_size').on('change',function() {
					document.getElementById('templ_editor').style.fontSize=$(this).val()+'px';
				})
				
				// change soft wrapping
				$('#templ_editor_soft_wrap').on('change',function() {
					var col = parseInt($(this).val(), 10);
					if ($(this).val() != '') {
						editor.setShowPrintMargin(true);
					} else {
						editor.setShowPrintMargin(false);
					}
					$('#templ_editor').data('editor').session.setWrapLimitRange(col,col);
				})
				
				
				// load basic layout
				$('.file_list [data-file-name="basic_layout"]').click();
				
				// show preview
				$('#templ_preview_tab').on('shown.bs.tab', function (e) {
					$('#templ_preview_iframe').css('height','').contents().find('html').html(strip_tags_editor($('#templ_editor').data('editor').getSession().getValue()));
					// iframe auto height
					setTimeout( "$('#templ_preview_iframe').height($('#templ_preview_iframe').contents().find('html').innerHeight())", 500 );
				})

			}
		}
	}