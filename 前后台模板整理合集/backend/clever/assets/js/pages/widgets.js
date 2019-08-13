$(document).ready(function(){
	/* ---------- Placeholder Fix for IE ---------- */
	jQuery(document).ready(function($){
		$('input, textarea').placeholder();
	});

	/* ---------- Auto Height texarea ---------- */
	jQuery(document).ready(function($){
	    $('textarea').autosize();   
	});
	
	/*------- Easy Pie Chart Init -------*/
    $('.piechart').easyPieChart({
        barColor: "#fff",
        trackColor: 'rgba(255,255,255,.2)',
        scaleColor: false,
        lineCap: 'butt',
        rotate: -90,
        lineWidth: 4,
		size: 40,
        animate: 1000,
        onStep: function(value) {
            this.$el.find('span').text(~~value);
        }
    });

});	