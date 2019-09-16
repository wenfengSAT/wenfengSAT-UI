$(function() {
    $('.loader').loader({
        progress: 0,
        frontSpeed: 0.021,
        frontColor: '#E33244',
        frontOpacity: 0.5,
        backSpeed: 0.025,
        backColor: '#E33244',
        backOpacity: 0.2
    });

    var progr = 1;
    setInterval(function() {
        $('.loader').loader('setProgress', ++progr


        );
    }, 300);
});
