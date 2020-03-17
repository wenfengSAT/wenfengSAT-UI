"use strict";

var dev_app_settings = {
    dev_page_loader: false// use false to disablle page loader    
};

var dev_custom = {
    init: function(){
        // New selector case insensivity        
        $.expr[':'].containsi = function(a, i, m) {
            return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
        };
    }
}

var dev_header = {
    init: function(){
    /* header actions */    
    
        /* add click outside event */
        $("body").on("click",function(){
            $(".dph-buttons > li").removeClass("active");
        });
        /* ./end */
    
        /* add listener to header buttons */
        $(".dph-buttons > li").on("click",function(e){
            e.stopPropagation();
            
            if($(this).find(".dev-popup").length > 0){
                $(this).toggleClass("active"); 
                return false;
            }            
        });
        /* ./end */
        
        /* popup click stoppropagation */
        $(".dev-page-header .dev-popup").on("click",function(e){
            e.stopPropagation();
        });
        /* ./end */
        
                
    /* ./header actions */    
    }
};

var dev_sidebar_navigation = {
    init: function() {
    /* navigation functions */
        
        if($(".dev-page-sidebar").length === 0) return false;
        
        /* navigation element height */
        var elmHeight = 55;
        /* ./end */
        
        /* add click outside event */
        $("body").on("click",function(){
            $(".dev-page-sidebar-minimized .dev-page-navigation li").removeClass("active");
            $(".dev-page-sidebar-minimized .dev-page-navigation ul").css("max-height","");
        });
        /* ./end  */
        
        /* check default settings */
        if($(".dev-page").hasClass("dev-page-sidebar-collapsed"))
            $(".dev-page-sidebar-collapse").addClass("active");                
        /* ./end */
        
        /* add class .has-child to all elements that have childs */
        $(".dev-page-navigation li").each(function(){
            if($(this).find(" > ul").length > 0){
                $(this).addClass("has-child");
            }
            
            if($(this).hasClass("active")){
                var ul = $(this).children("ul");
                
                var maxHeight = ul.find("li").length * elmHeight;                
                ul.css("max-height",maxHeight);
            }
        });
        /* ./end */
        
        /* add event listener to navigation link */
        $(".dev-page-navigation li > a").on("click",function(e){            
            e.stopPropagation();
                       
            var li = $(this).parent("li");
            var ul = li.children("ul");
            
            if(ul.length > 0){                
               
               /* close other opened elements in minimized mode */
                if($(".dev-page").hasClass("dev-page-sidebar-minimized")){
                    var other = li.parent("ul").find("> li").not(li);

                    other.each(function(){
                        $(this).removeClass("active");
                        $(this).find("li").removeClass("active");
                        $(this).find("ul").css("max-height",0);
                    });
                }
                /* ./end */
                
                /* toggle active class */
                if(li.hasClass("active")){
                    li.removeClass("active");
                    ul.css("max-height",0);
                }else{
                    var maxHeight = ul.find("li").length * elmHeight;
                    li.addClass("active");
                    ul.css("max-height",maxHeight);
                    
                    li.parent("ul").find("li").not(li).each(function(){
                        $(this).removeClass("active");
                        $(this).children("ul").css("max-height",0);
                    });
                }
                /* ./end */                                
                
                /* call window resize function to fix navigation height*/
                if(window.innerWidth > 992) $(window).resize();
                /* ./end */
                
                return false;
            }else{
                /* get url from href */
                var url = $(this).attr("href");
                /* ./end */
                
                /* check it */
                if(url !== "#" && dev_app_settings.dev_page_loader === true){
                    /* start loading layer */
                    dev_loaders_page_loader.open();
                    /* ./end */

                    /* wait .5sec and reload page */
                    setTimeout(function(){
                        window.location.href = url;
                    },500);
                    /* ./end */

                    return false;                    
                }
                /* ./check it */                
            }
            
        });
        /* ./end */
        
        $(".dev-page-sidebar").mCustomScrollbar({axis:"y", autoHideScrollbar: true, scrollInertia: 200, advanced: {autoScrollOnFocus: false}});
        
        if($(".dev-page").hasClass("dev-page-sidebar-minimized"))
            $(".dev-page-sidebar").mCustomScrollbar("disable",true);
        
    /* ./navigation functions */    
    }
};

