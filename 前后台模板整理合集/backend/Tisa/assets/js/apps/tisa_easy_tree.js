	
	$(function() {
		// easy tree
		tisa_easy_tree.basic();
		tisa_easy_tree.dnd_internal();
		tisa_easy_tree.state_persistence();
		tisa_easy_tree.lazy_loading();
	})
	
	// easy tree
	tisa_easy_tree = {
		basic: function() {
			if ($('#et_basic').length) {
				$('#et_basic').easytree();
			}
		},
		dnd_internal: function() {
			if ($('#et_dnd_internal').length) {
				function canDrop(event, nodes, isSourceNode, source, isTargetNode, target) {
					// returning true from this event will allow the drop to take place.
					// In this case if the node has text 'DroppableNode' it will allow a drop to take place regardless of if it is a folder or not.
					if (isTargetNode && target.text == 'DroppableNode') {
						return true;
					}
					// if not 'DroppableNode' the default behaviour will ensue
				}
				var easyTree = $('#et_dnd_internal').easytree({
					enableDnd: true,
					canDrop: canDrop // 'canDrop' is called continuously while a node is being dragged
				});
			}
		},
		state_persistence: function() {
			if ($('#et_persistence').length) {
				function stateChanged(nodes, nodesJson) {
					var t = nodes[0].text;
					$.cookie('et_persistence_cookie', nodesJson);
				}
				var easyTree = $('#et_persistence').easytree({
					data: $.cookie('et_persistence_cookie'),
					stateChanged: stateChanged,
					enableDnd: true
				});
			}
		},
		lazy_loading: function() {
			if ($('#et_lazy_loading').length) {
				var counter = 0;
				function openLazyNode(event, nodes, node, hasChildren) {
					if (hasChildren) { // don't call ajax if lazy node already has children
						return false;
					}
					counter++;
					node.lazyUrl = 'assets/data_source/easy_tree.php?node='+counter; // must be set here or when the tree is initialised
				}
	
				var easyTree = $('#et_lazy_loading').easytree({
					openLazyNode: openLazyNode
				});
			}
		}
		
	}