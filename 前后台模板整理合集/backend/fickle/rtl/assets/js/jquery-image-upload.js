$(document).ready(function () {

    /*****************************
     Variables
     *****************************/
    var imgWidth = 180,
        imgHeight = 180,
        zindex = 0;
    dropzone = $('#droparea'),
        uploadBtn = $('#uploadbtn'),
        defaultUploadBtn = $('#upload');


    /*****************************
     Events Handler
     *****************************/
    dropzone.on('dragover', function () {
        //add hover class when drag over
        dropzone.addClass('hover');
        return false;
    });
    dropzone.on('dragleave', function () {
        //remove hover class when drag out
        dropzone.removeClass('hover');
        return false;
    });
    dropzone.on('drop', function (e) {
        //prevent browser from open the file when drop off
        e.stopPropagation();
        e.preventDefault();
        dropzone.removeClass('hover');

        //retrieve uploaded files data
        var files = e.originalEvent.dataTransfer.files;
        processFiles(files);

        return false;
    });

    uploadBtn.on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        //trigger default file upload button
        defaultUploadBtn.click();
    });
    defaultUploadBtn.on('change', function () {
        //retrieve selected uploaded files data
        var files = $(this)[0].files;
        processFiles(files);

        return false;
    });


    /*****************************
     internal functions
     *****************************/
        //Bytes to KiloBytes conversion
    function convertToKBytes(number) {
        return (number / 1024).toFixed(1);
    }

    function compareWidthHeight(width, height) {
        var diff = [];
        if (width > height) {
            diff[0] = width - height;
            diff[1] = 0;
        } else {
            diff[0] = 0;
            diff[1] = height - width;
        }
        return diff;
    }

    /*********
     BlobBuilder is deprecated
     **********/
    /*
     //convert datauri to blob
     function dataURItoBlob(dataURI) {
     var BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.BlobBuilder;

     //skip if browser doesn't support BlobBuilder object
     if(typeof BlobBuilder === "undefined") {
     $('#err').html('Ops! There have some limited with your browser! <br/>New image produced from canvas can\'t be upload to the server...');
     return dataURI;
     }

     // convert base64 to raw binary data held in a string
     // doesn't handle URLEncoded DataURIs
     var byteString;
     if (dataURI.split(',')[0].indexOf('base64') >= 0)
     byteString = atob(dataURI.split(',')[1]);
     else
     byteString = unescape(dataURI.split(',')[1]);

     // separate out the mime component
     var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

     // write the bytes of the string to an ArrayBuffer
     var ab = new ArrayBuffer(byteString.length);
     var ia = new Uint8Array(ab);
     for (var i = 0; i < byteString.length; i++) {
     ia[i] = byteString.charCodeAt(i);
     }

     // write the ArrayBuffer to a blob, and you're done
     var bb = new BlobBuilder();
     bb.append(ab);
     return bb.getBlob(mimeString);
     }
     */
    function dataURItoBlob(dataURI) {

        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        //Passing an ArrayBuffer to the Blob constructor appears to be deprecated,
        //so convert ArrayBuffer to DataView
        var dataView = new DataView(ab);
        var blob = new Blob([dataView], {type: mimeString});

        return blob;
    }

    /*****************************
     canvas filter function
     *****************************/
    //Black & White image effect
    //by Marco Lisci - http://badsharkco.com/
    var grayscale = function (context) {
        var imgd = context.getImageData(0, 0, imgWidth, imgHeight);
        var pix = imgd.data;
        for (var i = 0, n = pix.length; i < n; i += 4) {
            var grayscale = pix[i  ] * .3 + pix[i + 1] * .59 + pix[i + 2] * .11;
            pix[i  ] = grayscale;
            pix[i + 1] = grayscale;
            pix[i + 2] = grayscale;
        }
        context.putImageData(imgd, 0, 0);
    }

    //canvas-blur effect
    //by Matt Riggott - http://www.flother.com/
    var blurry = function (context, image, diff) {
        var i, x, y,
            blureffect = 4;

        context.globalAlpha = 0.1;
        for (i = 1; i <= blureffect; i++) {
            for (y = -blureffect / 2; y <= blureffect / 2; y++) {
                for (x = -blureffect / 2; x <= blureffect / 2; x++) {
                    context.drawImage(image, diff[0] / 2, diff[1] / 2, image.width - diff[0], image.height - diff[1], x, y, imgWidth, imgHeight);
                }
            }
        }
        context.globalAlpha = 1.0;
    }

    //sepia image effect
    //by http://www.script-tutorials.com/html5-image-effects-sepia/
    var sepia = function (context) {
        // set of sepia colors
        var r = [0, 0, 0, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 17, 18, 19, 19, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 44, 45, 47, 48, 49, 52, 54, 55, 57, 59, 60, 62, 65, 67, 69, 70, 72, 74, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 107, 109, 111, 112, 116, 118, 120, 124, 126, 127, 129, 133, 135, 136, 140, 142, 143, 145, 149, 150, 152, 155, 157, 159, 162, 163, 165, 167, 170, 171, 173, 176, 177, 178, 180, 183, 184, 185, 188, 189, 190, 192, 194, 195, 196, 198, 200, 201, 202, 203, 204, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216, 218, 219, 219, 220, 221, 222, 223, 224, 225, 226, 227, 227, 228, 229, 229, 230, 231, 232, 232, 233, 234, 234, 235, 236, 236, 237, 238, 238, 239, 239, 240, 241, 241, 242, 242, 243, 244, 244, 245, 245, 245, 246, 247, 247, 248, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            g = [0, 0, 1, 2, 2, 3, 5, 5, 6, 7, 8, 8, 10, 11, 11, 12, 13, 15, 15, 16, 17, 18, 18, 19, 21, 22, 22, 23, 24, 26, 26, 27, 28, 29, 31, 31, 32, 33, 34, 35, 35, 37, 38, 39, 40, 41, 43, 44, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 83, 84, 85, 86, 88, 89, 90, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 105, 106, 107, 108, 109, 111, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124, 126, 127, 128, 129, 131, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 145, 146, 148, 149, 150, 151, 153, 154, 155, 157, 158, 159, 160, 162, 163, 164, 166, 167, 168, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 186, 186, 187, 188, 189, 190, 192, 193, 194, 195, 195, 196, 197, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 208, 208, 209, 210, 211, 212, 213, 214, 214, 215, 216, 217, 218, 219, 219, 220, 221, 222, 223, 223, 224, 225, 226, 226, 227, 228, 228, 229, 230, 231, 232, 232, 232, 233, 234, 235, 235, 236, 236, 237, 238, 238, 239, 239, 240, 240, 241, 242, 242, 242, 243, 244, 245, 245, 246, 246, 247, 247, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 255],
            b = [53, 53, 53, 54, 54, 54, 55, 55, 55, 56, 57, 57, 57, 58, 58, 58, 59, 59, 59, 60, 61, 61, 61, 62, 62, 63, 63, 63, 64, 65, 65, 65, 66, 66, 67, 67, 67, 68, 69, 69, 69, 70, 70, 71, 71, 72, 73, 73, 73, 74, 74, 75, 75, 76, 77, 77, 78, 78, 79, 79, 80, 81, 81, 82, 82, 83, 83, 84, 85, 85, 86, 86, 87, 87, 88, 89, 89, 90, 90, 91, 91, 93, 93, 94, 94, 95, 95, 96, 97, 98, 98, 99, 99, 100, 101, 102, 102, 103, 104, 105, 105, 106, 106, 107, 108, 109, 109, 110, 111, 111, 112, 113, 114, 114, 115, 116, 117, 117, 118, 119, 119, 121, 121, 122, 122, 123, 124, 125, 126, 126, 127, 128, 129, 129, 130, 131, 132, 132, 133, 134, 134, 135, 136, 137, 137, 138, 139, 140, 140, 141, 142, 142, 143, 144, 145, 145, 146, 146, 148, 148, 149, 149, 150, 151, 152, 152, 153, 153, 154, 155, 156, 156, 157, 157, 158, 159, 160, 160, 161, 161, 162, 162, 163, 164, 164, 165, 165, 166, 166, 167, 168, 168, 169, 169, 170, 170, 171, 172, 172, 173, 173, 174, 174, 175, 176, 176, 177, 177, 177, 178, 178, 179, 180, 180, 181, 181, 181, 182, 182, 183, 184, 184, 184, 185, 185, 186, 186, 186, 187, 188, 188, 188, 189, 189, 189, 190, 190, 191, 191, 192, 192, 193, 193, 193, 194, 194, 194, 195, 196, 196, 196, 197, 197, 197, 198, 199];

        // noise value
        var noise = 20;

        var imgd = context.getImageData(0, 0, imgWidth, imgHeight);
        var pix = imgd.data;
        for (var i = 0; i < pix.length; i += 4) {
            // change image colors
            pix[i] = r[pix[i]];
            pix[i + 1] = g[pix[i + 1]];
            pix[i + 2] = b[pix[i + 2]];

            // apply noise
            if (noise > 0) {
                var noise = Math.round(noise - Math.random() * noise);

                for (var j = 0; j < 3; j++) {
                    var iPN = noise + pix[i + j];
                    pix[i + j] = (iPN > 255) ? 255 : iPN;
                }
            }
        }

        // put image data back to context
        context.putImageData(imgd, 0, 0);
    }


    /*****************************
     Process FileList
     *****************************/
    var processFiles = function (files) {
        if (files && typeof FileReader !== "undefined") {
            //process each files only if browser is supported
            for (var i = 0; i < files.length; i++) {
                readFile(files[i]);
            }
        } else {

        }
    }


    /*****************************
     Read the File Object
     *****************************/
    var readFile = function (file) {
        if ((/image/i).test(file.type)) {
            //define FileReader object
            var reader = new FileReader();

            //init reader onload event handlers
            reader.onload = function (e) {
                var image = $('<img/>')
                    .load(function () {
                        //when image fully loaded
                        var newimageurl = getCanvasImage(this);
                        createPreview(file, newimageurl);
                        uploadToServer(file, dataURItoBlob(newimageurl));
                    })
                    .attr('src', e.target.result);
            };

            //begin reader read operation
            reader.readAsDataURL(file);

            $('#err').text('');
        } else {
            //some message for wrong file format
            $('#err').text('*Selected file format not supported!');
        }
    }


    /*****************************
     Get New Canvas Image URL
     *****************************/
    var getCanvasImage = function (image) {
        //get selected effect
        var effect = $('input[name=effect]:checked').val();
        var croping = $('input[name=croping]:checked').val();

        //define canvas
        var canvas = document.createElement('canvas');
        canvas.width = imgWidth;
        canvas.height = imgHeight;
        var ctx = canvas.getContext('2d');

        //default resize variable
        var diff = [0, 0];
        if (croping == 'crop') {
            //get resized width and height
            diff = compareWidthHeight(image.width, image.height);
        }

        //draw canvas image
        ctx.drawImage(image, diff[0] / 2, diff[1] / 2, image.width - diff[0], image.height - diff[1], 0, 0, imgWidth, imgHeight);

        //apply effects if any
        if (effect == 'grayscale') {
            grayscale(ctx);
        } else if (effect == 'blurry') {
            blurry(ctx, image, diff);
        } else if (effect == 'sepia') {
            sepia(ctx);
        } else {
        }

        //convert canvas to jpeg url
        return canvas.toDataURL("image/jpeg");
    }


    /*****************************
     Draw Image Preview
     *****************************/
    var createPreview = function (file, newURL) {
        //populate jQuery Template binding object
        var imageObj = {};
        imageObj.filePath = newURL;
        imageObj.fileName = file.name.substr(0, file.name.lastIndexOf('.')); //subtract file extension
        imageObj.fileOriSize = convertToKBytes(file.size);
        imageObj.fileUploadSize = convertToKBytes(dataURItoBlob(newURL).size); //convert new image URL to blob to get file.size

        //extend filename
        var effect = $('input[name=effect]:checked').val();
        if (effect == 'grayscale') {
            imageObj.fileName += " (Grayscale)";
        } else if (effect == 'blurry') {
            imageObj.fileName += " (Blurry)";
        }

        //append new image through jQuery Template
        var randvalue = Math.floor(Math.random() * 31) - 15;  //random number
        var img = $("#imageTemplate").tmpl(imageObj).prependTo("#result")
            .hide()
            .css({
                'Transform': 'scale(1) rotate(' + randvalue + 'deg)',
                'msTransform': 'scale(1) rotate(' + randvalue + 'deg)',
                'MozTransform': 'scale(1) rotate(' + randvalue + 'deg)',
                'webkitTransform': 'scale(1) rotate(' + randvalue + 'deg)',
                'OTransform': 'scale(1) rotate(' + randvalue + 'deg)',
                'z-index': zindex++
            })
            .show();

        if (isNaN(imageObj.fileUploadSize)) {
            $('.imageholder span').last().hide();
        }
    }


    /****************************
     Upload Image to Server
     ****************************/
    var uploadToServer = function (oldFile, newFile) {
        // prepare FormData
        var formData = new FormData();
        //we still have to use back old file
        //since new file doesn't contains original file data
        formData.append('filename', oldFile.name);
        formData.append('filetype', oldFile.type);
        formData.append('file', newFile);

        //submit formData using $.ajax
        $.ajax({
            url: 'php/upload.php',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
            }
        });
    }


    //file upload via original byte sequence
    var processFileInIE = function (file) {

        var imageObj = {};
        var extension = ['jpg', 'jpeg', 'gif', 'png'];
        var filepath = file.value;
        if (filepath) {
            //get file name
            var startIndex = (filepath.indexOf('\\') >= 0 ? filepath.lastIndexOf('\\') : filepath.lastIndexOf('/'));
            var filedetail = filepath.substring(startIndex);
            if (filedetail.indexOf('\\') === 0 || filedetail.indexOf('/') === 0) {
                filedetail = filedetail.substring(1);
            }
            var filename = filedetail.substr(0, filedetail.lastIndexOf('.'));
            var fileext = filedetail.slice(filedetail.lastIndexOf(".") + 1).toLowerCase();

            //check file extension
            if ($.inArray(fileext, extension) > -1) {
                //append using template
                $('#err').text('');
                imageObj.filepath = filepath;
                imageObj.filename = filename;
                var randvalue = Math.floor(Math.random() * 31) - 15;
                $("#imageTemplate").tmpl(imageObj).prependTo("#result")
                    .hide()
                    .css({
                        'Transform': 'scale(1) rotate(' + randvalue + 'deg)',
                        'msTransform': 'scale(1) rotate(' + randvalue + 'deg)',
                        'MozTransform': 'scale(1) rotate(' + randvalue + 'deg)',
                        'webkitTransform': 'scale(1) rotate(' + randvalue + 'deg)',
                        'oTransform': 'scale(1) rotate(' + randvalue + 'deg)',
                        'z-index': zindex++
                    })
                    .show();
                $('#result').find('figcaption span').hide();
            } else {
                $('#err').text('*Selected file format not supported!');
            }
        }
    }

    /****************************
     Browser compatible text
     ****************************/
    if (typeof FileReader === "undefined") {
        //$('.extra').hide();
        $('#err').html('Hey! Your browser does not support <strong>HTML5 File API</strong> <br/>Try using Chrome or Firefox to have it works!');
    } else if (!Modernizr.draganddrop) {
        $('#err').html('Ops! Look like your browser does not support <strong>Drag and Drop API</strong>! <br/>Still, you are able to use \'<em>Select Files</em>\' button to upload file =)');
    } else {
        $('#err').text('');
    }
});