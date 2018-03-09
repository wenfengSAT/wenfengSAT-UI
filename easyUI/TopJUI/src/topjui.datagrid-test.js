+function($){
	
    $(function() {
        var INIT_MYDATAGRID = function() {
            
        }
        
        INIT_MYDATAGRID()
    })

    // MYDATAGRID CLASS DEFINITION
    // ======================
    var MyDatagrid = function(element, options) {
        this.$element  = $(element)
        this.options   = options
        this.tools     = this.TOOLS()
    }
    
    MyDatagrid.DEFAULTS = {
        datagridId       : "cxdm",       // datagrid table id
	    width            : "auto",
	    height           : "auto",
	    autoRowHeight    : false,
	    nowrap           : true,
	    striped          : true,
	    singleSelect     : true,
	    url              : ctx + "/System/Article/getAllArticleList",          //datagrid data load url from ajax
	    columns          : [],          //datagrid columns ,must to be []
		loadMsg          : '数据加载中,请稍后...',
		rownumbers       : true,
        pagination       : true,
        pageNumber       : 1,
        pageSize         : 20,
		queryFormId      : "",      // search form id
		queryAction      : "",      // search from action
		infoFormId       : "",       // info form id
		infoAddAction    : "",    // info data add action
		infoUpdateAction : "", //info update action
		infoDlgDivId     : "",     // info data detail/edit dlg div id
		deleteAction     : "",     //data delete action  from ajax
		deleteMsg        : "",        // show the message before do delete
		moveDlgDivId     : "",     // the div id of dialog for move show
		moveFormId       : "",       //the form id for move
		moveTreeId       : "",       // the combotree id for move
		queryParams      : {},      //search params name for post, must to be {}
		queryParamsVCN   : {},   //search params value from htmlcontrol name, must to be {}
    }

    MyDatagrid.prototype.TOOLS = function() {
        var that  = this, options = that.options
        var tools = {
            
	    }
        
        return tools
    }

    MyDatagrid.prototype.showDatagrid = function(msg, btnoptions) {
        $('#'+ options.datagridId).datagrid({
            width         : options.width,
            height        : options.height,
            autoRowHeight : options.autoRowHeight,
            nowrap        : options.nowrap,
            striped       : options.striped,
            singleSelect  : options.singleSelect,
            url           : options.url,
            //queryParams : {},
            loadMsg       : options.loadMsg,
            rownumbers    : options.rownumbers,
            pagination    : options.pagination,
            pageNumber    : options.pageNumber,
            pageSize      : options.pageSize,
            columns       : [options.columns]
        })

        //重新加载datagrid的数据
        $("#"+ options.datagridId).datagrid('reload')
    }
	
    // MYDATAGRID PLUGIN DEFINITION
    // =======================
    
    function Plugin(option) {
        var args     = arguments
        var property = option
        
        return this.each(function () {
            var $this   = $(this)
            var options = $.extend({}, MyDatagrid.DEFAULTS, $this.data(), typeof option == 'object' && option)
            var data    = new MyDatagrid(this, options)
            
            if (typeof property == 'string' && $.isFunction(data[property])) {
                [].shift.apply(args)
                if (!args) data[property]()
                else data[property].apply(data, args)
            } else {
                data.showDatagrid();
            }
        })
    }

    var old = $.fn.myDatagrid

    $.fn.myDatagrid             = Plugin
    $.fn.myDatagrid.Constructor = MyDatagrid
    
    // MYDATAGRID NO CONFLICT
    // =================
    
    $.fn.myDatagrid.noConflict = function () {
        $.fn.myDatagrid = old
        return this
    }
    
    // MYDATAGRID DATA-API
    // ==============

    $(document).on('bjui.initUI', function(e) {
        var $this = $(e.target).find('[data-toggle="myDatagrid"]')
        
        if (!$this.length) return
        
        Plugin.call($this)
    })
    
    $(document).on('click.topjui.myDatagrid.data-api', '[data-toggle="myDatagrid"]', function(e) {
        var $this = $(this), data = $this.data(), options = data.options, type, msg
        
        if (options) {
            if (typeof options == 'string') options = options.toObj()
            if (typeof options == 'object') {
                $.extend(data, options)
            }
        }
        
        type = data.type
        if (!type) return false
        
        Plugin.call($this, type, data.msg || type, data)
        
        e.preventDefault()
    })

}(jQuery);