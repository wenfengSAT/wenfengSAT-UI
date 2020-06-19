/*  ==========================================================================
    Table of Content for Form Elements:

    === Function ===
    - runMaskedInput
    - runAutogrow
    - runCounters
    - runBootstrapSpinner
    - runSwitchery
    - runOnOffToggle
    - runFancySelect
    - runSelect2
    - runCheckradios
    - runCheckBo

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runMaskedInput
    ========================================================================== */
function runMaskedInput(mInput, type){

    $.mask.definitions['~']='[+-]';
    switch(type){

        case 'date':
            $(mInput).mask("99/99/9999");
        break;

        case 'phone':
            $(mInput).mask('(999) 999-9999');
        break;

        case 'taxid':
            $(mInput).mask("99-9999999");
        break;

        case 'ssn':
            $(mInput).mask("999-99-9999");
        break;

        case 'product':
            $(mInput).mask("a*-999-a999",{placeholder:" ",completed:function(){alert("You typed the following: "+this.val());}});
        break;

        case 'eyescript':
            $(mInput).mask("~9.99 ~9.99 999");
        break;
    }

}

/*
    runAutogrow
    ========================================================================== */
function runAutogrow(textearea){

    $(textearea).autogrow();

}

/*
    runCounters
    ========================================================================== */
function runCounters(textearea){

    var options = {
        'maxCharacterSize': 200,
        'originalStyle': 'originalTextareaInfo',
        'warningStyle' : 'warningTextareaInfo',
        'warningNumber': 40,
        'displayFormat' : '#input/#max | #words words'
    };
    $(textearea).textareaCount(options);

}

/*
    runBootstrapSpinner
    ========================================================================== */
function runBootstrapSpinner(spinner, type){

    switch(type){

        case 'postfix':
            $(spinner).TouchSpin({
                min: 0,
                max: 100,
                step: 0.1,
                decimals: 2,
                boostat: 5,
                maxboostedstep: 10,
                postfix: '%'
            });
        break;

        case 'prefix':
            $(spinner).TouchSpin({
                min: -1000000000,
                max: 1000000000,
                stepinterval: 50,
                maxboostedstep: 10000000,
                prefix: '$'
            });
        break;

        case 'vertical':
            $(spinner).TouchSpin({
              verticalbuttons: true
            });
        break;

        case 'vertical_icon':
            $(spinner).TouchSpin({
              verticalbuttons: true,
              verticalupclass: 'glyphicon glyphicon-plus',
              verticaldownclass: 'glyphicon glyphicon-minus'
            });
        break;

        case 'empty':
            $(spinner).TouchSpin();
        break;

        case 'button_postfix':
            $(spinner).TouchSpin({
                postfix: "a button",
                postfix_extraclass: "btn btn-default"
            });
        break;

        case 'button_group':
            $(spinner).TouchSpin({
                prefix: "pre",
                postfix: "post"
            });
        break;

        case 'button_class':
            $(spinner).TouchSpin({
                buttondown_class: "btn btn-link",
                buttonup_class: "btn btn-link"
            });
        break;
    }

}

/*
    runSwitchery
    ========================================================================== */
function runSwitchery(checkbox, type, color){


    switch(type){

        case 'default':
            var switchery = new Switchery(checkbox, { color: color });
        break;

        case 'checked':
            var switchery = new Switchery(checkbox, { color: color });
        break;

        case 'disabled':
            var switchery = new Switchery(checkbox, { color: color, disabled: true });
        break;

        case 'colored':
            var switchery = new Switchery(checkbox, { color: color });
        break;

        case 'extra-small':
            var switchery = new Switchery(checkbox, { color: color, size : 'extra-small' });
            break;

        case 'small':
            var switchery = new Switchery(checkbox, { color: color, size : 'small' });
        break;

        case 'large':
            var switchery = new Switchery(checkbox, { color: color, size : 'large' });
        break;
    }

}

/*
    runOnOffToggle
    ========================================================================== */
function runOnOffToggle(checkbox){

    $(checkbox).onoff();

}

/*
    runFancySelect
    ========================================================================== */
function runFancySelect(select){

    $(select).fancySelect();

}

/*
    runSelect2
    ========================================================================== */
function runSelect2(select){

    $(select).select2({placeholder: "Select a State", allowClear: true});

}

/*
    runCheckradios
    ========================================================================== */
function runCheckradios(input){

    $(input).checkradios({

        checkbox: {

           iconClass:'fa fa-check'

        },

        radio: {

           iconClass:'fa fa-circle'

        }

    });

}

/*
    runCheckBo
     ========================================================================== */
