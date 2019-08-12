///////////////////
// Pages Profile //
///////////////////

"use strict";

$(document).ready(function(){

	/**
	 * circloidFriendsFeed handles the features in the friends feed
	 */
	function circloidFriendsFeed(){
		/* Show replies to the post */
		$(".comment-show-replies").on("click", function(e){
			var thisObj = $(this);
			if(!thisObj.parents().eq(1).siblings(".comment-replies-block").hasClass("open")){
				thisObj.parents().eq(1).siblings(".comment-replies-block").addClass("open");
				thisObj.parents().eq(1).siblings(".comment-replies-block").slideDown(500);
				thisObj.parents().eq(1).siblings(".comment-reply-input-block").slideDown(500, function(){
					$(this).addClass("open");
				});
			}else{
				thisObj.parents().eq(1).siblings(".comment-replies-block").removeClass("open");
				thisObj.parents().eq(1).siblings(".comment-replies-block").slideUp(500);
				thisObj.parents().eq(1).siblings(".comment-reply-input-block").slideUp(500, function(){
					$(this).removeClass("open");
				});
			}
			// $(this).parents().eq(1).siblings(".comment-reply-input-block").slideToggle(500);
			e.preventDefault();
		});

		/* Show Comment Box */
		$(".comment-reply-comment").on("click", function(e){

			/* TODO: Need to add ScrollTo */
			// var scrollToReply = $(this).closest(".comment-block").children(".comment-reply-input-block");
			// $(this).closest(".block").mCustomScrollbar("scrollTo","bottom");

			if(!$(this).parents().eq(1).siblings(".comment-reply-input-block").hasClass("open")){
				$(this).parents().eq(1).siblings(".comment-reply-input-block").slideDown(500, function(){
					$(this).addClass("open");
				});
			}else{
				$(this).parents().eq(1).siblings(".comment-reply-input-block").slideUp(500, function(){
					$(this).removeClass("open");
				});
			}

			// ScrollTo When reply button is clicked
			e.preventDefault();
		});

		/* Post Comment Reply */
		$(".post-comment").on("click", function(e){
			var thisObj = $(this);
			var userComment = $(this).parent().find(".user-comment").val().replace(/\n/g, '<br \\>');
			var userPic = $(this).parents().eq(1).find(".comment-image img").attr("src");
			var userFullName = "Ken Adams";
			var url = "test-data/ui-blocks/block-content/medium-chunk.txt";


			if(userComment.trim() != ""){
				// Use Ajax to store the comment in your Database
				$.ajax({
					type: 'GET',
					url: url,
					beforeSend: function(){
						thisObj.siblings(".icon-success").remove();
						thisObj.siblings(".icon-error").remove();
						thisObj.after("<span class='icon loading' style='opacity:1;'></span>");
					},
					complete: function(){
						thisObj.siblings(".loading").remove();
					},
					error: function(){
						thisObj.after("<span class='icon icon-exclamation icon-size-medium icon-error' style='opacity:1;'></span>");
						thisObj.siblings(".icon-error").delay(7000).fadeOut(1000);
					},
					success: function(data){
						thisObj.closest(".comment-block").find(".comment-replies-block").append('<div class="comment-block clearfix"><div class="comment-image"><a href="#"><img class="list-thumbnail" src="' + userPic + '" width="40" height="40" /></a></div><div class="comment-title h4"><a href="#">' + userFullName + '</a> <small>Just Now</small></div><div class="comment-content">' + userComment + ' </div><div class="comment-controls"><div class="comment-controls-left"><a class="comment-reply-comment" href="#" title="Reply"><span class="icon icon-arrow-curve-left icon-size-medium"></span></a><a class="comment-repost" href="#" title="Re-Post This"><span class="icon icon-retweet icon-size-medium"></span></a></div></div></div>');

						if(!thisObj.closest(".comment-block").find(".comment-replies-block").hasClass("open")){
							thisObj.closest(".comment-block").find(".comment-replies-block").slideDown(500, function(){
								$(this).addClass("open");
							});
						}

						thisObj.parent().find(".user-comment").val("");
					}
				});
			}else{
				$(this).parent().find(".user-comment").focus();
			}

			// Clear input box after posting
			e.preventDefault();
		});
	}

	/**
	 * circloidHeaderFeatureImage handles the loading of the main feature image
	 */
	function circloidHeaderFeatureImage(){
		var featureImage = $('.profile-header-feature-image').data('image-url');

		$('.profile-header-feature-image').css({'background': 'url(' + featureImage + ') center center'});
	}
	
	/**
	 * circloidDonutChartFlot handles the donut chart
	 * @param  {string} placeholder		id of graph
	 */
	function circloidDonutChartFlot(placeholder, graphSize, legend){

		var colors = $(placeholder).data("graph-colors").split(',');

		if(graphSize === undefined){
			graphSize = 0.88;
		}else if(graphSize == "micro"){
			graphSize = 0.75;
		}else if(graphSize == "small"){
			graphSize = 0.85;
		}else if(graphSize == "medium"){
			graphSize = 0.87;
		}else if(graphSize == "normal" || graphSize == "large"){
			graphSize = 0.88;
		}

		if(legend === undefined){
			legend = true
		}

		var data = [
			{data: 10900.0000, color: colors[0], label: "Servers"},
			{data: 10240.0000, color: colors[1], label: "Laptops/Desktops"},
			{data: 3900.0000, color: colors[2], label: "Software Licenses"},
			{data: 2050.0000, color: colors[3], label: "General Repairs"},
			{data: 1050.0000, color: colors[4], label: "Administrative Items"}
		];
		var options = {
			series: {
				pie: { 
					show: true,
					radius:  1,
					innerRadius: graphSize,
					label: false
				}
			},
			legend: {
				show: legend
			},
			grid: {
				hoverable: true
			},
			tooltip: true,
			tooltipOpts: {
				content: function(label, xval, yval, flotItem){
					return label + ": <b>$" + yval.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "</b>";
				},
				shifts: {
					x: -60,
					y: 25
				},
				defaultTheme : false
			}
		};

		// Plot the chart and set options
		var plotChart = $.plot(placeholder, data, options);

		if (isNaN(plotChart.getData()[0].percent)){
			var canvas = plotChart.getCanvas();
			var ctx = canvas.getContext("2d");
			var x = canvas.width / 2;
			var y = canvas.height / 2;
			ctx.textAlign = 'center';
			ctx.fillText('No Data for this date range', x, y);
		}
	}
	
	/**
	 * circloidBarChartFlot handles the bar chart
	 * @param  {string} placeholder		id of graph
	 */
	function circloidBarChartFlot(placeholder){

		var colors = $(placeholder).data("graph-colors").split(',');		

		var data = {
			"label1":{
				"label":"T-Shirt Sales",
				"data":[[1388534400000, 120], [1391212800000, 70],  [1393632000000, 100], [1396310400000, 60], [1398902400000, 35]]
			},
			"label2":{
				"label":"Shoe Sales","data":[[1388534400000, 90], [1391212800000, 60], [1393632000000, 30], [1396310400000, 73], [1398902400000, 30]]
			}
		};

		var options = {	
			series: {
				bars: {
					show: true,
					fill: true,
					lineWidth: 1,
					barWidth: 762880000,
					order: 1
				}
			},
			shadowSize: 0,
			grid: {
				backgroundColor: '#FFFFFF',
				borderColor: '#D6D6D9',
				borderWidth: 0,
				hoverable: true,
				minBorderMargin: 0
			},
			legend: {
				show: false
			},
			xaxis: {
				mode: "time",
	            min: 1387497600000,
	            max: 1400112000000,
	            tickLength: 0,
	            tickSize: [1, "month"],
	            axisLabelUseCanvas: true,
	            axisLabelFontSizePixels: 13,
	            axisLabelFontFamily: 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
	            axisLabelPadding: 0
			},
			yaxis: {
	            tickLength: 0,
				axisLabelUseCanvas: true,
				axisLabelFontSizePixels: 13,
				axisLabelFontFamily: 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
				axisLabelPadding: 0
			},
			tooltip: true,
			tooltipOpts: {
				content: function(label, xval, yval, flotItem){
					return label + ": <b>" + yval + "</b>";
				},
				shifts: {
					x: -40,
					y: 25
				},
				defaultTheme : false
			},
			colors: colors
		}

		$.plot(placeholder, [data.label1, data.label2], options);
	}
	

	/* Call Functions */
	circloidFriendsFeed();

	circloidHeaderFeatureImage();

	circloidDonutChartFlot("#today-sales", "small", false);
	circloidBarChartFlot("#product-sales");

	circloidWidgets(); // called from assets/js/optional/circloid-functions-optional.js
});