/* file:           plugins.js
 * version:        1.3
 * last update:   23.03.2014
 * description:    All template plugins included in this file 
*/

$(document).ready(function(){

    /* page toolbar tabs */
    $(document.body).on("click",".page-toolbar-tabs li a",function(){    
        var pli = $(this).parent("li");
        var act = $($(this).attr("href"));
        
        var parentTab = $(this).parents(".page-toolbar-tab");
        
        if(parentTab.length > 0){            
            parentTab.find(".page-toolbar-tabs li").removeClass("active");
            parentTab.find(".page-toolbar-tab").removeClass("active");
        }else{
            $(".page-toolbar-tabs li,.page-toolbar-tab").removeClass("active");
        }
        
        
        pli.addClass("active");
        act.addClass("active");
        
        return false;
    });
    /* eof page toolbar tabs */    
    
    /* daterangepicker */    
    gDateRangePicker = {
        init: function(container){            
            if($(container+" .daterange").length > 0)
               $(container+" .daterange").daterangepicker({format: 'YYYY-MM-DD',startDate: '2013-01-01',endDate: '2013-12-31'});            
        }
    }    
    /* eof daterangepicker */
    
    /* Summernote */
    gSummernote = {
        init: function(container){
            if($(container+" .editor").length > 0)
               $(container+" .editor").summernote({height: 300});
        }    
    }
    gSummernoteEditor = {
        init: function(container){
            $(container+" .email_editor").on("click",function(){
                $(container+" .email_editor").summernote({height: 300,focus: true});        
            });            
        }
    } 
    /* eof Summernote */

    /* Fancybox */
    gFancybox = {
        init: function(container){
            if($(container+" .fancybox").length > 0)
               $(container+" .fancybox").fancybox({padding: 5});            
        }   
    }    
    /* EOF Fancybox */    
    
    /* jQuery */    
        /* datepicker */
        gDatepicker = {
            init: function(container){
                if($(container+" .datepicker").length > 0)
                   $(container+" .datepicker").datepicker({nextText: "", prevText: "",showOtherMonths: true, selectOtherMonths: true, dateFormat: "yy-mm-dd"});
            }
        }                
        gMDatepicker = {
            init: function(container){
                if($(container+" .mdatepicker").length > 0)
                   $(container+" .mdatepicker").datepicker({nextText: "", prevText: "", numberOfMonths: 3, dateFormat: "yy-mm-dd"});    
            }
        }                
        /* eof datepicker */
        
        /* datepicker */
        gTimepicker = {
            init: function(container){
                if($(container+" .timepicker").length > 0)
                   $(container+" .timepicker").timepicker({showButtonPanel:false});
            }
        }        
        gDateTimepicker = {
            init: function(container){
                if($(container+" .datetimepicker").length > 0)
                   $(container+" .datetimepicker").datetimepicker({showButtonPanel:false});
            }
        }                
        /* eof datepicker */

        /* Accordion */
        gAccordion = {
            init: function(container){
                if($(container+" .accordion").length > 0){
                   $(container+" .accordion").accordion({heightStyle: "content"});           
                   $(container+" .accordion .ui-accordion-header:last").css("border-bottom","0px");
                }                    
            }
        }                
        /* EOF Accordion */  
        
    /* eof jQuery */
    
    /* bootstrap tooltip */    
    gTip = {
        init: function(container){                        
            if($(container+" .tip").length > 0){                
                $(container+" .tip").tooltip({placement: 'top'});    
                $(container+" .tipb").tooltip({placement: 'bottom'});    
                $(container+" .tipl").tooltip({placement: 'left'});        
                $(container+" .tipr").tooltip({placement: 'right'});            
            }
        }
    }        
    /* eof bootstrap tooltip */
    
    /* bootstrap popover */
    gPopover = {
        init: function(container){
            $(container+" [data-toggle=popover]").popover();
        }
    }
    
    /* eof bootstrap popover */
    
    /* mCustomScrollbar */    
    $(".page-navigation").mCustomScrollbar({autoHideScrollbar: true,scrollInertia: 20, advanced: {autoScrollOnFocus: false}});
    
    gScroll = {
        init: function(container){
            if($(container+" .scroll").length > 0) 
               $(container+" .scroll").mCustomScrollbar({autoHideScrollbar: true, advanced: {autoScrollOnFocus: false}});
        }
    }
    
    $(".modal").on("shown.bs.modal",function(){
        $(this).find(".scroll").mCustomScrollbar("update");
    });        
    /* eof mCustomScrollbar */
    
    /* sparkline */
    gSparkline = {
        init: function(container){
            if($(container+" .sparkline").length > 0)
               $(container+" .sparkline").sparkline('html', { enableTagOptions: true, disableHiddenCheck: true});            
        }
    }        
    /* eof sparkline */
    
    /* select2*/
    gSelect2 = {
        init: function(container){
            if($(container+" .select2").length > 0) 
               $(container+" .select2").select2();
        }
    }
    /* eof select2*/
    
    /* tagsinput */
    gTagsInput = {
        init: function(container){
            if($(container+" .tagsinput").length > 0)
               $(container+" .tagsinput").tagsInput({width: '100%',height:'auto'});
        }
    }    
    /* eof tagsinput */
    
    /* icheck */
    gICheck = {
        init: function(container){        
            if($(container+" input.icheck").length > 0) 
               $(container+" .icheck").iCheck({checkboxClass: 'icheckbox_flat', radioClass: 'iradio_flat'});
    
            /* IMPORTANT: If you use only default icheck than this part code can be removed from here --> */
            if($(container+" input.icheck-red").length > 0) 
                $(container+" .icheck-red").iCheck({checkboxClass: 'icheckbox_flat-red', radioClass: 'iradio_flat-red'});
            if($(container+" input.icheck-grey").length > 0) 
                $(container+" .icheck-grey").iCheck({checkboxClass: 'icheckbox_flat-grey', radioClass: 'iradio_flat-grey'});
            if($(container+" input.icheck-blue").length > 0) 
                $(container+" .icheck-blue").iCheck({checkboxClass: 'icheckbox_flat-blue', radioClass: 'iradio_flat-blue'});
            if($(container+" input.icheck-orange").length > 0) 
                $(container+" .icheck-orange").iCheck({checkboxClass: 'icheckbox_flat-orange', radioClass: 'iradio_flat-orange'});
            if($(container+" input.icheck-pink").length > 0) 
                $(container+" .icheck-pink").iCheck({checkboxClass: 'icheckbox_flat-pink', radioClass: 'iradio_flat-pink'});
            if($(container+" input.icheck-purple").length > 0) 
                $(container+" .icheck-purple").iCheck({checkboxClass: 'icheckbox_flat-purple', radioClass: 'iradio_flat-purple'});
            if($(container+" input.icheck-yellow").length > 0) 
                $(container+" .icheck-yellow").iCheck({checkboxClass: 'icheckbox_flat-yellow', radioClass: 'iradio_flat-yellow'});
            if($(container+" input.icheck-green").length > 0) 
                $(container+" .icheck-green").iCheck({checkboxClass: 'icheckbox_flat-green', radioClass: 'iradio_flat-green'});
            if($(container+" input.icheck-aero").length > 0) 
                $(container+" .icheck-aero").iCheck({checkboxClass: 'icheckbox_flat-aero', radioClass: 'iradio_flat-aero'});    
            /* <-- To Here :) */                        
        }
    }
            
    /* eof icheck */
    
    /* validation */
    gValidate = {
        init: function(container){
            if($(container+" .validate").length > 0)
               $(container+" .validate").validationEngine('attach',{promptPosition : "topLeft"});
        }
    }            
    /* eof validation */
    
    /* Masked Input */
    gMask = {
        init: function(container){            
            if($(container+" input[class^='mask_']").length > 0){
                $(container+" input.mask_tin").mask('99-9999999');
                $(container+" input.mask_ssn").mask('999-99-9999');        
                $(container+" input.mask_date").mask('9999-99-99');
                $(container+" input.mask_product").mask('a*-999-a999');
                $(container+" input.mask_phone").mask('99 (999) 999-99-99');
                $(container+" input.mask_phone_ext").mask('99 (999) 999-9999? x99999');
                $(container+" input.mask_credit").mask('9999-9999-9999-9999');        
                $(container+" input.mask_percent").mask('99%');
            }                         
        }
    }
       
    /* EOF Masked Input */    
    
    /* Datatables */
    gTableSimple = {
        init: function(container){
            if($(container+" table.sortable_simple").length > 0)
               $(container+" table.sortable_simple").dataTable({"iDisplayLength": 5,"bLengthChange": false,"bFilter": false,"bInfo": false,"bPaginate": true});            
        }
    }    
    gTableDefault = {
        init: function(container){
            if($(container+" table.sortable_default").length > 0)
               $(container+" table.sortable_default").dataTable({"iDisplayLength": 5, "sPaginationType": "full_numbers","bLengthChange": false,"bFilter": false,"bInfo": false,"bPaginate": true, "aoColumns": [ { "bSortable": false }, null, null, null, null]});
        }
    }    
    gTableSortable = {
        init: function(container){
            if($(container+" table.sortable").length > 0)
               $(container+" table.sortable").dataTable({"iDisplayLength": 5, "aLengthMenu": [5,10,25,50,100], "sPaginationType": "full_numbers", "aoColumns": [ { "bSortable": false }, null, null, null, null]});
        }
    }        
    /* EOF Datatables */
    
    /* Spinner */
    gSpinner = {
        init: function(container){
            
            if($(container+" .spinner").length > 0){
                $(container+" .spinner").spinner();
                    /* this samples can be removed */
                    $(container+" .spinner2").spinner({step: 0.1});
                    $(container+" .spinner3").spinner({min: 0,max: 2500,step: 25.15,numberFormat: "C"});   
                    /* eof this samples can be removed */            
                    
                    $(container+" .ui-spinner").find('span').html('');                    
            }
        }
    }    
    /* eof Spinner */
    
    /* knob plugin */
    gKnob = {
        init: function(container){
            if($(container+" .knob").length > 0) 
               $(container+" .knob input").knob();            
        }
    }
    /* eof knob plugin */
    
    /* Chained select */
    gChained = {
        init: function(container){

            if($(container+" .chained_group").length > 0)
                $(container+" .chained_subgroup").chained(container+" .chained_group");

            if($(container+" .ch_mark").length > 0){
                $(container+" .ch_series").chained(container+" .ch_mark");
                $(container+" .ch_model").chained(container+" .ch_series");
            }

        }
        
        
    }
    
    /* eof Chained select */    
    
    
    /* My Custom Progressbar */
    $.mpb = function(action,options){

        var settings = $.extend({
            state: '',            
            value: [0,0],
            position: '',
            speed: 20,
            complete: null
        },options);

        if(action == 'show' || action == 'update'){
            
            if(action == 'show'){
                $(".mpb").remove();
                var mpb = '<div class="mpb '+settings.position+'">\n\
                               <div class="mpb-progress'+(settings.state != '' ? ' mpb-'+settings.state: '')+'" style="width:'+settings.value[0]+'%;"></div>\n\
                           </div>';
                $('body').append(mpb);
            }
            
            var i  = $.isArray(settings.value) ? settings.value[0] : $(".mpb .mpb-progress").width();
            var to = $.isArray(settings.value) ? settings.value[1] : settings.value;            
            
            var timer = setInterval(function(){
                $(".mpb .mpb-progress").css('width',i+'%'); i++;
                
                if(i > to){
                    clearInterval(timer);
                    if($.isFunction(settings.complete)){
                        settings.complete.call(this);
                    }
                }
            }, settings.speed);

        }

        if(action == 'destroy'){
            $(".mpb").remove();
        }                
        
    }
    /* Eof My Custom Progressbar */
    
    // new selector case insensivity        
     $.expr[':'].containsi = function(a, i, m) {
         return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
     };        
    //  
    gPlugins("body");
});


function gPlugins(container){    
    gDateRangePicker.init(container);
    gSummernote.init(container);
    gSummernoteEditor.init(container);
    gFancybox.init(container);
    gDatepicker.init(container);
    gMDatepicker.init(container);
    gTimepicker.init(container);
    gDateTimepicker.init(container);
    gAccordion.init(container);
    gTip.init(container);
    gPopover.init(container);
    gScroll.init(container);
    gSparkline.init(container);
    gSelect2.init(container);
    gTagsInput.init(container);
    gICheck.init(container);
    gValidate.init(container);
    gMask.init(container);
    gTableSimple.init(container);
    gTableDefault.init(container);
    gTableSortable.init(container);
    gSpinner.init(container);
    gKnob.init(container);   
    gChained.init(container);
}

