/**
 * jquery.rangecalendar.js v 1.0.2 

 * Copyright 2013, Angelo Libero Mangieri
 * Email: angelo@afreeux.com
 */




;( function( $, window, undefined ) {
	
$.fn.rangeCalendar = function(options) {
    
    var defaults = {
		
			lang: "en",
			theme: "default-theme",
			themeContext: this,
			startDate: moment(),
			endDate: moment().add('months', 12),
			start : "+7",
			startRangeWidth : 3, 
			minRangeWidth: 1,
			maxRangeWidth: 14,
			weekends: true,
			autoHideMonths: false,
			visible: true,
			trigger: null,
			changeRangeCallback : function( el, cont, dateProp ) { return false; }
		};
	
    var returnObj;
    
    
	this.each(function(i, el) {

		var obj = el,
              $el = $(el),
              settings = $.extend( true, {},defaults, options );
			  obj.options = settings;
   
		obj.showCalendar = function(animate) {
		    
		    var calPos = obj.calendarObj.position();
		    var lastItemPos = obj.calendarObj.find(".cell").last().position();
		    var lastItemRight =  (lastItemPos.left + obj.calendarObj.find(".cell").last().outerWidth() );
		    var selectedItemPos = obj.calendarObj.find(".cell").eq(0).position();
		     
		    $el.slideDown((animate ? 300 : 0), function() {

				var windowWidth = $(window).outerWidth();
				$(obj.calendarObj).css({left: windowWidth });
				$(obj.monthsObj).css({left: windowWidth });
			    obj._placeElement(obj.calendarObj,(!selectedItemPos ? 0 : selectedItemPos.left) );
				obj._placeElement(obj.monthsObj);
		    });
		    
		    obj.visible = true;
		},
		obj.hideCalendar = function() {
		    
		    $el.slideUp(50);
		    obj.visible = false;
		},
		obj.toggleCalendar = function () {
		
			if(obj.visible)
			    obj.showCalendar();
			else
			    obj.hideCalendar();
		},
	
		obj.rangeWidth = function(){
		    
		    var cellWidth = obj.calendarObj.find(".cell").outerWidth();
		    var rangeWidth = parseInt(obj.calendarObj.find('.range-bar').outerWidth()/cellWidth); 
		    obj._rangeWidth = ( !rangeWidth ? obj._rangeWidth : rangeWidth) ;	
		     
		    return obj._rangeWidth;
		},
		obj.setRangeWidth = function(rangeWidth) {
			
			var cellWidth = obj.calendarObj.find(".cal-cell").eq(0).outerWidth();
		    var rangeWidth = parseInt(!rangeWidth || rangeWidth < obj.minRangeWidth ? obj.minRangeWidth : rangeWidth);
		    $el.find(".range-bar").width(cellWidth*rangeWidth);
		    $el.find(".range-bar").trigger("resize");
		},
		obj.range = function() {

		    var startDateIndex = obj.calendarObj.find('.cell.selected:eq(0)').index();
		    var endDateIndex = obj.calendarObj.find('.cell.selected').last().index();	
		    var startDate = moment().add('days', startDateIndex+obj.start);
		    var startDateFormatted = (startDateIndex>=0 ? moment().add('days', startDateIndex+obj.start).format() : null);
		    var endDateFormatted = (endDateIndex>=0 ? moment().add('days', endDateIndex+obj.start).format() : null);
		    var range = $.data( obj, "range", {
						    	start: startDateFormatted,
								end: endDateFormatted,
								width: obj.rangeWidth(),
								fromNow: startDate.fromNow()     
						  });
		    return range;
		},
		
		obj.setStartDate = function(startDate) {
			
			var date = moment(startDate);
			var fullYear = date.format("YYYY");
			var monthNumber = date.format("MM");
			var dayNumber = date.format('D');
			var dateId =  fullYear+monthNumber+dayNumber;
			var monthId =  fullYear+monthNumber;
			
			var dateCell = obj.calendarObj.find('.cell[date-id="'+dateId+'"]').eq(0);
			dateCell.trigger("click");
			
			var monthCell = obj.monthsObj.find('.cell[month-id="'+monthId+'"]').eq(0);
			monthCell.trigger("click");
		},
		
		obj.lang = function (){
			return obj.lang;
		},
		
		obj.setTheme = function (themeName){
			
			var _themeName = $(obj.themeContext).attr("theme");
			
			if(_themeName)
				$(obj.themeContext).removeClass(_themeName);
			
			$(obj.themeContext).attr("theme",""+themeName+"");
			$(obj.themeContext).addClass(""+themeName+"");			
			obj.theme = themeName;
		},
		
		obj.update = function() {
			
			console.log("update");
			moment.lang(obj.lang);
			obj.setTheme(obj.theme);
			obj._generateView();
		},
		
		//EVENTS
		obj.didResizeBar = function() {
		        
			var prevRangeWidth = obj.rangeWidth();
			var rangeWidth = prevRangeWidth;
			var resizeBarPos = obj.calendarObj.find('.range-bar').position();
			var resizeBarWidth = obj.calendarObj.find('.range-bar').outerWidth();
			var resizeBarRight = resizeBarPos.left+resizeBarWidth;
			var cellWidth = $(obj).find(".cell").first().outerWidth();
			var lastCellPos = $(obj).find(".cell").last().position();
			var deltaWidth = 0
			var objWidth = (lastCellPos.left+cellWidth);
			
			if(resizeBarRight > objWidth){
			    
			    deltaWidth = objWidth-resizeBarWidth;
			    prevRangeWidth = (resizeBarWidth-deltaWidth)/cellWidth;
			}
			    
			
			obj.calendarObj.find('.cell').removeClass("selected");
			obj.calendarObj.find('.cell').removeClass("last");
			obj.calendarObj.find('.cell.start').addClass("selected");
			obj.calendarObj.find('.cell.start').nextAll().slice(0, (!rangeWidth ? obj.minRangeWidth-1 : rangeWidth-1)).addClass('selected');
			obj.calendarObj.find('.cell.selected').last().addClass("last");
			obj._dispatchEvent(obj.changeRangeCallback,obj.range(),obj);
		},
		obj.didSelectMonth = function(e) {
		
			
			if(obj.isDragging || $(obj.lastTarget).is(obj.monthsObj) ){
			
				delete obj.lastTarget;
		        return;
		    }
		    
		    var currentMonthId = $(this).attr("month-id");
		    var currentCellMonth = obj.calendarObj.find('.cell[month-id="'+currentMonthId+'"].selected').eq(0);
		    var monthPosition = (!currentCellMonth.length  ? obj.calendarObj.find('.cell[month-id="'+currentMonthId+'"]').eq(0).position() : currentCellMonth.position());
		    var calendarViewWidth = $($el).outerWidth();
		    
		    obj.monthsObj.find('.cell').not(this).removeClass('selected');
		    $(this).addClass('selected');
		    
			obj._placeElement(obj.calendarObj,monthPosition);
			obj._dispatchEvent(obj.changeRangeCallback,obj.range(),obj);	
			
		},
		
		
		
		obj.didChangeRange = function(e,ui) {
		    
		    if(obj.isDragging || $(obj.lastTarget).is(obj.calendarObj)){
			
				delete obj.lastTarget;
		        return;
		    }
		    var rangeWidth = obj.rangeWidth();
		    var currentCalItem = $(this);	
		    var lastCalItem = obj.calendarObj.find('.cell').last();
		    var delta = lastCalItem.index()-currentCalItem.index();
		    
		    var rightBar  = currentCalItem.index()+rangeWidth-1;
		    if(rightBar > lastCalItem.index()){
		        obj.calendarObj.find(' .cell').eq(currentCalItem.index()-rangeWidth+delta+1).trigger("click");
		        return;
		    }
		        
		    obj.calendarObj.find(".start").removeClass("start");
		    currentCalItem.addClass("start");
		    
		    obj._updateRangeBar();
		    obj._updateMonths();
			obj._dispatchEvent(obj.changeRangeCallback,obj.range(),obj);
		    
		},
		
		
		
		///////////////////////////////////////////////////////*
		
		// PRIVATE METHODS
		
		
		obj._initRangeBar = function(){
			
			$(window).unbind("resize"); //Prevents window.resize event triggering
		    var rangeWidth = obj.rangeWidth()  ;
		    var cellWidth = obj.calendarObj.find(".cell").eq(0).outerWidth();
		    var cellHeight = obj.calendarObj.find(".cell").eq(0).outerHeight();
		    var selectedCell = obj.calendarObj.find(".cell.selected:eq(0)");
		    
		    
		    if(!selectedCell.length)
			    return;
		    	
		    
		    obj.calendarObj.find(".range-bar").unbind( "resize");
		    obj.calendarObj.find(".range-bar").remove();
		    
		    $(selectedCell).append('<div class="range-bar resizable"><div class="range-bar-content"></div></div>');
		    
		    if(obj.maxRangeWidth > 1){
				obj.calendarObj.find(".range-bar").resizable({
				  		grid:[cellWidth,0],
				     		maxWidth: obj.maxRangeWidth*cellWidth,
				     		minWidth: cellWidth*obj.minRangeWidth,
				     		maxHeight:cellHeight,
				     		minHeight:cellHeight,
				     		handles: "e"
				});
		    }
		    

		    obj.setRangeWidth(rangeWidth);
		    obj.calendarObj.find(".range-bar").on( "resize", obj.didResizeBar);
		    
		    $(window).bind("resize",obj._resize);
		    
		},
		obj._initMonths  = function() {
		    
		    
		    
		    obj.monthsObj.draggable({ 
		    	
		    	axis: "x" ,
		      	scrollSensitivity: 100,
		      	scrollSpeed: 100 ,
		      	cursor: "move",
		      	
		      	create: function (e, ui) {
			      	
			      	obj._updateMonths();
			      	obj._placeElement(obj.monthsObj);
			      	
		      	},
		        start: function (e, ui) {
		          	
		          	obj.isDragging = true;
		          	obj.monthsObj.find('.cell').unbind("click");
		          	
		          	
		      	},
		      	drag: function (e, ui) {
		      		 
		      	},
		      	  
		      	stop: function(e, ui) {
					
					
					$(this).css({top: 0});
					obj.lastTarget = e.target;
					
		      	  	setTimeout(function(){
		      	  		obj.isDragging = false;
		      	  		delete obj.lastTarget;
		      	  		obj._placeElement(obj.monthsObj);
		      	  		obj.monthsObj.find('.cell').bind("click",obj.didSelectMonth);	
		      	  	},10);
		      	}
		    });
		    
		},
		
		obj._initCalendar = function() {

			var xpos;
			
		    obj.calendarObj.draggable({ 
		
		      	axis: "x" ,
		      	scrollSensitivity: 100,
		      	scrollSpeed: 100 ,
		      	cursor: "move",
		      	
		      		create: function () {
			      		
			      		obj.calendarObj.find('.cell').removeClass("selected");
				  		obj.calendarObj.find('.cell').removeClass("last");
				  		obj.calendarObj.find(".cell").eq(obj.start-1).addClass("start");
				  		obj.calendarObj.find(".cell").eq(obj.start-1).addClass("selected");			
				  		obj.calendarObj.find('.cell.start').nextAll().slice(0, obj._rangeWidth-1).addClass('selected');
				  		obj.calendarObj.find('.cell').bind("click",obj.didChangeRange);
				  		obj.calendarObj.find('.cell.selected').last().addClass("last");
			
				  		obj._placeElement(obj.calendarObj);	
		      		},
			  		start: function(e, ui) {
			  		  
			  			xpos = ui.position.left;
			  		  	$(window).unbind("resize"); //Prevents window.resize event triggering
			  		  	obj.isDragging = true;
			  		  	obj.calendarObj.find('.cell').unbind("click");
			  		},
			  		drag: function (e, ui) {
			  			
			  			 var xmove = ui.position.left - xpos;
			  			 var direction = xmove >= 0 ? 'right' : 'left';
      
			  			var rangeCalendarWidth = $el.outerWidth();
			  			var calendarOffset = obj.calendarObj.position();
			  			
						var monthMaxId = parseInt(obj.monthsObj.find(".cell").last().attr("month-id"));
						var monthMinId = parseInt(obj.monthsObj.find(".cell").first().attr("month-id"));
	
			  			var currentMonthId = parseInt(obj.monthsObj.find(".cell.selected").attr("month-id"));
						var nextMonthId = parseInt(obj.monthsObj.find(".cell.selected").next().attr("month-id"));
						var prevMonthId = parseInt(obj.monthsObj.find(".cell.selected").prev().attr("month-id"));
						
	
						if(nextMonthId && currentMonthId && nextMonthId <= monthMaxId && direction == "left") {
						
							var nextMonthsCell = obj.monthsObj.find('.cell[month-id="'+nextMonthId+'"]');
							var nextMonthCalendarCell = obj.calendarObj.find('.cell[month-id="'+nextMonthId+'"]').first();
							var nextMonthCalendarCellPos = nextMonthCalendarCell.position();
							
							
							var nextMonthLeftCenter = (rangeCalendarWidth/2 -(nextMonthCalendarCellPos.left )) ;
							
							if( nextMonthLeftCenter >= calendarOffset.left && calendarOffset.left != 0){
			      				
		      					obj.monthsObj.find(".cell").removeClass("selected");
		      					$(nextMonthsCell).addClass("selected");
		      					obj._placeElement(obj.monthsObj,nextMonthsCell.position());
		      				}
		      				
		      			}
		      			else if(prevMonthId && currentMonthId && prevMonthId >= monthMinId && direction == "right") {
						
							var prevMonthCell = obj.monthsObj.find('.cell[month-id="'+prevMonthId+'"]');
							var prevMonthCalendarCell = obj.calendarObj.find('.cell[month-id="'+prevMonthId+'"]').last();
							var prevMonthCalendarCellPos = prevMonthCalendarCell.position();
							var prevMonthLeftCenter = (rangeCalendarWidth/2 -(prevMonthCalendarCellPos.left )) ;
													
		      				if(prevMonthLeftCenter <= calendarOffset.left+prevMonthCalendarCell.outerWidth() ) {
			      				
			      				obj.monthsObj.find(".cell").removeClass("selected");
		      					$(prevMonthCell).addClass("selected");
		      					
		      					obj._placeElement(obj.monthsObj,prevMonthCell.position());
		      				}
		      			}
			  		},
			  		stop: function(e, ui) {

				  		//alert("Drag easing da inserire");
				  		//var calendarOffset = obj.calendarObj.position();
			  			//obj.calendarObj.animate({left: parseInt(calendarOffset.left)-100},300,'easeOutCirc');
			  			obj.lastTarget = e.target;
			  			obj._placeElement(obj.calendarObj);
			  			
			  			setTimeout(function(){
			  			    obj.isDragging = false;
			  			    delete obj.lastTarget;
			  			    
			  			    obj.calendarObj.find('.cell').bind("click",obj.didChangeRange);	
			  			    $(window).bind("resize",obj._resize);
			  			    obj._placeElement(obj.monthsObj);
			  			},100);
		      	  	
			  		}
		    });
		},
		
		
		obj._attachDragEasing = function(obj){
		
			return;
		    var draggableObj = $(obj);
		
		    var x1, x2, y1, y2, t1, t2,
		        minDistance = 40,
		        friction = 10;
		    
		    var onMouseMove = function(e) {
		        var mouseEvents = draggableObj.data("mouseEvents");
		        if (e.timeStamp - mouseEvents[mouseEvents.length - 1].timeStamp > 40) {
		            mouseEvents.push(e);
		            if (mouseEvents.length > 2) {
		                mouseEvents.shift();
		            }
		        }
		    };
		
		    var onMouseUp = function() {
		        //$(draggableObj).unbind("mousemove mouseup");
		    };
		
		    draggableObj.bind('dragstart',function (e){
		    
		    	draggableObj.data("mouseEvents", [e]);
		        $(document).mousemove(onMouseMove).mouseup(onMouseUp);
		    });
		    
		    draggableObj.bind('dragstop',function (e){
		    
		            draggableObj.stop();
		
		            var lastE = draggableObj.data("mouseEvents").shift();
		
		            x1 = lastE.pageX;
		            y1 = lastE.pageY;
		            t1 = lastE.timeStamp;
		            x2 = e.pageX;
		            y2 = e.pageY;
		            t2 = e.timeStamp;
		
		            // Deltas
		            var dX = x2 - x1,
		                dY = y2 - y1,
		                dMs = Math.max(t2 - t1, 1);
		
		            // Speeds
		            var speedX = Math.max(Math.min(dX / dMs, 1), -1),
		                speedY = Math.max(Math.min(dY / dMs, 1), -1);
		
		            // Distance moved (Euclidean distance)
		            var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
		
		            if (distance > minDistance) {
		                // Momentum
		                var lastStepTime = new Date();
		                
		                var maxLeft = $(window).width() - (draggableObj.width() + 10),
		                    maxTop = 0;
		
		                draggableObj.animate({
		                    textIndent: 0
		                }, {
		                    duration: Math.max(Math.abs(speedX), Math.abs(speedY)) * 2000,
		                    step: function(currentStep) {
		                        speedX *= (currentStep / 100);
		                        speedY *= (currentStep / 100);
		
		                        var now = new Date();
		                        var stepDuration = now.getTime() - lastStepTime.getTime();
		
		                        lastStepTime = now;
		
		                        var position = draggableObj.position();
		
		                        var newLeft = (position.left + (speedX * stepDuration / friction)),
		                            newTop = (position.top + (speedY * stepDuration / friction));
		                            
		                        console.log(newLeft);
		                        newLeft = newLeft > maxLeft ? maxLeft : newLeft < 10 ? 10 : newLeft;
		                        newTop  = newTop  > maxTop  ? maxTop  : newTop  < 10 ? 10 : newTop;
		
		                        draggableObj.css({
		                            left: newLeft + "px",
		                            top: 0 + "px"
		                        });
		                    }
		                });
		            }
		        });
		},
		obj._getCalendarHTML = function(startDate,endDate) {

			var calendarHtml = '';
			var cell;
			var date = moment(startDate).add('days', obj.start);
			var endDate = moment(endDate).add('days', obj.start);
			var rangeWidth = obj.rangeWidth();
			
			for (var index = 1; (date.isBefore(endDate) || date.isSame(endDate)) ; index++){
			
				var fullYear = date.format("YYYY");
				var month = date.format("MMM");
				var monthNumber = date.format("MM");
				var day = date.format('ddd');
				var dayNumber = date.format('D');
				var isWeekend = date.day()%6==0;
				
				if(isWeekend && !obj.weekends){
					date.add('days', 1);
					continue;
				}
					
				cell = '<div class="cal-cell cell" date-id="'+fullYear+monthNumber+dayNumber+'" month-id="'+fullYear+''+monthNumber+'" month="'+monthNumber+'">';
				cell += '<div class="cell-content">';
				cell += '<div class="day-number">'+dayNumber+'</div>';
				
				cell += '<div class="day '+( isWeekend ? 'ferial' : '') +'">'+day+'</div>';
				cell += '</div>';
				cell += '</div>';
				
				calendarHtml += cell;
				date.add('days', 1);
			}
			
			
			
			return calendarHtml;
		},
		obj._getMonthsHTML = function(startDate,endDate) {
			
			var monthsHtml = '';
			var cell;
			var date = moment(startDate).add('days', obj.start);
			var endDate = moment(endDate).add('days', obj.start);
			for (var index = 1; (date.isBefore(endDate) || date.isSame(endDate)) ; index++){
			
				var year = date.format("YY");
				var fullYear = date.format("YYYY");
				var month = date.format("MMM");
				var monthNumber = date.format("MM");
				
				cell = '<div class="month-cell cell" month-id="'+fullYear+''+monthNumber+'" month="'+monthNumber+'">';
				cell += '<i class="bullet"></i>';
				cell += '<div class="date-formatted"><span class="month-name">'+month+'</span> '+year+'</span></div>';
				cell += '</div>';	
					    	
		    	monthsHtml += cell;
				date.add('month', 1);
			}

			return monthsHtml;
		},
		obj._updateMonths = function() {

		    var currentMonth = obj.calendarObj.find('.cell.selected:eq(0)').attr("month-id");
		    obj.monthsObj.find('.cell').removeClass('selected');
		    obj.monthsObj.find('.cell').removeClass('current');
		    obj.monthsObj.find('.cell[month-id="'+currentMonth+'"]').addClass('selected');
		    obj.monthsObj.find('.cell[month-id="'+currentMonth+'"]').addClass('current');
		},
		obj._updateRangeBar  = function() {

		    obj.didResizeBar();
		    obj._initRangeBar();
		},
		obj._dispatchEvent = function (callback,options,el) {
			
			if(!callback)
				return false;
				
			callback(el,options);
		},
		obj._placeElement = function (el) {
			
			obj._placeElement(el,null);
		},
		obj._placeElement = function (el, position) {
			
			var calendarViewWidth = $el.outerWidth();
			var cellWidth = $(el).find(".cell").first().outerWidth();
			var objChildrens = $(el).children().length;
			var objWidth = (objChildrens*cellWidth);
			
			var elPos =  $(el).position();
			left = (  !position ? parseInt(elPos.left) :  -position.left);
			
			if(calendarViewWidth > objWidth )
			    left = (calendarViewWidth-objWidth)/2;
			else if (calendarViewWidth < objWidth && left >= 0)
				left = 0 ;
			else if(left < calendarViewWidth-objWidth)
				left = -objWidth+calendarViewWidth;
							    
			$(el).stop().animate({left: left},300,'easeOutCirc');
		},
		obj._timedResize = function() {
				
			clearTimeout(obj.resizeTimer);
			obj.resizeTimer = setTimeout(obj._resize, obj.timeoutTime);
		},
		obj._bindEvents = function () {
		
			if(obj.trigger){
			
				$(obj.trigger).unbind("click");
				$(obj.trigger).click(obj.toggleCalendar);
			}
				
			obj.timeout = false;
			obj.timeoutTime = 100;
						
			obj.calendarObj.find(".range-bar").on( "resize", obj.didResizeBar);
		    obj.monthsObj.find('.cell').bind("click",obj.didSelectMonth);
		    
		    $(window).bind('resize',obj._timedResize);
			
		    $el.hover(
		    
				function() {
				
				    if(obj.autoHideMonths)
				    	obj.monthsObj.slideDown(100,'easeOutCirc');
				}, 
				function() {
				
				    if(obj.autoHideMonths)
				    	obj.monthsObj.slideUp(0,'easeOutCirc');
				    
				}
		    );
		    
		    $(obj).on('mousedown', '.range-bar', function (e) {
				
				
				var topElement = document.elementFromPoint(e.clientX, e.clientY);
				if($(topElement).hasClass('ui-resizable-handle')){
					
					e.stopPropagation();
					return false;
				}
			    
			});
			
			
			$(obj).on('mouseup', '.range-bar', function (e) {
			
				if($(obj).find('.range-bar').hasClass('ui-resizable-resizing'))
					return true;
					
			   	$(this).hide();
			   	var BottomElement = document.elementFromPoint(e.clientX, e.clientY);
			   	$(this).show();
			   	
			   	$(BottomElement).trigger('click'); //Manually fire the event for desired underlying element
			   	return true;
			});
		    
		},
		
		obj._resize = function(){ 
				
			
			obj._placeElement(obj.calendarObj);
			obj._placeElement(obj.monthsObj);
			obj.timeout = false;
				
		},
		
		obj._updateView = function (startDate,endDate){
			
			obj.calendarObj.append(obj._getCalendarHTML(startDate,endDate));
			obj.monthsObj.append(obj._getMonthsHTML(startDate,endDate));
			
			if(obj.visible){	
				$el.css({display:"block"});
				obj.showCalendar();
			}
			else
				$el.css({display:"none"});	
			
			obj._initCalendar();
			obj._initMonths();
			obj._initRangeBar();
			
			obj._attachDragEasing(obj.calendarObj);
		},
		obj._generateView = function () {
			
			var mainClass = "range-calendar";
			
			$el.removeClass(mainClass)
			$el.addClass(mainClass);
			$el.empty();
			
			obj.monthsObj = $('<div class="wrapper"><div class="months"></div></div>');
			$el.append( obj.monthsObj );
			obj.monthsObj = obj.monthsObj.find(".months");
			(obj.autoHideMonths ?  obj.monthsObj.addClass("auto-hide-months") : '');
			
			obj.calendarObj = $('<div class="wrapper"><div class="calendar"></div></div>');
			$el.append( obj.calendarObj );
			obj.calendarObj = obj.calendarObj.find(".calendar");

			
			obj._updateView(obj.startDate,obj.endDate);
			obj._bindEvents();
			obj._dispatchEvent(obj.changeRangeCallback,obj.range(),obj);
		}
		
		

		
		
		obj._init = function( element,options ) {
			
			obj.themeContext = options.themeContext;
			obj.lang  = options.lang ; 
			obj.isDragging = false;
			obj.minRangeWidth = options.minRangeWidth;
			obj.maxRangeWidth = options.maxRangeWidth;
			obj.weekends = options.weekends;
			obj.startDate = options.startDate;
			obj.endDate = options.endDate;
			obj.start = (!options.start ? "+7" : parseInt(options.start)) ;
			obj.startRangeWidth = ( options.startRangeWidth > options.maxRangeWidth ? options.maxRangeWidth : options.startRangeWidth); 
			obj._rangeWidth = obj.startRangeWidth;
			obj.trigger = options.trigger;
			obj.visible = options.visible;
			obj.changeRangeCallback = options.changeRangeCallback;
			obj.autoHideMonths = options.autoHideMonths ;
			
			obj.theme = (options.theme ? options.theme : defaults.theme );
			obj.update();
		},
		
		obj._init(el,obj.options);
		$(obj).data('rangeCalendar', obj );
		
		
	});
	
	
	return this.data("rangeCalendar");
	 
  
};

} )( jQuery, window );











