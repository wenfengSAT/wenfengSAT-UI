jQuery(function ($) {
    'use strict';
    // Select2
    $('select.form-select2').select2();

    // SelectBoxIt
    $('select.form-selectboxit').selectBoxIt({ autoWidth: false });
    $('[rel="popover"]').popover({ trigger: 'hover', container: 'body' });

    // Chosen
    $('select.form-chosen').chosen();

    // Boostrap Switch
    $('input.boot-switch').bootstrapSwitch();

    // Bootstrap Tagsinput
    $('#tagsinput-custom').tagsinput({
        tagClass: function (item) {
            switch (item) {
                case 'html5':
                    return 'label label-info';
                case 'css3':
                    return 'label label-danger';
                case 'js':
                    return 'label label-success';
                case 'sass':
                    return 'badge badge-inverse';
                case 'less':
                    return 'badge badge-warning';
                default:
                    return 'badge';
            }
        }
    });

    $('[data-rel=datepicker]').datepicker({
        autoclose: true,
        todayHighlight: true
    });
    $('[data-rel=timepicker]').timepicker();
    $('[data-rel=colorpicker]').colorpicker();
});
