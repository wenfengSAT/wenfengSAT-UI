$(document).ready(function(){
    // Bootstrap tooltip
    $(".tip").tooltip({placement: 'top', trigger: 'hover'});
    $(".tipb").tooltip({placement: 'bottom', trigger: 'hover'});
    $(".tipl").tooltip({placement: 'left', trigger: 'hover'});
    $(".tipr").tooltip({placement: 'right', trigger: 'hover'});
                 
    if($(".fb").length > 0)
        $("a.fb").fancybox({padding: 10,
                                'transitionIn'  : 'elastic',
                                'transitionOut' : 'elastic',
                                'speedIn'       : 600, 
                                'speedOut'      : 200
                            });
    // Uniform
        $("input:checkbox, input:radio").not('input.ibtn').uniform();    
    // Select2
    if($(".select").length > 0){
        $(".select").select2();
        $(".select").on("change", function(e) {             
            //action
        });
    }
    // Tagsinput
    if($(".tags").length > 0)
        $(".tags").tagsInput({'width':'100%',
                              'height':'auto',
                              'onAddTag': function(text){
                                //action
                              },
                              'onRemoveTag': function(text){
                                //action
                              }});
        
    // Masked input  
    if($("[class^='mask_']").length > 0){
        $("input.mask_tin").mask('99-9999999',{completed:function(){
                                                //action
                                              }});
        $("input.mask_ssn").mask('999-99-9999',{completed:function(){
                                                //action
                                              }});        
        $("input.mask_date").mask('9999-99-99',{completed:function(){
                                                //action
                                              }});
        $("input.mask_product").mask('a*-999-a999',{completed:function(){
                                                //action
                                              }});
        $("input.mask_phone").mask('99 (999) 999-99-99',{completed:function(){
                                                //action
                                              }});
        $("input.mask_phone_ext").mask('99 (999) 999-9999? x99999',{completed:function(){
                                                //action
                                              }});
        $("input.mask_credit").mask('9999-9999-9999-9999',{completed:function(){
                                                //action
                                              }});        
        $("input.mask_percent").mask('99%',{completed:function(){
                                                //action
                                              }});   
    }
    
    // Multiselect    
    if($("#ms").length > 0)
        $("#ms").multiSelect({
            afterSelect: function(value, text){
                //action
            },
            afterDeselect: function(value, text){
                //action
            }});
    
    
    if($("#msc").length > 0){
        $("#msc").multiSelect({
            selectableHeader: "<div class='multipleselect-header'>Selectable item</div>",
            selectedHeader: "<div class='multipleselect-header'>Selected items</div>",
            afterSelect: function(value, text){
                //action
            },
            afterDeselect: function(value, text){
                //action
            }            
        });
        
        $("#ms_select").click(function(){
            $('#msc').multiSelect('select_all');
        });
        $("#ms_deselect").click(function(){
            $('#msc').multiSelect('deselect_all');
        });        
    }    
    
    // Validation
    if($("#validate").length > 0)
        $("#validate, #validate_custom").validationEngine('attach',{promptPosition : "topLeft"});
    
    // Datepicker
    $(".datepicker").datepicker({dateFormat: 'yy-mm-dd'});
    
    if($("#datepicker").length > 0){
        
        $( "#datepicker" ).datepicker({dateFormat: 'yy-mm-dd',
                                       onSelect: function(date){
                                            //action
                                     }});
    }
        
    
    // Wizard
    if($("#wizard").length > 0) $('#wizard').stepy();
    
    if($("#wizard_validate").length > 0){
        
        $("#wizard_validate").validationEngine('attach',{promptPosition : "topLeft"});
        
        $('#wizard_validate').stepy({
            back: function(index) {                                                                
                //if(!$("#wizard_validate").validationEngine('validate')) return false; //uncomment if u need to validate on back click                
            }, 
            next: function(index) {                
                if(!$("#wizard_validate").validationEngine('validate')) return false;                
            }, 
            finish: function(index) {                
                if(!$("#wizard_validate").validationEngine('validate')) return false;
            }            
        });
    }

    if($("#wizard_ajax").length > 0){
        
        $("#wizard_ajax").validationEngine('attach',{promptPosition : "topLeft"});
        
        $('#wizard_ajax').stepy({
            back: function(index) {                
                return false;
            }, 
            next: function(index) {                
                if(!$("#wizard_ajax").validationEngine('validate')) return false;
                
                
                
                if((index-2) == 0){
                    $.post('php/ajax_wizard.php',{login: $("#wizard_ajax input[name=login]").val(),
                                                email: $("#wizard_ajax input[name=email]").val()},
                                                function(data){
                                                        if(data == 'success')
                                                            $('#wizard_ajax').stepy('step', index);
                                                        else
                                                            $('#wizard_ajax input[name=login]').validationEngine('showPrompt', 'Response doesn\'t match', 'error','topLeft', true);
                                                });                    
                    return false;
                }                                                
                                
                if((index-2) == 1){
                    $.post('php/ajax_wizard.php',{hash: $("#wizard_ajax input[name=hash]").val()},
                                                  function(data){
                                                    if(data == 'success')
                                                        $('#wizard_ajax').stepy('step', index);
                                                    else
                                                        $('#wizard_ajax input[name=hash]').validationEngine('showPrompt', 'Response doesn\'t match', 'error','topLeft', true);
                                                  });                                
                    return false;
                }

            },
            finish: function(index) {                
                if(!$("#wizard_ajax").validationEngine('validate')) return false;
                
                //action
            }            
        });
    }

    // eof wizard
    
    // accordion
    if($(".accordion").length > 0) $(".accordion").accordion({heightStyle: "content"});
    // eof accordion
    
    // tabs
    if($(".tabs").length > 0) $(".tabs").tabs();
    // eof tabs
    
    // sortable    
    if($("#sort_1").length > 0){
        $("#sort_1").sortable();
        $("#sort_1").disableSelection();    
    }
    // eof sortable
    
    // selectable 
    if($("#select_1").length > 0) $("#select_1").selectable();
    //eof selectable
    
    // progressbars
    if($("#progressbar_default").length > 0)
        $("#progressbar_default").progressbar({value: 65});
    
    if($("#progressbar_animated").length > 0){        
        $("#progressbar_animated").progressbar({value: 0});
        $("#sAProgress").click(function(){
            $("#progressbar_animated").progressbar('destroy');
            var iNow = new Date().setTime(new Date().getTime() + 0 * 1000);
            var iEnd = new Date().setTime(new Date().getTime() + 5 * 1000);
            $("#progressbar_animated").anim_progressbar({start: iNow, finish: iEnd, interval: 1});
        });
    }
    
    if($("#progressbar_delay").length > 0){        
        $("#progressbar_delay").progressbar({value: 0});
        $("#sWDProgress").click(function(){
            $("#progressbar_delay").progressbar('destroy');
            var iNow1 = new Date().setTime(new Date().getTime() + 3 * 1000);
            var iEnd1 = new Date().setTime(new Date().getTime() + 6 * 1000);
            $("#progressbar_delay").anim_progressbar({start: iNow1, finish: iEnd1, interval: 1});
        });
    }
    // eof progressbars
    
    // spinner
        $( "#spinner" ).spinner();
        $( "#spinner1" ).spinner({culture: "en-US", min: 5, max: 1000, step: 10, start: 10, numberFormat: "C"});
    // eof spinner
    
    // sliders
        $("#slider_1").slider({
            value: 60,
            orientation: "horizontal",
            range: "min",
            animate: true,
            slide: function( event, ui ) {
                $( "#slider_1_amount" ).html( "$" + ui.value );
            },
            stop: function( event, ui ) {
                //action
            }
        });
        
        $("#slider_2").slider({
            values: [ 17, 67 ],
            orientation: "horizontal",
            range: true,
            animate: true,
            slide: function( event, ui ) {
                $( "#slider_2_amount" ).html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            },
            stop: function( event, ui ) {
                //action
            }            
        });    
            
        $("#slider_3").slider({
            orientation: "vertical",
            range: "min",
            min: 0,
            max: 100,
            value: 10,            
            stop: function( event, ui ) {
                //action
            }            
        }); 

        $("#slider_4").slider({
            orientation: "vertical",
            range: true,
            values: [ 17, 67 ],
            stop: function( event, ui ) {
                //action
            }
        }); 

        $("#slider_5").slider({
            orientation: "vertical",            
            range: "max",
            min: 1,
            max: 10,
            value: 2,
            stop: function( event, ui ) {
                //action
            }            
        });     
    // eof sliders
    
    // popovers
    
    $("#popover_top").popover({placement: 'top', title: 'Popover title', content: 'Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit.'});
    $("#popover_right").popover({placement: 'right', title: 'Popover title', content: 'Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit.'});
    $("#popover_bottom").popover({placement: 'bottom', title: 'Popover title', content: 'Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit.'});
    $("#popover_left").popover({placement: 'left', title: 'Popover title', content: 'Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit.'});
    
    // eof popovers
    
    // jQuery dialogs

        
        
        $("#jDialog_default_button").click(function(){
            $("#jDialog_default").dialog({autoOpen: false}).dialog('open');
        });
        
        $("#jDialog_modal_button").click(function(){
            $("#jDialog_modal").dialog({autoOpen: false, modal: true}).dialog('open');
        });        
    
        $("#jDialog_form_button").click(function(){
            $("#jDialog_form").dialog({autoOpen: false, 
                                    modal: true,
                                    width: 400,
                                    buttons: {                            
                                        "Submit": function() {
                                            $( this ).dialog( "close" );
                                        },
                                        Cancel: function() {
                                            $( this ).dialog( "close" );
                                        }
            }}).dialog('open');                        
        });        
        
        
        
    // eof dialogs
    
    // dataTable    
        if($(".dtable").length > 0)
            $(".dtable").dataTable({bFilter: false, bInfo: false, bPaginate: false, bLengthChange: false,                                                                       
                                   bSort: true,
                                   bAutoWidth: true,
                                   "aoColumnDefs": [{"bSortable": false,
                                                     "aTargets": [ -1 , 0]}]});    
        if($(".fTable").length > 0)
            $(".fTable").dataTable({bSort: true, 
                                    "iDisplayLength": 5, "aLengthMenu": [5,10,25,50,100], // can be removed for basic 10 items per page
                                    "aoColumnDefs": [{"bSortable": false,
                                                     "aTargets": [ -1 , 0]}]});
        
        if($(".fpTable").length > 0)
            $(".fpTable").dataTable({bSort: true, 
                                     bAutoWidth: true,
                                    "iDisplayLength": 5, "aLengthMenu": [5,10,25,50,100], // can be removed for basic 10 items per page
                                    "sPaginationType": "full_numbers",
                                    "aoColumnDefs": [{"bSortable": false,
                                                     "aTargets": [ -1 , 0]}]});
        
        if($(".aTable").length > 0)
            $(".aTable").dataTable({bSort: true,                                     
                                    "sPaginationType": "full_numbers",
                                    "bProcessing": true,
                                    "sAjaxSource": 'php/ajax_datatable.php'});        
        
    // eif dataTable    
    
    //wysiwyg editor
    if($("#wysiwyg").length > 0){
        wEditor = $("#wysiwyg").cleditor({width:"100%", height:"300px"});
    }          
    if($("#mail_wysiwyg").length > 0)
        m_editor = $("#mail_wysiwyg").cleditor({width:"100%", height:"100%",controls:"bold italic underline strikethrough | font size style | color highlight removeformat | bullets numbering | outdent alignleft center alignright justify"})[0].focus();    
    
    // eof wysiwyg editor
    
    //syntax highlight
    SyntaxHighlighter.defaults['toolbar'] = false;
    SyntaxHighlighter.all();    
    //eof syntax highlight
    
    // easy pie chart
    if($(".epc-green").length > 0)
        $('.epc .epc-green').easyPieChart({animate: 100,barColor: '#FFFFFF',trackColor: '#A4CF7D',scaleColor: false,lineWidth: '10',lineCap: 'square',size: 100});
    if($(".epc-orange").length > 0)
        $('.epc .epc-orange').easyPieChart({animate: 100, barColor: '#FFFFFF',trackColor: '#E68C7D',scaleColor: false,lineWidth: '10',lineCap: 'square',size: 100});
    if($(".epc-red").length > 0)
        $('.epc .epc-red').easyPieChart({animate: 100,barColor: '#FFFFFF',trackColor: '#DA7C88',scaleColor: false,lineWidth: '10',lineCap: 'square',size: 100});    
    if($(".epc-blue").length > 0)
        $('.epc .epc-blue').easyPieChart({animate: 100,barColor: '#FFFFFF',trackColor: '#009AD7',scaleColor: false,lineWidth: '10',lineCap: 'square',size: 100});
    if($(".epc-dblue").length > 0)
        $('.epc .epc-dblue').easyPieChart({animate: 100,barColor: '#FFFFFF',trackColor: '#669AB5',scaleColor: false,lineWidth: '10',lineCap: 'square',size: 100});


    if($(".epcm-green").length > 0)
        $('.epc .epcm-green').easyPieChart({animate: 100,barColor: '#FFFFFF',trackColor: '#A4CF7D',scaleColor: false,lineWidth: '10',lineCap: 'square',size: 80});
    if($(".epcm-orange").length > 0)
        $('.epc .epcm-orange').easyPieChart({animate: 100, barColor: '#FFFFFF',trackColor: '#E68C7D',scaleColor: false,lineWidth: '10',lineCap: 'square',size: 80});
    if($(".epcm-red").length > 0)
        $('.epc .epcm-red').easyPieChart({animate: 100,barColor: '#FFFFFF',trackColor: '#DA7C88',scaleColor: false,lineWidth: '10',lineCap: 'square',size: 80});        
    if($(".epcm-blue").length > 0)
        $('.epc .epcm-blue').easyPieChart({animate: 100,barColor: '#FFFFFF',trackColor: '#66C2E7',scaleColor: false,lineWidth: '10',lineCap: 'square',size: 80});    
    if($(".epcm-dblue").length > 0)
        $('.epc .epcm-dblue').easyPieChart({animate: 100,barColor: '#FFFFFF',trackColor: '#669AB5',scaleColor: false,lineWidth: '10',lineCap: 'square',size: 80});    
    // eof easy pie chart
            
    // File uploader
    if($("#uploader_v5").length > 0){
        $("#uploader_v5").pluploadQueue({		
                runtimes : 'html5',
                url : 'php/pluploader/upload.php',
                max_file_size : '1mb',
                chunk_size : '1mb',
                unique_names : true,
                dragdrop : true,
                resize : {width : 320, height : 240, quality : 100},
                filters : [
                        {title : "Image files", extensions : "jpg,gif,png"},
                        {title : "Zip files", extensions : "zip"}
                ],
                FilesAdded: function(editor,files){
                    alert(files);
                }
        });
    }
    if($("#uploader_v4").length > 0){
        $("#uploader_v4").pluploadQueue({		
                runtimes : 'html4',
                url : 'php/pluploader/upload.php',
                unique_names : true,
                filters : [
                        {title : "Image files", extensions : "jpg,gif,png"},
                        {title : "Zip files", extensions : "zip"}
                ]
        });
    }   
    // eof file uploader
    
    // sparklines 
        if($(".mChartBar").length > 0)
            $(".mChartBar").sparkline('html',{ enableTagOptions: true, disableHiddenCheck: true});
        
    // eof sparklines
        
    // draggable blocks //
    $( ".sortableContent .column" ).sortable({
            connectWith: ".sortableContent .column",
            items: "> .block",
            handle: ".head",
            placeholder: "sortablePlaceholder",
            start: function(event,ui){
                $(".sortablePlaceholder").height(ui.item.height());
            },
            stop: function(event, ui){                                
                //action
            }
            
        }).disableSelection();    
    
    // eof draggable blocks
                    
   // new selector case insensivity        
        $.expr[':'].containsi = function(a, i, m) {
            return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
        };        
   // 
   
   if($('#main_calendar').length > 0){
        // fullcalendar
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        var calendar = $('#main_calendar').fullCalendar({
                header: {		
                        left: 'prev,next',
                        center: 'title',
                        right: '',
                        right: 'month,agendaWeek,agendaDay'
                },   
                selectable: true,
                selectHelper: true,
                select: function(start, end) {

                        $('#fcAddEvent').modal('show');

                        $("#fcAddEventButton").click(function(){

                            var title = $("#fcAddEventTitle").val();

                            if(title){
                                calendar.fullCalendar('renderEvent',
                                            {
                                                    title: title,
                                                    start: start,
                                                    end: end
                                            },true
                                    );
                                    notify('Fullcalendar','New Event: '+title+';<br/>start: '+start+';<br/>end: '+end+';');
                            }

                            $('#fcAddEvent').modal('hide'); 
                            $("#fcAddEventTitle").val('');
                            calendar.fullCalendar('unselect');
                        });                    
                },
                editable: true,
                events: {
                    url: "php/ajax_fullcalendar.php"
                }            
        });   
    }
   
});

$(window).load(function(){

    // custom scrollbar        
    if($(".scroll").length > 0)
        $(".scroll").mCustomScrollbar();
    // eof custom scrollbar    
    
});

$('.wrapper').resize(function(){

    if($("#wysiwyg").length > 0) editor.refresh();
    if($("#mail_wysiwyg").length > 0) m_editor.refresh();
    
});


