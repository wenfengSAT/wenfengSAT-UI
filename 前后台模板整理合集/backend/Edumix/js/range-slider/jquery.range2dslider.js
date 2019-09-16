/**
 * @preserve jQuery Range2DSlider plugin v1.0.4
 * @homepage http://xdsoft.net/jqplugins/range2dslider/
 * (c) 2014, Chupurnov Valeriy.
 */
!function($){	
	var ARROWLEFT = 37,
		ARROWUP = 38,
		ARROWRIGHT = 39,
		ARROWDOWN = 40,
		defaultOptions = {
			axis:[[0,10],[0,10]],
			value:[[0,0]],
			
			projections:false,
			
			showRanges:false,
			
			skin:'skin1',
			className:'range2dslider',
			style:'',
			
			height:'100px',
			width:'auto',
			x:'left',
			y:'bottom',
			
			posOnBoxClick:true,
			
			timeoutRecalc:100,
			
			grid:true,
			gridStep:false,
			gridStyle:{
				width:0.5,
				color:'#888',
				dashed:[5,2]
			},
			
			round:false,
			roundMethod:Math.round, // work with round==true
			
			showLegend:[true,true],
			recalcLegends:false,
			
			tooltip:['top'], // false, 'top','left','right','bottom'
			alwShowTooltip:[true], // false,true - work only with tooltip<>false
			
			onlyGridPoint:false,
			
			
			outOfRange:false,
			
			allowAxisMove:['both'], // 'x','y','both'
			
			printLabel: function( value ){
				return value[0].toFixed(2)+'-'+value[1].toFixed(2)
			},
			
			parseValue: function( str ){
				var s = str.split(';'),i,value=[], prs = [];
				for(i =0;i<s.length;i++){
					prs = s[i].split('|');
					prs[0] = parseFloat(prs[0]);
					prs[1] = parseFloat(prs[1]);
					value.push(prs);
				}
				return value;
			},
			
			printValue: function( value ){
				var s = [],i;
				for(i =0;i<value.length;i++){
					if( $.isArray(value[i]) ){
						s.push(value[i].join('|'));
					}else{
						s.push(value.join('|'));
						break;
					}		
				}			
				return s.join(';');
			},
			
			disabled: false,
			
			stepOnKey:0.1,
			
			runnerClassSkin:['skin1','skin1']
		};
	
	Boolean.prototype.xd = Function.prototype.xd = Number.prototype.xd = String.prototype.xd = Array.prototype.xd = function( i,defaultValue ){
		if( !(this instanceof Array) )
			return this.valueOf();
		else{
			if( typeof(this[i])!='undefined' ){
				return this[i];
			}else{
				return typeof(this[0])!='undefined'?
						this[0]:(	
							typeof(defaultValue)!='undefined'?
								defaultValue:
								null	
						);
			}
		}
	};
	
	function drawProjections( slider,options,x,y ){
		if( options.projections ){
			if( !slider.projections ){
				slider.projections = [];
				slider.projections.push($('<div class="xdsoft_projection axisx"></div>'));
				slider.projections[0].append('<span class="xdsoft_projection_value_x"></span>');
				slider.projections.push($('<div class="xdsoft_projection axisy"></div>'));
				slider.projections[1].append('<span class="xdsoft_projection_value_y"></span>');
				$(slider).parent().append(slider.projections);
			}
			slider.projections[0].css(options.y,y);
			slider.projections[1].css(options.x,x-1);
		}
	}

	var	recalcLabelPosition = function( $label ){
			switch( true ){
				case ($label.hasClass('xdsoft_slider_label_top') || $label.hasClass('xdsoft_slider_label_bottom')):
					$label.css('margin-left','-'+parseInt($label[0].offsetWidth/2)+'px');
				break;
				case ($label.hasClass('xdsoft_slider_label_left') || $label.hasClass('xdsoft_slider_label_right')):
					$label.css('margin-top','-'+parseInt($label[0].offsetHeight/2)+'px');
				break;
			}
		},
		
		roundValue = function(_this,_val){
			if( _this.options.round ){
				return [_this.options.roundMethod(_val[0]),_this.options.roundMethod(_val[1])];
			}
			return _val;
		},
		
		pos1,pos2,bound = [0,0,0,0];
		updateSliderRanges = function ( _this,ranges ){
			if( !ranges )
				return;
			var css = {};
			for( var i = 0;i<ranges.length;i++ ){	
				if( !_this.values[ranges[i].rb[0]]||!_this.values[ranges[i].rb[1]] )
					continue;
				pos1 = valueToXY(_this,_this.values[ranges[i].rb[0]][0],_this.values[ranges[i].rb[0]][1]);
				pos2 = valueToXY(_this,_this.values[ranges[i].rb[1]][0],_this.values[ranges[i].rb[1]][1]);
				
				bound[0] = Math.max(pos1[0],pos2[0]);
				bound[1] = Math.max(pos1[1],pos2[1]);
				bound[2] = Math.min(pos1[0],pos2[0]);
				bound[3] = Math.min(pos1[1],pos2[1]);
				css[_this.options.x] = bound[2]+'px';
				css[_this.options.y] = bound[3]+'px';
				css['width'] = (bound[0]-bound[2])+'px';
				css['height'] = (bound[1]-bound[3])+'px';
				
				ranges[i].rect.css(css);
			}
		},
		
		valueToXY = function( _this,relX,relY ){
			if( !_this.options.outOfRange ){
				
				if( relX<_this.options.axis[0][0] ){
					relX = _this.options.axis[0][0];
				}else if( relX>_this.options.axis[0][_this.options.axis[0].length-1] ){
					relX = _this.options.axis[0][_this.options.axis[0].length-1];
				}
				if( relY<_this.options.axis[1][0] ){
					relY = _this.options.axis[1][0];
				}else if( relY>_this.options.axis[1][_this.options.axis[1].length-1] ){
					relY = _this.options.axis[1][_this.options.axis[1].length-1];
				}
				
			}
			
			return [
				((relX-_this.options.axis[0][0])/(_this.options.axis[0][_this.options.axis[0].length-1]-_this.options.axis[0][0]))*_this.limitX,
				((relY-_this.options.axis[1][0])/(_this.options.axis[1][_this.options.axis[1].length-1]-_this.options.axis[1][0]))*_this.limitY,
				relX,
				relY
			];
		},
		
		XYToValue = function( _this,x,y,sliderId ){
			var allowAxis = _this.options.allowAxisMove.xd(sliderId,'both');
			
			return $.extend(true,_this.values[sliderId],roundValue(_this,[
				(allowAxis=='x'||allowAxis=='both')?(_this.limitX?(parseInt(x)/_this.limitX)*(_this.options.axis[0][_this.options.axis[0].length-1]-_this.options.axis[0][0])+_this.options.axis[0][0]:0):_this.values[sliderId][0],
				(allowAxis=='y'||allowAxis=='both')?(_this.limitY?(parseInt(y)/_this.limitY)*(_this.options.axis[1][_this.options.axis[1].length-1]-_this.options.axis[1][0])+_this.options.axis[1][0]:0):_this.values[sliderId][1]
			]));
		},
		
		setValue = function ( _this,sliderId,relX,relY,nochange ){
				
			var pos = valueToXY(_this,relX,relY);
			
			if( _this.options.projections.xd(sliderId) ){
				drawProjections( _this.$runners[sliderId][0],_this.options,pos[0],pos[1] )
			}
			
			_this.$runners[sliderId][0].style[_this.options.x] = Math.round(pos[0])+'px';
			_this.$runners[sliderId][0].style[_this.options.y] = Math.round(pos[1])+'px';
			
			_this.values[sliderId] = $.extend(true,_this.values[sliderId],roundValue(_this,[pos[2],pos[3]]));
			
			if( _this.$runners[sliderId][0].ranges.length )
				updateSliderRanges(_this,_this.$runners[sliderId][0].ranges);
			
			if( !nochange )
				_this.$range2DSlider.trigger('xchange.xdsoft',[sliderId]);
			
			_this.$range2DSlider.trigger('updatelabel.xdsoft',[sliderId]);
		},
		
		getValue = function( _this,sliderId, x,y ){
			
			if( _this.options.disabled )
				return _this.values;
			
			_this.values[sliderId] = XYToValue(_this,x,y,sliderId);
			
			if( _this.options.projections.xd(sliderId) ){
				drawProjections( _this.$runners[sliderId][0],_this.options,x,y )
			}
			
			if( _this.$runners[sliderId][0].ranges.length )
				updateSliderRanges(_this,_this.$runners[sliderId][0].ranges);
			
			if( _this.options.onlyGridPoint ){
				setValue( _this,sliderId,_this.values[sliderId][0],_this.values[sliderId][1] )
			}else{
				_this.$range2DSlider
					.trigger('xchange.xdsoft',[sliderId])
					.trigger('updatelabel.xdsoft',[sliderId]);
			}
			return _this.values;
		},
		
		createGrid = function( _this ){
			if( _this.options.grid ){
				if( !_this.$grid ){
					_this.$grid = $('<canvas class="xdsoft_range2dslider_grid"></canvas>');
					_this.$sliderBox.append(_this.$grid);
				}
			
				if( !_this.$grid.get(0).getContext )
					return;
					
				var context = _this.$grid.get(0).getContext("2d"),
					gridSize = 
					!_this.options.gridStep?[
						_this.limitX/(_this.options.axis[0][_this.options.axis[0].length-1]-_this.options.axis[0][0]),
						_this.limitY/(_this.options.axis[1][_this.options.axis[1].length-1]-_this.options.axis[1][0])
					]:$.extend(true,[],_this.options.gridStep);
				
				if( gridSize[0]<2 )
					gridSize[0] = 2;
				
				if( gridSize[1]<2 )
					gridSize[1] = 2;
				
				context.translate(0.5,0.5);
				
				
				if( gridSize && gridSize[0] ){
					var startx = 0,starty = 0;
					_this.$grid.get(0).width = _this.$grid.get(0).width;
					
					_this.$grid.attr({
						width:_this.limitX+'px',
						height:_this.limitY+'px'
					});
					if (!context.setLineDash) {
						context.setLineDash = function () {}
					}
					context.beginPath();
					if( gridSize[0] ){
						while( startx+gridSize[0]<_this.limitX-3 ){
							startx+=gridSize[0];
							context.moveTo( startx+0.5, 0);
							context.lineTo( startx+0.5, _this.limitY);
						}
					}
					if( gridSize[1] ){
						while( starty+gridSize[1]<_this.limitY+3 ){
							starty+=gridSize[1];
							context.moveTo(  0,starty+0.5 );
							context.lineTo( _this.limitX,starty+0.5 );
						}
					}
					
					context.setLineDash(_this.options.gridStyle.dashed);
					context.lineWidth = _this.options.gridStyle.width;
					context.strokeStyle = _this.options.gridStyle.color;
					context.stroke();
				}
				
				
			}else{
				_this.$grid&&_this.$grid.remove();
			}
		};

	function destroy(_this){
		var $input = $(_this),
			i;
			
		if( !$input.hasClass('xdsoft') )
			return;
			
		$input.removeClass('xdsoft');
		$input.show();
		delete _this.sliderActive;
		_this.$range2DSlider.remove();
		delete _this.$range2DSlider;
		delete _this.$sliderBox;
		delete _this.$runners;
		delete _this.values;
		$(window).off('resize.xdsoft',_this.recalcAllposition);
		delete _this.recalcAllposition;
	};
	
	var initalization = false;
	
	function init(_this){
		var $input = $(_this),
			i;
			
		if( $input.hasClass('xdsoft') )
			return;
			
		$input.addClass('xdsoft');
		
		$input.hide();
		
		
		_this.sliderActive = 0;
		_this.$range2DSlider = $('<div '+( _this.options.style?'style="'+_this.options.style+'"':'')+' class="xdsoft_range2dslider '+_this.options.className+' xdsoft_range2dslider_'+_this.options.skin+'"></div>');
		_this.$sliderBox = $('<div class="xdsoft_range2dslider_box xdsoft_range2dslider_box_'+_this.options.x+' xdsoft_range2dslider_box_'+_this.options.y+'"></div>'),
		_this.$runners = [];			
		
		if( _this.options.posOnBoxClick ){
			_this.$sliderBox.on('mousedown.xdsoft', function( e ){
				var x = e.offsetX==undefined?e.layerX:e.offsetX,
					y = e.offsetY==undefined?e.layerY:e.offsetY;
				$('html').addClass('xdsoft_noselect');
				
				_this.values[_this.sliderActive] = XYToValue(_this,x,y,_this.sliderActive);
				//getValue(_this,_this.sliderActive,_this.options.x=='left'?x:_this.limitX-x,_this.options.y=='top'?y:_this.limitY-y);
				
				setValue( _this,_this.sliderActive, _this.values[_this.sliderActive][0],_this.values[_this.sliderActive][1] );
				
			});
		}

		
		_this.$range2DSlider
			.on('updatelabel.xdsoft', function( e,i ){
				_this.options.tooltip.xd(i)&&
					_this.$runners[i][0]&&
						_this.$runners[i][0].span&&
							_this.$runners[i][0].span.html(_this.options.printLabel.xd(i).call(_this.$runners[i][0],_this.values[i]))
									&&recalcLabelPosition(_this.$runners[i][0].span);
			})
			.on('xchange.xdsoft', function( e,i ){
				var value = _this.options.printValue.call(_this,_this.values);			
				if( value!=$input.attr('value') ){	
					$input
						.attr('value',value)
						.val(value)
						
					if( !initalization ){
						$input
							.trigger('change');
					}
				}
			});
		
		var recalcPositionTimer = 0;
		_this.recalcAllposition = function(){
			clearTimeout(recalcPositionTimer);
			!function(_initalization){
				var rc = function(){
					initalization = _initalization;
					_this.limitX 		= 	parseInt(_this.$sliderBox[0].clientWidth);
					_this.limitY	 	=  	parseInt(_this.$sliderBox[0].clientHeight);
					createGrid(_this);
					for(var l=0;l<_this.values.length;l++)
						setValue(_this,l,_this.values[l][0],_this.values[l][1]);
					initalization = false;
				};
				if( _this.options.timeoutRecalc )
					recalcPositionTimer = setTimeout(rc,_this.options.timeoutRecalc);
				else
					rc();
			}(initalization);
		};
		
		$(window).on('resize.xdsoft',_this.recalcAllposition);
		
		_this.$range2DSlider
				.append(_this.$sliderBox);
				
		$input
			.after(_this.$range2DSlider);
	}
	
	$.fn.xdSoftDraggable = function( _options ){
		var options = $.extend(true,{},{
				x:'left',
				y:'bottom',
				allowAxisMove:'both', // 'x','y','both'
				onMove:function(){},
				disabled: false
			},_options),
			
			drag = false,
			oldX, 
			oldY,
			newX, 
			newY, 
			oldTop, 
			oldLeft,
			limitX,
			limitY,
			
			xdSoftDraggableMove = function( event ){
				if( drag&&!options.disabled ){
					if( options.allowAxisMove=='both' || options.allowAxisMove=='x'){
						newX = oldLeft+(options.x=='right'?-1:1)*(event.clientX-oldX);
						if( newX < 0 ) 
							newX = 0;
						if( newX > limitX ) 
							newX = limitX;
					}
					if( options.allowAxisMove=='both' || options.allowAxisMove=='y'){
						newY = oldTop+(options.y=='bottom'?-1:1)*(event.clientY-oldY);
						if( newY < 0 ) 
							newY = 0;
						if( newY > limitY ) 
							newY = limitY;
					}
					

					draggableElement.style[options.x] = newX + 'px';
					draggableElement.style[options.y] = newY+'px';
					
					if( options.onMove&&$.isFunction(options.onMove) ){
						options.onMove.call(draggableElement,newX,newY);
					}
				}
			},
			
			xdSoftDraggableMouseup = function( event ){
				drag = false;
				$('html').removeClass('xdsoft_noselect');
			};
		
		$(document.body)
			.off('mousemove.xdSoftDraggable',xdSoftDraggableMove)
			.on('mousemove.xdSoftDraggable',xdSoftDraggableMove);
			
		$([document.body,window])	
			.off('mouseup.xdSoftDraggable',xdSoftDraggableMouseup)
			.on('mouseup.xdSoftDraggable',xdSoftDraggableMouseup);
			
		return this.each(function(){
			var _this = this,
				$this = $(_this);	

			$this
				.off('mousedown.xdSoftDraggable')
				.on('mousedown.xdSoftDraggable',function( event ){
					draggableElement = _this;
					drag 		= 	true;
					oldX 		= 	event.clientX;
					oldY 		= 	event.clientY;
					newX 		= 	oldLeft 	= 	(!isNaN(parseInt(_this.style[options.x]))&&parseInt(_this.style[options.x]))?parseInt(_this.style[options.x]):0;
					newY 		= 	oldTop		= 	(!isNaN(parseInt(_this.style[options.y]))&&parseInt(_this.style[options.y]))?parseInt(_this.style[options.y]):0;
					limitX 		= 	_this.parentNode.clientWidth;
					limitY	 	=  	_this.parentNode.clientHeight;
					$('html').addClass('xdsoft_noselect');
					event.stopPropagation();
					event.preventDefault();
				});
		});
	};
	$.fn.range2dslider = $.fn.range2DSlider = function( _options,arg2 ){
		if( typeof(_options)=='string' ){
			switch(_options){
				case 'destroy':
					return this.each(function(){
						destroy(this);
					});
				break;
				case 'disabled':
					return this.range2dslider({disabled:true});
				break;
				case 'value':
					return this.range2dslider({value:arg2});
				break;
			}
			return this;
		}else
		 return this.each(function(){
			
			initalization = true;
			
			if( _options&&_options.template&&$.fn.range2DSlider.templates[_options.template] )
				_options = $.extend(true,{},$.fn.range2DSlider.templates[_options.template],_options);
			
			var _this = this,
				i,j,
				$input = $(_this),
				options = $.extend(true,{},$.fn.range2DSlider.defaultOptions,_options);
			
				
			_this.values = $.extend(true,[],[],options.value);
			
			if( (!_options||!_options.axis)&&!_this.options ){
				if( $input.data('minx')){
					options.axis[0] = [];
					options.axis[0].push(parseFloat($input.data('minx')));
					if( $input.data('middlex') )
						options.axis[0].push(parseFloat($input.data('middlex')));
					options.axis[0].push(parseFloat($input.data('maxx')));
					options.axis[1] = [];
					options.axis[1].push(parseFloat($input.data('miny')));
					if( $input.data('middley') )
						options.axis[1].push(parseFloat($input.data('middley')));
					options.axis[1].push(parseFloat($input.data('maxy')));
				}
			}

			if( _this.options )
				_this.options = $.extend(true,{},_this.options,_options);
			else 
				_this.options = $.extend(true,{},{},options);
			
			if( !_options||!_options.value ){
				if( $input.attr('value')){
					_this.values = _this.options.parseValue($input.attr('value'));
				}
			}else{
				$input.attr('value',_this.options.printValue.call(_this,_this.values))
			}
			
			
			if( !$.isArray(_this.values[0]) )
				_this.values = [_this.values];
			
			
			
			if( !_this.options.axis )
				_this.options.axis = [];
			if( !_this.options.axis[0] )
				_this.options.axis[0] = [0,1];
			if( !_this.options.axis[1] )
				_this.options.axis[1] = [0,1];
				
			init(_this);
			
			if( _this.options.disabled ){
				_this.$range2DSlider.addClass('xdsoft_range2dslider_disabled');
			}else{
				_this.$range2DSlider.removeClass('xdsoft_range2dslider_disabled');
			}
			
			// create runners
			var $runner;
			for(i=0;i<_this.values.length;i++){
				if( !_this.$runners[i] ){
					_this.$runners.push($runner = $('<div class="xdsoft_range2dslider_runner xdsoft_range2dslider_runner'+i+'"></div>'));
					$runner.append($inrunner = $('<input type="button">'));
					$runner[0].ranges = [];
					$runner.addClass('xdsoft_range2dslider_'+_this.options.runnerClassSkin.xd(i));
					!function(i){
						$inrunner
							.on('focus',function(){
								$('.xdsoft_range2dslider_active').removeClass('xdsoft_range2dslider_active');
								$(this).parent().addClass('xdsoft_range2dslider_active');
							})
							.on('keydown',function( event ){
								var relX = _this.values[i][0],
									relY = _this.values[i][1],
									ax = _this.options.allowAxisMove.xd(0,'both');
								switch( event.which ){
									case ARROWUP:
										if( ax=='both'||ax=='y' ){
											relY+=_this.options.stepOnKey.xd(1);
										}
									break;
									case ARROWDOWN:
										if( ax=='both'||ax=='y' ){
											relY-=_this.options.stepOnKey.xd(1);
										}
									break;
									case ARROWRIGHT:
										if( ax=='both'||ax=='x' ){
											relX+=_this.options.stepOnKey.xd(0);
										}
									break;
									case ARROWLEFT:
										if( ax=='both'||ax=='x' ){
											relX-=_this.options.stepOnKey.xd(0);
										}
									break;
									default: return true;
								}
								setValue(_this,i,relX,relY);
								event.stopPropagation();
								event.preventDefault();
							});
					}(i);
				}else{
					for(var t=0;t<_this.$runners[i][0].ranges.length;t++)
						_this.$runners[i][0].ranges[t].rect.remove();
					_this.$runners[i][0].ranges = [];
				}
				
				!function(i,$runner){
					var $span,spanpos;
					
					spanpos = _this.options.tooltip.xd(i,'top');
					if( spanpos&&!$runner[0].span ){
						$span = $('<span class="xdsoft_slider_label  xdsoft_slider_label_'+spanpos+' xdsoft_slider_label_'+(_this.options.alwShowTooltip.xd(i)?'visible':'hidden')+'" >'+_this.options.printLabel.xd(i).call($runner[0],_this.values[i])+'</span>');
						$runner.append($span);
						$runner[0].span = $span;
					}
					
					$runner
						.xdSoftDraggable({
							disabled: _this.options.disabled,
							x:_this.options.x,
							y:_this.options.y,
							allowAxisMove:_this.options.allowAxisMove.xd(i,'both'),
							onMove:function(x,y){
								getValue(_this,i,x,y);
							}
						})
						.off('mousedown.xdsoft')
						.on('mousedown.xdsoft', function( e ){
							_this.sliderActive = i;
							$(this).find('input').focus();
							e.stopPropagation();
						});
				}(i,_this.$runners[i]);
			}
			
			// for second init remove extra sliders
			for(i=_this.values.length;i<_this.$runners.length;i++){
				_this.$runners[i].remove();
			}
			_this.$runners.length = _this.values.length;
			
			if( $.isArray(_this.options.showRanges)&&_this.options.showRanges.length&&_this.values.length>1 ){
				var range,$range ;
				for(i=0;i< _this.options.showRanges.length;i++){
					rangeBetween = _this.options.showRanges.xd(i);
					if( rangeBetween && $.isArray(rangeBetween) && rangeBetween.length && rangeBetween[0]!=rangeBetween[1] && _this.$runners[rangeBetween[0]] && _this.$runners[rangeBetween[1]] ){
						$range = $('<div class="xdsoft_range2dslider_range xdsoft_range2dslider_range'+i+'"></div>');					
						_this.$runners[rangeBetween[0]][0].ranges.push({rect:$range,rb:rangeBetween});
						_this.$runners[rangeBetween[1]][0].ranges.push({rect:$range,rb:rangeBetween});
						_this.$sliderBox.append($range);
						$range.on('mousedown',function(e){
							e.stopPropagation();
						});
					}
				}
			}
				
			
			_this.$sliderBox
				.css({
					height:_this.options.height,
					width:_this.options.width
				})
				.append(_this.$runners);
			
			if( _this.options.round && !_this.options.roundMethod(_this.options.stepOnKey.xd(0)) )
				_this.options.stepOnKey = 1;
			
			if( _this.options.showLegend && ( !_this.legends||_this.options.recalcLegends ) ){
				if( _this.legends ){
					for(i=0;i<2;i++)
						if( _this.legends[i] )
							for(var j=0;j<_this.legends[i].length;j++)
								_this.legends[i][j]&&
									_this.legends[i][j].remove&&
										_this.legends[i][j].remove();
				}
				
				_this.legends = [[],[]];
				var offsets = [0,0];
				for(i=0;i<2;i++){
					if( _this.options.axis[i] )
						for(var j=0;j<_this.options.axis[i].length;j++){
							_this.legends[i][j] = $('<span class="xdsoft_legend">'+_this.options.axis[i][j]+'</span>');
							if( _this.options.showLegend[i] ){
								_this.$range2DSlider
									.append(_this.legends[i][j]);
								offsets[i?0:1] = Math.max(offsets[i?0:1],_this.legends[i][j][0][i?'offsetWidth':'offsetHeight']);
							}
						}
				}
				
				_this.$range2DSlider.css('padding-'+_this.options.x,(offsets[0])+'px');
				_this.$range2DSlider.css('padding-'+_this.options.y,(offsets[1])+'px');
				
				
				if( _this.legends[0]&&_this.legends[0][0] ){
					_this.legends[0][0]
						.css(_this.options.y,'0px')
						.css(_this.options.x,offsets[0]+'px')
					
					var percentOffset = [
						((offsets[0])/_this.$range2DSlider[0].clientWidth)*100,
						((offsets[1])/_this.$range2DSlider[0].clientHeight)*100
					];
					
					for( i = 1;i<_this.legends[0].length-1;i++ )
						_this.legends[0][i]
							.css(_this.options.y,'0px')
							.css(_this.options.x,(
									(100-percentOffset[0])*(
										(
											_this.options.axis[0][i]-_this.options.axis[0][0]
										)/(
											_this.options.axis[0][_this.options.axis[0].length-1]-_this.options.axis[0][0]
										)
									)+
									percentOffset[0]/2
								).toFixed(8)+'%'
							)
							.css('width',offsets[0]+'px');
						
					_this.legends[0][_this.legends[0].length-1]
						.css(_this.options.y,'0px')
						.css(_this.options.x=='left'?'right':'left','0px')
					}
				if( _this.legends[1]&&_this.legends[1][0] ){
					_this.legends[1][0]
						.css(_this.options.y,offsets[1]+'px')
						.css(_this.options.x,'0px')
						.css('width',offsets[0]+'px');
					
					for(i = 1;i<_this.legends[1].length-1;i++)
						_this.legends[1][i]
							.css(_this.options.x,'0px')
							.css('width',offsets[0]+'px')
							.css(_this.options.y,(
									(100-percentOffset[1])*(
										(
											_this.options.axis[1][i]-_this.options.axis[1][0]
										)/(
											_this.options.axis[1][_this.options.axis[1].length-1]-_this.options.axis[1][0]
										)
									)+
									percentOffset[1]/2
								).toFixed(8)+'%'
							);
					
					_this.legends[1][_this.legends[1].length-1]
						.css(_this.options.y=='top'?'bottom':'top','-0px')
						.css(_this.options.x,'0px')
						.css('width',offsets[0]+'px');
				}
			}

			_this.recalcAllposition();
			
			initalization = false;
		});
	};
	$.fn.range2DSlider.defaultOptions = defaultOptions;
	$.fn.range2DSlider.templates = {
		horizontal:{
			grid:false,
			height:'7px',
			className:'xdsoft_horizontal',
			showRanges:[[0,1]],
			showLegend:[1,0],
			allowAxisMove:['x'],
			printLabel:function( val ){
				return val[0];
			}
		},
		vertical:{
			grid:false,
			height:'100px',
			width:'0px',
			className:'xdsoft_vertical',
			showRanges:[[0,1]],
			alwShowTooltip:[false],
			tooltip:['right'],
			showLegend:[0,0],
			allowAxisMove:['y'],
			printLabel:function( val ){
				return val[1];
			}
		}
	};
}(jQuery);