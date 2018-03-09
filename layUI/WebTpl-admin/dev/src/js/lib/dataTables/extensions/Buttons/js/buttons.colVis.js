/* ! Column visibility buttons for Buttons and DataTables. 2015 SpryMedia Ltd - datatables.net/license */
layui.define("jquery", function(exports) {
  var jQuery = layui.jquery;
  (function(factory) {
    if(typeof define === 'function' && define.amd) {
      define(['jquery', 'datatables.net', 'datatables.net-buttons'], function($) {
        return factory($, window, document)
      })
    } else if(typeof exports === 'object') {
      module.exports = function(root, $) {
        if(!root) {
          root = window
        }
        if(!$ || !$.fn.dataTable) {
          $ = require('datatables.net')(root, $).$
        }
        if(!$.fn.dataTable.Buttons) {
          require('datatables.net-buttons')(root, $)
        }
        return factory($, root, root.document)
      }
    } else {
      factory(jQuery, window, document)
    }
  }(function($, window, document, undefined) {
    'use strict';
    var DataTable = $.fn.dataTable;
    $.extend(DataTable.ext.buttons, {
      colvis: function(dt, conf) {
        return {
          extend: 'collection',
          text: function(dt) {
            return dt.i18n('buttons.colvis', 'Column visibility')
          },
          className: 'buttons-colvis',
          buttons: [{
            extend: 'columnsToggle',
            columns: conf.columns
          }]
        }
      },
      columnsToggle: function(dt, conf) {
        var columns = dt.columns(conf.columns).indexes().map(function(idx) {
          return {
            extend: 'columnToggle',
            columns: idx
          }
        }).toArray();
        return columns
      },
      columnToggle: function(dt, conf) {
        return {
          extend: 'columnVisibility',
          columns: conf.columns
        }
      },
      columnsVisibility: function(dt, conf) {
        var columns = dt.columns(conf.columns).indexes().map(function(idx) {
          return {
            extend: 'columnVisibility',
            columns: idx,
            visibility: conf.visibility
          }
        }).toArray();
        return columns
      },
      columnVisibility: {
        columns: undefined,
        text: function(dt, button, conf) {
          return conf._columnText(dt, conf.columns)
        },
        className: 'buttons-columnVisibility',
        action: function(e, dt, button, conf) {
          var col = dt.columns(conf.columns);
          var curr = col.visible();
          col.visible(conf.visibility !== undefined ? conf.visibility : !(curr.length ? curr[0] : false))
        },
        init: function(dt, button, conf) {
          var that = this;
          var col = dt.column(conf.columns);
          dt.on('column-visibility.dt' + conf.namespace, function(e, settings, column, state) {
            if(column === conf.columns) {
              that.active(state)
            }
          }).on('column-reorder.dt' + conf.namespace, function(e, settings, details) {
            if(dt.columns(conf.columns).count() !== 1) {
              return
            }
            if(typeof conf.columns === 'number') {
              conf.columns = details.mapping[conf.columns]
            }
            var col = dt.column(conf.columns);
            that.text(conf._columnText(dt, conf.columns));
            that.active(col.visible())
          });
          this.active(col.visible())
        },
        destroy: function(dt, button, conf) {
          dt.off('column-visibility.dt' + conf.namespace).off('column-reorder.dt' + conf.namespace)
        },
        _columnText: function(dt, col) {
          var idx = dt.column(col).index();
          return dt.settings()[0].aoColumns[idx].sTitle.replace(/\n/g, " ").replace(/<.*?>/g, "").replace(/^\s+|\s+$/g, "");
        }
      },
      colvisRestore: {
        className: 'buttons-colvisRestore',
        text: function(dt) {
          return dt.i18n('buttons.colvisRestore', 'Restore visibility')
        },
        init: function(dt, button, conf) {
          conf._visOriginal = dt.columns().indexes().map(function(idx) {
            return dt.column(idx).visible()
          }).toArray()
        },
        action: function(e, dt, button, conf) {
          dt.columns().every(function(i) {
            var idx = dt.colReorder && dt.colReorder.transpose ? dt.colReorder.transpose(i, 'toOriginal') : i;
            this.visible(conf._visOriginal[idx])
          })
        }
      },
      colvisGroup: {
        className: 'buttons-colvisGroup',
        action: function(e, dt, button, conf) {
          dt.columns(conf.show).visible(true);
          dt.columns(conf.hide).visible(false)
        },
        show: [],
        hide: []
      }
    });
    return DataTable.Buttons
  }));
  exports('datatableColVis')
});