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
	

	/* Call Functions */
	circloidFriendsFeed();

	circloidHeaderFeatureImage();

	circloidWidgets(); // called from assets/js/optional/circloid-functions-optional.js
});