var dev_header_navigation = {
    init: function() {
        
        if($(".dev-page-header .dev-page-navigation").length === 0) return false;
        
        /* add class .has-child to all elements that have childs */
        $(".dev-page-navigation li").each(function(){
            if($(this).find(" > ul").length > 0){
                $(this).addClass("has-child");
            }            
        });
        /* ./end */      
        
        $(".dev-page-navigation li").removeClass("active");
        
        if(window.innerWidth > 992){
            $(".dev-page-navigation li > a").unbind("click");            
            
            $(".dev-page-navigation li").hover(function(){
                $(this).addClass("active");                  
            },function(){            
                $(this).removeClass("active");            
            });
        }else{            
            $(".dev-page-navigation li").unbind('mouseenter mouseleave');
            
            $(".dev-page-navigation li > a").on("click",function(){
                $(this).parent("li").toggleClass("active");
                
                if($(this).parent("li").hasClass("has-child")) return false;
            });
        }
        
        $(".dev-page-navigation-toggle").on("click",function(){
            $(".dev-page-navigation li").removeClass("active");
            $(".dev-page-navigation").toggleClass("show");
            return false;
        });
        
    }
};

var dev_container_tabbed = {
    init: function(){
        
        if($(".container-tabbed").length === 0) return false;
        
        $(".container-tabbed .container-tabs a").on("click",function(){
            var link = $(this).attr("href");
            if($(link).length > 0){
                $(".container-tabbed .container-tabs a").removeClass("active");
                $(".container-tabbed .container-tab").removeClass("active");
                
                $(this).addClass("active");
                $(link).addClass("active");
            }
            
            return false;
        });        
        
    }    
};

var dev_panels = {
    init: function(){
        
        /* add collapse panel handler */
        $(".panel-collapse").on("click",function(){
            var panel = $(this).parents(".panel");
            
            if(panel.hasClass("panel-collapsed")){
                panel.removeClass("panel-collapsed");
                $(this).find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
            }else{
                panel.addClass("panel-collapsed");
                $(this).find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");                
            }
            
            dev_layout_alpha_content.init(dev_layout_alpha_settings);
            
            return false;
        });
        /* ./end */
        
    }
};

/* remove panel function */
function dev_panel_remove(p,c){    
    if(typeof c === "function") c(); // run callback         
     
    /* remove panel */
    p.animate({opacity: "0"},200,"linear",function(){
        $(this).remove();
        dev_layout_alpha_content.init(dev_layout_alpha_settings);
    });        
    
    return false;
}
/* ./remove panel function */

/* panel fullscreen mode */
function dev_panel_fullscreen(panel){    
    
    if(panel.hasClass("panel-fullscreened")){
        panel.removeClass("panel-fullscreened").unwrap();
        panel.find(".panel-body").css("height","");
        panel.find(".panel-fullscreen .fa").removeClass("fa-compress").addClass("fa-expand");
        $(".dev-page").removeClass("dev-page-fullscreen");
        dev_layout_alpha_content.init(dev_layout_alpha_settings);
    }else{
        var head    = panel.find(".panel-heading");
        var body    = panel.find(".panel-body");
        var footer  = panel.find(".panel-footer");
        var hplus   = 10;
        
        if(body.hasClass("panel-body-table") || body.hasClass("padding-0")){
            hplus = 0;
        }
        if(head.length > 0){
            hplus += head.height()+21;
        } 
        if(footer.length > 0){
            hplus += footer.height()+21;
        } 

        panel.find(".panel-body,.chart-holder").height($(window).height() - hplus);
        
        
        panel.addClass("panel-fullscreened").wrap('<div class="panel-fullscreen-wrap"></div>');        
        panel.find(".panel-fullscreen .fa").removeClass("fa-expand").addClass("fa-compress");
        $(".dev-page").addClass("dev-page-fullscreen");
        
        dev_layout_alpha_content.init(dev_layout_alpha_settings);
    }
}
/* ./panel fullscreen mode */

