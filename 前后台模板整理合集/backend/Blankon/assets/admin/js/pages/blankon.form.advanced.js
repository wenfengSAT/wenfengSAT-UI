var BlankonFormAdvanced = function () {

    return {

        // =========================================================================
        // CONSTRUCTOR APP
        // =========================================================================
        init: function () {
            BlankonFormAdvanced.bootstrapSwitch();
            BlankonFormAdvanced.inputMask();
            BlankonFormAdvanced.bootstrapDatepicker();
            BlankonFormAdvanced.dropzone();
        },

        // =========================================================================
        // BOOTSTRAP SWITCH
        // =========================================================================
        bootstrapSwitch: function () {
            if($('.switch').length){
                $('.switch').bootstrapSwitch();
            }
        },

        // =========================================================================
        // JQUERY INPUTMASK
        // =========================================================================
        inputMask: function () {
            if($('#input-mask').length){
                $(":input").inputmask();
            }
        },

        // =========================================================================
        // BOOTSTRAP DATEPICKER
        // =========================================================================
        bootstrapDatepicker: function () {
            if($('#dp').length){
                $('#dp1').datepicker({
                    format: 'mm-dd-yyyy',
                    todayBtn: 'linked'
                });

                $('#dp2').datepicker();
                $('#btn2').click(function(e){
                    e.stopPropagation();
                    $('#dp2').datepicker('update', '03/17/12');
                });

                //inline
                $('#dp3').datepicker({
                    todayBtn: 'linked'
                });

                $('#btn3').click(function(){
                    $('#dp3').datepicker('update', '15-05-1984');
                });
            }
        },

        // =========================================================================
        // DROPZONE UPLOAD
        // =========================================================================
        dropzone: function () {
            Dropzone.options.myDropzone = {
                init: function() {
                    this.on("addedfile", function(file) {
                        // Create the remove button
                        var removeButton = Dropzone.createElement("<button class='btn btn-sm btn-block btn-danger'>Remove file</button>");

                        // Capture the Dropzone instance as closure.
                        var _this = this;

                        // Listen to the click event
                        removeButton.addEventListener("click", function(e) {
                            // Make sure the button click doesn't submit the form:
                            e.preventDefault();
                            e.stopPropagation();

                            // Remove the file preview.
                            _this.removeFile(file);
                            // If you want to the delete the file on the server as well,
                            // you can do the AJAX request here.
                        });

                        // Add the button to the file preview element.
                        file.previewElement.appendChild(removeButton);
                    });
                }
            }
        }

    };

}();

// Call main app init
BlankonFormAdvanced.init();