/*  ==========================================================================
    Table of Content for Mail App:

    === Function ===
    - runCheckBoMail
    - runTooltipsterMail
    - runMailFileupload
	- runToggleFolders
	- runProfileStatus
	- runSummernote
	- runCCandBCC
	- runMailDetailDisplay
	- runMailDetailsToggle
	- runMailCompose
	- runMailStarToggle
	- runViewModes

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runCheckBoMail
    ========================================================================== */
function runCheckBoMail(input){

    $(input).checkBo({
        checkAllButton: "#mail-all",
        checkAllTarget: ".mail-row"
    });
}


/*
    runTooltipsterMail
    ========================================================================== */
function runTooltipsterMail(tip, pos){

    $(tip).tooltipster({
        animation: 'grow',
        theme: 'tooltipster-cool',
        position: pos
    });
}

/*
    runMailFileupload
    ========================================================================== */
function runMailFileupload() {

    $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });

    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }

    });
}


/*
    runToggleFolders
    ========================================================================== */
function runToggleFolders(trigger, target){

    $( trigger ).click(function(e) {
        e.preventDefault();
        $( trigger + " i").toggleClass('active');
        $( target ).slideToggle('fast');
    });
}

/*
    runProfileStatus
    ========================================================================== */
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.html();
            obj.index = opt.index();
            obj.placeholder.html(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
}

function runProfileStatus(status){

    var dd = new DropDown( $(status) );

    $(document).click(function() {
        // all dropdowns
        $('.status').removeClass('active');
    });
}


/*
 runSummernote
 ========================================================================== */
function runSummernote(cont){

    $(cont).summernote({
        height: 200,                 // set editor height

        minHeight: 100,             // set minimum height of editor
        maxHeight: 400,             // set maximum height of editor

        focus: true
    });

}


/*
    runCCandBCC
    ========================================================================== */
function runCCandBCC(){

    $('.btn-cc, .close-cc').on('click', function(){

        var cc = $('.btn-cc');

        if(cc.hasClass('active')){
            $('.new-message-cc').velocity("transition.expandOut");
            cc.removeClass('active');
        }else{
            $('.new-message-cc').velocity("transition.expandIn");
            cc.addClass('active');
        }

    });

    $('.btn-bcc, .close-bcc').on('click', function(){

        var bcc = $('.btn-bcc');

        if(bcc.hasClass('active')){
            $('.new-message-bcc').velocity("transition.expandOut");
            bcc.removeClass('active');
        }else{
            $('.new-message-bcc').velocity("transition.expandIn");
            bcc.addClass('active');
        }

    });

}

/*
    runMailDetailDisplay
    ========================================================================== */
function runMailDetailDisplay(){

    $('.sender, .subject').on('click', function(e){
        e.preventDefault();

        var msgDetails = $('.mail-details');

        $(msgDetails).velocity("transition.slideDownIn", {
            duration: 400,
            complete: function() {
                msgDetails.addClass('open').removeAttr('style');
            }
        });

    });

}


/*
    runMailDetailsToggle
    ========================================================================== */
function runMailDetailsToggle(){

    $('.mail-details-message-header').on('click', function(){

        var msg        = $(this).parents('.mail-details-message'),
            msgContent = $(this).next('.mail-details-message-content');

        if(msg.hasClass('open')){
            $(msgContent).velocity("transition.slideUpOut", {
                duration: 400,
                complete: function() {
                    msg.removeClass('open');
                }
            });
        }else{
            $(msgContent).velocity("transition.slideDownIn", {
                duration: 400,
                complete: function() {
                    msg.addClass('open');
                }
            });
        }

    });

}

/*
    runMailCompose
    ========================================================================== */
function runMailCompose(){

    $('.btn-mail-compose, .mail-options-compose, #reply').on('click', function(e){
        e.preventDefault();

        var msgNew = $('.new-message');

        if(msgNew.hasClass('open')){

        }else{

            $(msgNew).velocity("transition.slideDownIn", {
                duration: 400,
                complete: function() {
                    msgNew.addClass('open').removeAttr('style');
                    $(msgNew).velocity("scroll", {
                        duration: 500
                    });
                }
            });
        }

    });

    $('.new-message-discard').on('click', function(e){
        e.preventDefault();

        var msgNew = $('.new-message');


        if(msgNew.hasClass('open')){

            $(msgNew).velocity("transition.slideUpOut", {
                duration: 400,
                complete: function() {
                    msgNew.removeClass('open');
                    $('header').velocity("scroll", {
                        duration: 500
                    });
                }
            });
        }

    });

}

/*
 runMailStarToggle
 ========================================================================== */
function runMailStarToggle(){

    $('.starred').on('click', function(e){
        e.preventDefault();

        var aktI = $(this).find('i');

        if(aktI.hasClass('fa-star'))
            aktI.removeClass('fa-star').addClass('fa-star-o');
        else
            aktI.removeClass('fa-star-o').addClass('fa-star');

    });

}

/*
    runViewModes
    ========================================================================== */
function runViewModes(){

    var mailContent = $('.mail-content');

    $('#viewRight').on('click', function(e){
        e.preventDefault();

        mailContent.removeClass('mail-layout-bottom').removeClass('mail-layout-none').addClass('mail-layout-right');

    });

    $('#viewBottom').on('click', function(e){
        e.preventDefault();

        mailContent.removeClass('mail-layout-right').removeClass('mail-layout-none').addClass('mail-layout-bottom');

    });

    $('#viewNone').on('click', function(e){
        e.preventDefault();

        $('.mail-details').removeClass('open');
        mailContent.removeClass('mail-layout-bottom').removeClass('mail-layout-right').addClass('mail-layout-none');

    });

}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var checkboMail       = '.mailcheckbo',
        ttMail            = ".tt-mail",
        ttMailLeft        = ".tt-mail-left",
        ttMailRight       = ".tt-mail-right",
        ttMailBottom      = ".tt-mail-bottom",
        foldersBtn        = '.btn-toggle-folder',
        foldersList       = '.folders-list',
        status            = '#status',
        inputMessage      = '#inputMessage';


    // === Checkers ===

    // === Setters ===

    // === Executions ===
    runCheckBoMail(checkboMail);

    runTooltipsterMail(ttMail,'top');
    runTooltipsterMail(ttMailLeft,'left');
    runTooltipsterMail(ttMailRight,'right');
    runTooltipsterMail(ttMailBottom,'bottom');

    runMailFileupload();
    runToggleFolders(foldersBtn,foldersList);
    runProfileStatus(status);
    runSummernote(inputMessage);

    runCCandBCC();
    runMailDetailDisplay();
    runMailDetailsToggle();
    runMailCompose();
    runMailStarToggle();
    runViewModes();

});