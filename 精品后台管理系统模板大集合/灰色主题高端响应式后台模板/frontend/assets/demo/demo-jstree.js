$(function(){

    $('#tree-default').jstree({
        //"core" : {
        //    "themes" : {
        //        "responsive": false
        //    }            
        //},
        "types" : {
            "default" : {
                "icon" : "fa fa-folder icon-state-warning icon-lg"
            },
            "file" : {
                "icon" : "fa fa-file icon-state-warning icon-lg"
            }
        },
        "plugins": ["types"]
    });



    $('#tree-checkable').jstree({
        'plugins': ["wholerow", "checkbox", "types"],
        'core': {
            "themes" : {
                "responsive": false
            },    
            'data': [{
                    "text": "Same but with checkboxes",
                    "children": [{
                        "text": "initially selected",
                        "state": {
                            "selected": true
                        }
                    }, {
                        "text": "custom icon",
                        "icon": "fa fa-warning icon-state-danger"
                    }, {
                        "text": "initially open",
                        "icon" : "fa fa-folder icon-state-default",
                        "state": {
                            "opened": true
                        },
                        "children": ["Another node"]
                    }, {
                        "text": "custom icon",
                        "icon": "fa fa-warning icon-state-warning"
                    }, {
                        "text": "disabled node",
                        "icon": "fa fa-check icon-state-success",
                        "state": {
                            "disabled": true
                        }
                    }]
                },
                "And wholerow selection"
            ]
        },
        "types" : {
            "default" : {
                "icon" : "fa fa-folder icon-state-warning icon-lg"
            },
            "file" : {
                "icon" : "fa fa-file icon-state-warning icon-lg"
            }
        }
    });



    $("#tree-contextual").jstree({
        "core" : {
            "themes" : {
                "responsive": false
            }, 
            // so that create works
            "check_callback" : true,
            'data': [{
                    "text": "Parent Node",
                    "children": [{
                        "text": "Initially selected",
                        "state": {
                            "selected": true
                        }
                    }, {
                        "text": "Custom Icon",
                        "icon": "fa fa-warning icon-state-danger"
                    }, {
                        "text": "Initially open",
                        "icon" : "fa fa-folder icon-state-success",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {"text": "Another node", "icon" : "fa fa-file icon-state-warning"}
                        ]
                    }, {
                        "text": "Another Custom Icon",
                        "icon": "fa fa-warning icon-state-warning"
                    }, {
                        "text": "Disabled Node",
                        "icon": "fa fa-check icon-state-success",
                        "state": {
                            "disabled": true
                        }
                    }, {
                        "text": "Sub Nodes",
                        "icon": "fa fa-folder icon-state-danger",
                        "children": [
                            {"text": "Item 1", "icon" : "fa fa-file icon-state-warning"},
                            {"text": "Item 2", "icon" : "fa fa-file icon-state-success"},
                            {"text": "Item 3", "icon" : "fa fa-file icon-state-default"},
                            {"text": "Item 4", "icon" : "fa fa-file icon-state-danger"},
                            {"text": "Item 5", "icon" : "fa fa-file icon-state-info"}
                        ]
                    }]
                },
                "Another Node"
            ]
        },
        "types" : {
            "default" : {
                "icon" : "fa fa-folder icon-state-warning icon-lg"
            },
            "file" : {
                "icon" : "fa fa-file icon-state-warning icon-lg"
            }
        },
        "state" : { "key" : "demo2" },
        "plugins" : [ "contextmenu", "dnd", "state", "types" ]
    });



    $("#tree-ajax").jstree({
        "core" : {
            "themes" : {
                "responsive": false
            }, 
            // so that create works
            "check_callback" : true,
            'data' : {
                'url' : function (node) {
                  return 'assets/plugins/jstree/docs/assets/ajax_nodes.html';
                },
                'data' : function (node) {
                  return { 'parent' : node.id };
                }
            }
        },
        "types" : {
            "default" : {
                "icon" : "fa fa-folder icon-state-warning icon-lg"
            },
            "file" : {
                "icon" : "fa fa-file icon-state-warning icon-lg"
            }
        },
        "state" : { "key" : "demo3" },
        "plugins" : [ "dnd", "state", "types" ]
    });



});