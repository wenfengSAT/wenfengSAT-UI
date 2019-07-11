$(document).ready(function(){
    
    /* open Mail Modal */
    $("#sendMailModal").dialog({
		autoOpen: false, 
		modal: true,
		width: 600,
		open: function(){                                    
			if($("#mail_wysiwyg").length > 0) m_editor.refresh();
		}
	});
    
    $("#openMailModal").click(function(){        
        $("#sendMailModal").dialog('open');
    });
    /* eof open Mail Modal */    
    
    /* Site settings */    
    var sSet  = $.cookies.get('sSet');
    if(null == sSet){
        $.cookies.set('sSet','1');
        $.cookies.set('cNav','bordered');
		$.cookies.set('cNavC','color_1');
		$.cookies.set('cTopNavH','show');
    };
    
    var cNav  = $.cookies.get('cNav');
	var cNavC  = $.cookies.get('cNavC');
    var cCont = $.cookies.get('cCont');
	var cTopNavH = $.cookies.get('cTopNavH');
    
    if(null != cNav){
        if(cNav == 'bordered'){
            $(".sidebar .navigation").addClass('bordered');                                
            $(".cNav").attr('checked',false);
            $(".cNav[value='bordered']").attr('checked',true).parent('span').addClass('checked');
        };
    }else{
        $(".cNav[value='default']").attr('checked',true).parent('span').addClass('checked');
	};
    if(null != cNavC){
		$(".sidebar").addClass(cNavC);
		$('.'+cNavC).addClass('on');
	};
	if(null != cTopNavH){
		
		if(cTopNavH == 'hide') {
			$(".body .navigation").addClass('hide');
		} else {
			$(".body .navigation").removeClass('hide');
		};
		$(".body .navigation").children('li').last().addClass('last');
		$(".cTopNavH[value='"+cTopNavH+"']").attr('checked',true).parent('span').addClass('checked');
	};
    if(null != cCont){        
        $(".wrapper").addClass(cCont);
        $(".cCont").attr('checked',false);
        $(".cCont[value='"+cCont+"']").attr('checked',true).parent('span').addClass('checked');        
    }else{
        $(".cCont[value='']").attr('checked',true).parent('span').addClass('checked');
    };
    
   
    $(".cNav").click(function(){
        var val = $(this).val();
        if(val != 'default'){
            $(".sidebar .navigation").addClass(val);
            $.cookies.set('cNav',val);
        }else{
            $(".sidebar .navigation").removeClass('bordered');
            $.cookies.set('cNav',null);
        }
    });
	
    $(".cNavC").on('click', 'span', function() {
        var val = $(this).attr('class');
		var navClass = $(".sidebar").attr('class');
		var navVal = /color_./;
		var navItem = ""+(navVal.exec(navClass));
		
		$(".cNavC").find('span').removeClass('on');
		$(this).addClass('on')
		$(".sidebar").removeClass(navItem);
		$(".sidebar").addClass(val);
		$.cookies.set('cNavC',val);
    });
	
	$(".cTopNavH").on('click', function() {
		var val = $(this).val();
		if(val == 'hide'){
			$(".body .navigation").addClass('hide');
		} else {
			$(".body .navigation").removeClass('hide');
		};
		$.cookies.set('cTopNavH',val);
	});
    
    $(".cCont").click(function(){
        var val = $(this).val();
        $(".wrapper").removeClass('fixed').addClass(val);
        $.cookies.set('cCont',val);
    });

    /* eof site settings */

    $(".navigation.narrow > li > a").click(function(){
        var li = $(this).parent('li');
        if(li.find('ul').length > 0){
            
            if(li.hasClass('active'))
                li.removeClass('active');
            else
                li.addClass('active');
            
            return false;
        }
        
    });
    
    $(".navButton a, .sidebar .close").click(function(){        
        if($(".sidebar").is(":visible"))
            $(".sidebar").slideUp();
        else
            $(".sidebar").slideDown();        
    });

    
    $(".sbutton a").click(function(){
        var popup = $(this).parent('.sbutton').find('.popup');
        if(popup.length > 0){
            if(popup.hasClass('active'))
               popup.removeClass('active');
            else{
                popup.addClass('active');
                popup.find('.checker').show();
                popup.find('.radio').show();
            }
            return false;
        }
    });
    
    /* input file */
    $(".file .btn, .file input:text").click(function(){        
        var block = $(this).parent('.file');
        block.find('input:file').click();
        block.find('input:file').change(function(){
            block.find('input:text').val(block.find('input:file').val());
        });
    });
    /* eof input file */

    //temp as example
    $(".ublock").click(function(){
        var block = $(this).parents('[class^=block]');
        
        add_loader(block);
        
        setTimeout(function(){
            remove_loader(block);
        },2000);
        
        return false;
    });
    
    
    $(".head .buttons > li > a").click(function(event){        
        var li = $(this).parent('li');        
        if(li.find('ul').length > 0){
            if(li.hasClass('active'))
                li.removeClass('active');
            else
                li.addClass('active');
            return false;            
        }
        event.stopPropagation();
    });


    $(".cblock").click(function(){
        var block = $(this).parents('.block').find("[class^=data]");
        if(block.is(':visible')){
            block.fadeOut();            
        }else{
            block.fadeIn();            
        }

        return false;
    });


    $(".body .navigation li").on('click', 'a', function(){       
        if($(this).attr('href') == '#'){
            if($(this).parent('li').hasClass("active")){
                $(this).parent('li').removeClass('active');
            }else{
                $(".body .navigation li").removeClass('active');
                $(this).parent('li').addClass('active');
            };

            return false;
        };
    });
	
	/*$(".body .navigation .sub").each(function() {
		var NavItemWidth = 0;
		$(this).find('li').each(function() {
			NavItemWidth += parseInt( $(this).width() )+36;
		});
		$(this).css('width', NavItemWidth);
	});*/

    $(".sidebar .navigation > li > a, .sidebar .navigation > li > .open").click(function(){
        if($(this).parent('li').find('ul').length > 0){
            if($(this).parent('li').hasClass('active')){
                $(this).parent('li').removeClass('active');            
            }else{
                $(this).parent('li').addClass('active');
            }    
            return false;
        }
    });

    /* table checkall */
    $("table .checkall").click(function(){
        
        var iC = $(this).parents('th').index(); //index of checkall checkbox
        var tB = $(this).parents('table').find('tbody'); // tbody of table
        
        if($(this).is(':checked'))
            tB.find('tr').each(function(){                
                $(this).addClass('active').find('td:eq('+iC+') input:checkbox').attr('checked',true).parent('span').addClass('checked');
            });
        else
            tB.find('tr').each(function(){
                $(this).removeClass('active').find('td:eq('+iC+') input:checkbox').attr('checked',false).parent('span').removeClass('checked');
            });            
        
    });    
    /* eof table checkall */

    $("table .checker").click(function(event){
        
        var tr = $(this).parents('tr');
        
        if(tr.hasClass('active'))
            tr.removeClass('active');
        else
            tr.addClass('active');       
       
       event.stopPropagation();
    });

    /* table row check */
    $(".table-row-check tbody tr").click(function(){
        
       if($(this).hasClass('active'))
            $(this).removeClass('active');
        else
            $(this).addClass('active');
        
        $(this).find('input:checkbox').each(function(){
            
            if($(this).is(':checked')){
                $(this).attr('checked',false).parent('span').removeClass('checked');
            }else{
                $(this).attr('checked',true).parent('span').addClass('checked');
            }
                            
        });
        
    });
    /* eof table row check */  
    
    /* alert click */    
    $(".alert").click(function(){
        $(this).animate({opacity: 0},'200','linear',function(){
            $(this).remove();
        });
    });    
    /* eof alert click*/            
});

