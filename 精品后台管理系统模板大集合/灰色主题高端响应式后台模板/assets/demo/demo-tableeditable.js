// ----------------------
// Inline table editor
// ----------------------

$(function () {
    
    $('#editable td').editable({
        closeOnEnter : true,
        event:"click",
        touch : true,
        callback: function(data) {

            if( data.fontSize ) {
                alert('You changed the font size to '+data.fontSize);
            }
        }
    });


// -------------------------------
// Initialize Data Tables
// -------------------------------

    $('.datatables').dataTable({
        "language": {
            "lengthMenu": "_MENU_"
        }
    });
    $('.dataTables_filter input').attr('placeholder','Search...');

    //DOM Manipulation to move datatable elements integrate to panel
    $('#panel-inline .panel-ctrls').append($('#panel-inline .dataTables_filter').addClass("pull-right")).find("label").addClass("panel-ctrls-center");
    $('#panel-inline .panel-ctrls').append("<i class='separator'></i>");
    $('#panel-inline .panel-ctrls').append($('#panel-inline .dataTables_length').addClass("pull-left")).find("label").addClass("panel-ctrls-center");

    $('#panel-inline .panel-footer').append($(" #panel-inline .dataTable+.row"));
    $('#panel-inline .dataTables_paginate>ul.pagination').addClass("pull-right");



//-------------------------
// With Table Tools Editor
//-------------------------

var editor;

    editor = new $.fn.dataTable.Editor({
        "ajaxUrl":"assets/demo/source.json",
        "domTable":"#crudtable",
        "fields":[
            {
                "label":"Browser:",
                "name":"browser"
            },
            {
                "label":"Rendering engine:",
                "name":"engine"
            },
            {
                "label":"Platform:",
                "name":"platform"
            },
            {
                "label":"Version:",
                "name":"version"
            },
            {
                "label":"CSS grade:",
                "name":"grade"
            }
        ]
    });

    $('#crudtable').dataTable({
        "sDom":"<'row'<'col-sm-6'T><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>",
        "sAjaxSource":"assets/demo/source.json",
        "bServerSide": false,
        "bAutoWidth": false,
        "bDestroy": true,
        "aoColumns":[
            { "mData":"browser" },
            { "mData":"engine" },
            { "mData":"platform" },
            { "mData":"version", "sClass":"center" },
            { "mData":"grade", "sClass":"center" }
        ],
        "oTableTools":{
            "sRowSelect":"multi",
            "aButtons":[
                { "sExtends":"editor_create", "editor":editor },
                { "sExtends":"editor_edit", "editor":editor },
                { "sExtends":"editor_remove", "editor":editor }
            ]
        },
        "language": {
            "lengthMenu": "_MENU_"
        }
    });
    $('.dataTables_filter input').addClass('form-control').attr('placeholder','Search...');
    $('.dataTables_length select').addClass('form-control');

    //add icons
    $("#ToolTables_crudtable_0").prepend('<i class="fa fa-plus"/> ');
    $("#ToolTables_crudtable_1").prepend('<i class="fa fa-pencil-square-o"/> ');
    $("#ToolTables_crudtable_2").prepend('<i class="fa fa-times-circle"/> ');




    //DOM Manipulation to move datatable elements integrate to panel
    $('#panel-editable .panel-ctrls').append($('#panel-editable .dataTables_filter').addClass("pull-right")).find("label").addClass("panel-ctrls-center");
    $('#panel-editable .panel-ctrls').append("<i class='separator'></i>");
    $('#panel-editable .panel-ctrls').append($('#panel-editable .DTTT.btn-group').addClass("pull-left mt10"));

    $('#panel-editable .panel-footer').append($(" #panel-editable .dataTable+.row"));
    $('#panel-editable .dataTables_paginate>ul.pagination').addClass("pull-right");

});