var dev_login = {
    init: function(){
        
        $(".dev-page-login-block input").focus(function(){
            $(this).parents(".form-group").addClass("focus");
        }).blur(function(){
            $(this).parents(".form-group").removeClass("focus");
        });
        
    }
};

var dev_forms = {
    init: function(){
    /* default form functions */
    
        /* close on click outside */
        $("html").on("click",function() {
            $(".form-group-custom").not(".disabled").removeClass("active");
        });
        /* ./end */
        
        /* add disabled clas to custom form group if there any disabled input */
        $(".form-group-custom input:disabled").each(function(){
            $(this).parents(".form-group-custom").addClass("disabled");
        });
        /* ./end */

        /* spy click on form group */
        $(".form-group-custom").not(".disabled").on("click",function(e){            
            
            $(".form-group-custom").not($(this)).removeClass("active");            
            $(this).addClass("active");
            
            $(this).find("input,textarea,select").focus();            
            
            e.stopPropagation();
        });
        /* ./spy click on form group */
        
        /* spy focus on form elements */
        $(".form-group-custom input, .form-group-custom textarea, .form-group-custom select").focus(function(e){
            $(this).parent(".form-group-custom").not(".disabled").addClass("active");
            e.stopPropagation();
        }).blur(function(){            
            $(this).parent(".form-group-custom").not(".disabled").removeClass("active");           
        });
        /* ./spy focus on form elements */
        
        /* clear field function */
        $(".form-control-clear").each(function(){
            /* add class if no label */
            if($(this).find("label").length === 0)
                $(this).addClass("form-control-clear-no-head");
            /* ./add class if no label */
            
            /* wrap each form element in group */
            $(this).find("input,select,textarea").each(function(){                
                $(this).data("default-value",$(this).val());        
                $(this).wrap("<div class=\"form-control-clear-wrap\"></div>");
                $(this).parent("div").append("<a class=\"form-control-clear-button\"><span class=\"glyphicon glyphicon-remove\"></span></a>");                
            });
            /* ./wrap each form element in group */
        });
        
        $(".form-control-clear-button").on("click",function(){
            var input = $(this).prev("input,select,textarea");
            input.val("");
            //input.val(input.data("default-value"))); // use this code if you need to restore default value
        });
        /* ./clear field function */
        
    /* ./default form functions */

        /* file input */
        $("input.file").each(function(){
            var if_title = typeof $(this).attr("title") === "undefined" ? "Browse" : $(this).attr("title");
            var if_class = $(this).attr("class").replace("file","");

            if_class = if_class === "" ? " btn-default" : if_class;
            if_class = $(this).is(":disabled") ? if_class+" disabled" : if_class;

            $(this).wrap("<a href=\"#\" class=\"file-input btn"+if_class+"\"></a>").parent("a").append("<span>"+if_title+"</span>");
            $(this).parent("a").after("<span class=\"file-input-name\"></span>");
        });

        $("input.file").on("change",function(){
            $(this).parent("a").next(".file-input-name").html($(this).val().split('/').pop().split('\\').pop());
        });
        /* ./file input */        

        /* bootstrap select */
        if($(".selectpicker").length > 0)
            $(".selectpicker").selectpicker();        
        /* ./bootstra select */

        /* bootstrap datepicker */
        if($(".datetimepicker").length > 0)
            $(".datetimepicker").datetimepicker();
        
        if($(".datepicker").length > 0)
            $(".datepicker").datetimepicker({format: "MM/DD/YYYY"});
        
        if($(".timepicker").length > 0)
            $(".timepicker").datetimepicker({format: "HH:mm"});
        
        if($(".datepickeryears").length > 0)
            $(".datepickeryears").datetimepicker({viewMode: 'years'});
        /* ./bootstrap datepicker */

        /* specturm colorpicker */
        if($(".colorpicker").length > 0){
            $(".colorpicker").spectrum({showAlpha: true, showPalette: true, showSelectionPalette: true, palette: [], localStorageKey: "spectrum.homepage", showInput: true,preferredFormat: "hex", maxSelectionSize: 20});            
        }
        /* ./specturm colorpicker */

        /* tags input */
        if($("input.tags").length > 0)
            $("input.tags").tagsInput({width:'auto',height:'auto',defaultText: "Add a tag"});
        /* ./tags input */

        /* masked inputs */
        if($("input[class*='mask_']").length > 0){        
            $("input.mask_tin").mask('99-9999999');
            $("input.mask_ssn").mask('999-99-9999');        
            $("input.mask_date").mask('9999-99-99');
            $("input.mask_product").mask('a*-999-a999');
            $("input.mask_phone").mask('99 (999) 999-99-99');
            $("input.mask_phone_ext").mask('99 (999) 999-9999? x99999');
            $("input.mask_credit").mask('9999-9999-9999-9999');        
            $("input.mask_percent").mask('99%');
            $("input.mask_price").mask('$9.99');
        }
        /* ./masked inputs */
        
        /* tooltip */        
        $(".tip").tooltip();
        /* ./tooltip */
        
        /* summernote */
        if($(".summernote").length > 0)
            $(".summernote").summernote({'width': '100%', 'height': '300px'});
        /* ./summernote */            
        
        /* popover */
        $("[data-toggle='popover']").popover();
        /* ./popover */        
    }
};

