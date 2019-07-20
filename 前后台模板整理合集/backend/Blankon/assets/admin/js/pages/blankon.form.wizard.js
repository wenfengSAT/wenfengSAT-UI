var BlankonFormWizard = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonFormWizard.twitterBootstrapWizard();
        },

        // =========================================================================
        // TWITTER BOOTSTRAP WIZARD
        // =========================================================================
        twitterBootstrapWizard: function () {

            if($('#basic-wizard-horizontal').length){
                $('#basic-wizard-horizontal').bootstrapWizard();
                $('#nextTab').click(function(){
                    $('#navTab').find('.active').next().children().trigger('click');
                });
            }

            if($('#basic-wizard-vertical').length){
                $('#basic-wizard-vertical').bootstrapWizard();
            }

            if($('#progress-wizard').length){
                $('#progress-wizard').bootstrapWizard({
                    'nextSelector': '.next',
                    'previousSelector': '.previous',
                    onNext: function(tab, navigation, index) {
                        var $total = navigation.find('li').length;
                        var $current = index+1;
                        var $percent = ($current/$total) * 100;
                        jQuery('#progress-wizard').find('.progress-bar').css('width', $percent+'%');
                    },
                    onPrevious: function(tab, navigation, index) {
                        var $total = navigation.find('li').length;
                        var $current = index+1;
                        var $percent = ($current/$total) * 100;
                        jQuery('#progress-wizard').find('.progress-bar').css('width', $percent+'%');
                    },
                    onTabShow: function(tab, navigation, index) {
                        var $total = navigation.find('li').length;
                        var $current = index+1;
                        var $percent = ($current/$total) * 100;
                        jQuery('#progress-wizard').find('.progress-bar').css('width', $percent+'%');
                    }
                });
            }

            if($('#disabled-tab-wizard').length){
                $('#disabled-tab-wizard').bootstrapWizard({onTabClick: function(tab, navigation, index) {
                    alert('on tab click disabled');
                    return false;
                }});
            }

            if($('#validation-wizard').length){
                var $validator = $("#form-wizard").validate({
                    rules: {
                        firstname: {
                            required: true,
                            minlength: 3
                        },
                        gender: {
                            required: true
                        },
                        productid: {
                            required: true
                        },
                        productname: {
                            required: true
                        },
                        category: {
                            required: true
                        },
                        creditcard: {
                            required: true
                        },
                        creditcardnumber: {
                            required: true,
                            number: true
                        }
                    },
                    highlight:function(element) {
                        $(element).parents('.form-group').addClass('has-error has-feedback');
                    },
                    unhighlight: function(element) {
                        $(element).parents('.form-group').removeClass('has-error');
                    },
                    submitHandler: function() {
                        alert("submitted!");
                    }
                });
                $('#validation-wizard').bootstrapWizard({
                    'onNext': function(tab, navigation, index) {
                        var $valid = $("#form-wizard").valid();
                        if(!$valid) {
                            $validator.focusInvalid();
                        }
                    },
                    onTabClick: function(tab, navigation, index) {
                        var $valid = $("#form-wizard").valid();
                        if(!$valid) {
                            $validator.focusInvalid();
                            return false;
                        }
                    }
                });
            }
        }

    };

}();

// Call main app init
BlankonFormWizard.init();