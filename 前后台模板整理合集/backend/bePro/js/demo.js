/* file:           demo.js
 * version:        1.3
 * last changed:   23.03.2014
 * description:    This file can be removed before you use template in production. 
 *                 It contains with elements used only for demo preview, and you doesnt need to include 
 *                 it in your project, couse this features is individual.
*/

$(document).ready(function(){
    
    $.get("assets/ajax-sidebar.html", function(data){
        $(".page-sidebar").html(data);
        $(".page-sidebar").mCustomScrollbar({autoHideScrollbar: true, scrollInertia: 20, advanced: {autoScrollOnFocus: false}})
    });
    
    gDemos = {        
        init: function(){
            
            /* DropZone */
            if($(".dropzone").length > 0){               
                Dropzone.discover();                
            }
            /* Eof DropZone */
            
            
            /* filetree plguin */
            if($("#filetree").length > 0){

                $("#filetree").fileTree({
                    root: '/',
                    script: 'assets/filetree/jqueryFileTree.php',
                    expandSpeed: 200,
                    collapseSpeed: 200,
                    multiFolder: false
                }, function(file) {
                    alert(file);
                });                        

            }
            /* eof filetree plguin */

            /* image crop plugin */
            if($("#imgcrop").length > 0){

                $('img#imgcrop').imgAreaSelect({handles: true,
                                                maxWidth: 200, 
                                                maxHeight: 150,
                                                onSelectChange: function(img,selection){
                                                    $("#crop_x1").val(selection.x1);
                                                    $("#crop_y1").val(selection.y1);
                                                    $("#crop_x2").val(selection.x2);
                                                    $("#crop_y2").val(selection.y2); 
                                                }});        
            }
            /* eof image crop plugin */

            /* File uploader */
            if($("#pluploader").length > 0){

                $("#pluploader").pluploadQueue({runtimes : 'html5',
                                                url : 'assets/plupload.php',
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
            /* eof File uploader */

            /* calendar */
            if($("#calendar").length > 0){

                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();


                $('#external-events .external-event').each(function() {
                        var eventObject = {title: $.trim($(this).text())};

                        $(this).data('eventObject', eventObject);
                        $(this).draggable({
                                zIndex: 999,
                                revert: true,
                                revertDuration: 0
                        });
                });        

                var calendar = $('#calendar').fullCalendar({
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                    },
                    editable: true,
                    events: {url: "assets/ajax_fullcalendar.php",
                             success: function(){
                                $("#alert_holder").html('<div class="alert alert-info">Events successfuly loaded <button type="button" class="close" data-dismiss="alert">×</button></div>');
                            }
                    },
                    droppable: true,
                    selectable: true,
                    selectHelper: true,
                    select: function(start, end, allDay) {
                        var title = prompt('Event Title:');
                        if (title) {
                            calendar.fullCalendar('renderEvent',
                            {
                                title: title,
                                start: start,
                                end: end,
                                allDay: allDay
                            },
                            true
                            );
                        }
                        calendar.fullCalendar('unselect');
                    },
                    drop: function(date, allDay) {

                        var originalEventObject = $(this).data('eventObject');

                        var copiedEventObject = $.extend({}, originalEventObject);

                        copiedEventObject.start = date;
                        copiedEventObject.allDay = allDay;

                        $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);


                        if ($('#drop-remove').is(':checked')) {
                            $(this).remove();
                        }

                    }
                });        

            }    
            /* eof fullcalendar*/    



            /* daterangepicker */       
            if($("#reportrange").length > 0){   
                $("#reportrange").daterangepicker({
                    ranges: {
                        'Today': [moment(), moment()],
                        'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                        'Last 7 Days': [moment().subtract('days', 6), moment()],
                        'Last 30 Days': [moment().subtract('days', 29), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                        'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                    },
                    opens: 'left',
                    startDate: moment().subtract('days', 29),
                    endDate: moment()},
                    function(start, end) {
                      $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                    }
                );
                $("#reportrange span").html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
            }
            if($("#reportrange2").length > 0){   
                $("#reportrange2").daterangepicker({
                    ranges: {
                        'Today': [moment(), moment()],
                        'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                        'Last 7 Days': [moment().subtract('days', 6), moment()],
                        'Last 30 Days': [moment().subtract('days', 29), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                        'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                    },
                    opens: 'right',
                    startDate: moment().subtract('days', 29),
                    endDate: moment()},
                    function(start, end) {
                      $('#reportrange2 span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                    }
                );
                $("#reportrange2 span").html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
            }
            /* eof daterangepicker */

            /* Nestable */
            if($("#nestable").length > 0){

                var mNestable = function () {

                    var updNestableOutput = function(e){

                        var list   = e.length ? e : $(e.target),
                            output = list.data('output');
                        if (window.JSON) {
                            output.val(window.JSON.stringify(list.nestable('serialize')));
                        } else {
                            output.val('JSON browser support required for this demo.');
                        }          
                    };

                    return {
                        show: function(){                    
                            $("#nestable").nestable({group: 1}).on("change", updNestableOutput);        
                            $("#nestable2").nestable({group: 1}).on("change", updNestableOutput);

                            updNestableOutput($('#nestable').data('output', $('#nestable-output')));
                            updNestableOutput($('#nestable2').data('output', $('#nestable2-output')));

                            $('#nestable_actions').on('click', function (e) {
                                var target = $(e.target),
                                    action = target.data('action');

                                if(action === 'expand-all') $('.dd').nestable('expandAll');                        
                                if(action === 'collapse-all') $('.dd').nestable('collapseAll');

                            });

                        }
                    }

                }();

                mNestable.show();

            };
            /* EOF Nestable */    



            /* form wizard */
            if($("#form-wizard").length > 0){
                $("#form-wizard").bootstrapWizard({"tabClass": "form-wizard-levels"});
            }
            /* Wizard validation */
            if($("#form-wizard2").length > 0){

                var $validator = $("#wizard-validate").validate({
                          rules: {
                            login: {
                                    required: true,
                                    minlength: 2,
                                    maxlength: 8
                            },
                            password: {
                                    required: true,
                                    minlength: 5,
                                    maxlength: 10
                            },
                            repassword: {
                                    required: true,
                                    minlength: 5,
                                    maxlength: 10,
                                    equalTo: "#password"
                            },
                            email: {
                                    required: true,
                                    email: true
                            },
                            name: {
                                    required: true,
                                    maxlength: 10
                            },
                            about: {
                                    required: true
                            }
                          }
                        });

                        $('#form-wizard2').bootstrapWizard({
                                'tabClass': 'form-wizard-levels',
                                'onNext': function(tab, navigation, index) {                            
                                        var $valid = $("#wizard-validate").valid();
                                        if(!$valid) {
                                                $validator.focusInvalid();
                                                return false;
                                        }
                                        var $total = navigation.find('li').length;
                                        var $current = index+1;
                                        if($current >= $total) {                                    
                                            $('#wizard-validate').find('.pager .next').hide();
                                            $('#wizard-validate').find('.pager .finish').show();                                    
                                        }else{
                                            $('#wizard-validate').find('.pager .next').show();
                                            $('#wizard-validate').find('.pager .finish').hide();
                                        }
                                },
                                onTabClick: function(tab, navigation, index) {return false;}
                        });	

            }        
            /* eof wizard validation */
            /* eof form wizard */


            /* jQuery */        
                /* slider (DEMO) */  
                if($("#slider_sample_1").length > 0){

                    $("#slider_sample_1").slider({value: 10});

                    $("#slider_sample_2").slider({range: true,min: 0,max: 1000,values: [ 200, 800 ],
                        slide: function(event, ui) {
                            $("#slider_range_2").html(ui.values[ 0 ] + " - " + ui.values[ 1 ]);
                        }
                    });            
                    $("#slider_range_2").html( $("#slider_sample_2").slider("values",0) + " - " + $("#slider_sample_2").slider( "values", 1 ));

                    $("#slider_sample_3").slider({min: 0,max: 1000, value: 200, step: 100, range: "min",
                        slide: function(event, ui) {
                            $("#slider_range_3").html(ui.value);
                        }
                    });            
                    $("#slider_range_3").html( $("#slider_sample_3").slider("value"));

                    $("#slider_sample_4").slider({orientation: "vertical",range: "min",min: 0,max: 100,value: 60,
                        slide: function(event, ui) {
                            $("#slider_range_4").html(ui.value);
                        }
                    });
                    $("#slider_range_4" ).html($("#slider_sample_4").slider( "value" ));

                    $("#slider_sample_5").slider({orientation: "vertical",range: true, values: [ 20, 80 ], min: 0, max: 100,
                        slide: function(event, ui) {
                            $("#slider_range_5").html(ui.values[0]+"-"+ui.values[1]);
                        }
                    });
                    $("#slider_range_5" ).html($("#slider_sample_5").slider("values", 0)+"-"+$("#slider_sample_5").slider("values", 1));
                }            
                /* eof slider */

            /* eof jQuery */            
            
        }        
    }
    gDemos.init();

});

function gDemo(){
    gDemos.init();
}