// Counter-up
var counter = {
    init: function(){
        // init Counter-up
        if($(".counter").length > 0)
           $(".counter").counterUp({delay: 10,time: 1000});        
        // ./end
    }
};
// ./Counter-up

// Start Smart Wizard
var smartWizard = {    
    init: function(){

        if($(".wizard").length > 0){

            //check count of steps in each wizard
            $(".wizard > ul").each(function(){
                $(this).addClass("steps_"+$(this).children("li").length);
            });// ./end            
            
            // this is demo, can be removed if wizard is not using
            if($("#wizard-validation").length > 0){
                
                var validate =  $("#wizard-validation").validate({
                        errorClass:"has-error",
                        validClass:"has-success",
                        errorElement:"span",
                        ignore: [],                        
                        errorPlacement: function(error,element){
                            $(element).after(error);                    
                            $(element).parents(".form-group").addClass("has-error");
                        },
                        highlight: function(element, errorClass){
                            $(element).parents(".form-group").removeClass("has-success").addClass(errorClass);
                            dev_layout_alpha_content.init(dev_layout_alpha_settings);
                        },
                        unhighlight: function(element, errorClass, validClass){                    
                            $(element).parents(".form-group").removeClass(errorClass).addClass(validClass);
                            dev_layout_alpha_content.init(dev_layout_alpha_settings);
                        },
                        rules: {
                            login:      {required: true, minlength: 2, maxlength: 8},
                            password:   {required: true, minlength: 5, maxlength: 10},
                            repassword: {required: true, minlength: 5, maxlength: 10, equalTo: "#password"},
                            email:      {required: true, email: true},
                            name:       {required: true, maxlength: 10},
                            adress:     {required: true}
                        }
                });
                
            }// ./end of demo
            
            
            // init wizard plugin
            $(".wizard").smartWizard({
                // This part (using for wizard validation) of code can be removed FROM 
                onLeaveStep: function(obj){
                    var wizard = obj.parents(".wizard");

                    if(wizard.hasClass("wizard-validation")){

                        var valid = true;

                        $('input,textarea',$(obj.attr("href"))).each(function(i,v){
                            valid = validate.element(v) && valid;
                        });

                        if(!valid){
                            wizard.find(".stepContainer").removeAttr("style");
                            validate.focusInvalid();                                
                            return false;
                        }         
                    }    

                    dev_layout_alpha_content.init(dev_layout_alpha_settings);

                    return true;
                },// <-- TO
                //this is important part of wizard init
                onShowStep: function(obj){
                    var wizard = obj.parents(".wizard");

                    if(wizard.hasClass("show-submit")){

                        var step_num = obj.attr('rel');
                        var step_max = obj.parents(".anchor").find("li").length;

                        if(step_num == step_max){                             
                            obj.parents(".wizard").find(".actionBar .btn-primary").css("display","block");
                        }                         
                    }
                    
                    dev_layout_alpha_content.init(dev_layout_alpha_settings);
                    
                    return true;                         
                }// ./end
            });
            
            /*
            $(".modal").on('show.bs.modal', function (e) {
                $(this).find(".wizard").smartWizard("fixHeight");                
            });*/
        }            

    }
};//./start smart wizard

