var UITreeview = function() {
	"use strict";
	//function to initiate jquery.dynatree
	var runTreeView = function() {
		//Default Tree
		$('#tree').jstree({
			"core" : {
				"themes" : {
					"responsive" : false
				}
			},
			"types" : {
				"default" : {
					"icon" : "fa fa-folder text-yellow fa-lg"
				},
				"file" : {
					"icon" : "fa fa-file text-azure fa-lg"
				}
			},
			"plugins" : ["types"]
		});

		//Checkbox
		$('#tree_2').jstree({
			'plugins' : ["wholerow", "checkbox", "types"],
			'core' : {
				"themes" : {
					"responsive" : false
				},
				'data' : [{
					"text" : "Same but with checkboxes",
					"children" : [{
						"text" : "initially selected",
						"state" : {
							"selected" : true
						}
					}, {
						"text" : "custom icon",
						"icon" : "fa fa-warning text-red"
					}, {
						"text" : "initially open",
						"icon" : "fa fa-folder text-red",
						"state" : {
							"opened" : true
						},
						"children" : ["Another node"]
					}, {
						"text" : "custom icon",
						"icon" : "fa fa-warning text-red"
					}, {
						"text" : "disabled node",
						"icon" : "fa fa-check text-green",
						"state" : {
							"disabled" : true
						}
					}]
				}, "And wholerow selection"]
			},
			"types" : {
				"default" : {
					"icon" : "fa fa-folder text-red fa-lg"
				},
				"file" : {
					"icon" : "fa fa-file text-red fa-lg"
				}
			}
		});
		// Drag & drop
		$("#tree_3").jstree({
			"core" : {
				"themes" : {
					"responsive" : false
				},
				// so that create works
				"check_callback" : true,
				'data' : [{
					"text" : "Parent Node",
					"children" : [{
						"text" : "Initially selected",
						"state" : {
							"selected" : true
						}
					}, {
						"text" : "Custom Icon",
						"icon" : "fa fa-warning text-orange"
					}, {
						"text" : "Initially open",
						"icon" : "fa fa-folder text-green",
						"state" : {
							"opened" : true
						},
						"children" : [{
							"text" : "Another node",
							"icon" : "fa fa-file text-red"
						}]
					}, {
						"text" : "Another Custom Icon",
						"icon" : "fa fa-warning text-red"
					}, {
						"text" : "Disabled Node",
						"icon" : "fa fa-check text-green",
						"state" : {
							"disabled" : true
						}
					}, {
						"text" : "Sub Nodes",
						"icon" : "fa fa-folder text-orange",
						"children" : [{
							"text" : "Item 1",
							"icon" : "fa fa-file text-red"
						}, {
							"text" : "Item 2",
							"icon" : "fa fa-file text-green"
						}, {
							"text" : "Item 3",
							"icon" : "fa fa-file text-azure"
						}, {
							"text" : "Item 4",
							"icon" : "fa fa-file text-orange"
						}, {
							"text" : "Item 5",
							"icon" : "fa fa-file text-azure"
						}]
					}]
				}, "Another Node"]
			},
			"types" : {
				"default" : {
					"icon" : "fa fa-folder text-red fa-lg"
				},
				"file" : {
					"icon" : "fa fa-file text-red fa-lg"
				}
			},
			"state" : {
				"key" : "demo2"
			},
			"plugins" : ["dnd", "types"]
		});
		// Drag & drop
		$("#tree_4").jstree({
			"core" : {
				"themes" : {
					"responsive" : false
				},
				// so that create works
				"check_callback" : true,
				'data' : [{
					"text" : "Parent Node",
					"children" : [{
						"text" : "Initially selected",
						"state" : {
							"selected" : true
						}
					}, {
						"text" : "Custom Icon",
						"icon" : "fa fa-warning text-orange"
					}, {
						"text" : "Initially open",
						"icon" : "fa fa-folder text-green",
						"state" : {
							"opened" : true
						},
						"children" : [{
							"text" : "Another node",
							"icon" : "fa fa-file text-red"
						}]
					}, {
						"text" : "Another Custom Icon",
						"icon" : "fa fa-warning text-red"
					}, {
						"text" : "Disabled Node",
						"icon" : "fa fa-check text-green",
						"state" : {
							"disabled" : true
						}
					}, {
						"text" : "Sub Nodes",
						"icon" : "fa fa-folder text-orange",
						"children" : [{
							"text" : "Item 1",
							"icon" : "fa fa-file text-red"
						}, {
							"text" : "Item 2",
							"icon" : "fa fa-file text-green"
						}, {
							"text" : "Item 3",
							"icon" : "fa fa-file text-azure"
						}, {
							"text" : "Item 4",
							"icon" : "fa fa-file text-orange"
						}, {
							"text" : "Item 5",
							"icon" : "fa fa-file text-azure"
						}]
					}]
				}, "Another Node"]
			},
			"types" : {
				"default" : {
					"icon" : "fa fa-folder text-red fa-lg"
				},
				"file" : {
					"icon" : "fa fa-file text-red fa-lg"
				}
			},
			"state" : {
				"key" : "demo2"
			},
			"plugins" : ["search", "types"]
		});
		var to = false;
		$('#tree_4_search').keyup(function() {
			if (to) {
				clearTimeout(to);
			}
			to = setTimeout(function() {
				var v = $('#tree_4_search').val();
				$('#tree_4').jstree(true).search(v);
			}, 250);
		});
	};
	return {
		//main function to initiate template pages
		init : function() {
			runTreeView();
		}
	};
}();
