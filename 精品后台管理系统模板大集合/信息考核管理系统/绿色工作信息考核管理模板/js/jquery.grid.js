/*
 * Grid
 */

(function($) {
    $.uedWidget('ued.Grid', {
        options : /**@lends Grid# */
        {
            /**
             *@example
             * $('#ued-grid').uedGrid({
             * 	tableHead:sampleCol,
             * 	tableBody:sampleData
             * });
             */
			tableHead : null, 
			thead : null,
            //totalHead : null, //表头（每一列的宽度必须传）
            tableBody : null, //数据（通过key来匹配到对应的列上）
			tbody : null,
			headCount : 1, //头部行数，默认为1
            nowrap : true, //是否自动换行，默认为true
            checkbox : null, /*是否启用首列checkbox列，一经启用，自动冻结,如果是复杂的checkbox则传入下拉菜单的dom
             {
				 single : false,//
				 obj : null//
             }
			 {
				single : false,
				obj:{
					getObj:function(obj){
						 console.log(obj)
					},
					data : data
				}
			}
			 */
            operator : null, //是否启用尾列操作列，一经启用，自动冻结，如果有则传入dom
			/*
				{
					type : "normal",//panel为下拉面板，normal为操作板
					width : 200
				}
				{
					type : "panel"//panel为下拉面板，normal为操作板
				},
			*/
			height : 300, //表格高度，默认为300
			widthResize : true,
            options : null,
            settings : null,
            pagination : {},
            sortCallBack : null,
			defaultSortType : 'desc'
        },
        _create : function() {
            var $el = this.element, options = this.options, self = this;
			
            $el.addClass("uew-table");
			//=======判断单元格内容是否允许换行========
            if (options.nowrap) {
                $el.addClass("uew-table-nowrap");
            }
			options.tableHead = options.thead || options.tableHead;
			options.tableBody = options.tbody || options.tableBody;
			//定义组件内部属性
			var _define = this._define = {};
			_define.tableHead = options.tableHead;
			_define.blankWidth = 10;//定义空白列的最小宽度
			this.$domCache = {};//缓存常用dom节点
			//绘制表格DOM元素,chrome 8.5ms,IE平均38ms
			this._createTableDom($el, options, _define);
			//初始化表格数据
			this.setData(options.tableBody, options.tableHead);
			//绑定表格操作事件
			this._bindEvent($el, options);
			
        },
		_createTableDom : function($el, options, _define){
			var settings = options.settings, options = options.options, $domCache = this.$domCache;
			//********绘制操作条*******
			var $optBar = $("<div class='uew-table-optBar'></div>");
			
			//绘制左侧操作IE 15ms chrome 1ms
			if(options){
				this._setOptData($optBar,options); 
			}
			//绘制右侧设置IE 16ms chrome 1ms
			if(settings){
				var $setting = $("<div class='uew-table-setting'></div>");
				for(var i = settings.length - 1; i >= 0; i--){
					var setting = settings[i], type = setting.type;
					
					if(type){
						//绘制表格定制
						if(type == "custom" && this.options.headCount == 1){
							$button = $("<button type='button' class='__customBtn ue-button ue-state-default long3'><span class='ue-btn-icon btn-icon-table-draft'></span><span class='btn-text'>定制</span></button>");
							//保存表格定制按钮所以
							_define.customIndex = i;
							_define.sequence = setting.sequence;
							_define.currentSequence = setting.sequence;
							if(!settings[i].defaultSequence && this.options.tableHead){
								setting[i].defaultSequence = this._getAllSequence();
							}
						}else if(type == "fullScreen"){
							$button = $("<button type='button' class='ue-button ue-state-default long3'><span class='ue-btn-icon btn-icon-full-screen'></span><span class='btn-text'>全屏</span></button>");
							_define.fullScreenIndex = i;	
						}else if(type == "rowCount"){
							$button = $('<select class="rowSelect" width="70" unit="条"></select>');
							_define.rowCountIndex = i;
						}else{
							throw new Error("Wrong Settings Type");
						}
					}else{
						throw new Error("Wrong Settings Type");
					}
                    $setting.append($button);
                    
				}
				$optBar.append($setting);
				//填充设置数据
				this._setSettingData($setting,_define.rowCountIndex, settings,$setting);
			}

			if($optBar.html() != ""){
				$el.append($optBar);
				//初始化select
				$optBar.find('.rowSelect').uedSelect();
			}
			
			options = this.options;
			//******绘制表格panel区域********
			var $tablePanel = $domCache.$tablePanel = $('<div class="uew-table-panel __panel"></div>');
			//绘制表格头部
			var $tableThead = $domCache.$tableThead = $('<div class="uew-table-thead"></div>');
			//是否有checkbox属性
			if(options.checkbox){
				$el.addClass('uew-table-fixed-checkbox');
				var $tableFront = $('<div class="__theadFront table-front-fixed"></div>');
				if(options.headCount == 1){
					var $table = $('<table><thead><tr><th class="uew-table-checkbox"><div class="uew-table-thTitle"><input type="checkbox"></div></th></tr></thead></table>');
				}else{
					var $table = $('<table><thead><tr><th class="uew-table-checkbox" rowspan="2"><div class="uew-table-thTitle"><input type="checkbox"></div></th></tr></thead></table>');
				}
				if(options.checkbox.disable){
					$table.find('input[type=checkbox]').attr('disabled','disabled');
				}
				if(!options.checkbox.single){
					$table.find('.uew-table-thTitle').append('<a href="javascript:;" class="ue-state-default"><span class="__optPanelBtn uew-icon uew-icon-triangle-1-s"></span></a>');
					var $optPanelBtn = $('.__optPanelBtn',$table)
					var $optPanel = $('<div class="__optPanel"></div>');
					var obj = options.checkbox.obj;

					$el.append($optPanel);
					obj.opter = [$optPanelBtn];
					$optPanel.uedOptPanel(obj);
					$optPanelBtn.bind("click", function() {
						$optPanel.uedOptPanel("setPosition", $(this).offset().left-25, $(this).offset().top+$el.find(".__optPanelBtn").height()+1);
						$optPanel.uedOptPanel("open");
					});
					
				}
				$tableFront.append($table);
				$tableThead.append($tableFront);
			}
			//绘制表格头部显示列table
			var $headMain = $domCache.$headMain =  $('<div class="__theadMain uew-table-main"><table><thead><tr></tr></thead></table></div>');
			$tableThead.append($headMain);
			//绘制表格内部右侧操作区域
			if(options.operator){
				$el.addClass('uew-table-fixed-opt');
				if(options.headCount == 1){
					var $theadFianl = $('<div class="__theadFinal table-finale-fixed"><table><thead><tr><th class="uew-table-operation"><div class="uew-table-thTitle">操作</div></th></tr></thead></table></div>');
				}else{
					var $theadFianl = $('<div class="__theadFinal table-finale-fixed"><table><thead><tr><th class="uew-table-operation" rowspan="2"><div class="uew-table-thTitle">操作</div></th></tr></thead></table></div>');

				}
				$tableThead.append($theadFianl);
			}
			$tablePanel.append($tableThead);

			//********绘制表格主体内容区域*********
			var height = options.height == 'auto'? 'auto' : (options.height+5)+'px';

			var $tableTbody = $domCache.$tableTbody = $('<div class="uew-table-tbody uew-scroll-webkit" style="height:'+ height +'"></div>');
			if(options.checkbox){
				if(options.headCount == 2){
					var $tbodyFront = $('<div class="__tbodyFront table-front-fixed"><table><thead><tr><th>1</th></tr><tr><th style="height:34px;">1</th></tr></thead><tbody class="__bodyfront"></tbody></table></div>');
				}else{
					var $tbodyFront = $('<div class="__tbodyFront table-front-fixed"><table><thead><tr><th>1</th></tr></thead><tbody class="__bodyfront"></tbody></table></div>');
				}
				
				$tableTbody.append($tbodyFront);
				//存储checkbox节点对象
				$domCache.$tbodyFront = $tbodyFront;
			}
			if(options.operator){
				if(options.headCount == 2){
					var $tbodyFinal = $('<div class="__tbodyFinal table-finale-fixed"><table><thead><tr><th>1</th></tr><tr><th style="height:34px;">1</th></tr></thead><tbody class="__bodyfinal"></tbody></table></div>');
				}else{
					var $tbodyFinal = $('<div class="__tbodyFinal table-finale-fixed"><table><thead><tr><th>1</th></tr></thead><tbody class="__bodyfinal"></tbody></table></div>');
				}
				$tableTbody.append($tbodyFinal);
				//存储操作行节点对象
				$domCache.$tbodyFinal = $tbodyFinal;
			}
			var $tableMain = $('<div class="__tbodyMain uew-table-main"><table><thead></thead><tbody class="__data"></tbody></table></div>');
			$tableTbody.append($tableMain);
			
			//绘制无数据和加载中
			var $tableNoData = $domCache.$tableNoData = $('<div style="display:none;" class="uew-nodata-tip">无数据</div>');
			$tableTbody.append($tableNoData);
			var $tableLoading = $domCache.$tableLoading = $('<div style="display:none;" class="uew-table-loading">数据加载中...</div>');
			$tableTbody.append($tableLoading);

			$tablePanel.append($tableTbody);
			//绘制表格横滚动条区域
			var $tableScroll = $('<div class="__tablescroll uew-table-scroll-horizontal uew-scroll-webkit"><div></div></div>')
			$tablePanel.append($tableScroll);
			var $division = $domCache.$division = $('<div class="uew-table-division"></div>');
			$tablePanel.append($division);
			$domCache.$tableScroll = $tableScroll;//缓存滚动条节点
			$el.append($tablePanel);

			//绘制分页区域
			$paginatObj = $('<div></div>');
			$el.append($paginatObj);
			this.$paginatObj = $paginatObj;
			this._createPagination(options.pagination);
		},
		/*
		 * 填充表格操作条数据信息
		 */
		_setOptData : function($optBar,options){
			for(var i = 0, len = options.length; i < len; i++){
				var option = options[i];
                var $button = $("<button type='button' class='ue-button ue-state-default long" + parseInt(option.label.length + 1, 10) + "'><span class='" + option.ico + "'></span><span class='btn-text'>" + option.label + "</span></button>");
				if(option.alwaysEnable){
					$button.attr('alwaysEnable','alwaysEnable');
				}
                $optBar.append($button);
			 }
		},
		/*
		 * 填充表格设置数据信息(目前主要是显示行数设置)
		 */
		_setSettingData : function($setting,index,settings){
			var pagination = this.options.pagination, _define = this._define, self = this;
			if(index >= 0){
				$button = $setting.find('.rowSelect');
				var tempOption = '', setting = settings[index], itemArray = setting.item;
				if(pagination && pagination.perPageRecord){
					var perPageRecord = pagination.perPageRecord;
				}else{
					var perPageRecord = setting.perPageRecord;
				}
				if(perPageRecord){
					var inarray = $.inArray(perPageRecord,itemArray);//查看当前每页显示的行数是否在内
					if(inarray < 0){
						itemArray.push(perPageRecord);
					}
				}
				itemArray.sort(function(a,b){return a - b;});//排序，从小到大。
				inarray = $.inArray(perPageRecord,itemArray);
				for (var j=0,k=itemArray.length; j < k; j++) {
					if(j == inarray){
						tempOption += '<option selected="selected">'+perPageRecord+'</option>';
					}else{
						tempOption += '<option>'+setting.item[j]+'</option>';
					}
					
				};
				$button.append(tempOption);
				
				$button.bind('change',function(){
					var perPageRecord = parseInt($(this).val(),10);
					var currentPage = self.$paginatObj.uedPagination('option','currentPage');//获取当前页码
					var newCurrentPage = Math.ceil(((currentPage-1) * pagination.perPageRecord + 1)/perPageRecord);
					//设置分页
					pagination.perPageRecord = perPageRecord;
					self.setPagination(pagination);
					setting.callback.call({},newCurrentPage, perPageRecord);//执行行数改变时回调。
					//表格高度为auto时需要设置高度
					if(self.options.height == "auto"){
						self.$domCache.$tableTbody.height(self.$domCache.$tableTbody.children().height());
					}
				});
			}
			if(_define.customIndex >= 0){//有表格定制
				//创建表格定制节点
			var $customBuiltTable = $('<div class="custom-built-table-dialog"><div class="custom-built-table">'+
				'<div class="custom-built-table-tip ue-text-level3"><span class="uew-icon2 uew-icon2-tip"></span><label>小贴士：</label>直接点选您想定制的列，再次点击表示取消选择</div>'+
				'<h6>'+
					'选择我要定制的列'+
					'<span class="ue-text-level3">(共<span class="impInfo"></span>列，已选<span class="impInfo uew-dialog-selected">0</span>列，最佳显示6-8列)</span>'+
					'<a href="javascript:;" class="ue-state-default defaultSequence">'+
						'<span class="uew-icon uew-icon-circle-arrow-west"></span>还原至系统默认'+
					'</a>'+
				'</h6></div></div>');
				this.$domCache.$customTable = $customBuiltTable;
				this._createBuiltCol($customBuiltTable);
				this._createBuiltColSelected($customBuiltTable);
			}
			
		},
		_createBuiltCol : function($customBuiltTable){
			var $customBuiltCol = $('<div class="built-table-col">'+
				'<div class="built-table-lshadow"></div>'+
				'<div class="built-table-tshadow"></div>'+
				'<ul class="uew-scroll-webkit"></ul>'+
			'</div>');
			$customBuiltCol.append($('<a href="javascript:;" class="__builtSwitch ue-state-default built-table-switchBtn">'+
					'点击切换到排序模式'+
				'</a>'
			));
			$customBuiltTable.find(".custom-built-table").append($customBuiltCol);
		},
		
        _createBuiltColSelected : function($customBuiltTable){
			 var $customBuiltColSelected = $('<div class="built-table-colSelected" style="display:none;">'+
				'<div class="built-table-lshadow"></div>'+
				'<div class="built-table-tshadow"></div>'+
				'<ul class="built-table-colBg"></ul>'+
			'</div>');
			var bgLi = [];
			for(var i = 1;i <= 40;i++){
				if(i < 10){
					i = "0" + i;
				}
				bgLi.push('<li>' + i + '</li>');
			}
			$customBuiltColSelected.find(".built-table-colBg").append(bgLi.join(''));
			$customBuiltColSelected.append($('<ul class="built-table-selected"></ul>'));
			$customBuiltColSelected.append($('<a href="javascript:;" class="ue-state-default built-table-switchBtn">'+
					'点击切换到选择列模式'+
				'</a>'));
			$customBuiltTable.find(".custom-built-table").append($customBuiltColSelected);
		},
		/*
		 * 初始化表格数据
		 * @param {Array} data_  表格体数据
		 * @param {Array} head_  表格头部数据
		 */
		setData : function(data_, head_){
			var options = this.options, $el = this.element, _define = this._define, data = [], head = [];
			$.extend(true, data, data_);
			options.tableBody = data;
			if(head_ && head_.length){//有头部数据
				$.extend(true, head, head_);
				if(this._isType(head[0], "Object")){
					//计算表格头部各列宽度
					_define.tableWidth = this._calculateWidth(head);//记录表格的实际宽度
					//更新表头数据
					options.tableHead = _define.tableHead = head;
					//如果有表格定制
					if(_define.customIndex >= 0){
						//获取需要展示的列
						this._getTableHead(options, _define.customIndex, _define.currentSequence);
						this._setCustomPanelData(head, _define.currentSequence);
					}
				}else if(this._isType(head[0], "Number")){
					_define.sequence = head;
					if(!options.settings[_define.customIndex].defaultSequence && options.tableHead){
						options.settings[_define.customIndex].defaultSequence = this._getAllSequence();
					}
					this._getTableHead(options,_define.customIndex,_define.sequence);//重新计算
				}
				//绘制表格头部
				this._setTableHeadData($el,_define);
					
				options.widthResize && this._dragTable($el,options);
				
			}
			//根据情况，控制显隐。
			this._controlShowOrHide($el,options);
			if(options.tableBody && options.tableBody.length){
				_define.operatorData = [];
				this._setTableBodyData($el,data);
				this._bindTableEvent();
				this._adjustTable($el, options);
			}else{
				var currentTableWidth = _define.tableWidth + _define.blankWidth + 6;
				this.$domCache.$tableScroll.show().children().width(currentTableWidth);
			}
			$el.find('.uew-table-thead').find('input[type=checkbox]').attr('checked',false);
		},
		_getTableHead : function(options,index,sequence){
			/**根据tableHead和表格定制的序列来获取表头内容**/
			var tempHead = [], tempWidth = 0, _define = this._define;
			for(var j = 0,k = sequence.length; j < k; j++){
				tempHead.push(options.tableHead[sequence[j]]);
				tempWidth += (options.tableHead[sequence[j]].width+1);
			}	
			_define.tableWidth = tempWidth;
			if(tempHead.length){
				_define.tableHead = tempHead;//实际需要展示的表格列
			}
		},
		_calculateWidth : function(tableHead){
			//===============如果没有传递width,为每一列设置默认宽度为100=============
			var options = this.options;
			var tempTotalWidth = 0;
			if(options.headCount == 1){
				for (var i = 0,j = tableHead.length; i < j; i++) {
					var tempObj = tableHead[i];
					if (!tempObj.width && !tempObj.minWidth) {//增加对minWidth支持 add 2013-5-27
						tableHead[i].width = 100;
					}else if(tempObj.minWidth){
						tableHead[i].width = tempObj.minWidth;
					}
					var tempdiv = $('<div></div>');//新增解决头为html节点时bug
					tempdiv.html((tempObj.label));
					var text = tempdiv.text();
					if (tempObj.width < (text.length * 14 + 31)) {
						tableHead[i].width = text.length * 14 + 31;
					}
					tempTotalWidth += (tempObj.width+1);
				}
			}else{
				var length = 0, _define = this._define;//记录双头表格实际展示的列.
				_define.headData = [];
				for(var i = 0,j = tableHead.length; i < j; i++){
					var children = tableHead[i].children;
					var width = tableHead[i].width;
					var childTotalWidth = 0;
					if(children){
						for(var k = 0;k<children.length;k++){
							length++;
							var childWidth = children[k].width;
							if(!childWidth && !children[k].minWidth){//增加对minWidth支持 add 2013-5-27
								childWidth = 100;	
							}else if(children[k].minWidth){
								childWidth = children[k].minWidth;
							}
							if (childWidth < children[k].label.length * 14 + 31) {
								childWidth = children[k].label.length * 14 + 31;
							}
							childTotalWidth += (parseInt(childWidth,10)+1);
							children[k].width = childWidth;
							_define.headData.push(children[k]);
						}
					}else{
						length++;
						if(tableHead[i].minWidth){
							tableHead[i].width	= tableHead[i].minWidth;
						}
						_define.headData.push(tableHead[i]);
					}
					
					width = width > childTotalWidth ? width : childTotalWidth;
					tableHead[i].width = width; 
					tempTotalWidth += width;
				}

				_define.headCountLength = length;
			}
			return tempTotalWidth;	
		},
		/*
		 * 填充定制弹窗的数据
		 */
		_setCustomPanelData : function(tableHead,sequence){
			var tempLi = [], $customTable = this.$domCache.$customTable, self = this, options = this.options, $el = this.element;
			this._define.tempSequence = self._copyArray(sequence);
			for(var i = 0,j = tableHead.length;i < j;i++){
				var tempdiv = $('<div></div>');//新增解决头为html节点时bug
				tempdiv.append(tableHead[i].label);
				var text = tempdiv.text();
				if($.inArray(i,sequence) >= 0){
					tempLi.push('<li class="ue-state-selected">' + text + '</li>');
				}else{
					tempLi.push('<li>' + text + '</li>');
				}
				
			}
			$customTable.find('.impInfo').eq(0).text(tableHead.length);
			$customTable.find('.uew-dialog-selected').text(sequence.length);
			$customTable.find('.built-table-col').find("ul").empty().append(tempLi.join(''));	
			this._initSequence();
			//绑定恢复默认事件
			$customTable.find('.defaultSequence').click(function(){
				var _define = self._define, $selected = $customTable.find('.uew-dialog-selected');
				var sequence = _define.sequence = self._copyArray(options.settings[_define.customIndex].defaultSequence);
				_define.tempSequence = self._copyArray(_define.sequence);
				$customTable.find('.built-table-col').find('li').removeClass('ue-state-selected');
				for(var i = 0,k = sequence.length; i < k; i++){
					$customTable.find('.built-table-col').find('li').eq(sequence[i]).addClass('ue-state-selected');//重新绘制选中的元素
				}
				$selected.text(sequence.length);
				self._initSequence(sequence);
				
			});
			var $builtTableCol = $customTable.find(".built-table-col");
			var switchFlag = false;
			$customTable.find(".built-table-switchBtn").click(function(){
				if(switchFlag){
					$builtTableCol.show();
					$customTable.find(".built-table-colSelected").hide();
					switchFlag = false;
				}else{
					$builtTableCol.hide();
					$customTable.find(".built-table-colSelected").show();
					switchFlag = true;
				}
			});
			
			$customTable.find(".built-table-col").find("li").click(function(e){
				var sequence = self._define.sequence, $selected = $customTable.find('.uew-dialog-selected');
				if($(this).hasClass("ue-state-selected") && $builtTableCol.find('.ue-state-selected').size() > 1){//至少要保存一个。
					$(this).removeClass("ue-state-selected");
					
					$selected.text(parseInt($selected.text(),10)-1);
					//移除
					self._define.tempSequence = self._copyArray(self._define.tempSequence.remove($(this).index()));
				}else if(!$(this).hasClass("ue-state-selected") && self._define.tempSequence.length < 40){
					$(this).addClass("ue-state-selected");
					
					$selected.text(parseInt($selected.text(),10)+1);
					//新增
					self._define.tempSequence.push($(this).index());
				}
				self._initSequence(self._define.tempSequence);
			});
			
			if(!this.$dialog){
				$("body").append($customTable);
				this.$dialog = $customTable.uedDialog({
					title : "表格定制", 
					width : 632,
					height : 470,
					modal : false,                  //是否有遮罩,默认为true
					position:['center',$(window).scrollTop() + $(window).height()/2 - $customTable.height()/2-30],            	 //弹窗在屏幕中的位置，默认为居中。
					autoOpen:false,                 //默认弹窗是否打开，默认为false
					buttons : [{
						"label" : "确定",
						recommend : true,       //按钮是否为推荐点的按钮
						callBack : function($dialog, $mask) {
						   if(self._define.currentSequence.toString() != self._define.tempSequence.toString()){//增加判断定制信息是否改变
							 var currentPage = $(".uew-pagination",$el).uedPagination('option','currentPage');
							 self._define.currentSequence = self._copyArray(self._define.tempSequence);
							 options.settings[self._define.customIndex].callback(self._define.currentSequence,currentPage);
						   }
						   $customTable.uedDialog('close');
						}
					}, {
						"label" : "取消",
						callBack : function($dialog, $mask) {
						   $customTable.uedDialog('close');
						}
					}]
				});
				
			}
			
		},
		_initSequence : function(sequence){
			var $el = this.element, options = this.options, self = this, tableHead = this._define.tableHead, sequence = sequence || this._define.currentSequence, $customTable = this.$domCache.$customTable;	
			var $builtTableColSelected = $customTable.find(".built-table-colSelected");
			var $builtTableSelected = $builtTableColSelected.children(".built-table-selected");
			$builtTableSelected.empty();
			var sequenceLi = [];
			for(var i = 0;i < sequence.length;i++){
				var tempdiv = $('<div></div>');//新增解决头为html节点时bug
				tempdiv.html((options.tableHead[sequence[i]].label));
				var text = tempdiv.text();
				sequenceLi.push('<li position=' + i + ' sequence=' + sequence[i] + '>'+
					'<a href="javascript:;" title="' + text + '">'+
						'' + text + '<span class="ue-state-default">'+
							'<span class="uew-icon uew-icon-close"></span>'+
						'</span>'+
					'</a>'+
				'</li>');
			}
			$builtTableSelected.append(sequenceLi.join(''));
			//绑定事件
			$builtTableSelected.find("a").on("mousedown",downHandler);
			
			function downHandler(mde){
				mde.preventDefault();
				if($(mde.target).hasClass('ue-state-default') || $(mde.target).hasClass('uew-icon-close')){
					return false;
				}
				var $dragging = $(this);
				$dragging.addClass("ue-state-focus");
				$dragging.parent("li").css("position","relative").css("z-index","10");
				/**增加对IE的支持**/
				$builtTableColSelected.bind("mousemove",function(mme){
					mme.preventDefault();
					$dragging.offset({
						left : mme.clientX - mde.offsetX,
						top : mme.clientY - mde.offsetY
					});						
				});
				$dragging.bind("mouseup",function(mue){
					$builtTableColSelected.unbind("mousemove");
					
					var relativeX = $dragging.offset().left - $builtTableColSelected.offset().left;
					var relativeY = $dragging.offset().top - $builtTableColSelected.offset().top;									
					
					var targetPosition = parseInt(relativeX / options.cellWidth,10) +  parseInt(relativeY / options.cellHeight,10) * 4;
					var maxPosition = $builtTableSelected.find('li').size()-1;
					targetPosition = targetPosition > maxPosition ? maxPosition : targetPosition;
					self._adjustAttrPosition($dragging.parent("li").attr("position"),targetPosition,$builtTableSelected);
					if($builtTableSelected.find('li').size() == 1){
						targetPosition = 0;
					}
					$dragging.parent("li").attr("position",targetPosition);
					self._adjustPosition(true);
					
					$dragging.css("left",0).css("top",0).unbind("mouseup").removeClass("ue-state-focus").parent("li").css("z-index","1");
					
					var adjustSequence = [];
					
					$builtTableSelected.find('li').each(function(i){
						$builtTableSelected.find('li').each(function(){
							if($(this).attr("position") == i){
								adjustSequence.push(parseInt($(this).attr("sequence")));
							}
						});
					})
					self._define.tempSequence = adjustSequence;
				});
			};
			
			self._adjustPosition(false);
			$builtTableSelected.off('click.uedGrid');
			$builtTableSelected.on('click.uedGrid','span',function(){//添加排序界面删除选中的项事件。
				var $li = $(this).parents('li'), sequence = self._define.tempSequence, $customBuiltCol = $customTable.find('.built-table-col');
				var index = $li.index();
				if($builtTableSelected.find('li').size() > 1){
					$li.remove();
					self._define.tempSequence = self._copyArray(sequence.remove(sequence[index]));
					self._initSequence(self._define.tempSequence);
					$customBuiltCol.find('li').eq(sequence[index]).removeClass('ue-state-selected');
					var $selected = self.$domCache.$customTable.find(".impInfo").eq(1);
					$selected.text(parseInt($selected.text(),10)-1);
				}
				return false;	
			});
		},
		/**初始化表格定制弹窗**/
		_initCustomPanel : function($customTable){
			var sequence = this._define.currentSequence;
			$customTable.find(".built-table-col").find("li").removeClass("ue-state-selected")
			for(var j = 0, sequceLength = sequence.length; j < sequceLength; j++){
				$customTable.find(".built-table-col").find("li").eq(sequence[j]).addClass("ue-state-selected");
			}
			
			this._initSequence(sequence);
		},
		_adjustPosition : function(isAnimation){
			var options = this.options, $customTable = this.$domCache.$customTable;
			options.eachWidth = 102;
			options.eachHeight = 26;
			options.cellWidth = 146;
			options.cellHeight = 35;
			var $builtTableColSelected = $customTable.find(".built-table-colSelected");
			$builtTableColSelected.children(".built-table-selected").children("li").each(function(i){
				var top = parseInt($(this).attr("position") / 4, 10);
				var left = parseInt($(this).attr("position") % 4, 10);
				if(isAnimation){
					$(this).animate({
						top : top * options.cellHeight,
						left : left * options.cellWidth
					},500).css("position" , "absolute");	
				}else{
					$(this).css({top : top * options.cellHeight,left : left * options.cellWidth,"position":"absolute"});
				}
				
			})
		},
		_adjustAttrPosition : function(startIndex,endIndex,$builtTableSelected){

			if(startIndex == 0 && $builtTableSelected.find('li').size() == 1){
				$builtTableSelected.find('li').attr('position',0);
				return;
			}
			var self = this;
			//··被拖拽图标的序列号 > 目标图标的序列号（图标向前面移动）
			if(startIndex > endIndex){
				for(var i = startIndex - 1;i >= endIndex;i--){//循环此范围内所有的图标
					//··使目标图标后面的每一个图标（除去被拖拽图标）的序列号都加1
					var $temp = self._getLiByPosition(i,$builtTableSelected);
					$temp.attr("position",i + 1);
				}
			}
			//··被拖拽图标的序列号 < 目标图标的序列号（图标向后面移动）
			else if(startIndex < endIndex){
				for(var i = startIndex;i <= endIndex;i++){//循环此范围内所有的图标
					//··使被拖拽图标后面的每一个图标（包括目标图标）的序列号都减1
					self._getLiByPosition(i,$builtTableSelected).attr("position",i - 1);
				}
			}else{
				return;
			}
		},
		_getLiByPosition : function(position, $builtTableSelected){
			var $target;
			$builtTableSelected.find('li').each(function(){
				if($(this).attr("position") == position){
					$target = $(this);
				}
			});
			return $target;
		},
		/*
	     * 设置表格头部数据
		 */
		_setTableHeadData : function($el, _define){
			var options = this.options, tableHead = _define.tableHead;
			this.$minWidthTh = null;
			if(options.headCount == 1){
				var $tableHeadTr = $el.find('.__theadMain tr').empty(), $tableMainHead = $el.find('.__tbodyMain thead').empty().append("<tr></tr>").find('tr'),thArr = [];
				for(var i = 0,len = tableHead.length; i<len; i++){
					var $th = $('<th><div class="uew-table-th" style="width:' + (tableHead[i].width-30) + 'px"><span class="uew-table-thTitle">'+tableHead[i].label+'</span></div></th>');
					
					if(tableHead[i].sortable == "default"){
						$('<a href="javascript:;" class="uew-icon2 uew-icon2-sort"></a>').insertAfter($th.find('.uew-table-thTitle'));
					}else if(tableHead[i].sortable == "desc"){
						$('<a href="javascript:;" class="uew-icon2 uew-icon2-sort-desc"></a>').insertAfter($th.find('.uew-table-thTitle'));
					}else if(tableHead[i].sortable == "asc"){
						$('<a href="javascript:;" class="uew-icon2 uew-icon2-sort-asc"></a>').insertAfter($th.find('.uew-table-thTitle'));
					}
					if(options.widthResize){
						$th.children().append('<span class="uew-table-drag"></span>');
					}
					if(tableHead[i].name){
						$th.attr('name',tableHead[i].name);
					}
					if(tableHead[i].minWidth){
						$th.addClass('minWidth');

						this.$minWidthTh = $th;
						this.$minWidthTh.width = tableHead[i].width - 30;
					}
					$tableHeadTr.append($th);
					$tableMainHead.append($th.clone());//插入到表格体中的head
				}
				$tableHeadTr.append('<th class="uew-table-blank">&nbsp;</th>');
				$tableMainHead.append('<th class="uew-table-blank">&nbsp;</th>');//插入到表格体中的head
			}else if(options.headCount == 2){
				var $tableHead = $el.find('.__theadMain thead'),$tableMainHead = $el.find('.__tbodyMain thead').empty();
				$el.find('.__theadMain tr').empty();
				$el.addClass("uew-table-doubleTh");
				$tableHead.append('<tr class="uew-table-secondHd"></tr>');
				var indexCount = 0, $thObj1 = $tableHead.find('tr').eq(0), $thObj2 = $tableHead.find('tr').eq(1);
				for(var i = 0;i < tableHead.length;i++){
					if(tableHead[i].children){
						$thObj1.append('<th colspan="' + tableHead[i].children.length + '"><div class="uew-table-th"><span class="uew-table-thTitle">' + tableHead[i].label + '</span><a href="javascript:;"></a></div></th>');
						for(var j = 0;j < tableHead[i].children.length;j++){
							var childrenData = tableHead[i].children[j];
							$thObj2.append('<th indexCount="' + indexCount++ + '"><div class="uew-table-th"><span class="uew-table-thTitle">' + childrenData.label + '</span><a href="javascript:;"></a></div></th>');
							var $th = $thObj2.find('th:last');
							if(childrenData.sortable == "default"){
								$('<a href="javascript:;" class="uew-icon2 uew-icon2-sort"></a>').insertAfter($th.find('.uew-table-thTitle'));
							}else if(childrenData.sortable == "desc"){
								$('<a href="javascript:;" class="uew-icon2 uew-icon2-sort-desc"></a>').insertAfter($th.find('.uew-table-thTitle'));
							}else if(childrenData.sortable == "asc"){
								$('<a href="javascript:;" class="uew-icon2 uew-icon2-sort-asc"></a>').insertAfter($th.find('.uew-table-thTitle'));
							}
							if (childrenData.name) {
								$th.attr("name", childrenData.name).children().css('width',childrenData.width-30);
							}
							if(childrenData.minWidth){
								$th.addClass('minWidth');
								this.$minWidthTh = $th;
								this.$minWidthTh.width = childrenData.width-30;
							}
						}
					}else{
						$thObj1.append('<th rowspan="2" indexCount="' + indexCount++ + '"><div class="uew-table-th"><span class="uew-table-thTitle">' + tableHead[i].label + '</span><a href="javascript:;"></a></div></th>');
						var $th = $thObj1.find('th').eq(i);
						if (tableHead[i].name) {
							$th.attr("name", tableHead[i].name).children().css('width',tableHead[i].width-30);
						}
						if(tableHead[i].minWidth){
							$th.addClass('minWidth');
							this.$minWidthTh = $th;
							this.$minWidthTh.width = tableHead[i].minWidth-5;
						}
					}
				}  
				$thObj1.append('<th rowspan="2" class="uew-table-blank">&nbsp;</th>');
				$tableMainHead.append($thObj1.clone());//插入到表格体中的head  
				$tableMainHead.append($thObj2.clone());//插入到表格体中的head  
				
			}
		},
		/*
         * 设置表格体数据
		 */
		_setTableBodyData : function($el, tableBody, isNoEmpty){
			var _define = this._define,tableHead = this._define.tableHead, options = this.options;
			if(!isNoEmpty){
				var $tableMainData =  $el.find('.__tbodyMain .__data').empty();
			}else{
				var $tableMainData =  $el.find('.__tbodyMain .__data');
			}
			
			if(options.headCount == 2){
				tableHead = _define.headData;	
			}
			for(var i = 0,rowLen = tableBody.length;i < rowLen; i++){//行遍历
				var rowData = tableBody[i];//记录每一行的数据
				var $tr = $('<tr></tr>'),tdArr = [];	
				for(var j = 0, fieldLen = tableHead.length; j < fieldLen; j++){
					var tableHeadJ = tableHead[j];
					if(tableHead[j].minWidth){
						if(tableHeadJ.name){
							tdArr.push('<td minWidth="minWidth" name="'+ tableHeadJ.name +'"><div class="uew-table-td" style="width:'+ (tableHeadJ.width -16) +'px">'+ rowData[j] +'</div></td>');
						}else{
							tdArr.push('<td minWidth="minWidth"><div class="uew-table-td" style="width:'+ (tableHeadJ.width -17) +'px">'+ rowData[j] +'</div></td>');
						}
						
					}else{
						if(tableHeadJ.name){
							tdArr.push('<td name="'+ tableHeadJ.name +'"><div class="uew-table-td" style="width:'+ (tableHead[j].width -17) +'px">'+ rowData[j] +'</div></td>');
						}else{
							tdArr.push('<td><div class="uew-table-td" style="width:'+ (tableHead[j].width -17) +'px">'+ rowData[j] +'</div></td>');
						}
						
					}
					
				}
				tdArr.push('<td class="uew-table-blank"><div class="uew-table-td"></div></td>');
				$tr.append(tdArr.join(''));
				$tableMainData.append($tr);
			}
		
		
			if(options.checkbox){//如果有checkbox则创建checkbox区域
				this._createTbodyFront($el, options, tableBody, isNoEmpty);
			}
			
			if(options.operator){
				this._createTableBodyFinal($el, options, tableBody, isNoEmpty);
			}
		},
		/*
		 * 创建表格首列固定区域（checkbox区域）
		 */
		_createTbodyFront : function($el, options, tableBody, isNoEmpty){
			var $tbodyFront = $el.find('.__tbodyFront'), isDisable = options.checkbox.disable;
			if(!isNoEmpty){
				var  $tbody = $tbodyFront.find('tbody').empty();
			}else{
				var $tbody = $tbodyFront.find('tbody');
			}
			var trArray = [];
			for(var i = 0, len = tableBody.length;i < len;i++){
				if(isDisable){
					trArray.push('<tr attr="38"><td class="uew-table-checkbox"><input type="checkbox" disabled="disabled"></td></tr>');
				}else{
					trArray.push('<tr attr="38"><td class="uew-table-checkbox"><input type="checkbox"></td></tr>');
				}
			}
			$tbody.append(trArray.join(''));
			if(!isNoEmpty){
				this._bindCheckboxEvent($el, $tbodyFront);
			}
		},
		/*
		 * 创建表格尾列固定区域(operator区域)
		 */
		_createTableBodyFinal : function($el, options, tableBody ,isNoEmpty){
			var $tbodyFinal = this.$domCache.$tbodyFinal, isPanel = options.operator.type == 'panel', _define = this._define;
			if(!isNoEmpty){
				var  $tbody = $tbodyFinal.find('tbody').empty();
			}else{
				var $tbody = $tbodyFinal.find('tbody');
			}
			var trArray = [];
			
			for(var i = 0, len = tableBody.length;i < len;i++){
				var optArray = tableBody[i][tableBody[i].length - 1];
				_define.operatorData.push(optArray);
				if(isPanel){//操作板情况
					if(this._isType(optArray,'Array')){
						trArray.push('<tr attr="38"><td class="uew-table-operation"><a href="javascript:;" class="ue-state-default __operatorPanelBtn" operindex="'+ i +'"><span class="uew-icon uew-icon-circle-triangle-s"></span></a></td></tr>');
						
					}else{
						trArray.push('<tr attr="38"><td class="uew-table-operation"><span></span></td></tr>');
					}
				}else{//非操作板情况
					if(this._isType(optArray,'Array')){
						var optList = [];
						for(var j = 0,optLen = optArray.length;j < optLen; j++){
							if(optArray[j].disable){
								optList.push('<a href="javascript:;" class="ue-state-disable">'+ optArray[j].label +'</a>');
							}else{
								optList.push('<a href="javascript:;">'+ optArray[j].label +'</a>');
							}
						}
						trArray.push('<tr attr="38"><td class="uew-table-operation">'+ optList.join('') +'</td></tr>');
					}else{
						trArray.push('<tr attr="38"><td class="uew-table-operation"><span></span></td></tr>');
					}
				}
			}
			$tbody.append(trArray.join(''));
			this._createRightOperatorAndBindEvent(isPanel, $tbody, _define.operatorData);
		},
		/*
		 * 生成操作板节点及绑定事件
		 */
		_createRightOperatorAndBindEvent : function(isPanel,$tbody,operatorData){
			var $el = this.element, options = this.options, self = this, $domCache = this.$domCache;
			if (isPanel) {
				var $operatorBtn = $tbody.find('.__operatorPanelBtn');
				var $operatorPanel = $('<div class="__operatorPanel"></div>');
				$domCache.$operatorPanel = $operatorPanel;
				$('body').append($operatorPanel);
				var operatorOptions = {
					data : [
						{id : 0,pid : -1},
						{id : 1,pid : 0,label : "编辑"}
					],
					position : [12,12],
					opter : [$operatorBtn],
					close : function(){
						$operatorBtn.removeClass('ue-state-current');	
					},
					getObj : function(obj){
						obj.onclick($el, [parseInt(obj.index)]);
					}
				};
				$operatorPanel.uedOptPanel(operatorOptions);
				$operatorBtn.bind("click", function() {
					var operIndex = $(this).attr("operIndex");
					var operArr = operatorData[operIndex];
					var data = [
						{id : 0,pid : -1}
					]
					for(var i = 0;i < operArr.length;i++){
						if(!operArr[i]){continue;}
						var dataObj = {};
						dataObj.id = (i + 1);
						dataObj.pid = 0;
						if(operArr[i].icon){
							var labelHtml = '<span class="' + operArr[i].icon + '"></span>' + operArr[i].label;
						}else{
							var labelHtml = operArr[i].label;
						}
						dataObj.label = labelHtml;
						dataObj.index = operIndex;
						dataObj.onclick = operArr[i].onclick;
						data.push(dataObj);
					}
					$operatorBtn.removeClass('ue-state-current');
					$(this).addClass('ue-state-current');
					$operatorPanel.uedOptPanel("setData",data);
					//计算操作板的位置，优先向下，下面空间不够转为向上。
					if((($(window).height()+$(window).scrollTop())-$(this).offset().top-10) > $operatorPanel.outerHeight()){
						var tempTop = $(this).offset().top+16;
					}else{
						var tempTop = $(this).offset().top - $operatorPanel.outerHeight();
					}
					$operatorPanel.uedOptPanel("setPosition", ($(this).offset().left)-($operatorPanel.outerWidth()-45), tempTop);
					$operatorPanel.uedOptPanel("open");
				});
			}else{//非面板
				var $a = $tbody.find('a');
				$a.unbind('click');
				$a.bind('click',function(){
					if(!$(this).hasClass('__operatorPanelBtn')){
						var indexTr = $(this).parents('tr').index();
						var indexA = $(this).index();
						var bodyData = operatorData[indexTr];
						var funArray = bodyData[indexA];
						funArray.onclick($el,[parseInt(indexTr)]);
					}
				});
			}
		},
		_bindCheckboxEvent : function($el, $tbodyFront){
			var checkedLen = 0, $theadInput = $el.find('.uew-table-thead').find('input[type=checkbox]');
			$tbodyFront.click(function(e) {
                var $target = $(e.target),len = $tbodyFront.find('tbody').find('input[type=checkbox]').size();
				if($target.is('input')){
					
					if($target.attr('checked')){
						checkedLen++;
					}else{
						checkedLen--;
					}

					if(checkedLen == len){
						$theadInput.attr('checked',true);
					}else{
						$theadInput.attr('checked',false);
					}
				}
            });
			$theadInput.click(function(){//绑定事件，全选，全部不选事件
				var $tbodyInput = $tbodyFront.find('tbody').find('input[type=checkbox]').not(':disabled');
				var len = $tbodyInput.size()
				if($(this).attr('checked')){
					$tbodyInput.attr('checked',true);
					checkedLen = len;
				}else{
					$tbodyInput.attr('checked',false);
					checkedLen = 0;
				}
			});	
			
		},
		/*
         * 绑定表格事件
		 */
		_bindEvent : function($el, options){
			var self = this, $domCache = this.$domCache, $customTable = $domCache.$customTable;
			//表格操作条事件
			$el.find(".uew-table-optBar").on("click.uedGrid",'button', function() {
				if (!$(this).hasClass("ue-state-disable")) {
					if ($(this).parent().hasClass("uew-table-optBar")) {
						options.options[$(this).index()].callback.call(null,$el, self.getCheckedIndex());
					} else {
						if(!$(this).hasClass('__customBtn')){
							options.settings[self._define.fullScreenIndex].callback.call();
						}else{
							$customTable.uedDialog("setPosition",'center',$(window).scrollTop() + window.innerHeight/2 - $customTable.height()/2-30);
							self._initCustomPanel($customTable);
							$customTable.uedDialog('open');
						}
					}
				}
			});

			//表格头跟着滚动
			$domCache.$tableScroll.bind("scroll.uedGrid",function() {
				$el.find(".uew-table-main table").css("margin-left", 0 - $(this).scrollLeft());
			});
			
			$el.find('.uew-table-tbody').bind('scroll.uedGrid',function(){
				if($domCache.$operatorPanel){
					$domCache.$operatorPanel.uedOptPanel('close');
				}	
			});
			
			this._uedResize(self._tableResize);
		},
		_bindTableEvent : function(){
			var $el = this.element, self = this, options = this.options;
			//点击排序返回index值
			$el.find(".__theadMain").find(".uew-icon2").each(function(i) {
				$(this).unbind("click");
				$(this).bind("click", function() {
					if(self.isLoadding){
						return false;
					}
					$el.find(".__theadMain").find(".uew-icon2").not($(this)).removeAttr("class").addClass("uew-icon2 uew-icon2-sort");
					var tmpname = $(this).parent().parent("th").attr("name");
					if(!options.defaultSortType || options.defaultSortType == 'desc'){

						if($(this).hasClass("uew-icon2-sort-desc")){
							$(this).removeClass("uew-icon2-sort-desc").addClass("uew-icon2-sort-asc");
							self._trigger("sortCallBack", event, tmpname, (i + 1), "asc",$el);
						}else{
							$(this).removeClass("uew-icon2-sort-asc").addClass("uew-icon2-sort-desc");
							self._trigger("sortCallBack", event, tmpname, (i + 1), "desc",$el);
						}
					}else{
						
						if($(this).hasClass("uew-icon2-sort-asc")){
							$(this).removeClass("uew-icon2-sort-asc").addClass("uew-icon2-sort-desc");
							self._trigger("sortCallBack", event, tmpname, (i + 1), "desc",$el);
						}else{
							$(this).removeClass("uew-icon2-sort-desc").addClass("uew-icon2-sort-asc");
							self._trigger("sortCallBack", event, tmpname, (i + 1), "asc",$el);
						}
					}
					if(self.paginationObj){
						self.paginationObj.currentPage = 1;
						self.setPagination(self.paginationObj);
					}
				});
			});	
		},
		/*
 		 * 调整表格宽高等
		 */
		_adjustTable : function($el, options){
			$el.find(".__tablescroll").scrollLeft(0);
			$el.find(".uew-table-main table").css("margin-left", 0);
			this._adjustWidth($el);
			this._adjustHeight($el, options);
			this._adjustOperator($el, options);
		},
		/*
		 * 调整表格宽度
		 */
		_adjustWidth : function($el){
			var options = this.options, _define = this._define, $blankTh = $el.find('th.uew-table-blank'),$blankTd = $el.find('td.uew-table-blank'),$domCache = this.$domCache,$tableTbody = $domCache.$tableTbody, $tbodyFront = $domCache.$tbodyFront, $tbodyFinal = $domCache.$tbodyFinal;
						
			_define.currentTableWidth = _define.tableWidth + _define.blankWidth + 6;//记录表格的实际宽度即为当前宽度
			var $tableMain = $el.find('.__tbodyMain');
			var tableMainWidth = $el.find('.uew-table-tbody').width();
			//判断是否有垂直滚动条
			if($tableTbody.height() < $tableTbody.children().height() && options.height != 'auto'){
				$el.addClass('uew-table-hasScroll');
			}else{
				$el.removeClass('uew-table-hasScroll');
			}
			
			if(!-[1,]){//IE宽度处理流程
				
				if($el.hasClass('uew-table-hasScroll')){
					tableMainWidth -= 17;
				}
			}
			if(options.checkbox){
				tableMainWidth -= $tbodyFront.width();
			}
			if(options.operator){
				if(options.operator.width){
					tableMainWidth -= options.operator.width;
				}else{
					tableMainWidth -= $tbodyFinal.width();
				}
				
			}
			$tableMain.width(tableMainWidth);
			
			$blankTh.width(_define.blankWidth).attr('width',_define.blankWidth);
			$blankTd.width(_define.blankWidth);
			
			var tempWidth = tableMainWidth - _define.currentTableWidth;
			if(this.$minWidthTh){//如果有minWidth
				var $uewTableMinTh = $el.find('.minWidth').find('.uew-table-th'), reaWidth = $uewTableMinTh.width();
				if(tempWidth > 0){//无水平滚动条,将tempWidth的值给minWidth

					$uewTableMinTh .width( tempWidth + this.$minWidthTh.width );
					//更新当前表格实际宽度
					_define.currentTableWidth += tempWidth;
					var tempMinWidth = $el.find('.__theadMain').find('th.minWidth').children().width();
					$el.find('td[minWidth]').each(function(){
						$(this).children().width(tempMinWidth+14);
					});
					$domCache.$tableScroll.hide();//隐藏滚动条
					$domCache.$division.removeClass('uew-table-hScroll');
				}else{
					$uewTableMinTh.width(this.$minWidthTh.width);
					var tempMinWidth = $el.find('.__theadMain').find('th.minWidth').children().width();
					$el.find('td[minWidth]').each(function(){
						$(this).children().width(tempMinWidth+14);
					});
					$domCache.$tableScroll.show().children().width(_define.currentTableWidth);
					$domCache.$division.addClass('uew-table-hScroll');
				}
			}else{//无minWidth，所有的多余宽度都给空白列
				if(tempWidth > 0){ //无水平滚动条，直接将tempWidth的值给空白列
					$blankTh.width(tempWidth + _define.blankWidth + 6);
					$blankTd.width(tempWidth + _define.blankWidth + 6);//宽度为订制宽度加多余宽度
					var blankWidthTemp = tempWidth + _define.blankWidth + 6
					$el.find('.uew-table-blank').attr('width', blankWidthTemp);
					$domCache.$tableScroll.hide();
					$domCache.$division.removeClass('uew-table-hScroll');
				}else{
					$domCache.$tableScroll.show().children().width(_define.currentTableWidth);
					$domCache.$division.addClass('uew-table-hScroll');
				}
			}
			_define.width = $el.width();
		},
		
		_adjustOperator : function($el, options){
			var $tableTbody = this.$domCache.$tableTbody;
			if(options.operator){//只有当操作为normal生效
				var $tableScroll = this.$domCache.$tableScroll;
				if(options.operator.type == "normal"){
					//无滚动条
					$el.find(".__tbodyFinal,.__tbodyFinal table,.__theadFinal,.__theadFinal table").width(options.operator.width - 1).find(".uew-table-operation").width(options.operator.width - 6);
					$el.find(".uew-table-main").css("right",options.operator.width);
					$tableScroll.css("margin-right",options.operator.width);
					if($el.hasClass("uew-table-hasScroll") && options.height != 'auto'){
						var UA = navigator.userAgent.toLowerCase();
						if (/webkit/i.test(UA)){
							$el.find(".__theadFinal,.__theadFinal table").width(options.operator.width + 9);
							$el.find(".__theadMain").css("right",options.operator.width + 10);
							$el.find(".__tbodyMain").css("right",options.operator.width);
							$tableScroll.css("margin-right",options.operator.width + 10);
						}else{
							$el.find(".__theadFinal,.__theadFinal table").width(options.operator.width + 16);
							$el.find(".__theadMain").css("right",options.operator.width + 17);
							$el.find(".__tbodyMain").css("right",options.operator.width);
							$tableScroll.css("margin-right",options.operator.width + 17);
						}
					}
				}else{
					if(!-[1,] && $el.hasClass("uew-table-hasScroll")){
						$tableScroll.css("margin-right",69);
					}	
				}
				if(options.height == "auto"){
					if(!options.tableBody || options.tableBody.length == 0){
						$tableTbody.show().height(200);
					}else{
						$tableTbody.height($tableTbody.children().height());
					}
					$el.removeClass('uew-table-hasScroll');
				}else{
					$tableTbody.height(options.height);
				}
			}
		},
		
		/**
         * 控制表格元素显隐
         * @param {Object} $panel
         * @param {Object} options
         */
		_controlShowOrHide : function($el,options){
			var $panel = $el.find(".__panel"),$domCache = this.$domCache;
			if(options.height == 'auto' && !(options.tableBody && options.tableBody.length)){//2013-6-25修改bug，自适应高度时变为无数据
				$domCache.$tableTbody.height(300);
			}
			
			if(!options.tableBody){//if tableBody为null
				if(!options.tableHead || !options.tableHead.length){ //无表格头时
					$domCache.$tableNoData.hide();
					$el.children(".uew-table-optBar").find("button").addClass("ue-state-disable");
					$el.children(".uew-table-optBar").find("button[alwaysEnable]").removeClass("ue-state-disable");
					$domCache.$tableScroll.hide();
					$domCache.$tableLoading.hide();
					$el.find(".uew-pagination").hide();
					$el.children(".__panel").children("div:not(.uew-table-division)").hide();
					$domCache.$division.hide();
				}else{
					this._tableNoData($el, options, $domCache);
				}
				
			}else if(!options.tableBody.length){//if tableBody 为[]
				this._tableNoData($el, options, $domCache);
			}else{
				$domCache.$tableTbody.show().children(".uew-nodata-tip").hide();
				$el.children(".__panel").children(".uew-table-thead").show();
				$el.children(".uew-table-optBar").find("button").removeClass("ue-state-disable");
				$domCache.$tableScroll.show();
				$domCache.$tableLoading.hide();
				$el.find(".uew-pagination").show('visibility');
				$el.find(".uew-pagination").show();
				$el.find('.__tbodyMain').show();
				$el.find('.table-front-fixed').show();
				$el.find('.table-finale-fixed').show();
				if(options.pagination.totalRecord){
					$domCache.$division.show();
				}else{
					$domCache.$division.hide();	
				}
				this.isLoadding = false;
			}		
		},
		_tableNoData : function($el, options, $domCache){
			if(options.height == "auto"){
				$domCache.$tableNoData.show().css('margin-top',30);
			}else{
				$domCache.$tableNoData.show().css('margin-top',($domCache.$tableTbody.height()/2)-106);
			}
			$el.children(".uew-table-optBar").find("button:not([alwaysEnable])").addClass("ue-state-disable");
			$el.children(".uew-table-optBar").find("button[alwaysEnable]").removeClass("ue-state-disable");
			$el.children(".__panel").children("div:not(.uew-table-division)").show();
			/*$domCache.$tableScroll.hide();*///无数据时需要滚动条  2013-6-7
			$domCache.$tableLoading.hide();
			$domCache.$tbodyFront && $domCache.$tbodyFront.hide();
			$domCache.$tbodyFinal && $domCache.$tbodyFinal.hide();
			if(this.$paginatObj){
				this.$paginatObj.hide('visibility');
			}
			//$el.find(".uew-pagination").hide();
			
			if(!options.tableHead || !options.tableHead.length){
				$el.find(".uew-table-thead").hide();
				$domCache.$tableNoData.hide()
			}else{
				$el.find(".uew-table-thead").show();
			}
			$el.children(".__panel").find('.__tbodyMain').hide();
			$domCache.$division.hide();
			$el.find('.uew-table-thead').children().show();
		},
		/*
		 * 调整表格高度
		 */
		_adjustHeight : function($el, options){
			var $domCache = this.$domCache, $tableTbody = $domCache.$tableTbody, $tablePanel = $domCache.$tablePanel;
			
			//如果表格有操作或者checkbox，则需要调整高度
			if(!options.nowrap){
				var $trArray = $el.find(".__tbodyMain").children("table").children("tbody").children("tr");
				if(options.checkbox){
					var $tbodyFront = this.$domCache.$tbodyFront;
					$tbodyFront.children().children("tbody").children("tr").each(function(i) {
						var height = $trArray.eq(i).height();
						if(height != $(this).attr('attr')){
							$(this).attr('attr',height);
							$(this).height(height);
						}
						
					});
				}
				if(options.operator){
					var $tbodyFinal = this.$domCache.$tbodyFinal;
					$tbodyFinal.children().children("tbody").children("tr").each(function(i) {
						var height = $trArray.eq(i).height();
						if(height != $(this).attr('attr')){
							$(this).attr('attr',height);
							$(this).height(height);
						}
						
					});
				}
			}
			if(options.height == "auto"){
				if(!options.tableBody || options.tableBody.length == 0){
					$tableTbody.show().height(200);
				}else{
					$tableTbody.height($tableTbody.children().height());
				}
				
			}else{
				$tableTbody.height(options.height);
			}
		},
		/*获取所有的序列信息*/
		_getAllSequence : function(){
			var options = this.options, length = options.tableHead.length, allSequence = [];
			for(var i = 0;i<length;i++){
				allSequence.push(i);
			}
			return allSequence;
		},
		/*
         * 表格的resize事件
		 */
		_tableResize : function($el,self){
			var $domCache = self.$domCache, $operatorPanel = $domCache.$operatorPanel, options = self.options;
			if($operatorPanel){
				$operatorPanel.uedOptPanel('close');
			}
			$el.find(".__tablescroll").scrollLeft(0);
			$el.find(".uew-table-main table").css("margin-left", 0);
			
			self._adjustWidth($el);	
			if(!options.nowrap){
				self._adjustHeight($el,options);
			}else{
				//$domCache.$tablePanel.height($domCache.$tableTbody.height() + $domCache.$tableThead.height() + $domCache.$tableScroll.height());
			}
			self._adjustOperator($el,options);
		},
		/**绑定表格头拖动事件**/
		_dragTable : function($el){
			var self = this, _define = this._define, $domCache = this.$domCache;
			//记录正在拖拽的对象
			var $dragging;
			//记录开始拖拽时的坐标值
			var startX;
			//记录结束拖拽时的坐标值
			var endX;
			//鼠标按下事件
			$el.find('.uew-table-drag').bind('mousedown',function(e){
				e.preventDefault();
				$dragging = $(this);
				//记录拖拽前的坐标值
				startX = $dragging.offset().left;
				//拖动开始
				$(document).bind('mousemove',dragMove);
				function dragMove(e){
					e.preventDefault();
					//改变拖动的位置
					$dragging.css('right',startX - e.clientX -1).addClass('uew-table-dragging');	
				}
				//拖动结束
				$(document).bind('mouseup',dragUp);
				
				function dragUp(e){
					$(document).unbind('mouseup',dragUp);
					$(document).unbind('mousemove',dragMove);
					$dragging.removeClass('uew-table-dragging');
					endX = $dragging.offset().left;
					var index = $dragging.parents('th').index();
					var isNoMinWidth = $el.find('th.minWidth').size() ? false : true;
					//拖动的距离
					var distance = endX - startX;
					//存储的宽度改变前td的宽度
					var sourceWidth = $el.find(".__theadMain").children("table").children("thead").children("tr").children("th").eq(index).children(".uew-table-th").width();
					//存储的拖拽后的值
					var targetWidth = sourceWidth + distance;
					var minWidth = $el.find(".__theadMain").children("table").children("thead").children("tr").children("th").eq(index).children(".uew-table-th").children(".uew-table-thTitle").width();
					
					if (targetWidth < minWidth) {
						targetWidth = minWidth;
					}
					$el.find(".__tbodyMain").children("table").children("tbody").children("tr").each(function(){
						$(this).find('td').eq(index).children().width(targetWidth+14);	
					});
					var changeWidth;//记录改变的宽度
					$el.find('thead').each(function(i){
						var $thDiv = $(this).find('th').eq(index).find('.uew-table-th');
						changeWidth = $thDiv.width();
						$thDiv.width(targetWidth);
						changeWidth = targetWidth - changeWidth;
					});
					//调整空白列的宽度
					var blankWidth = $el.find('.__theadMain th.uew-table-blank').attr('width');
					if(blankWidth == undefined){
						blankWidth = $el.find('.__theadMain th.uew-table-blank').outerWidth();
					}
					
					_define.currentTableWidth += changeWidth;
					var tempBlankWidth = blankWidth - changeWidth;
					if( tempBlankWidth < 10){
						tempBlankWidth = 10;
					}
					$el.find('.uew-table-blank').width(tempBlankWidth);
					$el.find('.uew-table-blank').attr('width',tempBlankWidth);//保存width，防止获取不准确
					//设置拖拽条的坐标
					$dragging.css("right", -1);
					if(!$el.find(".__theadMain").children("table").children("thead").children("tr").children("th").eq(index).hasClass('minWidth')){
						_define.tableWidth += changeWidth;
					}
					//_define.tableWidth += changeWidth;
					//设置滚动条
					if(_define.currentTableWidth > $el.find('.__tbodyMain').width()){//有水平滚动条
						
						$domCache.$tableScroll.show().children().width(_define.currentTableWidth);
						$domCache.$division.addClass('uew-table-hScroll');
					}else{
						$el.find('.__theadMain').children('table').css('margin-left',0);
						$el.find('.__tbodyMain').children('table').css('margin-left',0);
						$domCache.$tableScroll.hide().children().scrollLeft(0);
						$domCache.$division.removeClass('uew-table-hScroll');
					}
					//拖动结束时如果表格是nowrap并且高度为auto时
					if(!self.nowrap && self.options.height == "auto"){
						
						$domCache.$tableTbody.height($domCache.$tableTbody.children().height());
						
					}
					if(!self.nowrap && (self.options.checkbox || self.options.operator)){
						
						self._adjustHeight($el,self.options);
						//self._adjustWidth($el);
						if(!-[1,]){self._adjustOperator($el,self.options);}
					}else if(!self.nowrap){
						self._adjustHeight($el,self.options);
					}
					$domCache.$division.css('top','-1px');
				}
			});
		},
		_createPagination : function(pagination){
			var $paginatObj = this.$paginatObj;
			if(pagination && pagination.totalRecord){//分页信息存在，并且有总页才初始化分页
				$paginatObj.uedPagination(pagination);
			}else if(pagination && pagination.isUncertain){
				$paginatObj.uedUncertainPagination(pagination);	
			}	
		},
		/*
		 * 复制数组
		 * @param {Array} arr 需要复制的数组
		 * @return {Array} 返回复制生成的数组	
		 */
		_copyArray : function(arr){
			return arr.slice(0);
		},
		/*设置分页信息*/
		setPagination : function(obj){
           var $el=this.element, options = this.options, $domCache = this.$domCache, pagination = options.pagination;
		   $.extend(pagination,obj);
		   if(!obj){
		   		this.$paginatObj.empty();
				return;
		   }
		   this._createPagination(pagination);
		   if(pagination.totalRecord && options.tableBody && options.tableBody.length){
				$domCache.$division.show();
		   }else{
				$domCache.$division.hide();	
		   }
		   if(options.tableBody && options.tableBody.length){
		   		$el.find(".uew-pagination").show('visibility');
		   }
        },
		/**
		 * 增加addLoading样式
		 **/
		addLoading : function(){
			var $el = this.element, options = this.options, $domCache = this.$domCache;
			if(options.height == 'auto' && ($domCache.$tableTbody.height() < 100)){
				$domCache.$tableTbody.height(300);
			}
			if(options.tableHead && options.tableHead.length){
				$el.find(".uew-table-thead").show();
			}else{
				$el.find(".uew-table-thead").hide();
			}
			$domCache.$tableTbody.show().find(".__tbodyMain").hide();
			$domCache.$tableNoData.hide();
			$domCache.$tableLoading.show().css('margin-top',($domCache.$tableTbody.height()/2)-94);
			$el.find('.table-front-fixed').hide();
			$el.find('.table-finale-fixed').hide();
			$domCache.$tableScroll.hide();
			$el.children(".uew-table-optBar").find("button").addClass("ue-state-disable");
			$el.find('.uew-pagination').hide();
			this.isLoadding = true;//记录表格是否处于loadding中
		},
		/*
		 * 对外接口方法,设置表格高度，支持具体数值和auto。
		 */
		 setHeight : function(height_) {
            var $el = this.element, options = this.options;
			if(height_ != 'auto'){
				options.height = height_+5;//修改此表格高度	
			}else{
				options.height = 'auto';
			}
			
            
			this._adjustWidth($el,options); 
			this._adjustHeight($el,options);
			this._adjustOperator($el,options);
        },
		/*
		 * 对外接口方法，获取表格的相应行对象
		 * @param {Array} indexArray 需要获取的行序列
		 */
		getTableTrObj : function(indexArray){//废弃，请使用getTrs
			var $el = this.element, $trArray = $('.__tbodyMain',$el).find('table').children('tbody').children('tr'), trObj = [];
			if(!(indexArray && indexArray.length)){
				return $trArray;
			}
			for(var i = 0,len = indexArray.length;i < len; i++){
				trObj.push($trArray.eq(indexArray[i]));
			}
			return trObj;
		},
		getTrs : function(indexArray){
			return this.getTableTrObj(indexArray);
		},
		/*
		 * 对外接口方法，获取表格的相应的单元格对象
		 * @param {String} name 需要获取的单元格name.
		 * @param {Array} indexArray 需要获取的
		 */
		getTableTdObj : function(name, indexArray){//废弃，请使用getTds
			var $el = this.element, $trArray = $('.__tbodyMain',$el).find('table').children('tbody').children('tr');
			var tdObj = [], len = indexArray && indexArray.length;
			if(indexArray){
				for(var i = 0;i < len; i++){
					tdObj.push($trArray.eq(indexArray[i]).find('td[name='+ name +']'));
				}
			}else{
				for(var i = 0;i < $trArray.size();i++){
					tdObj.push($($trArray[i]).find('td[name='+ name +']'));	
				}
			}
			return tdObj;
		},
		getTds : function(name, indexArray){
			return this.getTableTdObj(name, indexArray);
		},
		/*
		 *	重新设置右侧操作栏，可以设置其中一个，也可以设置所有。
		 *  @param {Array} operatorPanelData   需要更改的数组
		 *  @param {Array} index	需要更改的索引。 此参数为可选。无index则替换所有
		 *  @param {string} name	需要修改的name。 此参数为可选。
		 */
		setOperatorData : function(operatorData, index, name){
			var options = this.options, $el = this.element, self = this, _define = this._define, isPanel = options.operator.type == 'panel';
			if(index){
				//改变与index对应的行的操作板
				if(name){
					//改变与某行或者某些行中与name对应的操作板
					for(var i = 0, k = index.length; i < k;i++){//index遍历，每一个索引进行更改.
						var indexI = index[i];
						var operatorDataTemp = _define.operatorData[indexI];
						
						for(var operTempIndex = 0, len = operatorDataTemp.length; operTempIndex < len; operTempIndex++){
							if(operatorDataTemp[operTempIndex].name == name){
								//数据进行赋值替换。
								_define.operatorData[indexI][operTempIndex] = operatorData[0];//第一条数据直接替换之。
								if(operatorData.length > 1){
									for(var dataIndex = 1, dataLen = operatorData.length; dataIndex < dataLen; dataIndex++){
										_define.operatorData[indexI].splice(operTempIndex + dataIndex -1,0,operatorData[dataIndex]);
									}
								}
								//表格界面改变逻辑。
								self._changeOperator(isPanel, _define.operatorData, indexI, operTempIndex);
								break;
							}
						}
					}
				}else{
					//无name参数，则改变与index对应的行的所有操作板。
					
					for(var i = 0, k = index.length; i < k;i++){//index遍历，每一个索引进行更改.
						var indexI = index[i];
						var operatorDataTemp = _define.operatorData[indexI];
						
						//替换改index对应的操作板所有数据。
						_define.operatorData[indexI] = operatorData;
						//表格界面改变逻辑
						self._changeOperator(isPanel, _define.operatorData, indexI);
					}
				}
			}else{
				//改变所有的操作面板
				_define.operatorData = operatorData;
				self._changeOperator(isPanel, _define.operatorData);
			}
			
		},
		/*
		 * 表格操作栏界面设置逻辑(内部方法).
		 * @param (boolean) isPanel 是否是操作板
		 * @param (int) rowIndex  当前操作行的序列
		 * @param (int) operatorIndex 当前需要改变的操作板项序列
		 * @param (Array) newOperatorData更新后的所有操作板数据。
		 */
		_changeOperator : function(isPanel, newOperatorData, rowIndex, operatorIndex){
			var options = this.options, $el = this.element, self = this, $operatorPanel = this.$domCache.$operatorPanel;
			if(!rowIndex && rowIndex != 0){
					
				if(!newOperatorData || newOperatorData.length == 0){
					$el.find('.__tbodyFinal .__bodyfinal').find('tr').hide();
				}else{
					
					$el.find('.__tbodyFinal .__bodyfinal').find('tr').each(function(i,elemt){
						if(!newOperatorData[i] || newOperatorData[i].length == 0){
							$(this).find('a').hide();
						}else{
							if(!$(this).find('a').size() && isPanel){
								$(this).find('td').append('<a href="javascript:;" class="ue-state-default __operatorPanelBtn" operindex="'+i+'"><span class="uew-icon uew-icon-circle-triangle-s"></span></a>').find('span:not(.uew-icon)').remove();
								$operatorPanel.uedOptPanel('setOpter',[$el.find(".__operatorPanelBtn")]);
								$(this).find('a').show();
							}else if(!isPanel){
								var thA = '';
								for(var j = 0,k = newOperatorData[i].length; j<k; j++){
									thA += '<a href="javascript:;">'+newOperatorData[i][j].label+'</a>';
								}
								$(this).find('td').find('a').remove().end().append(thA).find('span:not(.uew-icon)').remove();
							}
						}	
					});
				}
				
				return;
			}
			
			var $operTr = $el.find('.__tbodyFinal .__bodyfinal').find('tr').eq(rowIndex), newOperatorData = newOperatorData[rowIndex];
			//是操作板的情况
			if(isPanel){
				if(!newOperatorData || newOperatorData.length == 0){
					$operTr.find('a').hide();
				}else{
					if(!$operTr.find('a').size()){ //如果此行初始化就没有生成此节点，则这里插入该节点。
						$operTr.find('td').append('<a href="javascript:;" class="ue-state-default __operatorPanelBtn" operindex="' + rowIndex + '"><span class="uew-icon uew-icon-circle-triangle-s"></span></a>').find('span:not(.uew-icon)').remove();
						//重新设置是触发操作板对象。
						$operatorPanel.uedOptPanel('setOpter',[$el.find(".__operatorPanelBtn")]);
					}
					$operTr.find('a').show();
				}
			}else{
				//type为normal的情况
				if(!newOperatorData || newOperatorData.length == 0){
					$operTr.find('a').hide();
				}else{
					var thA = '';
					for(var j = 0, k = newOperatorData.length; j < k; j++){
						if(!newOperatorData[j]){continue;}
						if(newOperatorData[j].disable){
							thA += '<a href="javascript:;" class="ue-state-disable">' + newOperatorData[j].label + '</a>';
						}else{
							thA += '<a href="javascript:;">' + newOperatorData[j].label + '</a>';
						}
						
					}
					$operTr.find('td').find('a').remove().end().append(thA).find('span:not(.uew-icon)').remove();
					$operTr.find('a').bind('click',function(){
						if(!$(this).hasClass('__operatorPanelBtn')){
							var indexTr = $(this).parents('tr').index();
							var indexA = $(this).index();
							var funArray = newOperatorData[indexA];
							funArray.onclick($el,[parseInt(indexTr)]);
						}
					});
				}
			}
		},
		/*
		 * @description 设置sequence方法
		 * @param (Array)currentSequence  当前的sequence序列
		 * @param (Array)defaulatSequence 默认的sequence序列
		 * @param (Function)fn 设置成功sequence成功后的回调函数。通常在这个时候去获取表格数据来进行设置表格数据.
		 */
		setSequence : function(currentSequence, defaultSequence, fn){
			var options = this.options, $el = this.element, self = this, _define = this._define;
			if(!currentSequence && !defaultSequence){
				return false;
			}else if(!currentSequence && defaultSequence){
				//设置默认的defaulatSequence
				options.settings[_define.customIndex].defaultSequence = defaultSequence;
				//设置当前sequence
				_define.currentSequence = this._copyArray(defaultSequence);
				if(fn){fn(defaultSequence);}
			}else if(currentSequence && defaultSequence){
				//设置默认的defaulatSequence
				options.settings[_define.customIndex].defaultSequence = defaultSequence;
				//设置当前sequence
				_define.currentSequence = currentSequence;
				if(fn){fn(currentSequence);}
			}else if(currentSequence && !defaultSequence){
				//设置默认的defaulatSequence
				options.settings[_define.customIndex].defaultSequence = defaultSequence;
				//设置当前sequence
				_define.currentSequence = currentSequence;
				if(fn){fn(currentSequence);}
			}
		},
		/*
		 * 获取checkbox选中的序列。
		 */
		getCheckedIndex : function(){
			var $el = this.element, checkedIndex = [];
			$el.find('.__bodyfront').find('input[type=checkbox]').each(function(index,element){
				if($(this).attr('checked') == 'checked'){
					checkedIndex.push(index);
				}
			});
			return checkedIndex;
		},
		/*
		 * 设置表格宽度
		 */
		 setWidth : function(width){
		 	var $el = this.element, self = this;
			if(this._define.width == $el.width()){
				return;
			}
		 	this._tableResize($el,self);
		 },
		 
		/*
		 * 增加表格数据，在不清除已存在数据的情况下。
		 * param {Array} data 需要添加的数据。
		 */
		addData : function(data){
			var $el = this.element, options = this.options, _define = this._define;
			if(!data || !data.length){
				return false;
			}
			if(!_define.operatorData){
				_define.operatorData = [];
			}
			this._setTableBodyData($el, data, true);
			if(!options.tableBody || !options.tableBody.length){
				options.tableBody = this._copyArray(data);
				this._controlShowOrHide($el,options);
			}else{
			}
			//this._adjustTable($el, options);
			this._adjustHeight($el, options);
			this._adjustOperator($el, options);
		},
		/*
		 * 表格组件专用resize方法.
		 */
		_uedResize : function(resizeHandle){
			var d = document.documentElement, $el = this.element, self = this, _define = self._define;
			var timer;//避免resize触发多次,影响性能
			var width = d.clientWidth/*, height = d.clientHeight*/;
			$(window).on('resize.uedGrid',function(e){
				//表格resize只resize显示的表格，避免出现丢宽度等问题。（表格恢复显示时，均需要手动掉resize）
				var isHide = !$el.is(':visible'), isOutWindow = $el.hasClass('uew-outside-hidden') || !!$el.parents('.uew-outside-hidden').size();
				if(isHide || isOutWindow){
					return;
				}
				if((width != d.clientWidth || _define.width != $el.width()/* || !_define.stopResize || _define.width != $el.width()|| height != d.clientHeight*/)){
					width = d.clientWidth/*, height = d.clientHeight*/;
					if(timer){clearTimeout(timer);}
					timer = setTimeout(function(){
						resizeHandle($el,self);
					},10);	
				}
			});
			
		},
		stopResize : function(){
			//this._define.stopResize = true;
		},
		
		startResize : function(){
			//this._define.stopResize = false;
			this.resize();
		},
		resize : function(){
			var $el = this.element, isHide = !$el.is(':visible'), isOutWindow = $el.hasClass('uew-outside-hidden') || !!$el.parents('.uew-outside-hidden').size();
			if(isHide || isOutWindow){
				return;
			}
			this._tableResize(this.element, this);
		},
		hideTable : function(){
			this.element.css({'position':'relative','overflow':'hidden','height':0});
		},
		showTable : function(){
			this.element.css({'overflow':'visible','height':'auto'});
		},
		setCheckBoxUsable : function(flag, arrIndex){
			var $el = this.element, 
				hasIndex = arrIndex && arrIndex.length, 
				bodyInput = $el.find('.__tbodyFront').find('input[type=checkbox]'),
				theadInput = $el.find('.__theadFront').find('input[type=checkbox]');
			
			if(flag){
				if(hasIndex){
					for(var i = 0,len = hasIndex;i < len; i++){
						bodyInput.eq(arrIndex[i]).removeAttr('disabled');
					}
					if(bodyInput.size() == $el.find('.__tbodyFront').find('input').not(':disabled').size()){
						theadInput.eq(arrIndex[i]).removeAttr('disabled');
					}
				}else{
					bodyInput.removeAttr('disabled');
					theadInput.removeAttr('disabled');	
				}
				
			}else{
				if(hasIndex){
					for(var i = 0,len = hasIndex;i < len; i++){
						bodyInput.eq(arrIndex[i]).attr('disabled','disabled');
					}
					if(bodyInput.size() == $el.find('.__tbodyFront').find('input[disabled]').size()){
						theadInput.eq(arrIndex[i]).attr('disabled','disabled');
					}
				}else{
					bodyInput.attr('disabled','disabled');
					theadInput.attr('disabled','disabled');
				}
			}
		},
        _init : function() {
            var self = this, options = this.options, $el = this.element;
        },
        /*
		 * 类型检测
		 * @param {} variable 需要检测的值
		 * @param {String} type 是否为type类型
         */
		_isType : function(variable, type){
			return Object.prototype.toString.call(variable) == '[object '+type+']';
		}
    });
})(jQuery);
