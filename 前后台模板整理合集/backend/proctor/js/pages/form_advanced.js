$(document).ready(function() {
    //Date pickers
    $('#birthday').daterangepicker({ singleDatePicker: true, }, function(start, end, label) {});
    $('#appointment').daterangepicker({ 
        singleDatePicker: true, 
        timePicker: true, 
        timePickerIncrement: 10,
        format: 'MM/DD/YYYY h:mm A',}, 
        function(start, end, label) {});

    $('#reservation').daterangepicker({opens: 'left',}, function(start, end, label) {});
    $('#reservationtime').daterangepicker({
                    timePicker: true,
                    timePickerIncrement: 30,
                    format: 'MM/DD/YYYY h:mm A',
                    opens: 'right',
                  }, function(start, end, label) {
                    //console.log(start.toISOString(), end.toISOString(), label);
                  });
    $('#reportrange2 span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    $('#reportrange2').daterangepicker({
        opens: 'left',
        ranges: {
                       'Today': [moment(), moment()],
                       'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                       'Last 7 Days': [moment().subtract('days', 6), moment()],
                       'Last 30 Days': [moment().subtract('days', 29), moment()],
                       'This Month': [moment().startOf('month'), moment().endOf('month')],
                       'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                    },
                });

    //Time picker
    $(".timepicker").timepicker({
            showInputs: false
        });
    $('.clockpicker').clockpicker();

    //Masked inputs
    $('.date').mask('00/00/0000', {placeholder: "--/--/---"});
    $('.time').mask('00:00:00', {placeholder: "--:--:--"});
    $('.cep').mask('00000-000', {placeholder: "----- --"});
    $('.phone_us').mask('(000) 000-0000', {placeholder: "(---) -- ----"});
    $('.ip_address').mask('099.099.099.099');
    
    //Sliders
    $('#sl1').slider({
      formater: function(value) {
        return 'Current value: '+value;
      }
    });
    $('#sl2').slider();
    $('#eg input').slider();
    
    //iCheck for checkbox and radio inputs
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue'
    });
    //Red color scheme for iCheck
    $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
        checkboxClass: 'icheckbox_minimal-red',
        radioClass: 'iradio_minimal-red'
    });
    //Flat red color scheme for iCheck
    $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
        checkboxClass: 'icheckbox_flat-red',
        radioClass: 'iradio_flat-red'
    });
});
    