	
	$(function() {
		// full calendar
		tisa_calendar.basic_example();
		tisa_calendar.json_cal();
	})
	
	// full calendar
	tisa_calendar = {
		basic_example: function() {
			// default calendar
			if($('#calendar_basic').length) {
				var currentLangCode = 'en';
	
				// build the language selector's options
				$.each($.fullCalendar.langs, function(langCode) {
					$('#lang-selector').append(
						$('<option/>')
							.attr('value', langCode)
							.prop('selected', langCode == currentLangCode)
							.text(langCode)
					)
				});
		
				// rerender the calendar when the selected option changes
				$('#lang-selector').on('change', function() {
					if (this.value) {
						currentLangCode = this.value;
						$('#calendar_basic').fullCalendar('destroy');
						renderCalendar();
					}
				});
		
				function renderCalendar() {
					$('#calendar_basic').fullCalendar({
						header: {
							left: 'prev,next today',
							center: 'title',
							right: 'month,agendaWeek,agendaDay'
						},
						defaultDate: '2014-03-12',
						lang: currentLangCode,
						weekNumbers: true,
						editable: true,
						aspectRatio: 2.2,
						buttonIcons: {
							prev: 'left-single-arrow',
							next: 'right-single-arrow',
							prevYear: 'left-double-arrow',
							nextYear: 'right-double-arrow'
						},
						events: [
							{
								title: 'All Day Event',
								start: '2014-03-01'
							},
							{
								title: 'Long Event',
								start: '2014-03-07',
								end: '2014-03-10'
							},
							{
								id: 999,
								title: 'Repeating Event',
								start: '2014-03-09T16:00:00'
							},
							{
								id: 999,
								title: 'Repeating Event',
								start: '2014-03-16T16:00:00'
							},
							{
								title: 'Meeting',
								start: '2014-03-12T10:30:00',
								end: '2014-03-12T12:30:00'
							},
							{
								title: 'Lunch',
								start: '2014-03-12T12:00:00'
							},
							{
								title: 'Birthday Party',
								start: '2014-03-13T07:00:00'
							},
							{
								title: 'Click for Google',
								url: 'http://google.com/',
								start: '2014-03-28'
							}
						],
						eventColor: '#16a085'
					});
				}
				renderCalendar();
			}
		},
		json_cal: function() {
			// json events
			if($('#calendar_json').length) {
				$('#calendar_json').fullCalendar({
					header: {
						left: 'prev,next today',
						center: 'title',
						right: 'month,agendaWeek,agendaDay'
					},
					buttonIcons: {
						prev: 'left-single-arrow',
						next: 'right-single-arrow',
						prevYear: 'left-double-arrow',
						nextYear: 'right-double-arrow'
					},
					aspectRatio: 2.2,
					editable: true,
					events: "assets/data_source/calendar-json-events.php",
					eventColor: '#c0392b',
					eventDrop: function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view) {
						alert(event.title + ' was moved ' + dayDelta + ' days\n' +
							'(should probably update your database)');
					},
					loading: function(bool) {
						$('#loading').toggle(bool);
					}
					
				})
			}
		}
	}