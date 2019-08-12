////////////////////////////////
// Form File Upload Functions //
////////////////////////////////

"use strict";

$(document).ready(function(){

	/**
	 * circloidBasicDropzone creates the basic dropzone feature
	 */
	function circloidBasicDropzone(){
		// "basicDropzone" is the camelized version of the HTML element's ID
		Dropzone.options.basicDropzone = {
			paramName: "file", // The name that will be used to transfer the file
			maxFilesize: 2, // MB
			acceptedFiles: "image/*",
			accept: function(file, done) {
				if(file.name == "justinbieber.jpg"){
					done("Naha, you don't.");
				}
				else{
					done();
				}
			}
		};
	}

	/**
	 * circloidCustomizedDropzone created the customized dropzone feature
	 */
	function circloidCustomizedDropzone(){
		// "customizedDropzone" is the camelized version of the HTML element's ID
		Dropzone.options.customizedDropzone = {
			init: function(){
				this.on("addedfile", function(file){
					$("#customized-dropzone-results > p").hide();
				});
				this.on("complete", function(file){
					$("#customized-dropzone-results .dz-preview").delay(2500).fadeOut(300, function(){
						$(this).remove();
						$("#customized-dropzone-results > p").fadeIn(300);
					});
				});
			},
			paramName: "file", // The name that will be used to transfer the file
			maxFilesize: 2, // MB
			acceptedFiles: "image/*",
			uploadMultiple: false,
			createImageThumbnails: false,
			previewsContainer: "#customized-dropzone-results",
			previewTemplate: '<div class="dz-preview dz-file-preview"><div class="dz-filename"><span><strong>Filename:</strong></span> <span data-dz-name></span></div><div class="dz-size"><span><strong>Size:</strong></span> <span data-dz-size></span></div><div class="dz-progress"><span class="progress"><span class="progress-bar progress-bar-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" data-dz-uploadprogress></span></span></div><div class="dz-status"><div class="dz-success-mark"><span class="icon icon-check icon-size-medium"></span></div><div class="dz-error-mark"><span class="icon icon-cross icon-size-medium"></span></div></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div>'
		};
	}

	/**
	 * circloidCustomizedDropzoneAlt created the customized dropzone feature - Alt
	 */
	function circloidCustomizedDropzoneAlt(){
		// "customizedDropzone2" is the camelized version of the HTML element's ID
		Dropzone.options.customizedDropzone2 = {
			init: function(){
				var resultsBlock = $("#customized-dropzone-results-2");

				this.on("addedfile", function(file){
					window.dzFileCount = resultsBlock.find("tr.dz-preview").length;

					var fileDetails = '<tr class="dz-preview dz-file-preview"><td class="dz-custom-file-number">' + (dzFileCount + 1) + '</td><td class="dz-custom-file-name">' + file.name + '</td><td class="dz-custom-file-size">' + bytesToSize(file.size) + '</td><td class="dz-custom-file-progress"><span class="progress"><span class="progress-bar progress-bar-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" data-dz-uploadprogress></span></span></td><td class="dz-custom-file-status"><div class="status"><div class="dz-success-mark"><span class="icon icon-check icon-size-medium"></span><span class="dz-success-message"></span></div><div class="dz-error-mark"><span class="icon icon-cross icon-size-medium"></span><span class="dz-error-message"></span></div></div></td></tr>';

					$(fileDetails).appendTo(resultsBlock.find("tbody"));
					resultsBlock.find(".no-files").addClass("hide");

					$("#customized-dropzone-results > p").hide();
				});
				this.on("uploadprogress", function(file, progress){
					$(".dz-preview").eq(dzFileCount).find(".progress-bar").css({"width" : progress + "%"});
				});
				this.on("error", function(file, errorMessage){
					$(".dz-preview").eq(dzFileCount).find(".dz-custom-file-status").addClass("dz-error");
					$(".dz-preview").eq(dzFileCount).find(".dz-custom-file-status .dz-error-message").text(errorMessage);
				});
				this.on("success", function(file){
					var successMessage = "File Uploaded.";

					$(".dz-preview").eq(dzFileCount).find(".dz-custom-file-status").addClass("dz-success");
					$(".dz-preview").eq(dzFileCount).find(".dz-custom-file-status .dz-success-message").text(successMessage);
				});
			},
			paramName: "file", // The name that will be used to transfer the file
			maxFilesize: 2, // MB
			acceptedFiles: "image/*",
			uploadMultiple: true,
			createImageThumbnails: false,
			previewsContainer: false
		};
	}
	
	/**
	 * bytesToSize
	 * @param  {integer} bytes		the initial size in bytes
	 * @return {integer}			the size in Bytes, KB, MB, GB, TB
	 */
	function bytesToSize(bytes){
		var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
		if (bytes == 0) return 'n/a';
		var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
		return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
	}

	/* Call Functions: circloidBasicDropzone(), circloidCustomizedDropzone(), circloidCustomizedDropzoneAlt() */
	circloidBasicDropzone();
	circloidCustomizedDropzone();
	circloidCustomizedDropzoneAlt();
});