// dev tables 
var dev_tables = {
    init: function(){
        
        $(".table-controls").each(function(){
            
            
            var table = $(this).find("table");
            var thead = table.find("thead");
            var tbody = table.find("tbody");
            
            
            /* Buil list of headers */
            var list    = $("<select></select>").attr("multiple",true).addClass("form-control selectpicker");
            
            table.find("thead th").each(function(){               
               var option = $("<option></option>").attr("selected",true).val($(this).index()).html($(this).html());
                list.append(option);
            });            
            
            $(this).find(".table-controls-block").append(list);            
            /* ./Buil list of headers */
            
            /* spy change select values */
            list.on("change",function(){
                $(this).find("option").each(function(){
                    
                    var index = parseInt($(this).val()) + 1;
                    
                    if($(this).is(":selected")){
                        thead.find("tr th:nth-child("+index+")").show();
                        tbody.find("tr td:nth-child("+index+")").show();                        
                    }else{
                        thead.find("tr th:nth-child("+index+")").hide();                        
                        tbody.find("tr td:nth-child("+index+")").hide();                        
                    }
                });
                if($(this).find("option").length === $(this).find("option:not(:selected)").length){
                    tbody.append("<tr class=\"table-no-columns\"><td>No columns selected.</td></tr>");
                }else
                    tbody.find(".table-no-columns").remove();
            });
            /* ./spy change select values */
        });
        
    }
};

var dev_table = {
    init: function(){
        
        $(".dev-table .dev-row").each(function(){
            var cols = $(this).find(".dev-col");
            var count = cols.length;
            var width = Math.floor($(this).width() / count);
            
            cols.each(function(){
                $(this).width(width);
            });
            
        });
        
    }    
};


var charts = {
    init: function(){
        // Sparkline                    
        if($(".sparkline").length > 0)
           $(".sparkline").sparkline('html', { enableTagOptions: true,disableHiddenCheck: true});              
       // End sparkline
    }
};

var datatables = {
    init: function(){
        
        if($(".table-sortable").length > 0){
            /* init default sortable table */
            $(".table-sortable").DataTable({
                "fnInitComplete": function() {
                    $(".dataTables_wrapper").find("select,input").addClass("form-control");
                }
            });            
            /* ./init default sortable table */
            
            /* udate page content on page change */
            $(".table-sortable").on('page.dt',function() {
                setTimeout(function(){
                    dev_layout_alpha_content.init(dev_layout_alpha_settings);
                },100);                
            });
            /* ./udate page content on page change */                
            
            /* update page content on search */
            $(".table-sortable").on( 'search.dt', function() {
                setTimeout(function(){
                    dev_layout_alpha_content.init(dev_layout_alpha_settings);
                },200);                
            });
            /* ./update page content on search */
            
            /* uppdate page content on change length */
            $('.table-sortable').on('length.dt', function() {
                setTimeout(function(){
                    dev_layout_alpha_content.init(dev_layout_alpha_settings);
                },100);                
            });
            /* ./uppdate page content on change length */
        }
        
    }
};