$(function(){      
    $("#loader").hide();
        
    if($('body').width() <= 1024){
       $('.navigation').addClass('narrow');
       if($('.navigation').hasClass('bordered'))
          $('.navigation').removeClass('bordered').addClass('btemp');
    }
    if($(".thumbs").length > 0) thumbs();
    
    $(".sidebar").height($(document).height());
});

$(window).resize(function(){
    if($('body').width() <= 1024){
       $('.navigation').addClass('narrow');    
       if($('.navigation').hasClass('bordered'))
          $('.navigation').removeClass('bordered').addClass('btemp');
    }else{
       $(".sidebar").removeAttr('style');
       $('.navigation').removeClass('narrow');
       
       if($('.navigation').hasClass('btemp'))
          $('.navigation').removeClass('btemp').addClass('bordered');            
    }

    if($(".thumbs").length > 0) thumbs();
    
    $(".sidebar").height($(document).height());
    
});

function add_loader(block){
    var bW = $(block).width();
    var bH = $(block).height();    
    $(block).append('<div class="loader" style="width: '+bW+'px; height: '+bH+'px;"><img src="img/loader.gif"/></div>');
}
function remove_loader(block){
    $(block).find('.loader').remove();
}

function source(doc){
    
    
    $("#source").dialog({autoOpen: false, 
                         modal: true, 
                         width: ($('body').width()-40),                         
                         dialogClass: 'sourcePosition',
                         close: function(){
                             $("#source").html('');
                         }
                     });        
                     
        $.get('source/'+doc+'.html',function(data){
            
            brush = new SyntaxHighlighter.brushes.Xml();
            
            brush.init({ toolbar: false });
            
            html = brush.getHtml(data);
            
            $("#source").html(html);
            
        }).fail(function() {
            $("#source").html('Unknown document');
        });        
    $("#source").dialog('open');
       
}

function thumbs(){
    
    $(".thumbs").each(function(){        
        
        var maxImgHeight = 0;
        var maxTextHeight = 0;    
        
        $(this).find(".thumbnail").each(function(){
            var imgHeight = $(this).find('a > img').height();
            var textHeight = $(this).find('.caption').height();
            
            maxImgHeight = maxImgHeight < imgHeight ? imgHeight : maxImgHeight;
            maxTextHeight = maxTextHeight < textHeight ? textHeight : maxTextHeight;
        });
        
        $(this).find('.thumbnail > a').height(maxImgHeight);
        $(this).find('.thumbnail .caption').height(maxTextHeight);
    });
    

    
    var w_block = $(".thumbs").width()-20;
    var w_item  = $(".thumbs .thumbnail").width()+10;
    
    var c_items = Math.floor(w_block/w_item);
    
    var m_items = Math.floor( (w_block-w_item*c_items)/(c_items*2) );
    
    $(".thumbs .thumbnail").css('margin',m_items);

}