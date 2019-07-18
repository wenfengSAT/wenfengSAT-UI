$(document).ready(function(){
        
    if($(".sortableContent").length > 0){
        var scid = 'sc-'+$(".sortableContent").attr('id');
                
        var sCdata = portlet_get_data(scid);          

        if(null != sCdata){            
            for(row=0;row<Object.size(sCdata); row++){                
                for(column=0;column<Object.size(sCdata[row]);column++){                    
                    for(block=0;block<Object.size(sCdata[row][column]);block++){                        
                        $("#"+sCdata[row][column][block]).appendTo(".sortableContent .scRow:eq("+row+") .scCol:eq("+column+")");                        
                    }
                }               
            }
            onload();
        }                    
       
        $(".sortableContent .scCol").sortable({
            connectWith: ".sortableContent .scCol",
            items: "> .panel",
            handle: ".panel-heading",
            placeholder: "scPlaceholder",
            start: function(event,ui){
                $(".scPlaceholder").height(ui.item.height()+1);
            },
            stop: function(event, ui){                                
                
                var sorted = {};
                var row = 0;
                $(".sortableContent .scRow").each(function(){                    
                    sorted[row] = {};
                    $(this).find(".scCol").each(function(){
                        var column = $(this).index();                        
                        sorted[row][column] = {};

                        $(this).find('.panel').each(function(){
                            sorted[row][column][$(this).index()] = $(this).attr('id');
                        });
                    });
                    row++;
                });
                portlet_save_data(scid,JSON.stringify(sorted)); 
                onload();
            }
        }).disableSelection();
        
        $(".sc-set-default").on("click",function(){
            portlet_delete_data(scid);
            location.reload();
        });        
    }        
    
});

function portlet_get_data(portlet_id){    
    if(typeof(Storage)!=="undefined"){        
        if(typeof(sessionStorage[portlet_id]) !== "undefined"){            
            return $.parseJSON(sessionStorage[portlet_id]);
        }else{
            return null;
        }
    }
}

function portlet_save_data(portlet_id, portlet_data){
    if(typeof(Storage)!=="undefined"){        
        sessionStorage[portlet_id] = portlet_data;
    }else{
        return false;
    }
}

function portlet_delete_data(portlet_id){
    if(typeof(Storage)!=="undefined"){
        if(sessionStorage[portlet_id] != '') sessionStorage.removeItem(portlet_id);
    }
}