var dev_accordion = {
    init: function(){
        
        $(".accordion .panel-title > a").on("click",function(){
            
            var accordion   = $(this).parents(".accordion");
            var noCollapse  = accordion.hasClass("accordion-dc");
            
            var panel       = $(this).parents(".panel");
            var pbody       = $($(this).attr("href"));
            
            if(pbody.length > 0){
                
                if(panel.hasClass("panel-opened")){
                    
                    pbody.slideUp(200,function(){
                        panel.removeClass("panel-opened");
                    });
                    
                }else{
                    
                    pbody.slideDown(200,function(){
                        panel.addClass("panel-opened");
                    });
                    
                }
                
                if(!noCollapse){
                    accordion.find(".panel").not(panel).find(".panel-body").slideUp(200,function(){
                        $(this).parents(".panel").removeClass("panel-opened");                        
                    });                                           
                }
                
                setTimeout(function(){
                    dev_layout_alpha_content.init(dev_layout_alpha_settings);
                },500);                
                return false;
            }
            
        });                

    }
};

var widget_tabbed = {
    init: function(){
        
        $(".widget-tabbed").each(function(){
            
            var widget = $(this);
            var active = widget.find(".widget-tabs > li.active > a").attr("href");
            
            widget.find(".widget-tab").removeClass("active");
            $(active).addClass("active");
            
            setTimeout(function(){
                dev_layout_alpha_content.init(dev_layout_alpha_settings);
            },200);            
            
            $(this).find(".widget-tabs li a").click(function(){
                widget.find(".widget-tab").removeClass("active");
                widget.find(".widget-tabs li.active").removeClass("active");
                
                $($(this).attr("href")).addClass("active");
                $(this).parents(".widget-tabs").find("li").removeClass("active");
                $(this).parent("li").addClass("active");
                
                setTimeout(function(){
                    dev_layout_alpha_content.init(dev_layout_alpha_settings);
                },200);
                
                return false;
            });
            
        });        
    }
};

var list_tasks = {
    init: function(){
        
        $(".list-tasks .list-tasks-item").on("click",function(){
            
            if($(this).find(".checkbox > input").prop("checked")){
                $(this).removeClass("active");
                $(this).find(".checkbox > input").prop("checked",false);
            }else{
                $(this).addClass("active");
                $(this).find(".checkbox > input").prop("checked",true);
            }
            
        });
        
    }
}

var tabs = {
    init: function(){
        $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
            dev_layout_alpha_content.init(dev_layout_alpha_settings);
        });
    }
};

var knob = {
    init: function(){
        if($(".knob").length > 0)
            $(".knob").knob();        
    }
};

var scroll = {    
    init: function(){        
        if($(".scroll").length > 0){
            $(".scroll").mCustomScrollbar({axis:"y", autoHideScrollbar: true, scrollInertia: 200, advanced: {autoScrollOnFocus: false}});
        }
    }    
};

$(function(){    
    dev_custom.init();
    dev_sidebar_navigation.init();
    dev_header_navigation.init();
    dev_header.init();    
    dev_tables.init();
    counter.init();
    knob.init();
    smartWizard.init();
    dev_forms.init();
    dev_accordion.init();
    tabs.init();
    datatables.init();    
    scroll.init();
    dev_panels.init();
    dev_login.init();
    charts.init();
    widget_tabbed.init();
    list_tasks.init();
    dev_container_tabbed.init();
});

$(window).resize(function(){
    dev_header_navigation.init();
});