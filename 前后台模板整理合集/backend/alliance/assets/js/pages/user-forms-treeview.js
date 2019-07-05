'use strict';
//  Author: ThemeREX.com
//
//  .html scripts
//

(function($) {

    $(document).ready(function() {

        "use strict";

        // Init Theme Core
        Core.init();

        // Init Demo JS
        Demo.init();

        // Init FancyTree - Default
        $("#tree").fancytree({
            icons: false, // Display node icons.
            clickFolderMode: 2 // 1:activate, 2:expand, 3:activate and expand, 4:activate (dblclick expands)
        });

        // Init FancyTree - With Icons
        $("#tree2").fancytree({
            clickFolderMode: 2 // 1:activate, 2:expand, 3:activate and expand, 4:activate (dblclick expands)
        });

        // Init FancyTree - With Checkboxes
        $("#tree3").fancytree({
            selectMode: 3,
            checkbox: true, // Show checkboxes.
            clickFolderMode: 2 // 1:activate, 2:expand, 3:activate and expand, 4:activate (dblclick expands)
        });

        // Init FancyTree - With Checkboxes
        $("#tree4").fancytree({
            selectMode: 1,
            checkbox: true, // Show checkboxes Class added to tree html to convert to radios ".fancytree-radio"
            clickFolderMode: 2 // 1:activate, 2:expand, 3:activate and expand, 4:activate (dblclick expands)
        });

        // Init FancyTree - With Childcounter Extension
        $("#tree5").fancytree({
            extensions: ["childcounter"],
            childcounter: {
                deep: true,
                hideZeros: true,
                hideExpanded: true
            }
        });

        // Attach the fancytree widget to an existing <div id="tree"> element
        // and pass the tree options as an argument to the fancytree() function:
        $("#columnview").fancytree({
            extensions: ["columnview"],
            checkbox: true,
            source: {
                url: "assets/js/plugins/fancytree/ajax-tree-plain2.json"
            },
            lazyLoad: function(event, data) {
                data.result = {
                    url: "assets/js/plugins/fancytree/ajax-sub2.json"
                };
            },
            activate: function(event, data) {
                $("td#preview").text("activate " + data.node);
            },
            select: function(event, data) {
                // create a tag, when node is selected
                var node = data.node;
                $("span#tag-" + node.key).remove();
                if (node.selected) {
                    $("<span>", {
                        id: "tag-" + node.key,
                        text: node.title,
                        "class": "selTag"
                    })
                        .data("key", node.key)
                        .appendTo($("td#tags"));
                }
            }
        });

        // Init FancyTree - w/Drag and Drop Functionality
        $("#tree6").fancytree({
            extensions: ["dnd", "edit"],
            // titlesTabbable: true,
            source: {
                url: "assets/js/plugins/fancytree/ajax-tree-plain.json"
            },
            dnd: {
                autoExpandMS: 400,
                focusOnClick: true,
                preventVoidMoves: true, // Prevent dropping nodes 'before self', etc.
                preventRecursiveMoves: true, // Prevent dropping nodes on own descendants
                dragStart: function(node, data) {
                    /** This function MUST be defined to enable dragging for the tree.
                     *  Return false to cancel dragging of node.
                     */
                    return true;
                },
                dragEnter: function(node, data) {
                    /** data.otherNode may be null for non-fancytree droppables.
                     *  Return false to disallow dropping on node. In this case
                     *  dragOver and dragLeave are not called.
                     *  Return 'over', 'before, or 'after' to force a hitMode.
                     *  Return ['before', 'after'] to restrict available hitModes.
                     *  Any other return value will calc the hitMode from the cursor position.
                     */
                    // Prevent dropping a parent below another parent (only sort
                    // nodes under the same parent)
                    /*           if(node.parent !== data.otherNode.parent){
                     return false;
                     }
                     // Don't allow dropping *over* a node (would create a child)
                     return ["before", "after"];
                     */
                    return true;
                },
                dragDrop: function(node, data) {
                    /** This function MUST be defined to enable dropping of items on
                     *  the tree.
                     */
                    data.otherNode.moveTo(node, data.hitMode);
                }
            },
            activate: function(event, data) {
                //        alert("activate " + data.node);
            },
            lazyLoad: function(event, data) {
                data.result = {
                    url: "ajax-sub2.json"
                }
            }
        });

        // Init FancyTree - w/Inline Editing Functionality
        $("#tree7").fancytree({
            extensions: ["edit"],
            source: {
                url: "assets/js/plugins/fancytree/ajax-tree-plain.json"
            },
            lazyLoad: function(event, data) {
                data.result = {
                    url: "ajax-sub2.json",
                    debugDelay: 1000
                };
            },
            edit: {
                triggerStart: ["f2", "dblclick", "shift+click", "mac+enter"],
                beforeEdit: function(event, data) {
                    // Return false to prevent edit mode
                },
                edit: function(event, data) {
                    // Editor was opened (available as data.input)
                },
                beforeClose: function(event, data) {
                    // Return false to prevent cancel/save (data.input is available)
                },
                save: function(event, data) {
                    // Save data.input.val() or return false to keep editor open
                    console.log("save...", this, data);
                    // Simulate to start a slow ajax request...
                    setTimeout(function() {
                        $(data.node.span).removeClass("pending");
                        // Let's pretend the server returned a slightly modified
                        // title:
                        data.node.setTitle(data.node.title + "!");
                    }, 2000);
                    // We return true, so ext-edit will set the current user input
                    // as title
                    return true;
                },
                close: function(event, data) {
                    // Editor was removed
                    if (data.save) {
                        // Since we started an async request, mark the node as preliminary
                        $(data.node.span).addClass("pending");
                    }
                }
            }
        });

        // Attach the fancytree widget to an existing <div id="tree"> element
        // and pass the tree options as an argument to the fancytree() function:
        $("#tree8").fancytree({
            extensions: ["filter"],
            quicksearch: true,
            source: {
                url: "assets/js/plugins/fancytree/ajax-tree-local.json"
            },
            filter: {
                mode: "hide",
                autoApply: true
            },
            activate: function(event, data) {
                //        alert("activate " + data.node);
            },
            lazyLoad: function(event, data) {
                data.result = {
                    url: "assets/js/plugins/fancytree/ajax-sub2.json"
                }
            }
        });
        var tree = $("#tree8").fancytree("getTree");
        /*
         * Event handlers for our little demo interface
         */
        $("input[name=search]").keyup(function(e) {
            var n,
                leavesOnly = $("#leavesOnly").is(":checked"),
                match = $(this).val();

            if (e && e.which === $.ui.keyCode.ESCAPE || $.trim(match) === "") {
                $("button#btnResetSearch").click();
                return;
            }
            if ($("#regex").is(":checked")) {
                // Pass function to perform match
                n = tree.filterNodes(function(node) {
                    return new RegExp(match, "i").test(node.title);
                }, leavesOnly);
            } else {
                // Pass a string to perform case insensitive matching
                n = tree.filterNodes(match, leavesOnly);
            }
            $("button#btnResetSearch").attr("disabled", false);
            $("span#matches").text("(" + n + " matches)");
        });

        $("button#btnResetSearch").click(function(e) {
            $("input[name=search]").val("");
            $("span#matches").text("");
            tree.clearFilter();
        }).attr("disabled", true);

        tree.options.filter.mode = $("input#hideMode").is(":checked") ? "hide" : "dimm";
        tree.clearFilter();

        $("input#hideMode").change(function(e) {
            tree.options.filter.mode = $(this).is(":checked") ? "hide" : "dimm";
            tree.clearFilter();
            $("input[name=search]").keyup();
        });
        $("input#leavesOnly").change(function(e) {
            // tree.options.filter.leavesOnly = $(this).is(":checked");
            tree.clearFilter();
            $("input[name=search]").keyup();
        });
        $("input#regex").change(function(e) {
            tree.clearFilter();
            $("input[name=search]").keyup();
        });
    });

})(jQuery);