function runCheckBo(input){

    $(input).checkBo();
}



/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var date                 = '#maskedDate',
        phone                = '#maskedPhone',
        taxid                = '#maskedTaxid',
        ssn                  = '#maskedSsn',
        product              = '#maskedProduct',
        eyescript            = '#maskedEyescript',

        autogrow             = '#autogrowTextarea',

        counter              = '#counterTextarea',

        spinnerPostfix       = '#spinnerPostfix',
        spinnerPrefix        = '#spinnerPrefix',
        spinnerVertical      = '#spinnerVertical',
        spinnerVerticalIcon  = '#spinnerVerticalIcon',
        spinnerEmpty         = '#spinnerEmpty',
        spinnerButtonPostfix = '#spinnerButtonPostfix',
        spinnerButtonGroup   = '#spinnerButtonGroup',
        spinnerButtonClass   = '#spinnerButtonClass',

        switcheryDefault     = document.querySelector('#switcheryDefault'),
        switcheryChecked     = document.querySelector('#switcheryChecked'),
        switcheryDisabled    = document.querySelector('#switcheryDisabled'),
        switcheryColor1      = document.querySelector('#switcheryColor1'),
        switcheryColor2      = document.querySelector('#switcheryColor2'),
        switcheryColor3      = document.querySelector('#switcheryColor3'),
        switcheryColor4      = document.querySelector('#switcheryColor4'),
        switcheryColor5      = document.querySelector('#switcheryColor5'),
        switcheryColor6      = document.querySelector('#switcheryColor6'),

        switcheryDefaultSize = document.querySelector('#switcheryDefaultSize'),
        switcheryExtraSmallSize = document.querySelector('#switcheryExtraSmallSize'),
        switcherySmallSize   = document.querySelector('#switcherySmallSize'),
        switcheryLargeSize   = document.querySelector('#switcheryLargeSize'),

        onoffSwitcher        = '.onoffswitch-checkbox',

        fancySelect          = '#fancySelect',

        select2Default       = '#select2Default',
        select2Multi         = '#select2Multi',

        checkradios          = '.checkradios',

        checkbo              = '.checkbo';

    var switchery0 = $('.switchery-default').css('color'),
        switchery1 = $('.switchery-primary').css('color'),
        switchery2 = $('.switchery-success').css('color'),
        switchery3 = $('.switchery-info').css('color'),
        switchery4 = $('.switchery-warning').css('color'),
        switchery5 = $('.switchery-danger').css('color'),
        switchery6 = $('.switchery-dark').css('color');

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runMaskedInput(date,'date');
    runMaskedInput(phone,'phone');
    runMaskedInput(taxid,'taxid');
    runMaskedInput(ssn,'ssn');
    runMaskedInput(product,'product');
    runMaskedInput(eyescript,'eyescript');

    runAutogrow(autogrow);

    runCounters(counter);

    runBootstrapSpinner(spinnerPostfix, 'postfix');
    runBootstrapSpinner(spinnerPrefix, 'prefix');
    runBootstrapSpinner(spinnerVertical, 'vertical');
    runBootstrapSpinner(spinnerVerticalIcon, 'vertical_icon');
    runBootstrapSpinner(spinnerEmpty, 'empty');
    runBootstrapSpinner(spinnerButtonPostfix, 'button_postfix');
    runBootstrapSpinner(spinnerButtonGroup, 'button_group');
    runBootstrapSpinner(spinnerButtonClass, 'button_class');

    runSwitchery(switcheryDefault, 'default', switchery0);
    runSwitchery(switcheryChecked, 'checked', switchery0);
    runSwitchery(switcheryDisabled, 'disabled', switchery0);

    runSwitchery(switcheryColor1, 'colored', switchery1);
    runSwitchery(switcheryColor2, 'colored', switchery2);
    runSwitchery(switcheryColor3, 'colored', switchery3);
    runSwitchery(switcheryColor4, 'colored', switchery4);
    runSwitchery(switcheryColor5, 'colored', switchery5);
    runSwitchery(switcheryColor6, 'colored', switchery6);

    runSwitchery(switcheryDefaultSize, 'default', switchery0);
    runSwitchery(switcheryExtraSmallSize, 'extra-small', switchery0);
    runSwitchery(switcherySmallSize, 'small', switchery0);
    runSwitchery(switcheryLargeSize, 'large', switchery0);

    runOnOffToggle(onoffSwitcher);

    runFancySelect(fancySelect);

    runSelect2(select2Default);
    runSelect2(select2Multi);

    runCheckradios(checkradios);

    runCheckBo(checkbo);
});