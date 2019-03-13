$(function () {
	
	$("#range-money").ionRangeSlider({
	    min: 0,
	    max: 5000,
	    type: 'double',
	    prefix: "$",
	    maxPostfix: "+",
	    prettify: false,
	    hasGrid: true
	});

	$("#range-step").ionRangeSlider({
	    min: 10000,
	    max: 100000,
	    step: 1000,
	    postfix: " miles",
	    from: 55000,
	    hideMinMax: false,
	    hideFromTo: true
	});


	$("#range-month").ionRangeSlider({
	    values: [
	        "January", "February",
	        "March", "April",
	        "May", "June",
	        "July", "August",
	        "September", "October",
	        "November", "December"
	    ],
	    type: 'single',
	    hasGrid: true
	});


	$("#range-temp").ionRangeSlider({
	    min: -50,
	    max: 50,
	    from: 0,
	    postfix: "°",
	    prettify: false,
	    hasGrid: true
	});


	$("#range-console").ionRangeSlider({
            type: "double",
            postfix: " poimds",
            step: 10000,
            from: 25000000,
            to: 35000000,
            onChange: function(obj){
            	delete obj.input;
                delete obj.slider;
                var t = "Range Slider value: " + JSON.stringify(obj, "", 2);

                $("#result").html(t);
            },
            onLoad: function(obj) {
		        delete obj.input;
                delete obj.slider;
                var t = "Range Slider value: " + JSON.stringify(obj, "", 2);

                $("#result").html(t);
		    }
	});


	$("#randomize").on("click", function(){
	    $("#range-console").ionRangeSlider("update", {
	        min: Math.round(10000 + Math.random() * 40000),
	        max: Math.round(200000 + Math.random() * 100000),
	        step: 1,
	        from: Math.round(40000 + Math.random() * 40000),
	        to: Math.round(150000 + Math.random() * 80000)
	    });
	});

});