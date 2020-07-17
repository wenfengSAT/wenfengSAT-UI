var Script = function () {

// easy pie chart

    $('.iphone-visitor').easyPieChart({
        animate: 1000,
        size: 90,
        barColor:'#43c584'
    });

    $('.android-visitor').easyPieChart({
        animate: 1000,
        size: 90,
        barColor:'#a979d1'
    });

    $('.todo').easyPieChart({
        animate: 1000,
        size: 130,
        barColor:'#a979d1'
    });

    $('.percentage-light').easyPieChart({
        barColor: function(percent) {
            percent /= 100;
            return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
        },
        trackColor: '#eeeeee',
        barColor:'#90d7ed',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: 15,
        animate: 1000,
        size: 150
    });

    $('.update-easy-pie-chart').click(function(){
        $('.easy-pie-chart .percentage').each(function() {
            var newValue = Math.floor(100*Math.random());
            $(this).data('easyPieChart').update(newValue);
            $('span', this).text(newValue);
        });
    });

    $('.updateEasyPieChart').on('click', function(e) {
        e.preventDefault();
        $('.percentage, .percentage-light').each(function() {
            var newValue = Math.round(100*Math.random());
            $(this).data('easyPieChart').update(newValue);
            $('span', this).text(newValue);
        });
    });

}();