(function($){
	
	$.fn.iTree = function(options) {
		var defaults = {
			treeId : this.selector,
			url    : ctx + '/system/codeItem/getListByCodeSetIdAndLevelId?codeSetId={codeSetId}&levelId={levelId}',
			expandUrl : ctx + '/system/codeItem/getListByPid?pid={pid}',
	        lines : false,
	        animate : true,
	        border : false,
	        clickEvent : 'clickEventName',
	        queryParams : {
				
			},
			onContextMenu: '',
			refreshDatagridId : '#datagrid'
		}
		
		var options = $.extend(defaults, options);
		
		if(options.url.indexOf("codeSetId") == -1) {
			options.url = options.url + "?codeSetId=" + options.codeSetId + "&levelId=" + options.levelId;
		} else {
			options.url = options.url.replace("{codeSetId}", options.codeSetId).replace("{levelId}", options.levelId);
		}
		
		if(options.treeId == "") {
			options.treeId = $(this).context;
		}
		
		$(this).tree({
            url: options.url,
            lines: options.lines,
            animate: options.animate,
            border: options.border,
            onContextMenu: options.onContextMenu,
            onBeforeExpand:function(node,param) {
                $(options.treeId).tree('options').url = options.expandUrl.replace("{pid}", node.id);
            },
            onClick : function(node) {
            	
            	if(options.clickEvent == 'postCodeItemIdAndRefreshDatagrid') {
            		
            		//if(node.attributes != undefined && typeof node.attributes != "object") {
            			//console.log(node.attributes);
                		//node.attributes = $.parseJSON(node.attributes);
             	    //}
                	//if(options.clickEvent == 'postCodeItemId') {
                	//if( node.attributes.event == 'postCodeItemId') {	
                    	//if(node.attributes) {
                    		var dg = $(options.refreshDatagridId);
                     	    var queryParams = dg.datagrid('options').queryParams;
                     	    var newQueryParams = options.queryParams;
                     	    newQueryParams.codeSetId = node.codesetid;
                     	    newQueryParams.codeItemId = node.id;
                     	    newQueryParams.pid = node.pid;
                     	    newQueryParams.code = node.code;
                     	    dg.datagrid('options').queryParams = $.extend({}, queryParams, newQueryParams);
                     	    dg.datagrid('reload');
                        //}
                    //}
                	
            	}else if(options.clickEvent == 'postTreeParamsAndRefreshDatagrid') {
            		var dg = $(options.refreshDatagridId);
             	    var queryParams = dg.datagrid('options').queryParams;
             	    newQueryParams = options.queryParams;
             	    newQueryParams.codeSetId = node.codesetid;
             	    newQueryParams.codeItemId = node.id;
             	    newQueryParams.id = node.id;
             	    newQueryParams.pid = node.pid;
             	    newQueryParams.text = node.text;
             	    newQueryParams.code = node.code;
             	    dg.datagrid('options').queryParams = $.extend({}, queryParams, newQueryParams);
             	    dg.datagrid('reload');
            	} else {
            		
            		if (node.state == "closed") {
                        $(options.treeId).tree('expand', node.target);
                    } else {
                    	$(options.treeId).tree('collapse', node.target);
                    }
            		
            	}
            	
            },
            onLoadSuccess : function() {
            	setTimeout(function(){
            		var rootNode = $(options.treeId).tree('getRoot');
                	$(options.treeId).tree("expand", rootNode.target);
            	},1000);
            	
            }
        });
		
	}

})(jQuery);